     if (help == 'y')
     //   if (dbgfile != NULL)
       {
       printf( "%84s\n",
          " ------------------after dsinit : ---------------");
        printf( "    inputs :\n");
        printf(
          "%7s%15.9f%7s%15.9f%7s%15.9f%7s%15.9f%7s%15.9f%7s%15.9f\n",
          "cosim", cosim, "emsq", emsq, "argpo", argpo,
          "s1", s1, "s2", s2, "s3", s3);
        printf(
          "%7s%15.9f%7s%15.9f%7s%15.9f%7s%15.9f%7s%15.9f%7s%15.9f\n",
          "s4", s4, "s5", s5, "sinim", sinim,
          "ss1", ss1, "ss2", ss2, "ss3", ss3);
        printf(
          "%7s%15.9f%7s%15.9f%7s%15.9f%7s%15.9f%7s%15.9f%7s%15.9f\n",
          "ss4",  ss4, "ss5", ss5, "sz1", sz1, "sz3", sz3, "sz11", sz11,
          "sz13", sz13);
        printf(
          "%7s%15.9f%7s%15.9f%7s%15.9f%7s%15.9f%7s%15.9f%7s%15.9f\n",
          "sz21",  sz21, "sz23", sz23, "sz31", sz31, "sz33", sz33, "t", t,
          "tc", tc);
        printf(
          "%7s%15.9f%7s%15.9f%7s%15.9f%7s%15.9f%7s%15.9f%7s%15.9f\n",
          "gsto",  gsto, "mo", mo, "mdot", mdot, "no", no, "nodeo", nodeo,
          "nodedt", nodedot);
        printf(
          "%7s%15.9f%7s%15.9f%7s%15.9f%7s%15.9f%7s%15.9f%7s%15.9f\n",
          "xpidot", xpidot, "z1", z1, "z3", z3, "z11", z11, "z13", z13,
          "z21", z21);
        printf( "%7s%15.9f%7s%15.9f%7s%15.9f\n",
          "z23", z23, "z31", z31, "z33", z33);
        printf( "    in / out :\n");
        printf(
          "%7s%15.9f%7s%15.9f%7s%15.9f%7s%15.9f%7s%15.9f%7s%15.9f\n",
          "em", em, "argpm", argpm, "inclm", inclm, "mm", mm, "nm", nm,
          "nodem", nodem);
        printf( "    outputs :\n");
        printf(
          "%7s%15d%7s%15.9f%7s%15.9f%7s%15.9f%7s%15.9f%7s%15.9f\n",
          "irez", irez, "atime", atime, "d2201", d2201, "d2211", d2211,
          "d3210", d3210, "d3222", d3222);
        printf(
          "%7s%15.9f%7s%15.9f%7s%15.9f%7s%15.9f%7s%15.9f%7s%15.9f\n",
          "d4410", d4410, "d4422", d4422, "d5220", d5220, "d5232", d5232,
          "d5421", d5421, "d5433", d5433);
        printf(
          "%7s%15.9f%7s%15.9f%7s%15.9f%7s%15.9f%7s%15.9f%7s%15.9f\n",
          "dedt", dedt, "didt", didt, "dmdt", dmdt, "dndt", dndt,
          "dnodt", dnodt, "domdt", domdt);
        printf(
          "%7s%15.9f%7s%15.9f%7s%15.9f%7s%15.9f%7s%15.9f%7s%15.9f\n",
          "del1", del1, "del2", del2, "del3", del3, "xfact", xfact,
          "xlamo", xlamo, "xli", xli);
        printf( "%7s%15.9f\n", "xni", xni);
    }

