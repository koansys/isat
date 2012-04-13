% script testmat.m
%
% This script tests the SGP4 propagator.

% Author: 
%   Jeff Beck 
%   beckja@alumni.lehigh.edu 

% Version Info: 
%   1.0 (051019) - Initial version from Vallado C++ version. 
%   1.0 (aug 14, 2006) - update for paper
%   2.0 (apr 2, 2007) - update for manual operations
%   3.0 (3 jul, 2008) - update for opsmode operation afspc or improved

   % these are set in sgp4init
   global tumin mu radiusearthkm xke j2 j3 j4 j3oj2  

   global opsmode



% // ------------------------  implementation   --------------------------

%   add operation smode for afspc (a) or improved (i)
    opsmode= input('input opsmode afspc a, improved i ','s');

%         //typerun = 'c' compare 1 year of full satcat data
%         //typerun = 'v' verification run, requires modified elm file with
%         //typerun = 'm' maunual operation- either mfe, epoch, or dayof yr
%         //              start stop and delta times
    typerun = input('input type of run c, v, m: ','s');
    if (typerun == 'm')
        typeinput = input('input mfe, epoch (YMDHMS), or dayofyr approach, m,e,d: ','s');
    else
        typeinput = 'e';
    end;
        
    whichconst = input('input constants 721, 72, 84 ');
    rad = 180.0 / pi;

% TESTING -------------------------
%    [tumin, mu, radiusearthkm, xke, j2, j3, j4, j3oj2] = getgravc(whichconst);
%    printf('tumin=%f mu=%f radiusearthkm=%f xke=%f j2=%f j3=%f j4=%f j3oj2', tumin, mu, radiusearthkm, xke, j2, j3, j4, j3oj2)

%         // ---------------- setup files for operation ------------------
%         // input 2-line element set file
    infilename = input('input elset filename: ','s');
    infilename = strtrim(infilename); # CSHENTON remove any blanks that prevent filename matching
    infile = fopen(infilename, 'r');
    if (infile == -1)
        fprintf(1,'Failed to open file: %s\n', infilename);
        return;
    end
    
    if (typerun == 'c')
        outfile = fopen('tmatall.out', 'wt');
    else
        if (typerun == 'v')
            outfile = fopen('tmatver.out', 'wt');
        else
            outfile = fopen('tmat.out', 'wt');
        end
    end

    global idebug dbgfile

%        // ----------------- test simple propagation -------------------
    while (~feof(infile))
        longstr1 = fgets(infile, 130);
        while ( (longstr1(1) == '#') && (feof(infile) == 0) )
            longstr1 = fgets(infile, 130);
        end

        if (feof(infile) == 0)
            
            longstr2 = fgets(infile, 130);

    if idebug
        catno = strtrim(longstr1(3:7));
        dbgfile = fopen(strcat('sgp4test.dbg.',catno), 'wt');
        fprintf(dbgfile,'this is the debug output\n\n' );
    end
%                // convert the char string to sgp4 elements
%                // includes initialization of sgp4
            [satrec, startmfe, stopmfe, deltamin] = twoline2rv( whichconst, ...
                       longstr1, longstr2, typerun, typeinput);
            
            fprintf(outfile, '\n %d xx\n', satrec.satnum);
            fprintf(1,' %d\n', satrec.satnum);

 %               // call the propagator to get the initial state vector value
            [satrec, ro ,vo] = sgp4 (satrec,  0.0);

%%% From Miura's paper:
%%% For each satellite, there are 7-13 columns of data (columns 8- 13
%%% are date and time data which is not calculated for catalog mode):
%%% 01. Minutes from Epoch
%%% 02. X-Position
%%% 03. Y-Position
%%% 04. Z-Position
%%% 05. X-Velocity
%%% 06. Y-Velocity
%%% 07. Z-Velocity
%%% 08. Year
%%% 09. Month
%%% 10. Day
%%% 11. Hour
%%% 12. Minute
%%% 13. Second
%%%
%%% **Note, the position vector is based in ECI coordinate frame.**


            fprintf(outfile, ' %16.8f %16.8f %16.8f %16.8f %12.9f %12.9f %12.9f\n',...
                    satrec.t,ro(1),ro(2),ro(3),vo(1),vo(2),vo(3));
            % Why don't we print ymdhms or a,ecc,*rad as we do during the time intervals below?

%            fprintf(1, ' %16.8f %16.8f %16.8f %16.8f %12.9f %12.9f %12.9f\n',...
%                 satrec.t,ro(1),ro(2),ro(3),vo(1),vo(2),vo(3));

            tsince = startmfe;

%                // check so the first value isn't written twice
            if ( abs(tsince) > 1.0e-8 )
                tsince = tsince - deltamin;
            end

%                // loop to perform the propagation
            while ((tsince < stopmfe) && (satrec.error == 0))

                tsince = tsince + deltamin;

                if(tsince > stopmfe)
                    tsince = stopmfe;
                end

                [satrec, ro, vo] = sgp4 (satrec,  tsince);
                if (satrec.error > 0)
                   fprintf(1,'# *** error: t:= %f *** code = %3i\n', tsince, satrec.error);
                end  
                
                if (satrec.error == 0)
                    if ((typerun ~= 'v') && (typerun ~= 'c'))
                        jd = satrec.jdsatepoch + tsince/1440;
                        [year,mon,day,hr,minute,sec] = invjday ( jd );

                        fprintf(outfile,...
                                %%% cshenton: I believe this output format is wrong, too many format placeholders
                                %%%' %16.8f %16.8f %16.8f %16.8f %12.9f %12.9f %12.9f %5i%3i%3i %2i:%2i:%9.6f %16.8f%16.8f%16.8%12.9f%12.9f%12.9f\n ',...
                                ' %16.8f %16.8f %16.8f %16.8f %12.9f %12.9f %12.9f %5i%3i%3i %2i:%2i:%9.6f\n',...
                                tsince,ro(1),ro(2),ro(3),vo(1),vo(2),vo(3),year,mon,day,hr,minute,sec );
                    else
                        fprintf(outfile, ' %16.8f %16.8f %16.8f %16.8f %12.9f %12.9f %12.9f',...
                            tsince,ro(1),ro(2),ro(3),vo(1),vo(2),vo(3));
%                        fprintf(1, ' %16.8f %16.8f %16.8f %16.8f %12.9f %12.9f %12.9f',...
%                            tsince,ro(1),ro(2),ro(3),vo(1),vo(2),vo(3))
                        
                        [p,a,ecc,incl,node,argp,nu,m,arglat,truelon,lonper ] = rv2coe (ro,vo,mu);

                        fprintf(outfile, ' %14.6f %8.6f %10.5f %10.5f %10.5f %10.5f %10.5f\n',...
                                a, ecc, incl*rad, node*rad, argp*rad, nu*rad, m*rad);
                    end
                end %// if satrec.error == 0

            end %// while propagating the orbit
            
            if (idebug && (dbgfile ~= -1))
                fclose(dbgfile);
            end

        end %// if not eof

    end %// while through the input file

    fclose(infile);
    fclose(outfile);
 
