% -----------------------------------------------------------------------------
%
%                              procedure sgp4init
%
%   this procedure initializes variables for sgp4.
%
% Author: 
%   Jeff Beck 
%   beckja@alumni.lehigh.edu
%   1.0 (aug 7, 2006) - update for paper dav
% original comments from Vallado C++ version:
%   author        : david vallado                  719-573-2600   28 jun 2005
%
%   inputs        :
%     satn        - satellite number
%     bstar       - sgp4 type drag coefficient              kg/m2er
%     ecco        - eccentricity
%     epoch       - epoch time in days from jan 0, 1950. 0 hr
%     argpo       - argument of perigee (output if ds)
%     inclo       - inclination
%     mo          - mean anomaly (output if ds)
%     no          - mean motion
%     nodeo      - right ascension of ascending node
%
%   outputs       :
%     satrec      - common values for subsequent calls
%     return code - non-zero on error.
%                    1 - mean elements, ecc >= 1.0 or ecc < -0.001 or a < 0.95 er
%                    2 - mean motion less than 0.0
%                    3 - pert elements, ecc < 0.0  or  ecc > 1.0
%                    4 - semi-latus rectum < 0.0
%                    5 - epoch elements are sub-orbital
%                    6 - satellite has decayed
%
%   locals        :
%     CNODM  , SNODM  , COSIM  , SINIM  , COSOMM , SINOMM
%     Cc1sq  , Cc2    , Cc3
%     Coef   , Coef1
%     cosio4      -
%     day         -
%     dndt        -
%     em          - eccentricity
%     emsq        - eccentricity squared
%     eeta        -
%     etasq       -
%     gam         -
%     argpm       - argument of perigee
%     ndem        -
%     inclm       - inclination
%     mm          - mean anomaly
%     nm          - mean motion
%     perige      - perigee
%     pinvsq      -
%     psisq       -
%     qzms24      -
%     rtemsq      -
%     s1, s2, s3, s4, s5, s6, s7          -
%     sfour       -
%     ss1, ss2, ss3, ss4, ss5, ss6, ss7         -
%     sz1, sz2, sz3
%     sz11, sz12, sz13, sz21, sz22, sz23, sz31, sz32, sz33        -
%     tc          -
%     temp        -
%     temp1, temp2, temp3       -
%     tsi         -
%     xpidot      -
%     xhdot1      -
%     z1, z2, z3          -
%     z11, z12, z13, z21, z22, z23, z31, z32, z33         -
%
%   coupling      :
%     getgravconst
%     initl       -
%     dscom       -
%     dpper       -
%     dsinit      -
%     sgp4        -
%
%   references    :
%     hoots, roehrich, norad spacetrack report #3 1980
%     hoots, norad spacetrack report #6 1986
%     hoots, schumacher and glover 2004
%     vallado, crawford, hujsak, kelso  2006
%  ----------------------------------------------------------------------------*/

function [satrec] = sgp4init(whichconst, satrec, xbstar, xecco, epoch, ...
         xargpo, xinclo, xmo, xno, xnodeo);

  MAKE_ASSERTS = 0;
  if MAKE_ASSERTS
    ## In my tests the incoming 'satrec' only has 17 fields set:
    ## error =  0.00000000000000e+00
    ## satnum =  5.00000000000000e+00
    ## epochyr =  0.00000000000000e+00
    ## epochdays =  1.79784950620000e+02
    ## ndot =  6.96919666594958e-13
    ## nddot =  0.00000000000000e+00
    ## bstar =  2.80980000000000e-05
    ## inclo =  5.98092918731921e-01
    ## nodeo =  6.08638547138321e+00
    ## ecco =  1.85966700000000e-01
    ## argpo =  5.79041602748852e+00
    ## mo =  3.37309312557432e-01
    ## no =  4.72294454407786e-02
    ## a =  1.35345748275527e+00
    ## alta =  6.05155504413580e-01
    ## altp =  1.01759461096969e-01
    ## jdsatepoch =  2.45172328495062e+06
    ##
    ## If we have to look into length(fieldnames(satrec)) or
    ## loop like:
    ## fields = fieldnames(ORIG_satrec)
    ## for i = length(fields)
    ##     setfield(satrec, getfield(ORIG_satrec, fields(i0)
    ## end
    assert(length(fieldnames(satrec)) == 17);
    ORIG_satrec = satrec;       # works like deepcopy, not simple pointer copy
    ORIG_epoch  = epoch;
  endif;

   % /* ------------------------ initialization --------------------- */
   % /* ----------- set all near earth variables to zero ------------ */
   satrec.isimp   = 0;   satrec.method = 'n'; satrec.aycof    = 0.0;
   satrec.con41   = 0.0; satrec.cc1    = 0.0; satrec.cc4      = 0.0;
   satrec.cc5     = 0.0; satrec.d2     = 0.0; satrec.d3       = 0.0;
   satrec.d4      = 0.0; satrec.delmo  = 0.0; satrec.eta      = 0.0;
   satrec.argpdot = 0.0; satrec.omgcof = 0.0; satrec.sinmao   = 0.0;
   satrec.t       = 0.0; satrec.t2cof  = 0.0; satrec.t3cof    = 0.0;
   satrec.t4cof   = 0.0; satrec.t5cof  = 0.0; satrec.x1mth2   = 0.0;
   satrec.x7thm1  = 0.0; satrec.mdot   = 0.0; satrec.nodedot = 0.0;
   satrec.xlcof   = 0.0; satrec.xmcof  = 0.0; satrec.nodecf  = 0.0;

   % /* ----------- set all deep space variables to zero ------------ */
   satrec.irez  = 0;   satrec.d2201 = 0.0; satrec.d2211 = 0.0;
   satrec.d3210 = 0.0; satrec.d3222 = 0.0; satrec.d4410 = 0.0;
   satrec.d4422 = 0.0; satrec.d5220 = 0.0; satrec.d5232 = 0.0;
   satrec.d5421 = 0.0; satrec.d5433 = 0.0; satrec.dedt  = 0.0;
   satrec.del1  = 0.0; satrec.del2  = 0.0; satrec.del3  = 0.0;
   satrec.didt  = 0.0; satrec.dmdt  = 0.0; satrec.dnodt = 0.0;
   satrec.domdt = 0.0; satrec.e3    = 0.0; satrec.ee2   = 0.0;
   satrec.peo   = 0.0; satrec.pgho  = 0.0; satrec.pho   = 0.0;
   satrec.pinco = 0.0; satrec.plo   = 0.0; satrec.se2   = 0.0;
   satrec.se3   = 0.0; satrec.sgh2  = 0.0; satrec.sgh3  = 0.0;
   satrec.sgh4  = 0.0; satrec.sh2   = 0.0; satrec.sh3   = 0.0;
   satrec.si2   = 0.0; satrec.si3   = 0.0; satrec.sl2   = 0.0;
   satrec.sl3   = 0.0; satrec.sl4   = 0.0; satrec.gsto  = 0.0;
   satrec.xfact = 0.0; satrec.xgh2  = 0.0; satrec.xgh3  = 0.0;
   satrec.xgh4  = 0.0; satrec.xh2   = 0.0; satrec.xh3   = 0.0;
   satrec.xi2   = 0.0; satrec.xi3   = 0.0; satrec.xl2   = 0.0;
   satrec.xl3   = 0.0; satrec.xl4   = 0.0; satrec.xlamo = 0.0;
   satrec.zmol  = 0.0; satrec.zmos  = 0.0; satrec.atime = 0.0;
   satrec.xli   = 0.0; satrec.xni   = 0.0;

   % sgp4fix - note the following variables are also passed directly via satrec. 
   % it is possible to streamline the sgp4init call by deleting the "x"
   % variables, but the user would need to set the satrec.* values first. we
   % include the additional assignment in case twoline2rv is not used. 
   satrec.bstar      = xbstar;
   satrec.ecco       = xecco;
   satrec.argpo      = xargpo;
   satrec.inclo      = xinclo;
   satrec.mo         = xmo;
   satrec.no         = xno;
   satrec.nodeo      = xnodeo;

   %     /* -------------------- wgs-72 earth constants ----------------- */
   %     // sgp4fix identify constants and allow alternate values
   global tumin mu radiusearthkm xke j2 j3 j4 j3oj2  
   [tumin, mu, radiusearthkm, xke, j2, j3, j4, j3oj2] = getgravc( whichconst );

   ss     = 78.0 / radiusearthkm + 1.0;
   qzms2t = ((120.0 - 78.0) / radiusearthkm)^4;
   x2o3   =  2.0 / 3.0;
   % sgp4fix divisor for divide by zero check on inclination
   % the old check used 1.0 + cos(pi-1.0e-9), but then compared it to
   % 1.5 e-12, so the threshold was changed to 1.5e-12 for consistancy
   temp4    =   1.5e-12;

   satrec.init = 'y';
   satrec.t    = 0.0;

   [ainv,  ao,     satrec.con41,   con42,  cosio,  cosio2, einv,   eccsq,...
           satrec.method,  omeosq, posq,   rp,     rteosq, sinio,...
           satrec.gsto,    satrec.no]...
           = initl(...
           satrec.ecco,    epoch,  satrec.inclo,   satrec.no,...
           satrec.satnum);

   satrec.error = 0;
       
   if (rp < 1.0)
   %   printf("# *** satn%d epoch elts sub-orbital ***\n", satn);
       satrec.error = 5;
   end

   if ((omeosq >= 0.0 ) | ( satrec.no >= 0.0))
       satrec.isimp = 0;
       if (rp < (220.0 / radiusearthkm + 1.0))
           satrec.isimp = 1;
       end
       sfour  = ss;
       qzms24 = qzms2t;
       perige = (rp - 1.0) * radiusearthkm;

       % /* - for perigees below 156 km, s and qoms2t are altered - */
       if (perige < 156.0)
           sfour = perige - 78.0;
           if (perige < 98.0)
               sfour = 20.0;
           end
           qzms24 = ((120.0 - sfour) / radiusearthkm)^4.0;
           sfour  = sfour / radiusearthkm + 1.0;
       end
       pinvsq = 1.0 / posq;

       tsi  = 1.0 / (ao - sfour);
       satrec.eta  = ao * satrec.ecco * tsi;
       etasq = satrec.eta * satrec.eta;
       eeta  = satrec.ecco * satrec.eta;
       psisq = abs(1.0 - etasq);
       coef  = qzms24 * tsi^4.0;
       coef1 = coef / psisq^3.5;
       cc2   = coef1 * satrec.no * (ao * (1.0 + 1.5 * etasq + eeta *...
           (4.0 + etasq)) + 0.375 * j2 * tsi / psisq * satrec.con41 *...
           (8.0 + 3.0 * etasq * (8.0 + etasq)));
       satrec.cc1   = satrec.bstar * cc2;
       cc3   = 0.0;
       if (satrec.ecco > 1.0e-4)
           cc3 = -2.0 * coef * tsi * j3oj2 * satrec.no * sinio / satrec.ecco;
       end
       satrec.x1mth2 = 1.0 - cosio2;
       satrec.cc4    = 2.0* satrec.no * coef1 * ao * omeosq *...
           (satrec.eta * (2.0 + 0.5 * etasq) + satrec.ecco *...
           (0.5 + 2.0 * etasq) - j2 * tsi / (ao * psisq) *...
           (-3.0 * satrec.con41 * (1.0 - 2.0 * eeta + etasq *...
           (1.5 - 0.5 * eeta)) + 0.75 * satrec.x1mth2 *...
           (2.0 * etasq - eeta * (1.0 + etasq)) * cos(2.0 * satrec.argpo)));
       satrec.cc5 = 2.0 * coef1 * ao * omeosq * (1.0 + 2.75 *...
           (etasq + eeta) + eeta * etasq);
       cosio4 = cosio2 * cosio2;
       temp1  = 1.5 * j2 * pinvsq * satrec.no;
       temp2  = 0.5 * temp1 * j2 * pinvsq;
       temp3  = -0.46875 * j4 * pinvsq * pinvsq * satrec.no;
       satrec.mdot     = satrec.no + 0.5 * temp1 * rteosq * satrec.con41 +...
           0.0625 * temp2 * rteosq * (13.0 - 78.0 * cosio2 + 137.0 * cosio4);
       satrec.argpdot  = -0.5 * temp1 * con42 + 0.0625 * temp2 *...
           (7.0 - 114.0 * cosio2 + 395.0 * cosio4) +...
           temp3 * (3.0 - 36.0 * cosio2 + 49.0 * cosio4);
       xhdot1            = -temp1 * cosio;
       satrec.nodedot = xhdot1 + (0.5 * temp2 * (4.0 - 19.0 * cosio2) +...
           2.0 * temp3 * (3.0 - 7.0 * cosio2)) * cosio;
       xpidot            =  satrec.argpdot+ satrec.nodedot;
       satrec.omgcof   = satrec.bstar * cc3 * cos(satrec.argpo);
       satrec.xmcof    = 0.0;
       if (satrec.ecco > 1.0e-4)
           satrec.xmcof = -x2o3 * coef * satrec.bstar / eeta;
       end
       satrec.nodecf = 3.5 * omeosq * xhdot1 * satrec.cc1;
       satrec.t2cof   = 1.5 * satrec.cc1;

       % // sgp4fix for divide by zero with xinco = 180 deg
       if (abs(cosio+1.0) > 1.5e-12)
          satrec.xlcof   = -0.25 * j3oj2 * sinio *...
              (3.0 + 5.0 * cosio) / (1.0 + cosio);
       else
         satrec.xlcof   = -0.25 * j3oj2 * sinio *...
              (3.0 + 5.0 * cosio) / temp4;
       end   
       satrec.aycof   = -0.5 * j3oj2 * sinio;
       satrec.delmo   = (1.0 + satrec.eta * cos(satrec.mo))^3;
       satrec.sinmao  = sin(satrec.mo);
       satrec.x7thm1  = 7.0 * cosio2 - 1.0;

       % /* --------------- deep space initialization ------------- */
       if ((2*pi / satrec.no) >= 225.0)
           satrec.method = 'd';
           satrec.isimp  = 1;
           tc    =  0.0;
           inclm = satrec.inclo;

           [sinim,cosim,sinomm,cosomm,snodm,cnodm,day,satrec.e3,satrec.ee2,...
               em,emsq,gam,satrec.peo,satrec.pgho,satrec.pho,satrec.pinco,...
               satrec.plo,rtemsq,satrec.se2,satrec.se3,satrec.sgh2,...
               satrec.sgh3,satrec.sgh4,satrec.sh2,satrec.sh3,satrec.si2,...
               satrec.si3,satrec.sl2,satrec.sl3,satrec.sl4,s1,s2,s3,s4,s5,...
               s6,s7,ss1,ss2,ss3,ss4,ss5,ss6,ss7,sz1,sz2,sz3,sz11,sz12,...
               sz13,sz21,sz22,sz23,sz31,sz32,sz33,satrec.xgh2,satrec.xgh3,...
               satrec.xgh4,satrec.xh2,satrec.xh3,satrec.xi2,satrec.xi3,...
               satrec.xl2,satrec.xl3,satrec.xl4,nm,z1,z2,z3,z11,z12,z13,...
               z21,z22,z23,z31,z32,z33,satrec.zmol,satrec.zmos] = ...
               dscom(epoch,satrec.ecco,satrec.argpo,tc,satrec.inclo,...
               satrec.nodeo,satrec.no);

           [satrec.ecco,satrec.inclo,satrec.nodeo,satrec.argpo,satrec.mo]...
               = dpper(satrec.e3,satrec.ee2,satrec.peo,satrec.pgho,...
               satrec.pho,satrec.pinco,satrec.plo,satrec.se2,satrec.se3,...
               satrec.sgh2,satrec.sgh3,satrec.sgh4,satrec.sh2,satrec.sh3,...
               satrec.si2,satrec.si3,satrec.sl2,satrec.sl3,satrec.sl4,...
               satrec.t,satrec.xgh2,satrec.xgh3,satrec.xgh4,satrec.xh2,...
               satrec.xh3,satrec.xi2,satrec.xi3,satrec.xl2,satrec.xl3,...
               satrec.xl4,satrec.zmol,satrec.zmos,inclm,satrec.init,...
               satrec.ecco,satrec.inclo,satrec.nodeo,satrec.argpo,satrec.mo);

           argpm  = 0.0;
           nodem  = 0.0;
           mm     = 0.0;

           [em,argpm,inclm,mm,nm,nodem,satrec.irez,satrec.atime,...
               satrec.d2201,satrec.d2211,satrec.d3210,satrec.d3222,...
               satrec.d4410,satrec.d4422,satrec.d5220,satrec.d5232,...
               satrec.d5421,satrec.d5433,satrec.dedt,satrec.didt,...
               satrec.dmdt,dndt,satrec.dnodt,satrec.domdt,satrec.del1,...
               satrec.del2,satrec.del3,...
               ... %ses,sghl,sghs,sgs,shl,shs,sis,sls,theta,...
               satrec.xfact,satrec.xlamo,satrec.xli,satrec.xni] ...
               = dsinit(...
               cosim,emsq,satrec.argpo,s1,s2,s3,s4,s5,sinim,ss1,ss2,ss3,...
               ss4,ss5,sz1,sz3,sz11,sz13,sz21,sz23,sz31,sz33,satrec.t,tc,...
               satrec.gsto,satrec.mo,satrec.mdot,satrec.no,satrec.nodeo,...
               satrec.nodedot,xpidot,z1,z3,z11,z13,z21,z23,z31,z33,em,...
               argpm,inclm,mm,nm,nodem,satrec.ecco,eccsq);
       end

       % /* ----------- set variables if not deep space ----------- */
       if (satrec.isimp ~= 1)
           cc1sq          = satrec.cc1 * satrec.cc1;
           satrec.d2    = 4.0 * ao * tsi * cc1sq;
           temp           = satrec.d2 * tsi * satrec.cc1 / 3.0;
           satrec.d3    = (17.0 * ao + sfour) * temp;
           satrec.d4    = 0.5 * temp * ao * tsi *...
               (221.0 * ao + 31.0 * sfour) * satrec.cc1;
           satrec.t3cof = satrec.d2 + 2.0 * cc1sq;
           satrec.t4cof = 0.25 * (3.0 * satrec.d3 + satrec.cc1 *...
               (12.0 * satrec.d2 + 10.0 * cc1sq));
           satrec.t5cof = 0.2 * (3.0 * satrec.d4 +...
               12.0 * satrec.cc1 * satrec.d3 +...
               6.0 * satrec.d2 * satrec.d2 +...
               15.0 * cc1sq * (2.0 * satrec.d2 + cc1sq));
       end
   end % // if omeosq = 0 ...

   % /* finally propogate to zero epoch to initialise all others. */
   if(satrec.error == 0)
       [satrec, r, v] = sgp4(satrec, 0.0);
   end

   satrec.init = 'n';

   global idebug dbgfile
   if idebug
       debug6;
   end

   if MAKE_ASSERTS
     printf("\n");
     printf("##JS##test('%d, satin, %19.12e, %19.12e, %19.12e, %19.12e, %19.12e, %19.12e, %19.12e, %19.12e', function () {\n",
            whichconst,  xbstar, xecco, ORIG_epoch, xargpo, xinclo, xmo, xno, xnodeo);
     printf("##JS##var satin, rets, satrec, TOL = 0.000001;\n");
     printf("##JS## // For JS change   'attr', -> 'attr':\n");
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
     printf("'jdsatepoch',      %19.12e \n", ORIG_satrec.jdsatepoch); # no trailing comma here
     # printf("'isimp',           %19.12e,\n", ORIG_satrec.isimp);
     # printf("'method',          '%s',\n",    ORIG_satrec.method);
     # printf("'aycof',           %19.12e,\n", ORIG_satrec.aycof);
     # printf("'con41',           %19.12e,\n", ORIG_satrec.con41);
     # printf("'cc1',             %19.12e,\n", ORIG_satrec.cc1);
     # printf("'cc4',             %19.12e,\n", ORIG_satrec.cc4);
     # printf("'cc5',             %19.12e,\n", ORIG_satrec.cc5);
     # printf("'d2',              %19.12e,\n", ORIG_satrec.d2);
     # printf("'d3',              %19.12e,\n", ORIG_satrec.d3);
     # printf("'d4',              %19.12e,\n", ORIG_satrec.d4);
     # printf("'delmo',           %19.12e,\n", ORIG_satrec.delmo);
     # printf("'eta',             %19.12e,\n", ORIG_satrec.eta);
     # printf("'argpdot',         %19.12e,\n", ORIG_satrec.argpdot);
     # printf("'omgcof',          %19.12e,\n", ORIG_satrec.omgcof);
     # printf("'sinmao',          %19.12e,\n", ORIG_satrec.sinmao);
     # printf("'t',               %19.12e,\n", ORIG_satrec.t);
     # printf("'t2cof',           %19.12e,\n", ORIG_satrec.t2cof);
     # printf("'t3cof',           %19.12e,\n", ORIG_satrec.t3cof);
     # printf("'t4cof',           %19.12e,\n", ORIG_satrec.t4cof);
     # printf("'t5cof',           %19.12e,\n", ORIG_satrec.t5cof);
     # printf("'x1mth2',          %19.12e,\n", ORIG_satrec.x1mth2);
     # printf("'x7thm1',          %19.12e,\n", ORIG_satrec.x7thm1);
     # printf("'mdot',            %19.12e,\n", ORIG_satrec.mdot);
     # printf("'nodedot',         %19.12e,\n", ORIG_satrec.nodedot);
     # printf("'xlcof',           %19.12e,\n", ORIG_satrec.xlcof);
     # printf("'xmcof',           %19.12e,\n", ORIG_satrec.xmcof);
     # printf("'nodecf',          %19.12e,\n", ORIG_satrec.nodecf);
     # printf("'irez',            %19.12e,\n", ORIG_satrec.irez);
     # printf("'d2201',           %19.12e,\n", ORIG_satrec.d2201);
     # printf("'d2211',           %19.12e,\n", ORIG_satrec.d2211);
     # printf("'d3210',           %19.12e,\n", ORIG_satrec.d3210);
     # printf("'d3222',           %19.12e,\n", ORIG_satrec.d3222);
     # printf("'d4410',           %19.12e,\n", ORIG_satrec.d4410);
     # printf("'d4422',           %19.12e,\n", ORIG_satrec.d4422);
     # printf("'d5220',           %19.12e,\n", ORIG_satrec.d5220);
     # printf("'d5232',           %19.12e,\n", ORIG_satrec.d5232);
     # printf("'d5421',           %19.12e,\n", ORIG_satrec.d5421);
     # printf("'d5433',           %19.12e,\n", ORIG_satrec.d5433);
     # printf("'dedt',            %19.12e,\n", ORIG_satrec.dedt);
     # printf("'del1',            %19.12e,\n", ORIG_satrec.del1);
     # printf("'del2',            %19.12e,\n", ORIG_satrec.del2);
     # printf("'del3',            %19.12e,\n", ORIG_satrec.del3);
     # printf("'didt',            %19.12e,\n", ORIG_satrec.didt);
     # printf("'dmdt',            %19.12e,\n", ORIG_satrec.dmdt);
     # printf("'dnodt',           %19.12e,\n", ORIG_satrec.dnodt);
     # printf("'domdt',           %19.12e,\n", ORIG_satrec.domdt);
     # printf("'e3',              %19.12e,\n", ORIG_satrec.e3);
     # printf("'ee2',             %19.12e,\n", ORIG_satrec.ee2);
     # printf("'peo',             %19.12e,\n", ORIG_satrec.peo);
     # printf("'pgho',            %19.12e,\n", ORIG_satrec.pgho);
     # printf("'pho',             %19.12e,\n", ORIG_satrec.pho);
     # printf("'pinco',           %19.12e,\n", ORIG_satrec.pinco);
     # printf("'plo',             %19.12e,\n", ORIG_satrec.plo);
     # printf("'se2',             %19.12e,\n", ORIG_satrec.se2);
     # printf("'se3',             %19.12e,\n", ORIG_satrec.se3);
     # printf("'sgh2',            %19.12e,\n", ORIG_satrec.sgh2);
     # printf("'sgh3',            %19.12e,\n", ORIG_satrec.sgh3);
     # printf("'sgh4',            %19.12e,\n", ORIG_satrec.sgh4);
     # printf("'sh2',             %19.12e,\n", ORIG_satrec.sh2);
     # printf("'sh3',             %19.12e,\n", ORIG_satrec.sh3);
     # printf("'si2',             %19.12e,\n", ORIG_satrec.si2);
     # printf("'si3',             %19.12e,\n", ORIG_satrec.si3);
     # printf("'sl2',             %19.12e,\n", ORIG_satrec.sl2);
     # printf("'sl3',             %19.12e,\n", ORIG_satrec.sl3);
     # printf("'sl4',             %19.12e,\n", ORIG_satrec.sl4);
     # printf("'gsto',            %19.12e,\n", ORIG_satrec.gsto);
     # printf("'xfact',           %19.12e,\n", ORIG_satrec.xfact);
     # printf("'xgh2',            %19.12e,\n", ORIG_satrec.xgh2);
     # printf("'xgh3',            %19.12e,\n", ORIG_satrec.xgh3);
     # printf("'xgh4',            %19.12e,\n", ORIG_satrec.xgh4);
     # printf("'xh2',             %19.12e,\n", ORIG_satrec.xh2);
     # printf("'xh3',             %19.12e,\n", ORIG_satrec.xh3);
     # printf("'xi2',             %19.12e,\n", ORIG_satrec.xi2);
     # printf("'xi3',             %19.12e,\n", ORIG_satrec.xi3);
     # printf("'xl2',             %19.12e,\n", ORIG_satrec.xl2);
     # printf("'xl3',             %19.12e,\n", ORIG_satrec.xl3);
     # printf("'xl4',             %19.12e,\n", ORIG_satrec.xl4);
     # printf("'xlamo',           %19.12e,\n", ORIG_satrec.xlamo);
     # printf("'zmol',            %19.12e,\n", ORIG_satrec.zmol);
     # printf("'zmos',            %19.12e,\n", ORIG_satrec.zmos);
     # printf("'atime',           %19.12e,\n", ORIG_satrec.atime);
     # printf("'xli',             %19.12e,\n", ORIG_satrec.xli);
     # printf("'xni',             %19.12e,\n", ORIG_satrec.xni);
     # printf("'init',            '%s'\n",     ORIG_satrec.init);
     printf(");  ##NOTJS\n");
     printf("##JS##};\n");

     
     printf("[satrec] = sgp4init(%d, satin, %19.12e, %19.12e, %19.12e, %19.12e, %19.12e, %19.12e, %19.12e, %19.12e);\n",
            whichconst, xbstar, xecco, epoch, xargpo, xinclo, xmo, xno, xnodeo);

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
