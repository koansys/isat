% -----------------------------------------------------------------------------
%
%                              procedure sgp4
%
%  this procedure is the sgp4 prediction model from space command. this is an
%    updated and combined version of sgp4 and sdp4, which were originally
%    published separately in spacetrack report #3. this version follows the
%    methodology from the aiaa paper (2006) describing the history and
%    development of the code.
%
% Author: 
%   Jeff Beck 
%   beckja@alumni.lehigh.edu
%    current :
%               7 may 08  david vallado
%                           update small eccentricity check
%    changes :
%              16 nov 07  david vallado
%                           misc fixes for better compliance
%   1.0 (aug 7, 2006) - update for paper dav
% original comments from Vallado C++ version:
%   author        : david vallado                  719-573-2600   28 jun 2005
%
%   inputs        :
%     satrec    - initialised structure from sgp4init() call.
%     tsince    - time eince epoch (minutes)
%
%   outputs       :
%     r           - position vector                     km
%     v           - velocity                            km/sec
%     return code - non-zero on error.
%                    1 - mean elements, ecc >= 1.0 or ecc < -0.001 or a < 0.95 er
%                    2 - mean motion less than 0.0
%                    3 - pert elements, ecc < 0.0  or  ecc > 1.0
%                    4 - semi-latus rectum < 0.0
%                    5 - epoch elements are sub-orbital
%                    6 - satellite has decayed
%
%   locals        :
%     am          -
%     axnl, aynl        -
%     betal       -
%     COSIM   , SINIM   , COSOMM  , SINOMM  , Cnod    , Snod    , Cos2u   ,
%     Sin2u   , Coseo1  , Sineo1  , Cosi    , Sini    , Cosip   , Sinip   ,
%     Cosisq  , Cossu   , Sinsu   , Cosu    , Sinu
%     Delm        -
%     Delomg      -
%     Dndt        -
%     Eccm        -
%     EMSQ        -
%     Ecose       -
%     El2         -
%     Eo1         -
%     Eccp        -
%     Esine       -
%     Argpm       -
%     Argpp       -
%     Omgadf      -
%     Pl          -
%     R           -
%     RTEMSQ      -
%     Rdotl       -
%     Rl          -
%     Rvdot       -
%     Rvdotl      -
%     Su          -
%     T2  , T3   , T4    , Tc
%     Tem5, Temp , Temp1 , Temp2  , Tempa  , Tempe  , Templ
%     U   , Ux   , Uy    , Uz     , Vx     , Vy     , Vz
%     inclm       - inclination
%     mm          - mean anomaly
%     nm          - mean motion
%     nodem      - longi of ascending node
%     xinc        -
%     xincp       -
%     xl          -
%     xlm         -
%     mp          -
%     xmdf        -
%     xmx         -
%     xmy         -
%     nodedf     -
%     xnode       -
%     nodep      -
%     np          -
%
%   coupling      :
%     getgravconst
%     dpper
%     dspace
%
%   references    :
%     hoots, roehrich, norad spacetrack report #3 1980
%     hoots, norad spacetrack report #6 1986
%     hoots, schumacher and glover 2004
%     vallado, crawford, hujsak, kelso  2006
%  ----------------------------------------------------------------------------*/

function [satrec, r, v] = sgp4(satrec,tsince);

  MAKE_ASSERTS = 0;
  if MAKE_ASSERTS
    ORIG_satrec = satrec;       # appears to work like deepcopy; if not, we're screwed
  endif;

   % /* ------------------ set mathematical constants --------------- */
   twopi = 2.0 * pi;
   x2o3  = 2.0 / 3.0;
   % sgp4fix divisor for divide by zero check on inclination
   % the old check used 1.0 + cos(pi-1.0e-9), but then compared it to
   % 1.5 e-12, so the threshold was changed to 1.5e-12 for consistancy
   temp4    =   1.5e-12;

   %  // sgp4fix identify constants and allow alternate values
   global tumin mu radiusearthkm xke j2 j3 j4 j3oj2  
   vkmpersec     = radiusearthkm * xke/60.0;
   
   % /* --------------------- clear sgp4 error flag ----------------- */
   %satrec.t     = tsince/1440;
   satrec.t     = tsince;
   satrec.error = 0;

   % /* ------- update for secular gravity and atmospheric drag ----- */
   xmdf    = satrec.mo + satrec.mdot * satrec.t;
   argpdf  = satrec.argpo + satrec.argpdot * satrec.t;
   nodedf  = satrec.nodeo + satrec.nodedot * satrec.t;
   argpm   = argpdf;
   mm      = xmdf;
   t2      = satrec.t * satrec.t;
   nodem   = nodedf + satrec.nodecf * t2;
   tempa   = 1.0 - satrec.cc1 * satrec.t;
   tempe   = satrec.bstar * satrec.cc4 * satrec.t;
   templ   = satrec.t2cof * t2;

   if (satrec.isimp ~= 1)
       delomg = satrec.omgcof * satrec.t;
       delm   = satrec.xmcof *...
           ((1.0 + satrec.eta * cos(xmdf))^3 -...
           satrec.delmo);
       temp   = delomg + delm;
       mm     = xmdf + temp;
       argpm  = argpdf - temp;
       t3     = t2 * satrec.t;
       t4     = t3 * satrec.t;
       tempa  = tempa - satrec.d2 * t2 - satrec.d3 * t3 -...
           satrec.d4 * t4;
       tempe  = tempe + satrec.bstar * satrec.cc5 * (sin(mm) -...
           satrec.sinmao);
       templ  = templ + satrec.t3cof * t3 + t4 * (satrec.t4cof +...
           satrec.t * satrec.t5cof);
   end

   nm    = satrec.no;
   em    = satrec.ecco;
   inclm = satrec.inclo;
   if (satrec.method == 'd')
       tc = satrec.t;
       [satrec.atime,em,argpm,inclm,satrec.xli,mm,...
           satrec.xni,nodem,dndt,nm] = dspace(...
           satrec.d2201,satrec.d2211,satrec.d3210,...
           satrec.d3222,satrec.d4410,satrec.d4422,...
           satrec.d5220,satrec.d5232,satrec.d5421,...
           satrec.d5433,satrec.dedt,satrec.del1,...
           satrec.del2,satrec.del3,satrec.didt,...
           satrec.dmdt,satrec.dnodt,satrec.domdt,...
           satrec.irez,satrec.argpo,satrec.argpdot,satrec.t,...
           tc,satrec.gsto,satrec.xfact,satrec.xlamo,satrec.no,...
           satrec.atime,em,argpm,inclm,satrec.xli,mm,...
           satrec.xni,nodem,nm);
   end % // if method = d

   if (nm <= 0.0)
%       fprintf(1,'# error nm %f\n', nm);
       satrec.error = 2;
   end
   am = (xke / nm)^x2o3 * tempa * tempa;
   nm = xke / am^1.5;
   em = em - tempe;

   % // fix tolerance for error recognition
   if ((em >= 1.0) || (em < -0.001) || (am < 0.95))
%       fprintf(1,'# error em %f\n', em);
       satrec.error = 1;
   end
%   sgp4fix change test condition for eccentricity
   if (em < 1.0e-6)
       em  = 1.0e-6;
   end
   mm     = mm + satrec.no * templ;
   xlm    = mm + argpm + nodem;
   emsq   = em * em;
   temp   = 1.0 - emsq;
   nodem  = rem(nodem, twopi);
   argpm  = rem(argpm, twopi);
   xlm    = rem(xlm, twopi);
   mm     = rem(xlm - argpm - nodem, twopi);

   % /* ----------------- compute extra mean quantities ------------- */
   sinim = sin(inclm);
   cosim = cos(inclm);

   % /* -------------------- add lunar-solar periodics -------------- */
   ep     = em;
   xincp  = inclm;
   argpp  = argpm;
   nodep  = nodem;
   mp     = mm;
   sinip  = sinim;
   cosip  = cosim;
   if (satrec.method == 'd')
       [ep,xincp,nodep,argpp,mp] = dpper(...
           satrec.e3,satrec.ee2,satrec.peo,...
           satrec.pgho,satrec.pho,satrec.pinco,...
           satrec.plo,satrec.se2,satrec.se3,...
           satrec.sgh2,satrec.sgh3,satrec.sgh4,...
           satrec.sh2,satrec.sh3,satrec.si2,...
           satrec.si3,satrec.sl2,satrec.sl3,...
           satrec.sl4,satrec.t,satrec.xgh2,...
           satrec.xgh3,satrec.xgh4,satrec.xh2,...
           satrec.xh3,satrec.xi2,satrec.xi3,...
           satrec.xl2,satrec.xl3,satrec.xl4,...
           satrec.zmol,satrec.zmos,satrec.inclo,...
           satrec.init,ep,xincp,nodep,argpp,mp);
       if (xincp < 0.0)
           xincp  = -xincp;
           nodep = nodep + pi;
           argpp  = argpp - pi;
       end
       if ((ep < 0.0 ) || ( ep > 1.0))
%           fprintf(1,'# error ep %f\n', ep);
           satrec.error = 3;
       end
   end % // if method = d

   % /* -------------------- long period periodics ------------------ */
   if (satrec.method == 'd')
       sinip =  sin(xincp);
       cosip =  cos(xincp);
       satrec.aycof = -0.5*j3oj2*sinip;
       % // sgp4fix for divide by zero with xinco = 180 deg
       if (abs(cosip+1.0) > 1.5e-12)
           satrec.xlcof = -0.25 * j3oj2 * sinip * (3.0 + 5.0 * cosip) /...
               (1.0+cosip);
         else
           satrec.xlcof = -0.25 * j3oj2 * sinip * (3.0 + 5.0 * cosip) /...
               temp4;
       end;
   end
   axnl = ep * cos(argpp);
   temp = 1.0 / (am * (1.0 - ep * ep));
   aynl = ep* sin(argpp) + temp * satrec.aycof;
   xl   = mp + argpp + nodep + temp * satrec.xlcof * axnl;

   % /* --------------------- solve kepler's equation --------------- */
   u    = rem(xl - nodep, twopi);
   eo1  = u;
   tem5 = 9999.9;
   ktr = 1;
   % //   sgp4fix for kepler iteration
   % //   the following iteration needs better limits on corrections
   while (( abs(tem5) >= 1.0e-12) && (ktr <= 10) )
       sineo1 = sin(eo1);
       coseo1 = cos(eo1);
       tem5   = 1.0 - coseo1 * axnl - sineo1 * aynl;
       tem5   = (u - aynl * coseo1 + axnl * sineo1 - eo1) / tem5;
       if(abs(tem5) >= 0.95)
           if tem5 > 0.0
               tem5 = 0.95;
           else
               tem5 = -0.95;
           end
       end
       eo1    = eo1 + tem5;
       ktr = ktr + 1;
   end

   % /* ------------- short period preliminary quantities ----------- */
   ecose = axnl*coseo1 + aynl*sineo1;
   esine = axnl*sineo1 - aynl*coseo1;
   el2   = axnl*axnl + aynl*aynl;
   pl    = am*(1.0-el2);
   if (pl < 0.0)
%       fprintf(1,'# error pl %f\n', pl);
       satrec.error = 4;
       r = [0;0;0];
       v = [0;0;0];
   else
       rl     = am * (1.0 - ecose);
       rdotl  = sqrt(am) * esine/rl;
       rvdotl = sqrt(pl) / rl;
       betal  = sqrt(1.0 - el2);
       temp   = esine / (1.0 + betal);
       sinu   = am / rl * (sineo1 - aynl - axnl * temp);
       cosu   = am / rl * (coseo1 - axnl + aynl * temp);
       su     = atan2(sinu, cosu);
       sin2u  = (cosu + cosu) * sinu;
       cos2u  = 1.0 - 2.0 * sinu * sinu;
       temp   = 1.0 / pl;
       temp1  = 0.5 * j2 * temp;
       temp2  = temp1 * temp;

       % /* -------------- update for short period periodics ------------ */
       if (satrec.method == 'd')
           cosisq                 = cosip * cosip;
           satrec.con41  = 3.0*cosisq - 1.0;
           satrec.x1mth2 = 1.0 - cosisq;
           satrec.x7thm1 = 7.0*cosisq - 1.0;
       end
       mrt   = rl * (1.0 - 1.5 * temp2 * betal * satrec.con41) +...
           0.5 * temp1 * satrec.x1mth2 * cos2u;
       su    = su - 0.25 * temp2 * satrec.x7thm1 * sin2u;
       xnode = nodep + 1.5 * temp2 * cosip * sin2u;
       xinc  = xincp + 1.5 * temp2 * cosip * sinip * cos2u;
       mvt   = rdotl - nm * temp1 * satrec.x1mth2 * sin2u / xke;
       rvdot = rvdotl + nm * temp1 * (satrec.x1mth2 * cos2u +...
           1.5 * satrec.con41) / xke;

       % /* --------------------- orientation vectors ------------------- */
       sinsu =  sin(su);
       cossu =  cos(su);
       snod  =  sin(xnode);
       cnod  =  cos(xnode);
       sini  =  sin(xinc);
       cosi  =  cos(xinc);
       xmx   = -snod * cosi;
       xmy   =  cnod * cosi;
       ux    =  xmx * sinsu + cnod * cossu;
       uy    =  xmy * sinsu + snod * cossu;
       uz    =  sini * sinsu;
       vx    =  xmx * cossu - cnod * sinsu;
       vy    =  xmy * cossu - snod * sinsu;
       vz    =  sini * cossu;

       % /* --------- position and velocity (in km and km/sec) ---------- */
       r(1) = (mrt * ux)* radiusearthkm;
       r(2) = (mrt * uy)* radiusearthkm;
       r(3) = (mrt * uz)* radiusearthkm;
       v(1) = (mvt * ux + rvdot * vx) * vkmpersec;
       v(2) = (mvt * uy + rvdot * vy) * vkmpersec;
       v(3) = (mvt * uz + rvdot * vz) * vkmpersec;
   end % // if pl > 0

       % // sgp4fix for decaying satellites
        if (mrt < 1.0)
   %         printf("# decay condition %11.6f \n",mrt);
            satrec.error = 6;
        end

   global idebug dbgfile
   if idebug
       debug7;
   end

   if MAKE_ASSERTS
     printf("\n");
     printf("##JS##test('satnum=%d init=%s tsince=%19.12e', function () {\n", ORIG_satrec.satnum, ORIG_satrec.init, tsince);
     printf("##JS##var satin, rets, satrec, r, v, TOL = 0.000001;\n");
     printf("##JS##satin = {\n");
     printf("satin = struct(  ##NOTJS \n");
     printf("'error',           %19.12e,\n", ORIG_satrec.error);
     printf("'satnum',          %19.12e,\n", ORIG_satrec.satnum);
     printf("'epochyr',         %19.12e,\n", ORIG_satrec.epochyr);
     printf("'epochdays',       %19.12e,\n", ORIG_satrec.epochdays);
     printf("'ndot',            %19.12e,\n", ORIG_satrec.ndot);
     printf("'nddot',           %19.12e,\n", ORIG_satrec.nddot);
     printf("'bstar',           %19.12e,\n", ORIG_satrec.bstar);
     printf("'inclo',           %19.12e,\n", ORIG_satrec.inclo);
     printf("'nodeo',           %19.12e,\n", ORIG_satrec.nodeo);
     printf("'ecco',            %19.12e,\n", ORIG_satrec.ecco);
     printf("'argpo',           %19.12e,\n", ORIG_satrec.argpo);
     printf("'mo',              %19.12e,\n", ORIG_satrec.mo);
     printf("'no',              %19.12e,\n", ORIG_satrec.no);
     printf("'a',               %19.12e,\n", ORIG_satrec.a);
     printf("'alta',            %19.12e,\n", ORIG_satrec.alta);
     printf("'altp',            %19.12e,\n", ORIG_satrec.altp);
     printf("'jdsatepoch',      %19.12e,\n", ORIG_satrec.jdsatepoch);
     printf("'isimp',           %19.12e,\n", ORIG_satrec.isimp);
     printf("'method',          '%s',\n",    ORIG_satrec.method);
     printf("'aycof',           %19.12e,\n", ORIG_satrec.aycof);
     printf("'con41',           %19.12e,\n", ORIG_satrec.con41);
     printf("'cc1',             %19.12e,\n", ORIG_satrec.cc1);
     printf("'cc4',             %19.12e,\n", ORIG_satrec.cc4);
     printf("'cc5',             %19.12e,\n", ORIG_satrec.cc5);
     printf("'d2',              %19.12e,\n", ORIG_satrec.d2);
     printf("'d3',              %19.12e,\n", ORIG_satrec.d3);
     printf("'d4',              %19.12e,\n", ORIG_satrec.d4);
     printf("'delmo',           %19.12e,\n", ORIG_satrec.delmo);
     printf("'eta',             %19.12e,\n", ORIG_satrec.eta);
     printf("'argpdot',         %19.12e,\n", ORIG_satrec.argpdot);
     printf("'omgcof',          %19.12e,\n", ORIG_satrec.omgcof);
     printf("'sinmao',          %19.12e,\n", ORIG_satrec.sinmao);
     printf("'t',               %19.12e,\n", ORIG_satrec.t);
     printf("'t2cof',           %19.12e,\n", ORIG_satrec.t2cof);
     printf("'t3cof',           %19.12e,\n", ORIG_satrec.t3cof);
     printf("'t4cof',           %19.12e,\n", ORIG_satrec.t4cof);
     printf("'t5cof',           %19.12e,\n", ORIG_satrec.t5cof);
     printf("'x1mth2',          %19.12e,\n", ORIG_satrec.x1mth2);
     printf("'x7thm1',          %19.12e,\n", ORIG_satrec.x7thm1);
     printf("'mdot',            %19.12e,\n", ORIG_satrec.mdot);
     printf("'nodedot',         %19.12e,\n", ORIG_satrec.nodedot);
     printf("'xlcof',           %19.12e,\n", ORIG_satrec.xlcof);
     printf("'xmcof',           %19.12e,\n", ORIG_satrec.xmcof);
     printf("'nodecf',          %19.12e,\n", ORIG_satrec.nodecf);
     printf("'irez',            %19.12e,\n", ORIG_satrec.irez);
     printf("'d2201',           %19.12e,\n", ORIG_satrec.d2201);
     printf("'d2211',           %19.12e,\n", ORIG_satrec.d2211);
     printf("'d3210',           %19.12e,\n", ORIG_satrec.d3210);
     printf("'d3222',           %19.12e,\n", ORIG_satrec.d3222);
     printf("'d4410',           %19.12e,\n", ORIG_satrec.d4410);
     printf("'d4422',           %19.12e,\n", ORIG_satrec.d4422);
     printf("'d5220',           %19.12e,\n", ORIG_satrec.d5220);
     printf("'d5232',           %19.12e,\n", ORIG_satrec.d5232);
     printf("'d5421',           %19.12e,\n", ORIG_satrec.d5421);
     printf("'d5433',           %19.12e,\n", ORIG_satrec.d5433);
     printf("'dedt',            %19.12e,\n", ORIG_satrec.dedt);
     printf("'del1',            %19.12e,\n", ORIG_satrec.del1);
     printf("'del2',            %19.12e,\n", ORIG_satrec.del2);
     printf("'del3',            %19.12e,\n", ORIG_satrec.del3);
     printf("'didt',            %19.12e,\n", ORIG_satrec.didt);
     printf("'dmdt',            %19.12e,\n", ORIG_satrec.dmdt);
     printf("'dnodt',           %19.12e,\n", ORIG_satrec.dnodt);
     printf("'domdt',           %19.12e,\n", ORIG_satrec.domdt);
     printf("'e3',              %19.12e,\n", ORIG_satrec.e3);
     printf("'ee2',             %19.12e,\n", ORIG_satrec.ee2);
     printf("'peo',             %19.12e,\n", ORIG_satrec.peo);
     printf("'pgho',            %19.12e,\n", ORIG_satrec.pgho);
     printf("'pho',             %19.12e,\n", ORIG_satrec.pho);
     printf("'pinco',           %19.12e,\n", ORIG_satrec.pinco);
     printf("'plo',             %19.12e,\n", ORIG_satrec.plo);
     printf("'se2',             %19.12e,\n", ORIG_satrec.se2);
     printf("'se3',             %19.12e,\n", ORIG_satrec.se3);
     printf("'sgh2',            %19.12e,\n", ORIG_satrec.sgh2);
     printf("'sgh3',            %19.12e,\n", ORIG_satrec.sgh3);
     printf("'sgh4',            %19.12e,\n", ORIG_satrec.sgh4);
     printf("'sh2',             %19.12e,\n", ORIG_satrec.sh2);
     printf("'sh3',             %19.12e,\n", ORIG_satrec.sh3);
     printf("'si2',             %19.12e,\n", ORIG_satrec.si2);
     printf("'si3',             %19.12e,\n", ORIG_satrec.si3);
     printf("'sl2',             %19.12e,\n", ORIG_satrec.sl2);
     printf("'sl3',             %19.12e,\n", ORIG_satrec.sl3);
     printf("'sl4',             %19.12e,\n", ORIG_satrec.sl4);
     printf("'gsto',            %19.12e,\n", ORIG_satrec.gsto);
     printf("'xfact',           %19.12e,\n", ORIG_satrec.xfact);
     printf("'xgh2',            %19.12e,\n", ORIG_satrec.xgh2);
     printf("'xgh3',            %19.12e,\n", ORIG_satrec.xgh3);
     printf("'xgh4',            %19.12e,\n", ORIG_satrec.xgh4);
     printf("'xh2',             %19.12e,\n", ORIG_satrec.xh2);
     printf("'xh3',             %19.12e,\n", ORIG_satrec.xh3);
     printf("'xi2',             %19.12e,\n", ORIG_satrec.xi2);
     printf("'xi3',             %19.12e,\n", ORIG_satrec.xi3);
     printf("'xl2',             %19.12e,\n", ORIG_satrec.xl2);
     printf("'xl3',             %19.12e,\n", ORIG_satrec.xl3);
     printf("'xl4',             %19.12e,\n", ORIG_satrec.xl4);
     printf("'xlamo',           %19.12e,\n", ORIG_satrec.xlamo);
     printf("'zmol',            %19.12e,\n", ORIG_satrec.zmol);
     printf("'zmos',            %19.12e,\n", ORIG_satrec.zmos);
     printf("'atime',           %19.12e,\n", ORIG_satrec.atime);
     printf("'xli',             %19.12e,\n", ORIG_satrec.xli);
     printf("'xni',             %19.12e,\n", ORIG_satrec.xni);
     printf("'init',            '%s'\n",     ORIG_satrec.init);
     printf(");  ##NOTJS\n");
     printf("##JS##};\n");

     printf("[satrec, r, v] = sgp4(satin, %19.12e);  ##NOTJS\n", tsince);

     printf("##JS##rets   = sgp4(satin, %19.12e);\n", tsince);
     printf("##JS##satrec = rets.shift();\n");
     printf("##JS##r      = rets.shift();\n");
     printf("##JS##v      = rets.shift();\n");
     printf("##JS##expect(107);\n");
     printf("##JS##assert(isequalRel(r[0],           %19.12e, TOL));\n", r(1));
     printf("##JS##assert(isequalRel(r[1],           %19.12e, TOL));\n", r(2));
     printf("##JS##assert(isequalRel(r[2],           %19.12e, TOL));\n", r(3));
     printf("##JS##assert(isequalRel(v[0],           %19.12e, TOL));\n", v(1));
     printf("##JS##assert(isequalRel(v[1],           %19.12e, TOL));\n", v(2));
     printf("##JS##assert(isequalRel(v[2],           %19.12e, TOL));\n", v(3));

     printf("assert(isequalRel(r(1),           %19.12e, TOL));  ##NOTJS\n", r(1));
     printf("assert(isequalRel(r(2),           %19.12e, TOL));  ##NOTJS\n", r(2));
     printf("assert(isequalRel(r(3),           %19.12e, TOL));  ##NOTJS\n", r(3));
     printf("assert(isequalRel(v(1),           %19.12e, TOL));  ##NOTJS\n", v(1));
     printf("assert(isequalRel(v(2),           %19.12e, TOL));  ##NOTJS\n", v(2));
     printf("assert(isequalRel(v(3),           %19.12e, TOL));  ##NOTJS\n", v(3));
     printf("assert(isequalRel(satrec.error,           %19.12e, TOL));\n", satrec.error);
     printf("assert(isequalRel(satrec.satnum,          %19.12e, TOL));\n", satrec.satnum);
     printf("assert(isequalRel(satrec.epochyr,         %19.12e, TOL));\n", satrec.epochyr);
     printf("assert(isequalRel(satrec.epochdays,       %19.12e, TOL));\n", satrec.epochdays);
     printf("assert(isequalRel(satrec.ndot,            %19.12e, TOL));\n", satrec.ndot);
     printf("assert(isequalRel(satrec.nddot,           %19.12e, TOL));\n", satrec.nddot);
     printf("assert(isequalRel(satrec.bstar,           %19.12e, TOL));\n", satrec.bstar);
     printf("assert(isequalRel(satrec.inclo,           %19.12e, TOL));\n", satrec.inclo);
     printf("assert(isequalRel(satrec.nodeo,           %19.12e, TOL));\n", satrec.nodeo);
     printf("assert(isequalRel(satrec.ecco,            %19.12e, TOL));\n", satrec.ecco);
     printf("assert(isequalRel(satrec.argpo,           %19.12e, TOL));\n", satrec.argpo);
     printf("assert(isequalRel(satrec.mo,              %19.12e, TOL));\n", satrec.mo);
     printf("assert(isequalRel(satrec.no,              %19.12e, TOL));\n", satrec.no);
     printf("assert(isequalRel(satrec.a,               %19.12e, TOL));\n", satrec.a);
     printf("assert(isequalRel(satrec.alta,            %19.12e, TOL));\n", satrec.alta);
     printf("assert(isequalRel(satrec.altp,            %19.12e, TOL));\n", satrec.altp);
     printf("assert(isequalRel(satrec.jdsatepoch,      %19.12e, TOL));\n", satrec.jdsatepoch);
     printf("assert(isequalRel(satrec.isimp,           %19.12e, TOL));\n", satrec.isimp);
     printf("assert(isequal(satrec.method,             '%s')); ##NOTJS\n", satrec.method);
     printf("assert(isequalRel(satrec.aycof,           %19.12e, TOL));\n", satrec.aycof);
     printf("assert(isequalRel(satrec.con41,           %19.12e, TOL));\n", satrec.con41);
     printf("assert(isequalRel(satrec.cc1,             %19.12e, TOL));\n", satrec.cc1);
     printf("assert(isequalRel(satrec.cc4,             %19.12e, TOL));\n", satrec.cc4);
     printf("assert(isequalRel(satrec.cc5,             %19.12e, TOL));\n", satrec.cc5);
     printf("assert(isequalRel(satrec.d2,              %19.12e, TOL));\n", satrec.d2);
     printf("assert(isequalRel(satrec.d3,              %19.12e, TOL));\n", satrec.d3);
     printf("assert(isequalRel(satrec.d4,              %19.12e, TOL));\n", satrec.d4);
     printf("assert(isequalRel(satrec.delmo,           %19.12e, TOL));\n", satrec.delmo);
     printf("assert(isequalRel(satrec.eta,             %19.12e, TOL));\n", satrec.eta);
     printf("assert(isequalRel(satrec.argpdot,         %19.12e, TOL));\n", satrec.argpdot);
     printf("assert(isequalRel(satrec.omgcof,          %19.12e, TOL));\n", satrec.omgcof);
     printf("assert(isequalRel(satrec.sinmao,          %19.12e, TOL));\n", satrec.sinmao);
     printf("assert(isequalRel(satrec.t,               %19.12e, TOL));\n", satrec.t);
     printf("assert(isequalRel(satrec.t2cof,           %19.12e, TOL));\n", satrec.t2cof);
     printf("assert(isequalRel(satrec.t3cof,           %19.12e, TOL));\n", satrec.t3cof);
     printf("assert(isequalRel(satrec.t4cof,           %19.12e, TOL));\n", satrec.t4cof);
     printf("assert(isequalRel(satrec.t5cof,           %19.12e, TOL));\n", satrec.t5cof);
     printf("assert(isequalRel(satrec.x1mth2,          %19.12e, TOL));\n", satrec.x1mth2);
     printf("assert(isequalRel(satrec.x7thm1,          %19.12e, TOL));\n", satrec.x7thm1);
     printf("assert(isequalRel(satrec.mdot,            %19.12e, TOL));\n", satrec.mdot);
     printf("assert(isequalRel(satrec.nodedot,         %19.12e, TOL));\n", satrec.nodedot);
     printf("assert(isequalRel(satrec.xlcof,           %19.12e, TOL));\n", satrec.xlcof);
     printf("assert(isequalRel(satrec.xmcof,           %19.12e, TOL));\n", satrec.xmcof);
     printf("assert(isequalRel(satrec.nodecf,          %19.12e, TOL));\n", satrec.nodecf);
     printf("assert(isequalRel(satrec.irez,            %19.12e, TOL));\n", satrec.irez);
     printf("assert(isequalRel(satrec.d2201,           %19.12e, TOL));\n", satrec.d2201);
     printf("assert(isequalRel(satrec.d2211,           %19.12e, TOL));\n", satrec.d2211);
     printf("assert(isequalRel(satrec.d3210,           %19.12e, TOL));\n", satrec.d3210);
     printf("assert(isequalRel(satrec.d3222,           %19.12e, TOL));\n", satrec.d3222);
     printf("assert(isequalRel(satrec.d4410,           %19.12e, TOL));\n", satrec.d4410);
     printf("assert(isequalRel(satrec.d4422,           %19.12e, TOL));\n", satrec.d4422);
     printf("assert(isequalRel(satrec.d5220,           %19.12e, TOL));\n", satrec.d5220);
     printf("assert(isequalRel(satrec.d5232,           %19.12e, TOL));\n", satrec.d5232);
     printf("assert(isequalRel(satrec.d5421,           %19.12e, TOL));\n", satrec.d5421);
     printf("assert(isequalRel(satrec.d5433,           %19.12e, TOL));\n", satrec.d5433);
     printf("assert(isequalRel(satrec.dedt,            %19.12e, TOL));\n", satrec.dedt);
     printf("assert(isequalRel(satrec.del1,            %19.12e, TOL));\n", satrec.del1);
     printf("assert(isequalRel(satrec.del2,            %19.12e, TOL));\n", satrec.del2);
     printf("assert(isequalRel(satrec.del3,            %19.12e, TOL));\n", satrec.del3);
     printf("assert(isequalRel(satrec.didt,            %19.12e, TOL));\n", satrec.didt);
     printf("assert(isequalRel(satrec.dmdt,            %19.12e, TOL));\n", satrec.dmdt);
     printf("assert(isequalRel(satrec.dnodt,           %19.12e, TOL));\n", satrec.dnodt);
     printf("assert(isequalRel(satrec.domdt,           %19.12e, TOL));\n", satrec.domdt);
     printf("assert(isequalRel(satrec.e3,              %19.12e, TOL));\n", satrec.e3);
     printf("assert(isequalRel(satrec.ee2,             %19.12e, TOL));\n", satrec.ee2);
     printf("assert(isequalRel(satrec.peo,             %19.12e, TOL));\n", satrec.peo);
     printf("assert(isequalRel(satrec.pgho,            %19.12e, TOL));\n", satrec.pgho);
     printf("assert(isequalRel(satrec.pho,             %19.12e, TOL));\n", satrec.pho);
     printf("assert(isequalRel(satrec.pinco,           %19.12e, TOL));\n", satrec.pinco);
     printf("assert(isequalRel(satrec.plo,             %19.12e, TOL));\n", satrec.plo);
     printf("assert(isequalRel(satrec.se2,             %19.12e, TOL));\n", satrec.se2);
     printf("assert(isequalRel(satrec.se3,             %19.12e, TOL));\n", satrec.se3);
     printf("assert(isequalRel(satrec.sgh2,            %19.12e, TOL));\n", satrec.sgh2);
     printf("assert(isequalRel(satrec.sgh3,            %19.12e, TOL));\n", satrec.sgh3);
     printf("assert(isequalRel(satrec.sgh4,            %19.12e, TOL));\n", satrec.sgh4);
     printf("assert(isequalRel(satrec.sh2,             %19.12e, TOL));\n", satrec.sh2);
     printf("assert(isequalRel(satrec.sh3,             %19.12e, TOL));\n", satrec.sh3);
     printf("assert(isequalRel(satrec.si2,             %19.12e, TOL));\n", satrec.si2);
     printf("assert(isequalRel(satrec.si3,             %19.12e, TOL));\n", satrec.si3);
     printf("assert(isequalRel(satrec.sl2,             %19.12e, TOL));\n", satrec.sl2);
     printf("assert(isequalRel(satrec.sl3,             %19.12e, TOL));\n", satrec.sl3);
     printf("assert(isequalRel(satrec.sl4,             %19.12e, TOL));\n", satrec.sl4);
     printf("assert(isequalRel(satrec.gsto,            %19.12e, TOL));\n", satrec.gsto);
     printf("assert(isequalRel(satrec.xfact,           %19.12e, TOL));\n", satrec.xfact);
     printf("assert(isequalRel(satrec.xgh2,            %19.12e, TOL));\n", satrec.xgh2);
     printf("assert(isequalRel(satrec.xgh3,            %19.12e, TOL));\n", satrec.xgh3);
     printf("assert(isequalRel(satrec.xgh4,            %19.12e, TOL));\n", satrec.xgh4);
     printf("assert(isequalRel(satrec.xh2,             %19.12e, TOL));\n", satrec.xh2);
     printf("assert(isequalRel(satrec.xh3,             %19.12e, TOL));\n", satrec.xh3);
     printf("assert(isequalRel(satrec.xi2,             %19.12e, TOL));\n", satrec.xi2);
     printf("assert(isequalRel(satrec.xi3,             %19.12e, TOL));\n", satrec.xi3);
     printf("assert(isequalRel(satrec.xl2,             %19.12e, TOL));\n", satrec.xl2);
     printf("assert(isequalRel(satrec.xl3,             %19.12e, TOL));\n", satrec.xl3);
     printf("assert(isequalRel(satrec.xl4,             %19.12e, TOL));\n", satrec.xl4);
     printf("assert(isequalRel(satrec.xlamo,           %19.12e, TOL));\n", satrec.xlamo);
     printf("assert(isequalRel(satrec.zmol,            %19.12e, TOL));\n", satrec.zmol);
     printf("assert(isequalRel(satrec.zmos,            %19.12e, TOL));\n", satrec.zmos);
     printf("assert(isequalRel(satrec.atime,           %19.12e, TOL));\n", satrec.atime);
     printf("assert(isequalRel(satrec.xli,             %19.12e, TOL));\n", satrec.xli);
     printf("assert(isequalRel(satrec.xni,             %19.12e, TOL));\n", satrec.xni);
     printf("assert(isequal(satrec.init,               '%s')); ##NOTJS\n",         satrec.init);

     printf("##JS##equal(satrec.method,             '%s');\n",      satrec.method);
     printf("##JS##equal(satrec.init,               '%s');\n",      satrec.init);
     printf("##JS##});\n");
   endif;


   return;

