%  -----------------------------------------------------------------------------
% 
%                            procedure twoline2rv
% 
%  this function converts the two line element set character string data to
%    variables and initializes the sgp4 variables. several intermediate varaibles
%    and quantities are determined. note that the result is a structure so multiple
%    satellites can be processed simultaneously without having to reinitialize. the
%    verification mode is an important option that permits quick checks of any
%    changes to the underlying technical theory. this option works using a
%    modified tle file in which the start, stop, and delta time values are
%    included at the end of the second line of data. this only works with the
%    verification mode. the catalog mode simply propagates from -1440 to 1440 min
%    from epoch and is useful when performing entire catalog runs.
% 
% Author: 
%   Jeff Beck 
%   beckja@alumni.lehigh.edu
%   1.0  aug  6, 2006 - update for paper dav
%   2.0  mar  8, 2007 - misc fixes and manual operation updates
%   2.01 may  9, 2007 - fix for correction to year of 57
%   2.02 oct  8, 2007 - fix for manual jdstart jdstop matlab formats
% original comments from Vallado C++ version:
%   author        : david vallado                  719-573-2600    1 mar 2001
% 
%   inputs        :
%   longstr1      - TLE character string 
%   longstr2      - TLE character string 
%   typerun       - character for mode of SGP4 execution 
%                   'c' = catalog mode (propagates at 20 min timesteps from
%                           one day before epoch to one day after)
%                   'v' = verification mode (propagates according to start,
%                           stop, and timestep specified in longstr2)
%                   'm' = manual mode (prompts user for start, stop, and
%                           timestep for propagation)
%   typeinput     - type of manual input           mfe 'm', epoch 'e', dayofyr 'd'
% 
%   outputs       :
%     satrec      - structure containing all the sgp4 satellite information
% 
%   coupling      :
%     getgravconst
%     days2mdhms  - conversion of days to month, day, hour, minute, second
%     jday        - convert day month year hour minute second into julian date
%     sgp4init    - initialize the sgp4 variables
% 
%   references    :
%     norad spacetrack report #3
%     vallado, crawford, hujsak, kelso  2006
%
% [satrec, startmfe, stopmfe, deltamin] = twoline2rv(whichconst, longstr1, ...
%          longstr2, typerun,typeinput)
%  ----------------------------------------------------------------------------*/

function [satrec, startmfe, stopmfe, deltamin] = twoline2rv(whichconst, longstr1, ...
          longstr2, typerun,typeinput)

  MAKE_ASSERTS = 0;
  if MAKE_ASSERTS
    %% longstr1 is mutilated later on so save it for asserts
    %%1 00005U 58002B   00179.78495062  .00000023  00000-0  28098-4 0  4753  <- BEFORE
    %%1 00005U 58002B_  00179.78495062  .00000023 .00000-0 .28098-4 0  4753  <- AFTER
    ORIG_longstr1 = longstr1;
    ORIG_longstr2 = longstr2;
  end
    %%%%%%global tumin radiusearthkm xke j2 j3 j4 j3oj2  
    % Octave wasn't getting globals like tumin, defauling to [], so get 'em here.;
    [tumin, mu, radiusearthkm, xke, j2, j3, j4, j3oj2] = getgravc(whichconst);

    deg2rad  =   pi / 180.0;         %  0.01745329251994330;  % [deg/rad]
    xpdotp   =  1440.0 / (2.0*pi);   % 229.1831180523293;  % [rev/day]/[rad/min]  

    revnum = 0; 
    elnum  = 0;
    year   = 0; 
    satrec.error = 0;

%     // set the implied decimal points since doing a formated read
%     // fixes for bad input data values (missing, ...)
    for (j = 11:16)
        if (longstr1(j) == ' ')
            longstr1(j) = '_';
        end
    end

    if (longstr1(45) ~= ' ')
        longstr1(44) = longstr1(45);
    end
    longstr1(45) = '.';
     
    if (longstr1(8) == ' ')
        longstr1(8) = 'U';
    end

    if (longstr1(10) == ' ')
        longstr1(10) = '.';
    end

    for (j = 46:50)
        if (longstr1(j) == ' ')
            longstr1(j) = '0';
        end
    end
    if (longstr1(52) == ' ')
        longstr1(52) = '0';
    end
    if (longstr1(54) ~= ' ')
        longstr1(53) = longstr1(54);
    end
    longstr1(54) = '.';

    longstr2(26) = '.';
     
    for (j = 27:33)
        if (longstr2(j) == ' ')
            longstr2(j) = '0';
        end
    end
     
    if (longstr1(63) == ' ')
        longstr1(63) = '0';
    end

    if ((length(longstr1) < 68) || (longstr1(68) == ' '))
        longstr1(68) = '0';
    end

    % parse first line
    carnumb = str2num(longstr1(1));
    satrec.satnum = str2num(longstr1(3:7));
    classification = longstr1(8);
    intldesg = longstr1(10:17);
    satrec.epochyr = str2num(longstr1(19:20));
    satrec.epochdays = str2num(longstr1(21:32));
    satrec.ndot = str2num(longstr1(34:43));
    satrec.nddot = str2num(longstr1(44:50));
    nexp = str2num(longstr1(51:52));
    satrec.bstar = str2num(longstr1(53:59));
    ibexp = str2num(longstr1(60:61));
    numb = str2num(longstr1(63));
    elnum = str2num(longstr1(65:68)); # BUG?? line is really 69 chars long
    #1 00005U 58002B   00179.78495062  .00000023  00000-0  28098-4 0  4753

    % parse second line
    if (typerun == 'v')
        cardnumb = str2num(longstr2(1));
        satrec.satnum = str2num(longstr2(3:7));
        satrec.inclo = str2num(longstr2(8:16));
        satrec.nodeo = str2num(longstr2(17:25));
        satrec.ecco = str2num(longstr2(26:33));
        satrec.argpo = str2num(longstr2(34:42));
        satrec.mo = str2num(longstr2(43:51));
        satrec.no = str2num(longstr2(52:63));
        revnum = str2num(longstr2(64:68));
        startmfe = str2num(longstr2(70:81));        
        stopmfe  = str2num(longstr2(83:96)); 
        deltamin = str2num(longstr2(97:105)); # TODO: line is 104 but trailing \r\n makes it 105+
    else
        cardnumb = str2num(longstr2(1));
        satrec.satnum = str2num(longstr2(3:7));
        satrec.inclo = str2num(longstr2(8:16));
        satrec.nodeo = str2num(longstr2(17:25));
        satrec.ecco = str2num(longstr2(26:33));
        satrec.argpo = str2num(longstr2(34:42));
        satrec.mo = str2num(longstr2(43:51));
        satrec.no = str2num(longstr2(52:63));
        revnum = str2num(longstr2(64:68));
    end

%     // ---- find no, ndot, nddot ----
    satrec.no   = satrec.no / xpdotp; %//* rad/min
    satrec.nddot= satrec.nddot * 10.0^nexp;
    satrec.bstar= satrec.bstar * 10.0^ibexp;

    %%display("SATREC"); display( satrec);

%     // ---- convert to sgp4 units ----
    satrec.a    = (satrec.no*tumin)^(-2/3);                % [er]
    satrec.ndot = satrec.ndot  / (xpdotp*1440.0);          % [rad/min^2]
    satrec.nddot= satrec.nddot / (xpdotp*1440.0*1440);     % [rad/min^3]

%     // ---- find standard orbital elements ----
    satrec.inclo = satrec.inclo  * deg2rad;
    satrec.nodeo = satrec.nodeo * deg2rad;
    satrec.argpo = satrec.argpo  * deg2rad;
    satrec.mo    = satrec.mo     *deg2rad;

    satrec.alta = satrec.a*(1.0 + satrec.ecco) - 1.0;
    satrec.altp = satrec.a*(1.0 - satrec.ecco) - 1.0;

%     // ----------------------------------------------------------------
%     // find sgp4epoch time of element set
%     // remember that sgp4 uses units of days from 0 jan 1950 (sgp4epoch)
%     // and minutes from the epoch (time)
%     // --------------------------------------------------------------

%     // ------------- temp fix for years from 1957-2056 ----------------
%     // ------ correct fix will occur when year is 4-digit in 2le ------
     if (satrec.epochyr < 57)
         year= satrec.epochyr + 2000;
       else
         year= satrec.epochyr + 1900;
     end;

     [mon,day,hr,minute,sec] = days2mdh ( year,satrec.epochdays );
     satrec.jdsatepoch = jday( year,mon,day,hr,minute,sec );

%     // input start stop times manually
     if ((typerun ~= 'v') && (typerun ~= 'c'))
         % ------------- enter start/stop ymd hms values --------------------
           if (typeinput == 'e')
               startyear = input('input start year');
               startmon  = input('input start mon');
               startday  = input('input start day');
               starthr   = input('input start hr');
               startmin  = input('input start min');
               startsec  = input('input start sec');
               jdstart = jday( startyear,startmon,startday,starthr,startmin,startsec );

               stopyear = input('input stop year');
               stopmon  = input('input stop mon');
               stopday  = input('input stop day');
               stophr   = input('input stop hr');
               stopmin  = input('input stop min');
               stopsec  = input('input stop sec');
               jdstop = jday( stopyear,stopmon,stopday,stophr,stopmin,stopsec );

               startmfe = (jdstart - satrec.jdsatepoch) * 1440.0;
               stopmfe  = (jdstop - satrec.jdsatepoch) * 1440.0;
               deltamin = input('input time step in minutes ');
           end;
           % -------- enter start/stop year and days of year values -----------
           if (typeinput == 'd')
               startyear    = input('input start year');
               startdayofyr = input('input start dayofyr');
               stopyear     = input('input stop year');
               stopdayofyr  = input('input stop dayofyr');

               [mon,day,hr,minute,sec] = days2mdh ( startyear,startdayofyr);
               jdstart = jday( startyear,mon,day,hr,minute,sec);
               [mon,day,hr,minute,sec] = days2mdh ( stopyear,stopdayofyr);
               jdstop = jday( stopyear,mon,day,hr,minute,sec);

               startmfe = (jdstart - satrec.jdsatepoch) * 1440.0;
               stopmfe  = (jdstop - satrec.jdsatepoch) * 1440.0;
               deltamin = input('input time step in minutes ');
           end;
           % ------------------ enter start/stop mfe values -------------------
           if (typeinput == 'm')
               startmfe = input('input start mfe: ');
               stopmfe  = input('input stop mfe: ');
               deltamin = input('input time step in minutes: ');
           end;
       end;
%     // perform complete catalog evaluation
     if (typerun == 'c')
         startmfe =  -1440.0;
         stopmfe  =  1440.0;
         deltamin = 20.0;
     end;
     
%     // ------------- initialize the orbit at sgp4epoch --------------
     sgp4epoch = satrec.jdsatepoch - 2433281.5; % days since 0 Jan 1950
     [satrec] = sgp4init(whichconst, satrec, satrec.bstar, satrec.ecco, sgp4epoch, ...
         satrec.argpo, satrec.inclo, satrec.mo, satrec.no, satrec.nodeo);

     if (MAKE_ASSERTS)
       %%[satrec, startmfe, stopmfe, deltamin] = twoline2rv(whichconst, longstr1, longstr2, typerun,typeinput)
       ## TODO: Why am I slicing the string here?
       ##printf("\"%s\",\n", ORIG_longstr1(1:69));
       ##printf("\"%s \",\n", ORIG_longstr2(1:104)); WHY EXTRA SPACE AT END HERE? 
       ## slice to remove the trailing newline
       ## Trim \n\r from lines
       L1 = ORIG_longstr1;
       while L1(length(L1))==10 || L1(length(L1))==13
         L1 = L1(1:length(L1)-1);
       end
       L2 = ORIG_longstr2;
       while L2(length(L2))==10 || L2(length(L2))==13
         L2 = L2(1:length(L2)-1);
       end
       printf("##JS##test('%s', function () {\n", L1);
       printf("##JS##var rets = twoline2rv(%d,\n", whichconst)

       printf("[satrec, startmfe, stopmfe, deltamin] = twoline2rv(%d,  ##NOTJS \n", whichconst)
       printf("'%s',\n", L1);   #  69 chars
       printf("'%s ',\n", L2);   # 104 chars + space to allow 105 index above
       printf("'%s', '%s');\n", typerun, typeinput);

       printf("##JS##satrec   = rets.shift(),\n");
       printf("##JS##startmfe = rets.shift(),\n");
       printf("##JS##stopmfe  = rets.shift(),\n");
       printf("##JS##deltamin = rets.shift(),\n");
       printf("##JS##TOL      = 0.000001;\n");

       printf("assert(isequal(satrec.error,             %d));\n", satrec.error);
       printf("assert(isequal(satrec.satnum,            %d));\n", satrec.satnum);
       printf("assert(isequalRel(satrec.epochyr,        %.12e, TOL));\n", satrec.epochyr);
       printf("assert(isequalRel(satrec.epochdays,      %.12e, TOL));\n", satrec.epochdays);
       printf("assert(isequalRel(satrec.ndot,           %.12e, TOL));\n", satrec.ndot);
       printf("assert(isequalRel(satrec.nddot,          %.12e, TOL));\n", satrec.nddot);
       printf("assert(isequalRel(satrec.bstar,          %.12e, TOL));\n", satrec.bstar);
       printf("assert(isequalRel(satrec.inclo,          %.12e, TOL));\n", satrec.inclo);
       printf("assert(isequalRel(satrec.nodeo,          %.12e, TOL));\n", satrec.nodeo);
       printf("assert(isequalRel(satrec.ecco,           %.12e, TOL));\n", satrec.ecco);
       printf("assert(isequalRel(satrec.argpo,          %.12e, TOL));\n", satrec.argpo);
       printf("assert(isequalRel(satrec.mo,             %.12e, TOL));\n", satrec.mo);
       printf("assert(isequalRel(satrec.no,             %.12e, TOL));\n", satrec.no);
       printf("assert(isequalRel(satrec.a,              %.12e, TOL));\n", satrec.a);
       printf("assert(isequalRel(satrec.alta,           %.12e, TOL));\n", satrec.alta);
       printf("assert(isequalRel(satrec.altp,           %.12e, TOL));\n", satrec.altp);
       printf("assert(isequalRel(satrec.jdsatepoch,     %.12e, TOL));\n", satrec.jdsatepoch);
       printf("assert(isequalRel(satrec.isimp,          %.12e, TOL));\n", satrec.isimp);
       printf("assert(isequalRel(satrec.aycof,          %.12e, TOL));\n", satrec.aycof);
       printf("assert(isequalRel(satrec.con41,          %.12e, TOL));\n", satrec.con41);
       printf("assert(isequalRel(satrec.cc1,            %.12e, TOL));\n", satrec.cc1);
       printf("assert(isequalRel(satrec.cc4,            %.12e, TOL));\n", satrec.cc4);
       printf("assert(isequalRel(satrec.cc5,            %.12e, TOL));\n", satrec.cc5);
       printf("assert(isequalRel(satrec.d2,             %.12e, TOL));\n", satrec.d2);
       printf("assert(isequalRel(satrec.d3,             %.12e, TOL));\n", satrec.d3);
       printf("assert(isequalRel(satrec.d4,             %.12e, TOL));\n", satrec.d4);
       printf("assert(isequalRel(satrec.delmo,          %.12e, TOL));\n", satrec.delmo);
       printf("assert(isequalRel(satrec.eta,            %.12e, TOL));\n", satrec.eta);
       printf("assert(isequalRel(satrec.argpdot,        %.12e, TOL));\n", satrec.argpdot);
       printf("assert(isequalRel(satrec.omgcof,         %.12e, TOL));\n", satrec.omgcof);
       printf("assert(isequalRel(satrec.sinmao,         %.12e, TOL));\n", satrec.sinmao);
       printf("assert(isequalRel(satrec.t,              %.12e, TOL));\n", satrec.t);
       printf("assert(isequalRel(satrec.t2cof,          %.12e, TOL));\n", satrec.t2cof);
       printf("assert(isequalRel(satrec.t3cof,          %.12e, TOL));\n", satrec.t3cof);
       printf("assert(isequalRel(satrec.t4cof,          %.12e, TOL));\n", satrec.t4cof);
       printf("assert(isequalRel(satrec.t5cof,          %.12e, TOL));\n", satrec.t5cof);
       printf("assert(isequalRel(satrec.x1mth2,         %.12e, TOL));\n", satrec.x1mth2);
       printf("assert(isequalRel(satrec.x7thm1,         %.12e, TOL));\n", satrec.x7thm1);
       printf("assert(isequalRel(satrec.mdot,           %.12e, TOL));\n", satrec.mdot);
       printf("assert(isequalRel(satrec.nodedot,        %.12e, TOL));\n", satrec.nodedot);
       printf("assert(isequalRel(satrec.xlcof,          %.12e, TOL));\n", satrec.xlcof);
       printf("assert(isequalRel(satrec.xmcof,          %.12e, TOL));\n", satrec.xmcof);
       printf("assert(isequalRel(satrec.nodecf,         %.12e, TOL));\n", satrec.nodecf);
       printf("assert(isequalRel(satrec.irez,           %.12e, TOL));\n", satrec.irez);
       printf("assert(isequalRel(satrec.d2201,          %.12e, TOL));\n", satrec.d2201);
       printf("assert(isequalRel(satrec.d2211,          %.12e, TOL));\n", satrec.d2211);
       printf("assert(isequalRel(satrec.d3210,          %.12e, TOL));\n", satrec.d3210);
       printf("assert(isequalRel(satrec.d3222,          %.12e, TOL));\n", satrec.d3222);
       printf("assert(isequalRel(satrec.d4410,          %.12e, TOL));\n", satrec.d4410);
       printf("assert(isequalRel(satrec.d4422,          %.12e, TOL));\n", satrec.d4422);
       printf("assert(isequalRel(satrec.d5220,          %.12e, TOL));\n", satrec.d5220);
       printf("assert(isequalRel(satrec.d5232,          %.12e, TOL));\n", satrec.d5232);
       printf("assert(isequalRel(satrec.d5421,          %.12e, TOL));\n", satrec.d5421);
       printf("assert(isequalRel(satrec.d5433,          %.12e, TOL));\n", satrec.d5433);
       printf("assert(isequalRel(satrec.dedt,           %.12e, TOL));\n", satrec.dedt);
       printf("assert(isequalRel(satrec.del1,           %.12e, TOL));\n", satrec.del1);
       printf("assert(isequalRel(satrec.del2,           %.12e, TOL));\n", satrec.del2);
       printf("assert(isequalRel(satrec.del3,           %.12e, TOL));\n", satrec.del3);
       printf("assert(isequalRel(satrec.didt,           %.12e, TOL));\n", satrec.didt);
       printf("assert(isequalRel(satrec.dmdt,           %.12e, TOL));\n", satrec.dmdt);
       printf("assert(isequalRel(satrec.dnodt,          %.12e, TOL));\n", satrec.dnodt);
       printf("assert(isequalRel(satrec.domdt,          %.12e, TOL));\n", satrec.domdt);
       printf("assert(isequalRel(satrec.e3,             %.12e, TOL));\n", satrec.e3);
       printf("assert(isequalRel(satrec.ee2,            %.12e, TOL));\n", satrec.ee2);
       printf("assert(isequalRel(satrec.peo,            %.12e, TOL));\n", satrec.peo);
       printf("assert(isequalRel(satrec.pgho,           %.12e, TOL));\n", satrec.pgho);
       printf("assert(isequalRel(satrec.pho,            %.12e, TOL));\n", satrec.pho);
       printf("assert(isequalRel(satrec.pinco,          %.12e, TOL));\n", satrec.pinco);
       printf("assert(isequalRel(satrec.plo,            %.12e, TOL));\n", satrec.plo);
       printf("assert(isequalRel(satrec.se2,            %.12e, TOL));\n", satrec.se2);
       printf("assert(isequalRel(satrec.se3,            %.12e, TOL));\n", satrec.se3);
       printf("assert(isequalRel(satrec.sgh2,           %.12e, TOL));\n", satrec.sgh2);
       printf("assert(isequalRel(satrec.sgh3,           %.12e, TOL));\n", satrec.sgh3);
       printf("assert(isequalRel(satrec.sgh4,           %.12e, TOL));\n", satrec.sgh4);
       printf("assert(isequalRel(satrec.sh2,            %.12e, TOL));\n", satrec.sh2);
       printf("assert(isequalRel(satrec.sh3,            %.12e, TOL));\n", satrec.sh3);
       printf("assert(isequalRel(satrec.si2,            %.12e, TOL));\n", satrec.si2);
       printf("assert(isequalRel(satrec.si3,            %.12e, TOL));\n", satrec.si3);
       printf("assert(isequalRel(satrec.sl2,            %.12e, TOL));\n", satrec.sl2);
       printf("assert(isequalRel(satrec.sl3,            %.12e, TOL));\n", satrec.sl3);
       printf("assert(isequalRel(satrec.sl4,            %.12e, TOL));\n", satrec.sl4);
       printf("assert(isequalRel(satrec.gsto,           %.12e, TOL));\n", satrec.gsto);
       printf("assert(isequalRel(satrec.xfact,          %.12e, TOL));\n", satrec.xfact);
       printf("assert(isequalRel(satrec.xgh2,           %.12e, TOL));\n", satrec.xgh2);
       printf("assert(isequalRel(satrec.xgh3,           %.12e, TOL));\n", satrec.xgh3);
       printf("assert(isequalRel(satrec.xgh4,           %.12e, TOL));\n", satrec.xgh4);
       printf("assert(isequalRel(satrec.xh2,            %.12e, TOL));\n", satrec.xh2);
       printf("assert(isequalRel(satrec.xh3,            %.12e, TOL));\n", satrec.xh3);
       printf("assert(isequalRel(satrec.xi2,            %.12e, TOL));\n", satrec.xi2);
       printf("assert(isequalRel(satrec.xi3,            %.12e, TOL));\n", satrec.xi3);
       printf("assert(isequalRel(satrec.xl2,            %.12e, TOL));\n", satrec.xl2);
       printf("assert(isequalRel(satrec.xl3,            %.12e, TOL));\n", satrec.xl3);
       printf("assert(isequalRel(satrec.xl4,            %.12e, TOL));\n", satrec.xl4);
       printf("assert(isequalRel(satrec.xlamo,          %.12e, TOL));\n", satrec.xlamo);
       printf("assert(isequalRel(satrec.zmol,           %.12e, TOL));\n", satrec.zmol);
       printf("assert(isequalRel(satrec.zmos,           %.12e, TOL));\n", satrec.zmos);
       printf("assert(isequalRel(satrec.atime,          %.12e, TOL));\n", satrec.atime);
       printf("assert(isequalRel(satrec.xli,            %.12e, TOL));\n", satrec.xli);
       printf("assert(isequalRel(satrec.xni,            %.12e, TOL));\n", satrec.xni);
       ##
       printf("assert(isequal(satrec.method,            \"%s\")); ##NOTJS\n", satrec.method);
       printf("assert(isequal(satrec.init,              \"%s\"));   ##NOTJS\n", satrec.init);
       printf("##JS##equal(satrec.method,               \"%s\");\n", satrec.method);
       printf("##JS##equal(satrec.init,                 \"%s\");\n", satrec.init);
       ##
       printf("assert(isequalRel(startmfe,              %.12e, TOL));\n", startmfe);
       printf("assert(isequalRel(stopmfe,               %.12e, TOL));\n", stopmfe);
       printf("assert(isequalRel(deltamin,              %.12e, TOL));\n", deltamin);
       printf("##JS##});\n");
     end;