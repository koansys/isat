% -----------------------------------------------------------------------------
%
%                            procedure dscom
%
%   this procedure provides deep space common items used by both the secular
%     and periodics subroutines.  input is provided as shown. this routine
%     used to be called dpper, but the functions inside weren't well organized.
%
% Author: 
%   Jeff Beck 
%   beckja@alumni.lehigh.edu
%   1.0 (aug 7, 2006) - update for paper dav
% original comments from Vallado C++ version:
%   author        : david vallado                  719-573-2600   28 jun 2005
%
%   inputs        :
%     epoch       -
%     ep          - eccentricity
%     argpp       - argument of perigee
%     tc          -
%     inclp       - inclination
%     nodep       - right ascension of ascending node
%     np          - mean motion
%
%   outputs       :
%     sinim  , cosim  , sinomm , cosomm , snodm  , cnodm
%     day         -
%     e3          -
%     ee2         -
%     em          - eccentricity
%     emsq        - eccentricity squared
%     gam         -
%     peo         -
%     pgho        -
%     pho         -
%     pinco       -
%     plo         -
%     rtemsq      -
%     se2, se3         -
%     sgh2, sgh3, sgh4        -
%     sh2, sh3, si2, si3, sl2, sl3, sl4         -
%     s1, s2, s3, s4, s5, s6, s7          -
%     ss1, ss2, ss3, ss4, ss5, ss6, ss7, sz1, sz2, sz3         -
%     sz11, sz12, sz13, sz21, sz22, sz23, sz31, sz32, sz33        -
%     xgh2, xgh3, xgh4, xh2, xh3, xi2, xi3, xl2, xl3, xl4         -
%     nm          - mean motion
%     z1, z2, z3, z11, z12, z13, z21, z22, z23, z31, z32, z33         -
%     zmol        -
%     zmos        -
%
%   locals        :
%     a1, a2, a3, a4, a5, a6, a7, a8, a9, a10         -
%     betasq      -
%     cc          -
%     ctem, stem        -
%     x1, x2, x3, x4, x5, x6, x7, x8          -
%     xnodce      -
%     xnoi        -
%     zcosg  , zsing  , zcosgl , zsingl , zcosh  , zsinh  , zcoshl , zsinhl ,
%     zcosi  , zsini  , zcosil , zsinil ,
%     zx          -
%     zy          -
%
%   coupling      :
%     none.
%
%   references    :
%     hoots, roehrich, norad spacetrack report #3 1980
%     hoots, norad spacetrack report #6 1986
%     hoots, schumacher and glover 2004
%     vallado, crawford, hujsak, kelso  2006
%  ----------------------------------------------------------------------------*/

function [ sinim,cosim,sinomm,cosomm,snodm,cnodm,day,e3,ee2,em,emsq,gam,...
           peo,pgho,pho,pinco,plo,rtemsq,se2,se3,sgh2,sgh3,sgh4,sh2,sh3,si2,...
           si3,sl2,sl3,sl4,s1,s2,s3,s4,s5,s6,s7,ss1,ss2,ss3,ss4,ss5,ss6,ss7,...
           sz1,sz2,sz3,sz11,sz12,sz13,sz21,sz22,sz23,sz31,sz32,sz33,xgh2,xgh3,...
           xgh4,xh2,xh3,xi2,xi3,xl2,xl3,xl4,nm,z1,z2,z3,z11,z12,z13,z21,z22,...
           z23,z31,z32,z33,zmol,zmos]...
         = dscom (epoch, ep, argpp, tc, inclp, nodep, np)

   % /* -------------------------- constants ------------------------- */
   zes     =  0.01675;
   zel     =  0.05490;
   c1ss    =  2.9864797e-6;
   c1l     =  4.7968065e-7;
   zsinis  =  0.39785416;
   zcosis  =  0.91744867;
   zcosgs  =  0.1945905;
   zsings  = -0.98088458;
   twopi   =  2.0 * pi;

   % /* --------------------- local variables ------------------------ */
   nm     = np;
   em     = ep;
   snodm  = sin(nodep);
   cnodm  = cos(nodep);
   sinomm = sin(argpp);
   cosomm = cos(argpp);
   sinim  = sin(inclp);
   cosim  = cos(inclp);
   emsq   = em * em;
   betasq = 1.0 - emsq;
   rtemsq = sqrt(betasq);

   % /* ----------------- initialize lunar solar terms --------------- */
   peo    = 0.0;
   pinco  = 0.0;
   plo    = 0.0;
   pgho   = 0.0;
   pho    = 0.0;
   day    = epoch + 18261.5 + tc / 1440.0;
   xnodce = rem(4.5236020 - 9.2422029e-4 * day, twopi);
   stem   = sin(xnodce);
   ctem   = cos(xnodce);
   zcosil = 0.91375164 - 0.03568096 * ctem;
   zsinil = sqrt(1.0 - zcosil * zcosil);
   zsinhl = 0.089683511 * stem / zsinil;
   zcoshl = sqrt(1.0 - zsinhl * zsinhl);
   gam    = 5.8351514 + 0.0019443680 * day;
   zx     = 0.39785416 * stem / zsinil;
   zy     = zcoshl * ctem + 0.91744867 * zsinhl * stem;
   zx     = atan2(zx, zy);
   zx     = gam + zx - xnodce;
   zcosgl = cos(zx);
   zsingl = sin(zx);

   % /* ------------------------- do solar terms --------------------- */
   zcosg = zcosgs;
   zsing = zsings;
   zcosi = zcosis;
   zsini = zsinis;
   zcosh = cnodm;
   zsinh = snodm;
   cc    = c1ss;
   xnoi  = 1.0 / nm;

   for (lsflg = 1:2)
       a1  =   zcosg * zcosh + zsing * zcosi * zsinh;
       a3  =  -zsing * zcosh + zcosg * zcosi * zsinh;
       a7  =  -zcosg * zsinh + zsing * zcosi * zcosh;
       a8  =   zsing * zsini;
       a9  =   zsing * zsinh + zcosg * zcosi * zcosh;
       a10 =   zcosg * zsini;
       a2  =   cosim * a7 + sinim * a8;
       a4  =   cosim * a9 + sinim * a10;
       a5  =  -sinim * a7 + cosim * a8;
       a6  =  -sinim * a9 + cosim * a10;

       x1  =  a1 * cosomm + a2 * sinomm;
       x2  =  a3 * cosomm + a4 * sinomm;
       x3  = -a1 * sinomm + a2 * cosomm;
       x4  = -a3 * sinomm + a4 * cosomm;
       x5  =  a5 * sinomm;
       x6  =  a6 * sinomm;
       x7  =  a5 * cosomm;
       x8  =  a6 * cosomm;

       z31 = 12.0 * x1 * x1 - 3.0 * x3 * x3;
       z32 = 24.0 * x1 * x2 - 6.0 * x3 * x4;
       z33 = 12.0 * x2 * x2 - 3.0 * x4 * x4;
       z1  =  3.0 *  (a1 * a1 + a2 * a2) + z31 * emsq;
       z2  =  6.0 *  (a1 * a3 + a2 * a4) + z32 * emsq;
       z3  =  3.0 *  (a3 * a3 + a4 * a4) + z33 * emsq;
       z11 = -6.0 * a1 * a5 + emsq *  (-24.0 * x1 * x7-6.0 * x3 * x5);
       z12 = -6.0 *  (a1 * a6 + a3 * a5) + emsq *...
           (-24.0 * (x2 * x7 + x1 * x8) - 6.0 * (x3 * x6 + x4 * x5));
       z13 = -6.0 * a3 * a6 + emsq * (-24.0 * x2 * x8 - 6.0 * x4 * x6);
       z21 =  6.0 * a2 * a5 + emsq * (24.0 * x1 * x5 - 6.0 * x3 * x7);
       z22 =  6.0 *  (a4 * a5 + a2 * a6) + emsq *...
           (24.0 * (x2 * x5 + x1 * x6) - 6.0 * (x4 * x7 + x3 * x8));
       z23 =  6.0 * a4 * a6 + emsq * (24.0 * x2 * x6 - 6.0 * x4 * x8);
       z1  = z1 + z1 + betasq * z31;
       z2  = z2 + z2 + betasq * z32;
       z3  = z3 + z3 + betasq * z33;
       s3  = cc * xnoi;
       s2  = -0.5 * s3 / rtemsq;
       s4  = s3 * rtemsq;
       s1  = -15.0 * em * s4;
       s5  = x1 * x3 + x2 * x4;
       s6  = x2 * x3 + x1 * x4;
       s7  = x2 * x4 - x1 * x3;

       % /* ----------------------- do lunar terms ------------------- */
       if (lsflg == 1)
           ss1   = s1;
           ss2   = s2;
           ss3   = s3;
           ss4   = s4;
           ss5   = s5;
           ss6   = s6;
           ss7   = s7;
           sz1   = z1;
           sz2   = z2;
           sz3   = z3;
           sz11  = z11;
           sz12  = z12;
           sz13  = z13;
           sz21  = z21;
           sz22  = z22;
           sz23  = z23;
           sz31  = z31;
           sz32  = z32;
           sz33  = z33;
           zcosg = zcosgl;
           zsing = zsingl;
           zcosi = zcosil;
           zsini = zsinil;
           zcosh = zcoshl * cnodm + zsinhl * snodm;
           zsinh = snodm * zcoshl - cnodm * zsinhl;
           cc    = c1l;
       end
   end

   zmol = rem(4.7199672 + 0.22997150  * day - gam, twopi);
   zmos = rem(6.2565837 + 0.017201977 * day, twopi);

   % /* ------------------------ do solar terms ---------------------- */
   se2  =   2.0 * ss1 * ss6;
   se3  =   2.0 * ss1 * ss7;
   si2  =   2.0 * ss2 * sz12;
   si3  =   2.0 * ss2 * (sz13 - sz11);
   sl2  =  -2.0 * ss3 * sz2;
   sl3  =  -2.0 * ss3 * (sz3 - sz1);
   sl4  =  -2.0 * ss3 * (-21.0 - 9.0 * emsq) * zes;
   sgh2 =   2.0 * ss4 * sz32;
   sgh3 =   2.0 * ss4 * (sz33 - sz31);
   sgh4 = -18.0 * ss4 * zes;
   sh2  =  -2.0 * ss2 * sz22;
   sh3  =  -2.0 * ss2 * (sz23 - sz21);

   % /* ------------------------ do lunar terms ---------------------- */
   ee2  =   2.0 * s1 * s6;
   e3   =   2.0 * s1 * s7;
   xi2  =   2.0 * s2 * z12;
   xi3  =   2.0 * s2 * (z13 - z11);
   xl2  =  -2.0 * s3 * z2;
   xl3  =  -2.0 * s3 * (z3 - z1);
   xl4  =  -2.0 * s3 * (-21.0 - 9.0 * emsq) * zel;
   xgh2 =   2.0 * s4 * z32;
   xgh3 =   2.0 * s4 * (z33 - z31);
   xgh4 = -18.0 * s4 * zel;
   xh2  =  -2.0 * s2 * z22;
   xh3  =  -2.0 * s2 * (z23 - z21);

   global idebug dbgfile
   if idebug
       debug2;
   end

   MAKE_ASSERTS = 0;
   if MAKE_ASSERTS
     printf("\n");
     printf("[sinim, cosim, sinomm, cosomm, snodm, cnodm, day, e3, ee2, em, emsq, gam, ...\n");
     printf(" peo, pgho, pho, pinco, plo, rtemsq, se2, se3, sgh2, sgh3, sgh4, sh2, sh3, si2, ...\n");
     printf(" si3, sl2, sl3, sl4, s1, s2, s3, s4, s5, s6, s7, ss1, ss2, ss3, ss4, ss5, ss6, ss7, ...\n");
     printf(" sz1, sz2, sz3, sz11, sz12, sz13, sz21, sz22, sz23, sz31, sz32, sz33, xgh2, xgh3, ...\n");
     printf(" xgh4, xh2, xh3, xi2, xi3, xl2, xl3, xl4, nm, z1, z2, z3, z11, z12, z13, z21, z22, ...\n");
     printf(" z23, z31, z32, z33, zmol, zmos]...\n");
     printf(" = dscom(%19.12e, %19.12e, %19.12e, %19.12e, %19.12e, %19.12e, %19.12e);\n",...
            epoch, ep, argpp, tc, inclp, nodep, np);
     printf("assert(isequalRel(sinim,     %19.12e, TOL));\n", sinim);
     printf("assert(isequalRel(cosim,     %19.12e, TOL));\n", cosim);
     printf("assert(isequalRel(sinomm,    %19.12e, TOL));\n", sinomm);
     printf("assert(isequalRel(cosomm,    %19.12e, TOL));\n", cosomm);
     printf("assert(isequalRel(snodm,     %19.12e, TOL));\n", snodm);
     printf("assert(isequalRel(cnodm,     %19.12e, TOL));\n", cnodm);
     printf("assert(isequalRel(day,       %19.12e, TOL));\n", day);
     printf("assert(isequalRel(e3,        %19.12e, TOL));\n", e3);
     printf("assert(isequalRel(ee2,       %19.12e, TOL));\n", ee2);
     printf("assert(isequalRel(em,        %19.12e, TOL));\n", em);
     printf("assert(isequalRel(emsq,      %19.12e, TOL));\n", emsq);
     printf("assert(isequalRel(gam,       %19.12e, TOL));\n", gam);
     printf("assert(isequalRel(peo,       %19.12e, TOL));\n", peo);
     printf("assert(isequalRel(pgho,      %19.12e, TOL));\n", pgho);
     printf("assert(isequalRel(pho,       %19.12e, TOL));\n", pho);
     printf("assert(isequalRel(pinco,     %19.12e, TOL));\n", pinco);
     printf("assert(isequalRel(plo,       %19.12e, TOL));\n", plo);
     printf("assert(isequalRel(rtemsq,    %19.12e, TOL));\n", rtemsq);
     printf("assert(isequalRel(se2,       %19.12e, TOL));\n", se2);
     printf("assert(isequalRel(se3,       %19.12e, TOL));\n", se3);
     printf("assert(isequalRel(sgh2,      %19.12e, TOL));\n", sgh2);
     printf("assert(isequalRel(sgh3,      %19.12e, TOL));\n", sgh3);
     printf("assert(isequalRel(sgh4,      %19.12e, TOL));\n", sgh4);
     printf("assert(isequalRel(sh2,       %19.12e, TOL));\n", sh2);
     printf("assert(isequalRel(sh3,       %19.12e, TOL));\n", sh3);
     printf("assert(isequalRel(si2,       %19.12e, TOL));\n", si2);
     printf("assert(isequalRel(si3,       %19.12e, TOL));\n", si3);
     printf("assert(isequalRel(sl2,       %19.12e, TOL));\n", sl2);
     printf("assert(isequalRel(sl3,       %19.12e, TOL));\n", sl3);
     printf("assert(isequalRel(sl4,       %19.12e, TOL));\n", sl4);
     printf("assert(isequalRel(s1,        %19.12e, TOL));\n", s1);
     printf("assert(isequalRel(s2,        %19.12e, TOL));\n", s2);
     printf("assert(isequalRel(s3,        %19.12e, TOL));\n", s3);
     printf("assert(isequalRel(s4,        %19.12e, TOL));\n", s4);
     printf("assert(isequalRel(s5,        %19.12e, TOL));\n", s5);
     printf("assert(isequalRel(s6,        %19.12e, TOL));\n", s6);
     printf("assert(isequalRel(s7,        %19.12e, TOL));\n", s7);
     printf("assert(isequalRel(ss1,       %19.12e, TOL));\n", ss1);
     printf("assert(isequalRel(ss2,       %19.12e, TOL));\n", ss2);
     printf("assert(isequalRel(ss3,       %19.12e, TOL));\n", ss3);
     printf("assert(isequalRel(ss4,       %19.12e, TOL));\n", ss4);
     printf("assert(isequalRel(ss5,       %19.12e, TOL));\n", ss5);
     printf("assert(isequalRel(ss6,       %19.12e, TOL));\n", ss6);
     printf("assert(isequalRel(ss7,       %19.12e, TOL));\n", ss7);
     printf("assert(isequalRel(sz1,       %19.12e, TOL));\n", sz1);
     printf("assert(isequalRel(sz2,       %19.12e, TOL));\n", sz2);
     printf("assert(isequalRel(sz3,       %19.12e, TOL));\n", sz3);
     printf("assert(isequalRel(sz11,      %19.12e, TOL));\n", sz11);
     printf("assert(isequalRel(sz12,      %19.12e, TOL));\n", sz12);
     printf("assert(isequalRel(sz13,      %19.12e, TOL));\n", sz13);
     printf("assert(isequalRel(sz21,      %19.12e, TOL));\n", sz21);
     printf("assert(isequalRel(sz22,      %19.12e, TOL));\n", sz22);
     printf("assert(isequalRel(sz23,      %19.12e, TOL));\n", sz23);
     printf("assert(isequalRel(sz31,      %19.12e, TOL));\n", sz31);
     printf("assert(isequalRel(sz32,      %19.12e, TOL));\n", sz32);
     printf("assert(isequalRel(sz33,      %19.12e, TOL));\n", sz33);
     printf("assert(isequalRel(xgh2,      %19.12e, TOL));\n", xgh2);
     printf("assert(isequalRel(xgh3,      %19.12e, TOL));\n", xgh3);
     printf("assert(isequalRel(xgh4,      %19.12e, TOL));\n", xgh4);
     printf("assert(isequalRel(xh2,       %19.12e, TOL));\n", xh2);
     printf("assert(isequalRel(xh3,       %19.12e, TOL));\n", xh3);
     printf("assert(isequalRel(xi2,       %19.12e, TOL));\n", xi2);
     printf("assert(isequalRel(xi3,       %19.12e, TOL));\n", xi3);
     printf("assert(isequalRel(xl2,       %19.12e, TOL));\n", xl2);
     printf("assert(isequalRel(xl3,       %19.12e, TOL));\n", xl3);
     printf("assert(isequalRel(xl4,       %19.12e, TOL));\n", xl4);
     printf("assert(isequalRel(nm,        %19.12e, TOL));\n", nm);
     printf("assert(isequalRel(z1,        %19.12e, TOL));\n", z1);
     printf("assert(isequalRel(z2,        %19.12e, TOL));\n", z2);
     printf("assert(isequalRel(z3,        %19.12e, TOL));\n", z3);
     printf("assert(isequalRel(z11,       %19.12e, TOL));\n", z11);
     printf("assert(isequalRel(z12,       %19.12e, TOL));\n", z12);
     printf("assert(isequalRel(z13,       %19.12e, TOL));\n", z13);
     printf("assert(isequalRel(z21,       %19.12e, TOL));\n", z21);
     printf("assert(isequalRel(z22,       %19.12e, TOL));\n", z22);
     printf("assert(isequalRel(z23,       %19.12e, TOL));\n", z23);
     printf("assert(isequalRel(z31,       %19.12e, TOL));\n", z31);
     printf("assert(isequalRel(z32,       %19.12e, TOL));\n", z32);
     printf("assert(isequalRel(z33,       %19.12e, TOL));\n", z33);
     printf("assert(isequalRel(zmol,      %19.12e, TOL));\n", zmol);
     printf("assert(isequalRel(zmos,      %19.12e, TOL));\n", zmos);
   endif;

   return;
