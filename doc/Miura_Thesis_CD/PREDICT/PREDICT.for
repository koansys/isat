C Last change:  EBA  19 Feb 2009    3:46 am
C    NZM 01 Jun 2009 Changed SGP4_Classic to modified Vallado Code
C    NZM             Renamed PREDICT
C    NZM             Added COMMON/GLOBAL2/ directory to hold epoch information
C    ESB 28 Jan 2009 renamed to predictfeb09.for
C        corrected the ra rollover problem by copying in code from Predictoct08a.for
C         ra rates now are correct when ra goes 0-360 or 360-0
C         also corrected a problem the newoutfile dimenisions = character 19 in main pgm

c        Hardwired date = 2009

C     ESB 10 Oct  renamed predictoct08.for

C     use lf95 predictjuly08lastv3.f as the complier on the PC

C     ESB 5 Sept 2008 added output file(.txt5.mlb) containing IDs for 3 sigma rejected points

C     KJA 30 July 2008, changed the first line of the output files to be the positions file

C     KJA 24 July 2008, changed the file outputs to have the JSC number and removed the priority number

C     KJA 14 July 2008 change the first line of TLE to be A24
C            Forced YYYY to be 2008!!!!! Change back after run!!!!!

C     ESB 28 April 2008 modified the lastdoy=TLEepoch so that the last good position
C            is taken as the epoch for the TLE that is produced

C     KJA 16 April 2008 changed the code to produce predictions for 50 hours 
C            (22 hr on real day to two days midnight)
C            Changed the format lines in the TLE to force zeros and epoch to be the
C            end time not the first
C            Changed the size max of observations and elsewhere to be 3010 instead of 3000
C            Changed the SSN number to be a question....JSC # 7####
C            Changed the first line to be without a dot in the middle

c     ESB 15 April 2008 added code to create TLE for calculated orbit
c            *.txt4.mlb file is 3 line TLE, epoch is first observation time
c
c     ESB post March run changes: added code to write residuals to *.txt3.mlb file
c                changed back to fixed input year 2008 to reduce keystrokes
c                fixed number of hours to run prediction at 12
c     ESB changed prediction year back to "input" value not fixed at 2007
C     ESB 27 Feb 2008    9:34 am
c     ESB 26 Feb 2008 code added to test timearc(<30min)--> circular solution
c     ESB 28 Jan 2008 code added to Kira12 subroutine to calculate residuals
c             for each orbit solution and remove input data points that are
c              >3 sigma from the DVEC solution.
c          Also, corrected logic for test of intersecting the Earth
c              and added test in DVEC subroutine to reject solutions with ecc>0.8
c              and set seed for random_number routine
c              and changed output: ID number now is the number of points, jdet
c              corrected common block "global1/ propname, tele" in all routines
c              changed output formats and time delta in Surveynew to make exact
c                minute increments (1.0d0/60.0d0 division)
c
C                               F6.2 instead of F5.2   
C     KJA 9 Oct 2007: added in the topocentric range, the new positions of the telescope,
C                  picking between observation and prediction location 
C     KJA 5 Oct 2007: added in the rate of change for RA, DEC, and added the shadow flag,
C                              amag is F6.3 instead of F5.2
C     KJA 19 March 2007: removed need for the est input file (removed cos dec term earlier)
C     KJA 14 March 2007: added an HA rate into .txt and txt1.mlb output files
C     KJA 13 March 2007: added the survey and chase section to this prediction code
C     KJA 5 March 2007 changed position of the c9 to an average position 
C             between MODEST and the c9; and added the decimal date to the epoch
C     KJA 1 March 2006 added positions for c9 and changed the
C              cdtdata from a logical to an interger to accom more telescopes
C     ESB  27 Feb 2006   11:01 pm
C       added shadowflag=0 at start of function -- shadowflag
C     KJA 17 Feb 2006 11:06 am
C       added the ifcirc call so that it runs either with ecc, circ, or both (runs
C       twice).  

C  USE N POINTING OBSERVATIONS TO COMPUTE TLE FITTED TO A GENERALIZED
C  ELLIPTICAL ORBIT
C  Then read in positions/time for future prediction comparison
c 
       INTEGER ifcirc
       CHARACTER*20 CHARSTRING
       CHARACTER*19 CHARSTRING1
       CHARACTER*2 TELE
       CHARACTER*4 year
       CHARACTER*1 charifcirc
       CHARACTER*19 FILEIN
       CHARACTER*20 PROPNAME
       
       COMMON /global1/ PROPNAME, TELE, FILEIN
            
       PRINT*,'DO YOU WANT TO RUN THE ECC(1),CIRC(0), OR BOTH (2): '
       READ*,ifcirc

C       PRINT*,'TO WHAT YEAR ARE YOU PROPAGATING:  '
C       READ*,year
       year(1:4) = '2009'

       call system ('mkdir ecc\')
       call system ('mkdir circ\')
       
C     CIRC CASE    
       IF (ifcirc.eq.0) THEN
           CALL SURVEYCHASENEW
           CALL KIRA12(ifcirc)
           write(unit=charifcirc,FMT='(I1)')ifcirc
           CHARSTRING(1:5) = 'move '
           CHARSTRING(6:7) = tele
           CHARSTRING(8:8) = charifcirc
           CHARSTRING(9:9) = '*'
           CHARSTRING(10:13) = year
           CHARSTRING(14:20) = '* circ\'
           call system (CHARSTRING)
           call system ('copy pos* circ\')
           call system ('move *.tle* circ\')
C     ECC CASE
       ELSEIF (ifcirc.eq.1) THEN
           CALL SURVEYCHASENEW
           CALL KIRA12(ifcirc)
           write(unit=charifcirc,FMT='(I1)')ifcirc
           CHARSTRING1(1:5) = 'move '
           CHARSTRING1(6:7) = tele
           CHARSTRING1(8:8) = charifcirc
           CHARSTRING1(9:9) = '*'
           CHARSTRING1(10:13) = year
           CHARSTRING1(14:19) = '* ecc\'
           call system (CHARSTRING1)
           call system ('copy pos* ecc\')
           call system ('move *.tle* ecc\')
       ENDIF
       IF (ifcirc.eq.2) THEN
C       First go through the circular loop, then the eccentric loop
           ifcirc = 0
           CALL SURVEYCHASENEW
           CALL KIRA12(ifcirc)
           write(unit=charifcirc,FMT='(I1)')ifcirc
           CHARSTRING(1:5) = 'move '
           CHARSTRING(6:7) = tele
           CHARSTRING(8:8) = charifcirc
           CHARSTRING(9:9) = '*'
           CHARSTRING(10:13) = year
           CHARSTRING(14:20) = '* circ\'
           call system (CHARSTRING)
           call system ('copy pos* circ\')
           call system ('move *.tle* circ\')
           ifcirc = 2
       ENDIF
       IF (ifcirc.eq.2) THEN
           ifcirc = 1 
           CALL KIRA12(ifcirc)
           write(unit=charifcirc,FMT='(I1)')ifcirc
           CHARSTRING1(1:5) = 'move '
           CHARSTRING1(6:7) = tele
           CHARSTRING1(8:8) = charifcirc
           CHARSTRING1(9:9) = '*'
           CHARSTRING1(10:13) = year
           CHARSTRING1(14:19) = '* ecc\'
           call system (CHARSTRING1)
           call system ('copy pos* ecc\')
           call system ('move *.tle* ecc\')
       ENDIF  
      END
        
C******************************************************************

      REAL*8 FUNCTION DVEC(VEC)

      IMPLICIT NONE

      INTEGER JDET,NDET,NDET0
      PARAMETER (NDET0 = 3010)  ! MAX NUMBER OF OBS TO FIT

      REAL*8 VEC(1:6),R_DUM(1:3),V_DUM(1:3)

      REAL*8 POINT(1:3,1:NDET0), resid(1:NDET0)
      REAL*8 JD2K(1:NDET0),DTDAYS
      REAL*8 R_TELOBS(1:3,1:NDET0),R_TELPRED(1:3,1:NDET0)
      REAL*8 POS(1:3),VEL(1:3)
      REAL*8 ROBS(1:3),RR

      REAL*8 SOLN(1:3,1:NDET0)
      REAL*8 T,T2,T3

      REAL*8 L0_DEG,M_DEG,C_DEG,LONG_DEG,TRAN_DEG,ecc_s
      REAL*8 DIST2SUN,RADOFSUN,ANGRADSUN_DEG,OBL_DEG,SLONG
      REAL*8 RSUN(1:3),RSAT
      REAL*8 AE_DEG,AS_DEG

      REAL*8 NRG,DSQ

      REAL*8 MM,ECC,INC,AP,RAAN,MANOM
      LOGICAL INORBIT
      REAL*8 MM0,ECC0,INCDEG0,APDEG0,RAANDEG0,MADEG0
      REAL*8 MMDOTO2,MMDDOTO6
      LOGICAL UP,CIRCFLAG

      INTEGER K

      REAL*8 RTD,DTR, SPA

      COMMON /PTNG/ JD2K,POINT,R_TELOBS,R_TELPRED,NDET,CIRCFLAG
      COMMON /CONST/ RTD,DTR, SPA
      COMMON/residuals/resid

      DO K = 1,3
        R_DUM(K) = VEC(K)
        V_DUM(K) = VEC(K + 3)
      END DO

      NRG = 0.5D0 * (V_DUM(1)**2 + V_DUM(2)**2 + V_DUM(3)**2)
     &    - 398600.8D0 / SQRT(R_DUM(1)**2 + R_DUM(2)**2 + R_DUM(3)**2)

      IF (NRG .GE. 0.0D0) THEN  ! PENALIZE UNBOUND ORBITS
        DVEC = 1.0D6 + NRG

        RETURN
      ENDIF

      CALL ORBELMS(R_DUM,V_DUM,MM,ECC,INC,AP,RAAN,MANOM,INORBIT)

      DSQ = 0.0D0
     
      DO JDET = 1,NDET

        MM0 = MM
        ECC0 = ECC
        INCDEG0 = INC
        APDEG0 = AP
        RAANDEG0 = RAAN
        MADEG0 = MANOM
        MMDOTO2 = 0.0D0
        MMDDOTO6 = 0.0D0
        UP = .TRUE.

        DTDAYS = JD2K(JDET) - JD2K(NDET)  !changed from predictjuly24 v1 code
        
c         PRINT*,MM0,ECC0,INCDEG0,APDEG0,RAANDEG0,MADEG0
       print*, 'call SGP1'
        CALL SGP_CLASSIC(DTDAYS,MM0,ECC0,
     &                   INCDEG0,APDEG0,RAANDEG0,MADEG0,
     &                   MMDOTO2,MMDDOTO6,POS,VEL,UP)

        ROBS(1) = POS(1) - R_TELOBS(1,JDET)
        ROBS(2) = POS(2) - R_TELOBS(2,JDET)
        ROBS(3) = POS(3) - R_TELOBS(3,JDET)

        RR = SQRT(ROBS(1)**2 + ROBS(2)**2 + ROBS(3)**2)

        ROBS(1) = ROBS(1) / RR
        ROBS(2) = ROBS(2) / RR
        ROBS(3) = ROBS(3) / RR
c
c modified to calculate the resid separately
c
c       PRINT*,jdet

       resid(jdet) =
     &      +  ( (POINT(1,JDET) - ROBS(1))**2
     &                + (POINT(2,JDET) - ROBS(2))**2
     &                + (POINT(3,JDET) - ROBS(3))**2 )
        dsq=dsq+resid(jdet)


CC  Location of Shadow
      call shadowchk(POS,DSQ,JDET)

      resid(jdet)=SQRT(resid(jdet))* 206264.806247D0

      END DO

c     DVEC and resid in arcsec
      DVEC = SQRT(DSQ/DBLE(ndet))* 206264.806247D0


C  PENALIZE ECCENTRIC ORBITS


      IF (CIRCFLAG) THEN
        DVEC = DVEC +  ECC*1.d6
      ENDIF
c     ecc>0.8 test added 1/26/08
      IF(ecc.ge.0.8) then
       DVEC = dvec+ecc*1.d6
       ENDIF


      RETURN
      END

!shadowchk checks to see if the original orbit is in shadow at the time of observation
!if it is, the residual is weighted greatly to signify a bad orbit estimate
!6/27/05 MFH

      subroutine shadowchk(POS,DSQ,JDET)
c     Removed reference to ecc in call and renamed ecc to ecc_s - esb

      implicit none
      INTEGER NDET,NDET0
      PARAMETER (NDET0 = 3010)  ! MAX NUMBER OF OBS TO FIT

      REAL*8 POS(1:3)
      REAL*8 DSQ
      REAL*8 ECC
      INTEGER JDET

      REAL*8 VEC(1:6),R_DUM(1:3),V_DUM(1:3)

      REAL*8 POINT(1:3,1:NDET0)
      REAL*8 JD2K(1:NDET0),DTDAYS
      REAL*8 R_TELOBS(1:3,1:NDET0),R_TELPRED(1:3,1:NDET0)


      REAL*8 VEL(1:3)
      REAL*8 ROBS(1:3),RR

      REAL*8 SOLN(1:3,1:NDET0)
      REAL*8 T,T2,T3
      REAL*8 L0_DEG,M_DEG,C_DEG,LONG_DEG,TRAN_DEG,ecc_s
      REAL*8 DIST2SUN,RADOFSUN,ANGRADSUN_DEG,OBL_DEG,SLONG
      REAL*8 RSUN(1:3),RSAT
      REAL*8 AE_DEG,AS_DEG

      REAL*8 NRG

      REAL*8 MM,INC,AP,RAAN,MANOM
      LOGICAL INORBIT
      REAL*8 MM0,ECC0,INCDEG0,APDEG0,RAANDEG0,MADEG0
      REAL*8 MMDOTO2,MMDDOTO6
      LOGICAL UP,CIRCFLAG

      INTEGER K

      REAL*8 RTD,DTR, SPA

      COMMON /PTNG/ JD2K,POINT,R_TELOBS,R_TELPRED,NDET,CIRCFLAG
      COMMON /CONST/ RTD,DTR, SPA


        T = JD2K(JDET) / 36525.0D0
        T2 = T * T
        T3 = T * T2
c ecc_s not ECC
        ECC_s = 0.016708634D0 - 4.2037D-5 * T - 1.267D-7 * T2

        IF (T .LT. 0.0D0) THEN
          L0_DEG = -MOD(-36000.76983D0 * T,360.0D0)
          M_DEG = -MOD(-35999.05029D0 * T,360.0D0)
        ELSE
          L0_DEG = MOD(36000.76983D0 * T,360.0D0)
          M_DEG = MOD(35999.05029D0 * T,360.0D0)
        ENDIF

        L0_DEG = 280.46646D0
     &         + L0_DEG
     &         + 0.0003032D0 * T2
        M_DEG = 357.52911D0
     &        + M_DEG
     &        - 0.0001537D0 * T2

!!!!!!!!!!!!
        C_DEG = (1.914602D0 - 4.817D-3 * T - 1.4D-5 * T2)
     &          * SIN(DTR * M_DEG)
     &        + (0.019993D0 - 1.01D-4 * T) * SIN(DTR * 2.0D0 * M_DEG)
     &        + (2.89D-4) * SIN(DTR * 3.0D0 * M_DEG)


        LONG_DEG = L0_DEG + C_DEG
        TRAN_DEG = M_DEG + C_DEG
c ecc_s not ECC
        DIST2SUN = 1.000001018D0 * 1.4959965D8  ! KM
     &           * (1.0D0 - ECC_s**2)
     &           / (1.0D0 + ECC_s * COS(DTR * TRAN_DEG))
        RADOFSUN = 695950.0D0  ! KM
        ANGRADSUN_DEG = (RADOFSUN / DIST2SUN) * RTD


        OBL_DEG = 23.4392911111D0
     &          - 1.300417D-2 * T
     &          - 1.63D-7 * T2
     &          + 5.0361D-7 * T3

        SLONG = SIN(DTR * LONG_DEG)

        RSUN(1) = COS(DTR * LONG_DEG)
        RSUN(2) = SLONG * COS(DTR * OBL_DEG)
        RSUN(3) = SLONG * SIN(DTR * OBL_DEG)
        RR = SQRT(RSUN(1)**2 + RSUN(2)**2 + RSUN(3)**2)
        RSUN(1) = RSUN(1) / RR
        RSUN(2) = RSUN(2) / RR
        RSUN(3) = RSUN(3) / RR
   
        !PRINT*,POS(1),POS(2),POS(3)
        RSAT = SQRT(POS(1)**2 + POS(2)**2 + POS(3)**2)
        !PRINT*,RSAT
        
        AE_DEG = RTD * ASIN(6386.0D0 / RSAT)  ! 6371 + 15 km atmospere
        AS_DEG = RTD * ACOS(-(POS(1) * RSUN(1)
     &                      + POS(2) * RSUN(2)
     &                      + POS(3) * RSUN(3)) / RSAT)
          

        IF ((AS_DEG + ANGRADSUN_DEG) .LT. AE_DEG) THEN ! OOPS, IN SHADOW
          DSQ= DSQ + 1.0D6
        ENDIF


      return
      end subroutine

!shadowflag checks the inputted orbit for illumination.
!outputs = "Illuminated" or "In Shadow". This is intended for
!the predicted orbits, so the ordered observations are illuminated.
!6/27/05 MFH

      INTEGER function shadowflag(POS,T)
c     Removed reference and renamed ecc to ecc_s - esb
      implicit none
      INTEGER NDET,NDET0,shade
      PARAMETER (NDET0 = 3010)  ! MAX NUMBER OF OBS TO FIT

      REAL*8 POS(1:3)
      REAL*8 DSQ

      INTEGER JDET

      REAL*8 VEC(1:6),R_DUM(1:3),V_DUM(1:3)

      REAL*8 POINT(1:3,1:NDET0)
      REAL*8 JD2K(1:NDET0),DTDAYS
      REAL*8 R_TELOBS(1:3,1:NDET0),R_TELPRED(1:3,1:NDET0)


      REAL*8 VEL(1:3)
      REAL*8 ROBS(1:3),RR

      REAL*8 SOLN(1:3,1:NDET0)
      REAL*8 T,T2,T3
      REAL*8 L0_DEG,M_DEG,C_DEG,LONG_DEG,TRAN_DEG,ecc_s
      REAL*8 DIST2SUN,RADOFSUN,ANGRADSUN_DEG,OBL_DEG,SLONG
      REAL*8 RSUN(1:3),RSAT
      REAL*8 AE_DEG,AS_DEG, SPA

      REAL*8 NRG

      REAL*8 MM,INC,AP,RAAN,MANOM
      LOGICAL INORBIT
      REAL*8 MM0,ECC0,INCDEG0,APDEG0,RAANDEG0,MADEG0
      REAL*8 MMDOTO2,MMDDOTO6
      LOGICAL UP,CIRCFLAG

      INTEGER K

      REAL*8 RTD,DTR

      COMMON /PTNG/ JD2K,POINT,R_TELOBS,R_TELPRED,NDET,CIRCFLAG
      COMMON /CONST/ RTD,DTR, SPA

c
c esb added 2/28/06
        shadowflag=0
c
c
        T2 = T * T
        T3 = T * T2
c ecc_s not ECC
        ECC_s = 0.016708634D0 - 4.2037D-5 * T - 1.267D-7 * T2

        IF (T .LT. 0.0D0) THEN
          L0_DEG = -MOD(-36000.76983D0 * T,360.0D0)
          M_DEG = -MOD(-35999.05029D0 * T,360.0D0)
        ELSE
          L0_DEG = MOD(36000.76983D0 * T,360.0D0)
          M_DEG = MOD(35999.05029D0 * T,360.0D0)
        ENDIF

        L0_DEG = 280.46646D0
     &         + L0_DEG
     &         + 0.0003032D0 * T2
        M_DEG = 357.52911D0
     &        + M_DEG
     &        - 0.0001537D0 * T2

!!!!!!!!!!!!
        C_DEG = (1.914602D0 - 4.817D-3 * T - 1.4D-5 * T2)
     &          * SIN(DTR * M_DEG)
     &        + (0.019993D0 - 1.01D-4 * T) * SIN(DTR * 2.0D0 * M_DEG)
     &        + (2.89D-4) * SIN(DTR * 3.0D0 * M_DEG)


        LONG_DEG = L0_DEG + C_DEG
        TRAN_DEG = M_DEG + C_DEG
c ecc_s not ECC
        DIST2SUN = 1.000001018D0 * 1.4959965D8  ! KM
     &           * (1.0D0 - ECC_s**2)
     &           / (1.0D0 + ECC_s * COS(DTR * TRAN_DEG))
        RADOFSUN = 695950.0D0  ! KM
        ANGRADSUN_DEG = (RADOFSUN / DIST2SUN) * RTD


        OBL_DEG = 23.4392911111D0
     &          - 1.300417D-2 * T
     &          - 1.63D-7 * T2
     &          + 5.0361D-7 * T3

        SLONG = SIN(DTR * LONG_DEG)

!       write(52,'(4(ES20.10,1x))')LONG_DEG,C_DEG,M_DEG,L0_DEG

        RSUN(1) = COS(DTR * LONG_DEG)
        RSUN(2) = SLONG * COS(DTR * OBL_DEG)
        RSUN(3) = SLONG * SIN(DTR * OBL_DEG)
        RR = SQRT(RSUN(1)**2 + RSUN(2)**2 + RSUN(3)**2)
        RSUN(1) = RSUN(1) / RR
        RSUN(2) = RSUN(2) / RR
        RSUN(3) = RSUN(3) / RR

        RSAT = SQRT(POS(1)**2 + POS(2)**2 + POS(3)**2)
!     write(53,'(5(ES20.10,1x))')POS(1),POS(2),POS(3),RSAT,RSAT-6386d0

        AE_DEG = RTD * ASIN(6386.0D0 / RSAT)  ! 6371 + 15 km atmospere
        AS_DEG = RTD * ACOS(-(POS(1) * RSUN(1)
     &                      + POS(2) * RSUN(2)
     &                      + POS(3) * RSUN(3)) / RSAT)
       SPA = AS_DEG

      IF ((AS_DEG + ANGRADSUN_DEG) .LT. AE_DEG)shadowflag=1 !in Shadow

      return
      end function


C***********************************************************************
C  This Julian Day program is only good for the modern era.
C
C     YYYY : 4 digit integer year (i.e., 1990)
C     DOY : double precision day of year
C
C  The Julian Day is given relative to 2000.0 = JD 2451545.0
C
C     Mark Matney, Ph.D.
C     Lockheed Martin E&S
C     June 14, 1995
C***********************************************************************

      REAL*8 FUNCTION GETJD2K(YYYY,DOY)

      IMPLICIT NONE

      INTEGER YYYY
      REAL*8 DOY
      REAL*8 Y,M,D,A,B,JD0

      Y = DBLE(YYYY) - 1.0D0
      M = 13.0D0
      D = 1.0D0

      A = DINT(Y / 100.0D0)
      B = 2.0D0 - A + DINT(A / 4.0D0)

      JD0 = DINT(365.25D0 * Y) + DINT(30.6001D0 * (M + 1))
     &    + B + D + 1720994.5D0 

      JD0 = JD0 - 2451545.0D0  ! Relative to 2000.0

      GETJD2K = JD0 - 1.0D0 + DOY

      RETURN
      END


C********************************ORBELMS.FOR****************************
C  This subroutine takes the initial radius and velocity vectors 
C  in equatorial coordinates (Earth-centered inertial) and 
C  computes the orbital parameters.  Method is taken from 
C  "Fundamentals of Astrodynamics", ch. 2, by Bate, Mueller, 
C  and White.  All values in double precision.
C      
C     R(1:3) : Radius vectors (km)
C     V(1:3) : Velocity vectors (km / sec)
C
C  Z points toward the North Celestial Pole
C  X points toward the Vernal Equinox
C
C     MM : Mean motion (revs per day)
C     ECC : Eccentricity
C     INC : Inclination (degrees)
C     AP : Argument of perigee (degrees)
C     RAAN : Right ascension of ascending node (degrees)
C     MANOM : True anomaly (degrees)
C     BOUND : Logical - is orbit bound?
C
C     Mark Matney, Ph.D.
C     Lockheed-Martin ESC
C     7-21-97, updated 1-12-98
C
C***********************************************************************
      
      SUBROUTINE ORBELMS(R,V,MM,ECC,INC,AP,RAAN,MANOM,INORBIT)  
          
      IMPLICIT NONE

      REAL*8 R(1:3),V(1:3)
      REAL*8 RR,VV2,RDOTV,NRG
      REAL*8 MM,ECC,INC,AP,RAAN,TRAN,MANOM
      REAL*8 A,PERALT

      LOGICAL INORBIT

      REAL*8 H(1:3),N(1:3),E(1:3),F(1:3)
      REAL*8 HH,HH2,NN,FF,U

      REAL*8 XXX

      REAL*8 CTRAN,STRAN,SINE,COSE,EANOM

      REAL*8 DOTPROD,SETRNG
      REAL*8 RTMU0,RTMU,MU,TWOPI,R2D,D2R

      RTMU0 = 54548501.6D0  ! km^3/2 / day 
      RTMU = RTMU0 / 86400.0D0  ! day^-1 -> sec^-1
      MU = RTMU**2  ! km^3 / sec^2

      TWOPI = 2.0D0 * DACOS(-1.0D0)
      R2D = 360.0D0 / TWOPI
      D2R = TWOPI / 360.0D0

      VV2 = DOTPROD(V,V)
      RR = DSQRT(DOTPROD(R,R))
      RDOTV = DOTPROD(R,V)

      CALL XPROD(R,V,H)
      HH2 = DOTPROD(H,H)
      HH = DSQRT(HH2)

      INORBIT = (HH .GT. 0.0D0)   ! DEGENERATE ORBIT
      IF (.NOT. INORBIT) RETURN

      NRG = 0.5D0 * VV2 - MU / RR
      INORBIT = (NRG .LT. 0.0D0)  ! BOUND ORBIT
      IF (.NOT. INORBIT) RETURN

      XXX = H(3) / HH
      IF (DABS(XXX) .GT. 1.0D0)  XXX = XXX / DABS(XXX)      
      INC = ACOS(XXX) * R2D

      N(1) = -H(2)
      N(2) = H(1)
      N(3) = 0.0D0
      NN = DSQRT(DOTPROD(N,N))
      IF (NN .EQ. 0.0D0) THEN
        N(1) = 1.0D0
        N(2) = 0.0D0
        N(3) = 0.0D0
        NN = 1.0D0
      ELSE
        N(1) = N(1) / NN
        N(2) = N(2) / NN
        N(3) = N(3) / NN
      ENDIF

      CALL XPROD(H,N,F)
      FF = DSQRT(DOTPROD(F,F))
      F(1) = F(1) / FF
      F(2) = F(2) / FF
      F(3) = F(3) / FF

      XXX = VV2 - (MU / RR)
      E(1) = ( XXX * R(1) - RDOTV * V(1) ) / MU
      E(2) = ( XXX * R(2) - RDOTV * V(2) ) / MU
      E(3) = ( XXX * R(3) - RDOTV * V(3) ) / MU
      ECC = DSQRT(DOTPROD(E,E))

      INORBIT = (ECC .LT. 1.0D0) 
      IF (.NOT. INORBIT) RETURN

      IF (ECC .EQ. 0.0D0) THEN
        E(1) = R(1) / RR
        E(2) = R(2) / RR
        E(3) = R(3) / RR
      ELSE
        E(1) = E(1) / ECC
        E(2) = E(2) / ECC
        E(3) = E(3) / ECC
      ENDIF

      A = HH2 / (MU * (1.0D0 - ECC**2))
      PERALT = A * (1.0D0 - ECC) - 6378.0D0
      INORBIT = (PERALT .GT. 50.0D0) 
C      IF (.NOT. INORBIT) RETURN

      MM = RTMU * 86400.0D0 * (A**(-1.5)) / TWOPI

      RAAN = ATAN2(N(2),N(1)) * R2D

      AP = ATAN2(DOTPROD(E,F),DOTPROD(E,N)) * R2D

      U = ATAN2(DOTPROD(R,F),DOTPROD(R,N)) * R2D

      TRAN = U - AP

      RAAN = SETRNG(RAAN,360.0D0)
      AP = SETRNG(AP,360.0D0)
      TRAN = SETRNG(TRAN,360.0D0)

      CTRAN = COS(TRAN * D2R)
      STRAN = SIN(TRAN * D2R)

      XXX = 1.0D0 / (1.0D0 + ECC * CTRAN)
      COSE = (ECC + CTRAN) * XXX
      SINE = DSQRT(1.0D0 - ECC**2) * STRAN * XXX

      EANOM = ATAN2(SINE,COSE) * R2D
      EANOM = SETRNG(EANOM,360.0D0)

      MANOM = EANOM - R2D * ECC * SINE
      MANOM = SETRNG(MANOM,360.0D0)

      RETURN
      END

C*****************************************************************
C
C     Compute the cross-product  C = A x B
C
C*****************************************************************

      SUBROUTINE XPROD(A,B,C)

      IMPLICIT NONE

      REAL*8 A(1:3),B(1:3),C(1:3)

      C(1) = A(2) * B(3) - A(3) * B(2)
      C(2) = A(3) * B(1) - A(1) * B(3)
      C(3) = A(1) * B(2) - A(2) * B(1)

      RETURN
      END
C*****************************************************************
C
C     Compute the dot-product  A * B
C
C*****************************************************************

      REAL*8 FUNCTION DOTPROD(A,B)

      IMPLICIT NONE

      REAL*8 A(1:3),B(1:3)

      DOTPROD = A(1) * B(1) 
     &        + A(2) * B(2)
     &        + A(3) * B(3)

      RETURN
      END

C*****************************************************************
C     AMOEBA SUBROUTINE
C******************************************************************
      SUBROUTINE AMOEBA(P,Y,FTOL,ITER)
      IMPLICIT REAL*8 (A-H,O-Z)
      PARAMETER (NMAX=7,ALPHA=1.0,BETA=0.5,GAMMA=2.0,ITMAX=500)
      DIMENSION P(7,6),Y(7),PR(NMAX),PRR(NMAX),PBAR(NMAX)
      NDIM = 6
      MPTS=NDIM+1
      ITER=0
1     ILO=1
      IF(Y(1).GT.Y(2))THEN
        IHI=1
        INHI=2
      ELSE
        IHI=2
        INHI=1
      ENDIF
      DO 11 I=1,MPTS
        IF(Y(I).LT.Y(ILO)) THEN
          ILO=I
C          PRINT*,Y(ILO)
        ENDIF
        IF(Y(I).GT.Y(IHI))THEN
          INHI=IHI
          IHI=I
        ELSE IF(Y(I).GT.Y(INHI))THEN
          IF(I.NE.IHI) INHI=I
        ENDIF
11    CONTINUE
      RTOL=2.*ABS(Y(IHI)-Y(ILO))/(ABS(Y(IHI))+ABS(Y(ILO)))
      IF(RTOL.LT.FTOL)RETURN
      IF(ITER.GE.ITMAX)RETURN !PAUSE 'Amoeba exceeding maximum iterations.'
      ITER=ITER+1
      DO 12 J=1,NDIM
        PBAR(J)=0.
12    CONTINUE
      DO 14 I=1,MPTS
        IF(I.NE.IHI)THEN
          DO 13 J=1,NDIM
            PBAR(J)=PBAR(J)+P(I,J)
13        CONTINUE
        ENDIF
14    CONTINUE
      DO 15 J=1,NDIM
        PBAR(J)=PBAR(J)/NDIM
        PR(J)=(1.+ALPHA)*PBAR(J)-ALPHA*P(IHI,J)
15    CONTINUE
      YPR=DVEC(PR)
      IF(YPR.LE.Y(ILO))THEN
        DO 16 J=1,NDIM
          PRR(J)=GAMMA*PR(J)+(1.-GAMMA)*PBAR(J)
16      CONTINUE
        YPRR=DVEC(PRR)
        IF(YPRR.LT.Y(ILO))THEN
          DO 17 J=1,NDIM
            P(IHI,J)=PRR(J)
17        CONTINUE
          Y(IHI)=YPRR
        ELSE
          DO 18 J=1,NDIM
            P(IHI,J)=PR(J)
18        CONTINUE
          Y(IHI)=YPR
        ENDIF
      ELSE IF(YPR.GE.Y(INHI))THEN
        IF(YPR.LT.Y(IHI))THEN
          DO 19 J=1,NDIM
            P(IHI,J)=PR(J)
19        CONTINUE
          Y(IHI)=YPR
        ENDIF
        DO 21 J=1,NDIM
          PRR(J)=BETA*P(IHI,J)+(1.-BETA)*PBAR(J)
21      CONTINUE
        YPRR=DVEC(PRR)
        IF(YPRR.LT.Y(IHI))THEN
          DO 22 J=1,NDIM
            P(IHI,J)=PRR(J)
22        CONTINUE
          Y(IHI)=YPRR
        ELSE
          DO 24 I=1,MPTS
            IF(I.NE.ILO)THEN
              DO 23 J=1,NDIM
                PR(J)=0.5*(P(I,J)+P(ILO,J))
                P(I,J)=PR(J)
23            CONTINUE
              Y(I)=DVEC(PR)
            ENDIF
24        CONTINUE
        ENDIF
      ELSE
        DO 25 J=1,NDIM
          P(IHI,J)=PR(J)
25      CONTINUE
        Y(IHI)=YPR
      ENDIF
      GO TO 1
      END


*************************************************************************
*                Subroutine SGP_Classic
*
* code modified by Nicholas Miura
* Cal Poly - San Luis Obispo
* nicholas.miura@gmail.com
* 
* subroutine should interface with existing NASA predictor code
*
* Inputs
*  DTDAYS = Time since final observation in Days
*  MMO = Mean motion at final observation
*  ECCO = Eccentricity at final observation
*  INCDEGO = Inclination at final observation
*  APDEGO = Argument of Perigee (Degrees)at observation
*  RAANDEGO = Right Ascension of Ascending Node (Degrees)at observation
*  MADEGO = Mean Anomoly (Degrees) at observation
*  MMDOTO2 = First time derivitive
*  MMDDOTO6 = Second time derivitive
*
* Outputs
*  POS = Position of Spacecraft
*  VEL = Velocity of Spacecraft
*  UP = Is spacecraft still in orbit?
*
* Called Subroutines
*  getgravconst


      Subroutine SGP_Classic(DTDAYS,MM0,ECC0,
     &  INCDEG0,APDEG0,RAANDEG0,MADEG0,
     &  MMDOTO2,MMDDOTO6,POS,VEL,UP)
     
        IMPLICIT NONE

        
       
c these declerations are copied from NASA Predictor code
c and define the input and output of the subroutine 
       
		REAL*8 DTDAYS,MM0,ECC0
        REAL*8 INCDEG0,APDEG0,RAANDEG0,MADEG0
        REAL*8 MMDOTO2,MMDDOTO6,EHour, ESec
        Real*8 JDSatEpoch2
        REAL*8 POS(1:3),VEL(1:3)
      	LOGICAL UP
        DOUBLE PRECISION UT
       
c these declerations are used in the code

		Character typerun, typeinput
        Character*58 Longstring
        Character*10 Date
 
        Integer Code, NumSats, error, whichconst        
        Real*8 ro(3),vo(3)

* ----------------------------  Locals  -------------------------------
        REAL*8 J2,TwoPi,Rad,mu, RadiusEarthKm, xke,
     &         de2ra, xpdotp, T, sec, JD, pi, j3, j4, j3oj2, tumin
        INTEGER EYr, EDay, EMon, EHr, EMin

        INCLUDE 'SGP4.CMN'
        COMMON /global2/ Date, UT


* ------------------------  Implementation   --------------------------

		Opsmode = 'i'
        typerun = 'm'
        typeinput = 'M'

		whichconst = 72

        pi            =    4.0D0 * datan(1.0D0)  ! 3.14159265358979D0
        TwoPi         =    2.0D0 * pi    ! 6.28318530717959D0
        Rad           =   180.0D0 / pi   ! 57.29577951308230D0
        DE2RA         =    pi / 180.0D0  ! 0.01745329251994330D0
        xpdotp        =  1440.0 / (2.0 *pi)  ! 229.1831180523293D0

c sgp4fix identify constants and allow alternate values
        CALL getgravconst( whichconst, tumin, mu, radiusearthkm, xke,  
     &       j2, j3, j4, j3oj2 )


c Read Date and Time
        
	   READ (Date(1:4),FMT='(I4)') EYr
       READ (Date(6:7),FMT='(I2)') EMon
       READ (Date(9:10),FMT='(I2)') EDay
       
       CALL HMS (UT, EHr, EMin, ESec)
       CALL JDAY1 (EYr, EMon, EDay, EHr ,EMin, ESec, JDSatEpoch2)

  
c Open a temporary file containing initialized orbital data
c Called by other subroutines

c        OPEN(115,FILE = 'Sgp4Rec.bak', ACCESS = 'DIRECT',
c     &          FORM = 'UNFORMATTED', RECL = 1100, STATUS = 'REPLACE' )

        NumSats = 1

c  bring orbital elements to the new two line element converter - trick the system
        CALL TwoLine2RVSGP4 ( NumSats,typerun,typeinput,whichconst, 
     &                        Code, DTDAYS,MM0,ECC0,
     &                        INCDEG0,APDEG0,RAANDEG0,MADEG0,
     &                        MMDOTO2,MMDDOTO6, JDSatEpoch2, Error )
     
     

c  Call the SGP4 propagator based on Time in minutes

       T = DTDAYS*1440
       CALL SGP4 ( whichconst, T, Ro, Vo, Error )

       If (Error .eq. 1)Then
         Up = .FALSE.
       ENDIF
         
        
c the next WRITE line displays the result on the screen
c comment this out if you don't want to test the results
        
c       WRITE( *,800 ) T, ro(1),ro(2),ro(3),vo(1),vo(2),vo(3)

c  800  FORMAT(F17.8,3F17.8,3(1X,F14.9))


      Pos = Ro
      Vel = Vo

c      CLOSE(115)

c      STOP
      END

* -----------------------------------------------------------------------------
*
*                           function getgravconst
*
*  this function gets constants for the propagator. note that mu is identified to
*    facilitiate comparisons with newer models.
*
*  author        : david vallado                  719-573-2600   21 jul 2006
*
*  inputs        :
*    whichconst  - which set of constants to use  721, 72, 84
*
*  outputs       :
*    tumin       - minutes in one time unit
*    mu          - earth gravitational parameter
*    radiusearthkm - radius of the earth in km
*    xke         - reciprocal of tumin
*    j2, j3, j4  - un-normalized zonal harmonic values
*    j3oj2       - j3 divided by j2
*
*    norad spacetrack report #3
*    vallado, crawford, hujsak, kelso  2006
*  ---------------------------------------------------------------------------- 

       SUBROUTINE getgravconst ( whichconst, tumin, mu, 
     &            radiusearthkm, xke, j2, j3, j4, j3oj2 )
       IMPLICIT NONE     
       REAL*8 radiusearthkm, xke, j2, j3, j4, j3oj2, mu, tumin
       INTEGER whichconst

       if (whichconst.eq.721) THEN
           ! -- wgs-72 low precision str#3 constants --
           radiusearthkm = 6378.135D0     ! km
           xke    = 0.0743669161D0
           mu     = 398600.79964D0            ! in km3 / s2
           tumin  = 1.0D0 / xke
           j2     =   0.001082616D0
           j3     =  -0.00000253881D0
           j4     =  -0.00000165597D0
           j3oj2  =  j3 / j2
         ENDIF
       if (whichconst.eq.72) THEN
           ! ------------ wgs-72 constants ------------
           mu     = 398600.8D0            ! in km3 / s2
           radiusearthkm = 6378.135D0     ! km
           xke    = 60.0D0 / dsqrt(radiusearthkm**3/mu)
           tumin  = 1.0D0 / xke
           j2     =   0.001082616D0
           j3     =  -0.00000253881D0
           j4     =  -0.00000165597D0
           j3oj2  =  j3 / j2
         ENDIF  
       if (whichconst.eq.84) THEN
           ! ------------ wgs-84 constants ------------
           mu     = 398600.5D0            ! in km3 / s2
           radiusearthkm = 6378.137D0     ! km
           xke    = 60.0D0 / dsqrt(radiusearthkm**3/mu)
           tumin  = 1.0D0 / xke
           j2     =   0.00108262998905D0
           j3     =  -0.00000253215306D0
           j4     =  -0.00000161098761D0
           j3oj2  =  j3 / j2
         ENDIF

       RETURN
       END  !  SUBROUTINE getgravconst

* -----------------------------------------------------------------------------
*
*                           SUBROUTINE TWOLINE2RVSGP4
*
*  this function converts the two line element set character string data to
*    variables and initializes the sgp4 variables. several intermediate varaibles
*    and quantities are determined. note that the result is a "structure" so multiple
*    satellites can be processed simultaneously without having to reinitialize. the
*    verification mode is an important option that permits quick checks of any
*    changes to the underlying technical theory. this option works using a
*    modified tle file in which the start, stop, and delta time values are
*    included at the end of the second line of data. this only works with the
*    verification mode. the catalog mode simply propagates from -1440 to 1440 min
*    from epoch and is useful when performing entire catalog runs.
*
*  author        : david vallado                  719-573-2600    1 mar 2001
*
*  inputs        :
*    Numsats     - Number of satellites processed. It also becomes the record
*                  number for each satellite
*    typerun     - type of run                    verification 'V', catalog 'C', 
*                                                 manual 'M'
*    typeinput   - type of manual input           mfe 'M', epoch 'E', dayofyr 'D'
*    whichconst  - which set of constants to use  72, 84
*    opsmode   - type of manual input           afspc 'a', imporved 'i'
*
*  outputs       :
*    Code        - EOF indicator. Code = 999 when EOF reached
*    startmfe    - starttime of simulation,       min from epoch
*    stopmfe     - stoptime of simulation,        min from epoch
*    deltamin    - time step                      min
*
*  coupling      :
*    days2mdhms  - conversion of days to month, day, hour, minute, second
*    jday        - convert day month year hour minute second into julian date
*    sgp4init    - initialize the sgp4 variables
*
*  Files         :
*    Unit 10     - test.elm        input 2-line element set file
*    Unit 11     - test.bak        output file
*    Unit 15     - sgp4rec.bak     temporary file of record for 2 line element sets
*
*  references    :
*    norad spacetrack report #3
*    vallado, crawford, hujsak, kelso  2006
*------------------------------------------------------------------------------

      SUBROUTINE TwoLine2RVSGP4 ( NumSats, Typerun, typeinput, 
     &                            whichconst, Code, DTDAYS,MM0,ECC0,
     &                            INCDEG0,APDEG0,RAANDEG0,MADEG0,
     &                            MMDOTO2,MMDDOTO6, JDSatEpoch1, Error )
     
        IMPLICIT NONE
        Character Typerun, typeinput
        Integer Code, NumSats, whichconst
        REAL*8 startmfe, stopmfe, deltamin

* ----------------------------  Locals  -------------------------------
        REAL*8 J2, mu, RadiusEarthKm,VKmPerSec, xke, tumin
        REAL*8 BC,EPDay, sec, xpdotp, j3, j4, j3oj2 
        REAL*8 startsec, stopsec, startdayofyr, stopdayofyr, jdstart, 
     &         jdstop, JDSatEpoch1
        INTEGER startyear, stopyear, startmon, stopmon, startday, 
     &          stopday, starthr, stophr, startmin, stopmin
        INTEGER Yr,Mon,Day,Hr,Minute,  ICrdno,nexp,bexp, error
        CHARACTER Show
        Character*130 LongStr1,LongStr2

        REAL*8 DTDAYS,MM0,ECC0
        REAL*8 INCDEG0,APDEG0,RAANDEG0,MADEG0
        REAL*8 MMDOTO2,MMDDOTO6

        COMMON /DebugHelp/ Help
        CHARACTER Help

        INCLUDE 'SGP4.CMN'
        INCLUDE 'ASTMATH.CMN'

        ! --------------------  Implementation   ----------------------
        Show = 'N'
        xpdotp        =  1440.0D0 / (2.0D0 * pi) ! 229.1831180523293

        CALL getgravconst( whichconst, tumin, mu, radiusearthkm, xke,  
     &       j2, j3, j4, j3oj2 );
        VKmPerSec     =  RadiusEarthKm * xke / 60.0D0

        

* ----------------- READ THE FIRST LINE OF ELEMENT SET ----------------
        Code = 0

* ---------------------- CONVERT TO INTERNAL UNITS --------------------
* ---- RADIANS, DISTANCE IN EARTH RADII, AND VELOCITY IN ER/KEMIN) ----
    
        NDot   = MMDOTO2 / (XPDOTP*1440)
        NDDot  = MMDDOTO6 / (XPDOTP*1440*1440)

c added the possibility to put in a Bstar term.  If this is unnecessary
c comment out the next two lines and uncomment the third line.    
    
        !Write(*,*) 'Input Bstar term: '
        !read(*,*) Bstar
        Bstar = 0.0d0

c Changed initial element set to match NASA input
        No     = MM0 / XPDOTP
        a      = (No*TUMin)**(-2.0D0/3.0D0)
        Inclo  = INCDEG0  * Deg2Rad
        nodeo  = RAANDEG0 * Deg2Rad
        Argpo  = APDEG0 * Deg2Rad
        Mo     = MADEG0* Deg2Rad
                                                                        
        IF (DABS(ECC0-1.0D0) .gt. 0.000001D0) THEN
            Altp= (a*(1.0D0-ECC0))-1.0D0
            Alta= (a*(1.0D0+ECC0))-1.0D0
          ELSE
            Alta= 999999.9D0
            Altp= 2.0D0* (4.0D0/(No*No)**(1.0D0/3.0D0))
          ENDIF

        ! ---- Ballistic Coefficient ----
        IF (DABS(BStar) .gt. 0.00000001D0) THEN
            BC= 1.0D0/(12.741621D0*BStar)
          ELSE
            BC= 1.111111111111111D0
          ENDIF

        ! ----------------------------------------------------------------
        ! find sgp4epoch time of element set
        ! remember that sgp4 uses units of days from 0 jan 1950 (sgp4epoch)
        ! and minutes from the epoch (time)
        ! ----------------------------------------------------------------


* ------------------- MAKE INITIAL PREDICTION AT EPOCH ----------------
        ! 2433281.5 - 2400000.5 = 33281.0, thus time from 1950
        CALL SGP4Init( whichconst,
     &                 SatNum,BStar, ECC0, JDSatEpoch1-2433281.5D0,
     &                 Argpo,Inclo,Mo,No, nodeo, Error )

        ! ---- Write common block of data into file of record ----
c             WRITE(115,Rec=NumSats) SatName,
c     &          SatNum, ELNO  , EPHTYP, REVI  , EpochYr,
c     &          BStar , Ecco  , Inclo , nodeo, Argpo , No    , Mo    ,
c     &          NDot  , NDDot ,
c     &          alta  , altp  , a     ,
c     &          DeltaMin, JDSatEpoch1, EpochDays,
c     &          Isimp , Init  , Method, Opsmode,
c     &          Aycof , CON41 , Cc1   , Cc4   , Cc5   , D2    , D3    ,
c     &          D4    , Delmo , Eta   , ArgpDot,Omgcof, Sinmao,
c     &          T2cof , T3cof , T4cof , T5cof , X1mth2, X7thm1, MDot  ,
c     &          nodeDot,Xlcof, Xmcof , Xnodcf,
c     &          D2201 , D2211 , D3210 , D3222 , D4410 , D4422 , D5220 ,
c     &          D5232 , D5421 , D5433 , Dedt  , Del1  , Del2  , Del3  ,
c     &          Didt  , Dmdt  , Dnodt , Domdt , E3    , Ee2   , Peo   ,
c     &          Pgho  , Pho   , Pinco , Plo   , Se2   , Se3   , Sgh2  ,
c     &          Sgh3  , Sgh4  , Sh2   , Sh3   , Si2   , Si3   , Sl2   ,
c     &          Sl3   , Sl4   , GSTo  , Xfact , Xgh2  , Xgh3  , Xgh4  ,
c     &          Xh2   , Xh3   , Xi2   , Xi3   , Xl2   , Xl3   , Xl4   ,
c     &          Xlamo , Zmol  , Zmos  , Atime , Xli   , Xni   , IRez

        IF(Error .GT. 0) THEN
            WRITE( *,*) '# *** SGP4 Model Error ***',Error
          ENDIF

c      write tle output details
c      INCLUDE 'debug8.for'

        ! ---- Fix to indicate end-of-file
        GOTO 1000
  999   Code = 999
 1000   CONTINUE

       RETURN
       END  !       SUBROUTINE TwoLine2RVSGP4

* -----------------------------------------------------------------------------
*
*                             SUBROUTINE SGP4INIT
*
*  This subroutine initializes variables for SGP4.
*
*  author        : david vallado                  719-573-2600   28 jun 2005
*
*  inputs        :
*    satn        - satellite number
*    bstar       - sgp4 type drag coefficient              kg/m2er
*    ecco        - eccentricity
*    epoch       - epoch time in days from jan 0, 1950. 0 hr
*    argpo       - argument of perigee (output if ds)
*    inclo       - inclination
*    mo          - mean anomaly (output if ds)
*    no          - mean motion
*    nodeo      - right ascension of ascending node
*
*  outputs       :
*    satrec      - common block values for subsequent calls
*    return code - non-zero on error.
*                   1 - mean elements, ecc >= 1.0 or ecc < -0.001 or a < 0.95 er
*                   2 - mean motion less than 0.0
*                   3 - pert elements, ecc < 0.0  or  ecc > 1.0
*                   4 - semi-latus rectum < 0.0
*                   5 - epoch elements are sub-orbital
*                   6 - satellite has decayed
*
*  coupling      :
*    getgravconst-
*    initl       -
*    dscom       -
*    dpper       -
*    dsinit      -
*
*  references    :
*    hoots, roehrich, norad spacetrack report #3 1980
*    hoots, norad spacetrack report #6 1986
*    hoots, schumacher and glover 2004
*    vallado, crawford, hujsak, kelso  2006
* ---------------------------------------------------------------------------- }

      SUBROUTINE SGP4Init ( whichconst,
     &                      Satn,   xBStar, xEcco,  Epoch, xArgpo,
     &                      xInclo, xMo, xNo, xnodeo, Error )
        IMPLICIT NONE
        INTEGER Satn, error, whichconst
        REAL*8  xBStar, xEcco, Epoch, xArgpo, xInclo, xMo, xNo, xnodeo
        REAL*8 T, r(3), v(3)

        INCLUDE 'SGP4.CMN'

        !COMMON /DebugHelp/ Help ! removed by NM 4/16
        CHARACTER Help

* -------------------------- Local Variables --------------------------

        REAL*8  Ao,ainv,con42,cosio,sinio,cosio2,Eccsq,omeosq,
     &          posq,rp,rteosq, CNODM , SNODM , COSIM , SINIM , COSOMM,
     &          SINOMM, Cc1sq ,
     &          Cc2   , Cc3   , Coef  , Coef1 , Cosio4, DAY   , Dndt  ,
     &          Eccm  , EMSQ  , Eeta  , Etasq , GAM   , Argpm , nodem,
     &          Inclm , Mm  , Xn    , Perige, Pinvsq, Psisq , Qzms24,
     &          RTEMSQ, S1    , S2    , S3    , S4    , S5    , S6    ,
     &          S7    , SFour , SS1   , SS2   , SS3   , SS4   , SS5   ,
     &          SS6   , SS7   , SZ1   , SZ2   , SZ3   , SZ11  , SZ12  ,
     &          SZ13  , SZ21  , SZ22  , SZ23  , SZ31  , SZ32  , SZ33  ,
     &          Tc    , Temp  , Temp1 , Temp2 , Temp3 , Tsi   , XPIDOT,
     &          Xhdot1, Z1    , Z2    , Z3    , Z11   , Z12   , Z13   ,
     &          Z21   , Z22   , Z23   , Z31   , Z32   , Z33 
        REAL*8  qzms2t, SS, mu, RadiusEarthKm, J2, j3oJ2,J4,X2o3,
     &          temp4, j3, xke, tumin
        INCLUDE 'ASTMATH.CMN'

* ---------------------------- INITIALIZATION -------------------------
        method = 'n'
        
c       clear sgp4 flag
        Error = 0

c      sgp4fix - note the following variables are also passed directly via sgp4 common. 
c      it is possible to streamline the sgp4init call by deleting the "x"
c      variables, but the user would need to set the common values first. we
c      include the additional assignment in case twoline2rv is not used. 
 
        bstar  = xbstar
        ecco   = xecco
        argpo  = xargpo
        inclo  = xinclo
        mo     = xmo
        no     = xno
        nodeo  = xnodeo

        ! sgp4fix identify constants and allow alternate values
        CALL getgravconst( whichconst, tumin, mu, radiusearthkm, xke,
     &       j2, j3, j4, j3oj2 )

        SS     = 78.0D0/RadiusEarthKm + 1.0D0
        QZMS2T = ((120.0D0-78.0D0)/RadiusEarthKm) ** 4
        X2o3   =  2.0D0 / 3.0D0
        
c     sgp4fix divisor for divide by zero check on inclination
c     the old check used 1.0D0 + cos(pi-1.0D-9), but then compared it to
c     1.5D-12, so the threshold was changed to 1.5D-12 for consistency
        temp4    =   1.5D-12

        Init = 'y'
        T = 0.0D0

        CALL INITL( Satn , whichconst, Ecco  , EPOCH , Inclo , No,
     &     Method, AINV  , AO    , CON41 , CON42 , COSIO , COSIO2,
     &     Eccsq , OMEOSQ, POSQ  , rp    , RTEOSQ, SINIO ,
     &     GSTo, Opsmode )

        IF(rp .lt. 1.0D0) THEN
            Error = 5
          ENDIF

        IF(OMEOSQ .ge. 0.0D0 .OR. No .ge. 0.0D0) THEN
            ISIMP = 0
            IF (rp .lt. (220.0D0/RadiusEarthKm+1.0D0)) THEN
                ISIMP = 1
              ENDIF
            SFour  = SS
            QZMS24 = QZMS2T
            PERIGE = (rp-1.0D0)*RadiusEarthKm

* ----------- For perigees below 156 km, S and Qoms2t are altered -----
            IF(PERIGE .lt. 156.0D0) THEN
                SFour = PERIGE-78.0D0
                IF(PERIGE .le. 98.0D0) THEN
                    SFour = 20.0D0
                  ENDIF
                QZMS24 = ( (120.0D0-SFour)/RadiusEarthKm )**4
                SFour  = SFour/RadiusEarthKm + 1.0D0
              ENDIF
            PINVSQ = 1.0D0/POSQ

            TSI    = 1.0D0/(AO-SFour)
            ETA    = AO*Ecco*TSI
            ETASQ  = ETA*ETA
            EETA   = Ecco*ETA
            PSISQ  = DABS(1.0D0-ETASQ)
            COEF   = QZMS24*TSI**4
            COEF1  = COEF/PSISQ**3.5D0
            CC2    = COEF1*No* (AO* (1.0D0+1.5D0*ETASQ+EETA*
     &               (4.0D0+ETASQ) )+0.375D0*
     &         J2*TSI/PSISQ*CON41*(8.0D0+3.0D0*ETASQ*(8.0D0+ETASQ)))
            CC1    = BSTAR*CC2
            CC3    = 0.0D0
            IF(Ecco .GT. 1.0D-4) THEN
                CC3 = -2.0D0*COEF*TSI*J3OJ2*No*SINIO/Ecco
              ENDIF
            X1MTH2 = 1.0D0-COSIO2
            CC4    = 2.0D0*No*COEF1*AO*OMEOSQ*(ETA*(2.0D0+0.5D0*ETASQ)
     &              +Ecco*(0.5D0 + 2.0D0*ETASQ) - J2*TSI / (AO*PSISQ)*
     &              (-3.0D0*CON41*(1.0D0-2.0D0*
     &       EETA+ETASQ*(1.5D0-0.5D0*EETA))+0.75D0*X1MTH2*(2.0D0*ETASQ
     &       -EETA*(1.0D0+ETASQ))*DCOS(2.0D0*Argpo)))
            CC5    = 2.0D0*COEF1*AO*OMEOSQ* (1.0D0 + 2.75D0*
     &               (ETASQ + EETA) + EETA*ETASQ )
            COSIO4 = COSIO2*COSIO2
            TEMP1  = 1.5D0*J2*PINVSQ*No
            TEMP2  = 0.5D0*TEMP1*J2*PINVSQ
            TEMP3  = -0.46875D0*J4*PINVSQ*PINVSQ*No
            MDot   = No + 0.5D0*TEMP1*RTEOSQ*CON41 + 0.0625D0*TEMP2*
     &               RTEOSQ*(13.0D0 - 78.0D0*COSIO2 + 137.0D0*COSIO4)
            ArgpDot= -0.5D0*TEMP1*CON42 + 0.0625D0*TEMP2*
     &               (7.0D0 - 114.0D0*COSIO2 +
     &        395.0D0*COSIO4)+TEMP3*(3.0D0-36.0D0*COSIO2+49.0D0*COSIO4)
            XHDOT1 = -TEMP1*COSIO
            nodeDot = XHDOT1+(0.5D0*TEMP2*(4.0D0-19.0D0*COSIO2)+
     &                 2.0D0*TEMP3*(3.0D0 - 7.0D0*COSIO2))*COSIO
            XPIDOT = ArgpDot+nodeDot
            OMGCOF = BSTAR*CC3*DCOS(Argpo)
            XMCOF  = 0.0D0
            IF(Ecco .GT. 1.0D-4) THEN
                XMCOF = -X2O3*COEF*BSTAR/EETA
              ENDIF
            XNODCF = 3.5D0*OMEOSQ*XHDOT1*CC1
            T2COF  = 1.5D0*CC1
            
c           sgp4fix for divide by zero with xinco = 180 deg
            if (dabs(cosio+1.0).gt. 1.5d-12) THEN
                XLCOF  = -0.25D0*J3OJ2*SINIO*
     &                   (3.0D0+5.0D0*COSIO)/(1.0D0+COSIO)
              else
                XLCOF  = -0.25D0*J3OJ2*SINIO*
     &                   (3.0D0+5.0D0*COSIO)/temp4
              ENDIF
            AYCOF  = -0.5D0*J3OJ2*SINIO
            DELMO  = (1.0D0+ETA*DCOS(Mo))**3
            SINMAO = DSIN(Mo)
            X7THM1 = 7.0D0*COSIO2-1.0D0

* ------------------------ Deep Space Initialization ------------------
            IF ((TWOPI/No) .ge. 225.0D0) THEN
                METHOD = 'd'
                ISIMP  = 1
                TC     = 0.0D0
                Inclm  = Inclo
                CALL DSCOM( EPOCH     , Ecco  , Argpo , Tc    , Inclo ,
     &                  nodeo, No    ,
     &                  SNODM , CNODM , SINIM , COSIM , SINOMM, COSOMM,
     &                  DAY   , E3    , Ee2   , Eccm  , EMSQ  , GAM   ,
     &                  Peo   , Pgho  , Pho   , PInco , Plo   ,
     &                  RTemSq, Se2   , Se3   , Sgh2  , Sgh3  , Sgh4  ,
     &                  Sh2   , Sh3   , Si2   , Si3   , Sl2   , Sl3   ,
     &                  Sl4   , S1    , S2    , S3    , S4    , S5    ,
     &                  S6    , S7    , SS1   , SS2   , SS3   , SS4   ,
     &                  SS5   , SS6   , SS7   , SZ1   , SZ2   , SZ3   ,
     &                  SZ11  , SZ12  , SZ13  , SZ21  , SZ22  , SZ23  ,
     &                  SZ31  , SZ32  , SZ33  , Xgh2  , Xgh3  , Xgh4  ,
     &                  Xh2   , Xh3   , Xi2   , Xi3   , Xl2   , Xl3   ,
     &                  Xl4   , Xn    , Z1    , Z2    , Z3    , Z11   ,
     &                  Z12   , Z13   , Z21   , Z22   , Z23   , Z31   ,
     &                  Z32   , Z33   , Zmol  , Zmos )
                CALL DPPER( e3, ee2   , peo   , pgho  , pho   , pinco ,
     &                  plo   , se2   , se3   , sgh2  , sgh3  , sgh4  ,
     &                  sh2   , sh3   , si2   , si3   , sl2   , sl3   ,
     &                  sl4   , T     , xgh2  , xgh3  , xgh4  , xh2   ,
     &                  xh3   , xi2   , xi3   , xl2   , xl3   , xl4   ,
     &                  zmol  , zmos  , Inclm , init  ,
     &                  Ecco  , Inclo , nodeo, Argpo , Mo, Opsmode )

                Argpm  = 0.0D0 ! add for DS to work initial
                nodem  = 0.0D0
                Mm     = 0.0D0

                CALL DSINIT( whichconst,
     &                   Cosim ,Emsq, Argpo, S1    , S2    , S3    ,
     &                   S4    , S5    , Sinim , Ss1   , Ss2   , Ss3   ,
     &                   Ss4   , Ss5   , Sz1   , Sz3   , Sz11  , Sz13  ,
     &                   Sz21  , Sz23  , Sz31  , Sz33  , T     , Tc    ,
     &                   GSTo  , Mo    , MDot  , No    ,nodeo,nodeDot,
     &                   XPIDOT, Z1    , Z3    , Z11   , Z13   , Z21   ,
     &                   Z23   , Z31   , Z33   , ecco  , eccsq,
     &                   Eccm  , Argpm , Inclm , Mm    , Xn    , nodem,
     &                   IREZ  , Atime , D2201 , D2211 , D3210 , D3222 ,
     &                   D4410 , D4422 , D5220 , D5232 , D5421 , D5433 ,
     &                   Dedt  , Didt  , DMDT  , DNDT  , DNODT , DOMDT ,
     &                   Del1  , Del2  , Del3  , Xfact , Xlamo , Xli   ,
     &                   Xni )
            ENDIF

* ------------ Set variables if not deep space or rp < 220 -------------
            IF (ISIMP .ne. 1) THEN
                CC1SQ = CC1*CC1
                D2    = 4.0D0*AO*TSI*CC1SQ
                TEMP  = D2*TSI*CC1 / 3.0D0
                D3    = (17.0D0*AO + SFour) * TEMP
                D4    = 0.5D0*TEMP*AO*TSI*
     &                  (221.0D0*AO + 31.0D0*SFour)*CC1
                T3COF = D2 + 2.0D0*CC1SQ
                T4COF = 0.25D0* (3.0D0*D3+CC1*(12.0D0*D2+10.0D0*CC1SQ) )
                T5COF = 0.2D0* (3.0D0*D4 + 12.0D0*CC1*D3 + 6.0D0*D2*D2 +
     &                  15.0D0*CC1SQ* (2.0D0*D2 + CC1SQ) )
              ENDIF

          ENDIF ! ------ if nodeo and No are gtr 0

      init = 'n'

      CALL SGP4(whichconst, 0.0D0, r, v, error)

      RETURN
      END  ! end sgp4init


* -----------------------------------------------------------------------------
*
*                             SUBROUTINE SGP4
*
*  this procedure is the sgp4 prediction model from space command. this is an
*    updated and combined version of sgp4 and sdp4, which were originally
*    published separately in spacetrack report #3. this version follows the
*    methodology from the aiaa paper (2006) describing the history and
*    development of the code.
*
*  author        : david vallado                  719-573-2600   28 jun 2005
*
*  inputs        :
*    satrec	 - initialised structure from sgp4init() call.
*    tsince	 - time eince epoch (minutes)
*
*  outputs       :
*    r           - position vector                     km
*    v           - velocity                            km/sec
*           
*  return code - non-zero on error.
*                   1 - mean elements, ecc >= 1.0 or ecc < -0.001 or a < 0.95 er
*                   2 - mean motion less than 0.0
*                   3 - pert elements, ecc < 0.0  or  ecc > 1.0
*                   4 - semi-latus rectum < 0.0
*                   5 - epoch elements are sub-orbital
*                   6 - satellite has decayed
*
*
*  coupling      :
*    getgravconst-
*    dpper
*    dpspace
*
*  references    :
*    hoots, roehrich, norad spacetrack report #3 1980
*    hoots, norad spacetrack report #6 1986
*    hoots, schumacher and glover 2004
*    vallado, crawford, hujsak, kelso  2006
*------------------------------------------------------------------------------

      SUBROUTINE SGP4 ( whichconst, T, r, v, Error )
        IMPLICIT NONE
        INTEGER  Error, whichconst
        REAL*8   T, r(3), v(3)

        INCLUDE 'SGP4.CMN'

* -------------------------- Local Variables --------------------------
        REAL*8 AM    , Axnl  , Aynl  , Betal , COSIM , Cnod  ,
     &         Cos2u , Coseo1, Cosi  , Cosip , Cosisq, Cossu , Cosu  ,
     &         Delm  , Delomg, Eccm  , EMSQ  , Ecose , El2   , Eo1   ,
     &         Eccp  , Esine , Argpm , Argpp , Omgadf, Pl    ,
     &         Rdotl , Rl    , Rvdot , Rvdotl, SINIM ,
     &         Sin2u , Sineo1, Sini  , Sinip , Sinsu , Sinu  ,
     &         Snod  , Su    , T2    , T3    , T4    , Tem5  , Temp  ,
     &         Temp1 , Temp2 , Tempa , Tempe , Templ , U     , Ux    ,
     &         Uy    , Uz    , Vx    , Vy    , Vz    , Inclm , Mm  ,
     &         XN    , nodem , Xinc  , Xincp , Xl    , Xlm   , Mp  ,
     &         Xmdf  , Xmx   , Xmy   , Xnoddf, Xnode , nodep,
     &         Tc    , Dndt

        REAL*8 X2O3, J2,J3,XKE,J3OJ2, mr,mv,
     &         mu, RadiusEarthkm, VKmPerSec, temp4, tumin, j4
	    INTEGER iter

        CHARACTER Help
        INCLUDE 'ASTMATH.CMN'

* ------------------------ WGS-72 EARTH CONSTANTS ---------------------
* ---------------------- SET MATHEMATICAL CONSTANTS -------------------
      X2O3   = 2.0D0/3.0D0

c     Keep compiler ok for warnings on uninitialized variables
      mr = 0.0D0
      Coseo1 = 1.0D0
      Sineo1 = 0.0D0

      ! sgp4fix identify constants and allow alternate values
        CALL getgravconst( whichconst, tumin, mu, radiusearthkm, xke,
     &       j2, j3, j4, j3oj2 )
     
c     sgp4fix divisor for divide by zero check on inclination
c     the old check used 1.0D0 + cos(pi-1.0D-9), but then compared it to
c     1.5D-12, so the threshold was changed to 1.5D-12 for consistency
      temp4    =   1.5D-12
      VKmPerSec     =  RadiusEarthKm * xke/60.0D0

* ------------------------- CLEAR SGP4 ERROR FLAG ---------------------
      Error = 0

* ----------- UPDATE FOR SECULAR GRAVITY AND ATMOSPHERIC DRAG ---------
      XMDF   = Mo + MDot*T
      OMGADF = Argpo + ArgpDot*T
      XNODDF = nodeo + nodeDot*T
      Argpm  = OMGADF
      Mm     = XMDF
      T2     = T*T
      nodem  = XNODDF + XNODCF*T2
      TEMPA  = 1.0D0 - CC1*T
      TEMPE  = BSTAR*CC4*T
      TEMPL  = T2COF*T2
      IF (ISIMP .ne. 1) THEN
          DELOMG = OMGCOF*T
          DELM   = XMCOF*(( 1.0D0+ETA*DCOS(XMDF) )**3-DELMO)
          TEMP   = DELOMG + DELM
          Mm     = XMDF + TEMP
          Argpm  = OMGADF - TEMP
          T3     = T2*T
          T4     = T3*T
          TEMPA  = TEMPA - D2*T2 - D3*T3 - D4*T4
          TEMPE  = TEMPE + BSTAR*CC5*(DSIN(Mm) - SINMAO)
          TEMPL  = TEMPL + T3COF*T3 + T4*(T4COF + T*T5COF)
        ENDIF
      XN    = No
      Eccm  = Ecco
      Inclm = Inclo
      IF(METHOD .EQ. 'd') THEN
          TC     = T
          CALL DSPACE( IRez  , D2201 , D2211 , D3210 , D3222 , D4410 ,
     &                 D4422 , D5220 , D5232 , D5421 , D5433 , Dedt  ,
     &                 Del1  , Del2  , Del3  , Didt  , Dmdt  , Dnodt ,
     &                 Domdt , Argpo , ArgpDot, T    , TC    , GSTo ,
     &                 Xfact , Xlamo , No   ,
     &                 Atime , Eccm  , Argpm, Inclm , Xli   , Mm  ,
     &                 XNi   , nodem, Dndt  , XN  )
        ENDIF

c     mean motion less than 0.0
      IF(XN .LE. 0.0D0) THEN
          Error = 2
        ENDIF
      AM = (XKE/XN)**X2O3*TEMPA**2
      XN = XKE/AM**1.5D0
      Eccm = Eccm-TEMPE
      
c   fix tolerance for error recognition
      IF (Eccm .GE. 1.0D0 .or. Eccm.lt.-0.001D0 .or. AM .lt. 0.95) THEN
c	  write(6,*) '# Error 1, Eccm = ',  Eccm, ' AM = ', AM
          Error = 1
        ENDIF
        
c   sgp4fix change test condition for eccentricity   
      IF (Eccm .lt. 1.0D-6) Eccm = 1.0D-6
      Mm     = Mm+No*TEMPL
      XLM    = Mm+Argpm+nodem
      EMSQ   = Eccm*Eccm
      TEMP   = 1.0D0 - EMSQ
      nodem  = DMOD(nodem,TwoPi)
      Argpm  = DMOD(Argpm,TwoPi)
      XLM    = DMOD(XLM,TwoPi)
      Mm     = DMOD(XLM - Argpm - nodem,TwoPi)

* --------------------- COMPUTE EXTRA MEAN QUANTITIES -----------------
      SINIM  = DSIN(Inclm)
      COSIM  = DCOS(Inclm)

* ------------------------ ADD LUNAR-SOLAR PERIODICS ------------------
      Eccp   = Eccm
      XINCP  = Inclm
      Argpp  = Argpm
      nodep = nodem
      Mp     = Mm
      SINIP  = SINIM
      COSIP  = COSIM
      IF(METHOD .EQ. 'd') THEN
          CALL DPPER( e3    , ee2   , peo   , pgho  , pho   , pinco ,
     &                plo   , se2   , se3   , sgh2  , sgh3  , sgh4  ,
     &                sh2   , sh3   , si2   , si3   , sl2   , sl3   ,
     &                sl4   , T     , xgh2  , xgh3  , xgh4  , xh2   ,
     &                xh3   , xi2   , xi3   , xl2   , xl3   , xl4   ,
     &                zmol  , zmos  , Inclo , 'n'   ,
     &                Eccp  , XIncp , nodep, Argpp, Mp, Opsmode )
          IF(XINCP .lt. 0.0D0) THEN
              XINCP  = -XINCP
              nodep  = nodep + PI
              Argpp  = Argpp - PI
            ENDIF
          IF(Eccp .lt. 0.0D0 .OR. Eccp .GT. 1.0D0) THEN
              Error = 3
            ENDIF
        ENDIF

* ------------------------ LONG PERIOD PERIODICS ----------------------
      IF(METHOD .EQ. 'd') THEN
          SINIP =  DSIN(XINCP)
          COSIP =  DCOS(XINCP)
          AYCOF = -0.5D0*J3OJ2*SINIP
          
c         sgp4fix for divide by zero with xincp = 180 deg
          if (dabs(cosip+1.0).gt. 1.5d-12) THEN
              XLCOF  = -0.25D0*J3OJ2*SINIP*
     &                 (3.0D0+5.0D0*COSIP)/(1.0D0+COSIP)
            else
              XLCOF  = -0.25D0*J3OJ2*SINIP*
     &                 (3.0D0+5.0D0*COSIP)/temp4
            ENDIF
        ENDIF
      AXNL = Eccp*DCOS(Argpp)
      TEMP = 1.0D0 / (AM*(1.0D0-Eccp*Eccp))
      AYNL = Eccp*DSIN(Argpp) + TEMP*AYCOF
      XL   = Mp + Argpp + nodep + TEMP*XLCOF*AXNL

* ------------------------- SOLVE KEPLER'S EQUATION -------------------
      U    = DMOD(XL-nodep,TwoPi)
      EO1  = U
      ITER=0
      
c   sgp4fix for kepler iteration
c   the following iteration needs better limits on corrections
      Temp = 9999.9D0
      DO WHILE ((Temp.ge.1.0D-12).and.(ITER.lt.10))
          ITER=ITER+1
          SINEO1= DSIN(EO1)
          COSEO1= DCOS(EO1)
          TEM5  = 1.0D0 - COSEO1*AXNL - SINEO1*AYNL
          TEM5  = (U - AYNL*COSEO1 + AXNL*SINEO1 - EO1) / TEM5
          Temp  = DABS(Tem5)
          IF(Temp.gt.1.0D0) Tem5=Tem5/Temp ! Stop excessive correction
          EO1   = EO1+TEM5
        ENDDO

* ----------------- SHORT PERIOD PRELIMINARY QUANTITIES ---------------
      ECOSE = AXNL*COSEO1+AYNL*SINEO1
      ESINE = AXNL*SINEO1-AYNL*COSEO1
      EL2   = AXNL*AXNL+AYNL*AYNL
      PL    = AM*(1.0D0-EL2)
      
c     semi-latus rectum < 0.0
      IF ( PL .lt. 0.0D0 ) THEN
          Error = 4
        ELSE
          RL    = AM*(1.0D0-ECOSE)
          RDOTL = DSQRT(AM)*ESINE/RL
          RVDOTL= DSQRT(PL)/RL
          BETAL = DSQRT(1.0D0-EL2)
          TEMP  = ESINE/(1.0D0+BETAL)
          SINU  = AM/RL*(SINEO1-AYNL-AXNL*TEMP)
          COSU  = AM/RL*(COSEO1-AXNL+AYNL*TEMP)
          SU    = DATAN2(SINU,COSU)
          SIN2U = (COSU+COSU)*SINU
          COS2U = 1.0D0-2.0D0*SINU*SINU
          TEMP  = 1.0D0/PL
          TEMP1 = 0.5D0*J2*TEMP
          TEMP2 = TEMP1*TEMP

* ------------------ UPDATE FOR SHORT PERIOD PERIODICS ----------------
          IF(METHOD .EQ. 'd') THEN
              COSISQ = COSIP*COSIP
              CON41  = 3.0D0*COSISQ - 1.0D0
              X1MTH2 = 1.0D0 - COSISQ
              X7THM1 = 7.0D0*COSISQ - 1.0D0
            ENDIF
          mr   = RL*(1.0D0 - 1.5D0*TEMP2*BETAL*CON41) +
     &           0.5D0*TEMP1*X1MTH2*COS2U
          SU   = SU - 0.25D0*TEMP2*X7THM1*SIN2U
          XNODE= nodep + 1.5D0*TEMP2*COSIP*SIN2U
          XINC = XINCP + 1.5D0*TEMP2*COSIP*SINIP*COS2U
          mv   = RDOTL - XN*TEMP1*X1MTH2*SIN2U / XKE
          RVDOT= RVDOTL + XN*TEMP1* (X1MTH2*COS2U+1.5D0*CON41) / XKE

* ------------------------- ORIENTATION VECTORS -----------------------
          SINSU=  DSIN(SU)
          COSSU=  DCOS(SU)
          SNOD =  DSIN(XNODE)
          CNOD =  DCOS(XNODE)
          SINI =  DSIN(XINC)
          COSI =  DCOS(XINC)
          XMX  = -SNOD*COSI
          XMY  =  CNOD*COSI
          UX   =  XMX*SINSU + CNOD*COSSU
          UY   =  XMY*SINSU + SNOD*COSSU
          UZ   =  SINI*SINSU
          VX   =  XMX*COSSU - CNOD*SINSU
          VY   =  XMY*COSSU - SNOD*SINSU
          VZ   =  SINI*COSSU

* ----------------------- POSITION AND VELOCITY -----------------------
          r(1) = mr*UX * RadiusEarthkm
          r(2) = mr*UY * RadiusEarthkm
          r(3) = mr*UZ * RadiusEarthkm
          v(1) = (mv*UX + RVDOT*VX) * VKmPerSec
          v(2) = (mv*UY + RVDOT*VY) * VKmPerSec
          v(3) = (mv*UZ + RVDOT*VZ) * VKmPerSec
        ENDIF

* --------------------------- ERROR PROCESSING ------------------------
c     sgp4fix for decaying satellites
      if (mr .lt. 1.0D0) THEN
          error = 6
        ENDIF

      RETURN
      END  ! end sgp4
      

* -----------------------------------------------------------------------------
*
*                           SUBROUTINE INITL
*
*  this subroutine initializes the spg4 propagator. all the initialization is
*    consolidated here instead of having multiple loops inside other routines.
*
*  author        : david vallado                  719-573-2600   28 jun 2005
*
*  inputs        :
*    ecco        - eccentricity                           0.0 - 1.0
*    epoch       - epoch time in days from jan 0, 1950. 0 hr
*    inclo       - inclination of satellite
*    no          - mean motion of satellite
*    satn        - satellite number
*
*  outputs       :
*    ainv        - 1.0 / a
*    ao          - semi major axis
*    con41       -
*    con42       - 1.0 - 5.0 cos(i)
*    cosio       - cosine of inclination
*    cosio2      - cosio squared
*    eccsq       - eccentricity squared
*    method      - flag for deep space                    'd', 'n'
*    omeosq      - 1.0 - ecco * ecco
*    posq        - semi-parameter squared
*    rp          - radius of perigee
*    rteosq      - square root of (1.0 - ecco*ecco)
*    sinio       - sine of inclination
*    gsto        - gst at time of observation               rad
*    no          - mean motion of satellite
*
*
*  coupling      :
*    getgravconst-
*
*  references    :
*    hoots, roehrich, norad spacetrack report #3 1980
*    hoots, norad spacetrack report #6 1986
*    hoots, schumacher and glover 2004
*    vallado, crawford, hujsak, kelso  2006
*------------------------------------------------------------------------------

      SUBROUTINE INITL( Satn , whichconst, Ecco  , EPOCH , Inclo , No,
     &         Method, AINV  , AO    , CON41 , CON42 , COSIO , COSIO2,
     &         Eccsq , OMEOSQ, POSQ  , rp    , RTEOSQ, SINIO ,
     &         GSTo, operationmode )
        IMPLICIT NONE
        CHARACTER Method, operationmode
        INTEGER Satn, whichconst
        REAL*8 Ecco  , EPOCH , Inclo , No   ,
     &         AINV  , AO    , CON41 , CON42 , COSIO , COSIO2, 
     &         Eccsq , OMEOSQ, POSQ  , rp    , RTEOSQ, SINIO , GSTo

        COMMON /DebugHelp/ Help
        CHARACTER Help

* -------------------------- Local Variables --------------------------
c        sgp4fix use old way of finding gst
        Integer ids70
        REAL*8 ts70, ds70, tfrac, c1, thgr70, fk5r, c1p2p, thgr, thgro

        REAL*8  RadPerDay, Temp, TUT1
        REAL*8  ak, d1, del, adel, po
        REAL*8  X2o3, J2, XKE, tumin, mu, radiusearthkm, j3, j4, j3oj2
        INCLUDE 'ASTMATH.CMN'

* ------------------------ WGS-72 EARTH CONSTANTS ---------------------
        X2o3   = 2.0D0/3.0D0
        ! sgp4fix identify constants and allow alternate values
        CALL getgravconst( whichconst, tumin, mu, radiusearthkm, xke,
     &       j2, j3, j4, j3oj2 )

* ----------------- CALCULATE AUXILLARY EPOCH QUANTITIES --------------
        Eccsq  = Ecco*Ecco
        OMEOSQ = 1.0D0 - Eccsq
        RTEOSQ = DSQRT(OMEOSQ)
        COSIO  = DCOS(Inclo)
        COSIO2 = COSIO*COSIO

* ---------------------- UN-KOZAI THE MEAN MOTION ---------------------
        AK   =  (XKE/No)**X2O3
        D1   =  0.75D0*J2* (3.0D0*COSIO2-1.0D0) / (RTEOSQ*OMEOSQ)
        DEL  =  D1/(AK*AK)
        ADEL =  AK * ( 1.0D0 - DEL*DEL - DEL*
     &                 (1.0D0/3.0D0 + 134.0D0*DEL*DEL / 81.0D0) )
        DEL  =  D1/(ADEL*ADEL)
        No   =  No/(1.0D0 + DEL)

        AO   =  (XKE/No)**X2O3
        SINIO=  DSIN(Inclo)
        PO   =  AO*OMEOSQ
        CON42=  1.0D0-5.0D0*COSIO2
        CON41=  -CON42-COSIO2-COSIO2
        AINV =  1.0D0/AO
        POSQ =  PO*PO
        rp   =  AO*(1.0D0-Ecco)
        METHOD = 'n'

* ----------------- CALCULATE GREENWICH LOCATION AT EPOCH -------------
c       sgp4fix modern approach to finding sidereal time
        IF (operationmode .ne. 'a') THEN
            RadPerDay  = twopi * 1.002737909350795D0  !6.30038809866574D0
            Temp = Epoch + 2433281.5D0
            TUT1= ( DINT(Temp-0.5D0) + 0.5D0 - 2451545.0D0 ) / 36525.0D0
            Gsto= 1.75336855923327D0 + 628.331970688841D0*TUT1
     &             + 6.77071394490334D-06*TUT1*TUT1
     &             - 4.50876723431868D-10*TUT1*TUT1*TUT1
     &             + RadPerDay*( Temp-0.5D0-DINT(Temp-0.5D0) )
          ELSE
            ! sgp4fix use old way of finding gst
            ! count integer number of days from 0 jan 1970
           TS70  = EPOCH-7305.0D0
           IDS70 = TS70 + 1.0D-8
           TFRAC = TS70-IDS70
            ! find greenwich location at epoch
           C1    = 1.72027916940703639D-2
           THGR70= 1.7321343856509374D0
            FK5R  = 5.07551419432269442D-15
           C1P2P = C1+TWOPI
           gsto  = THGR70+C1*IDS70+C1P2P*TFRAC+TS70*TS70*FK5R
         ENDIF
         
        ! ------------------------ Check quadrants ---------------------
        Gsto = DMOD( Gsto,TwoPi )
        IF ( Gsto .lt. 0.0D0 ) THEN
            Gsto= Gsto + TwoPi
          ENDIF

      RETURN
      END  ! end initl

* -----------------------------------------------------------------------------
*
*                           SUBROUTINE DPPER
*
*  This Subroutine provides deep space long period periodic contributions
*    to the mean elements.  by design, these periodics are zero at epoch.
*    this used to be dscom which included initialization, but it's really a
*    recurring function.
*
*  author        : david vallado                  719-573-2600   28 jun 2005
*
*  inputs        :
*    e3          -
*    ee2         -
*    peo         -
*    pgho        -
*    pho         -
*    pinco       -
*    plo         -
*    se2 , se3 , Sgh2, Sgh3, Sgh4, Sh2, Sh3, Si2, Si3, Sl2, Sl3, Sl4 -
*    t           -
*    xh2, xh3, xi2, xi3, xl2, xl3, xl4 -
*    zmol        -
*    zmos        -
*    ep          - eccentricity                           0.0 - 1.0
*    inclo       - inclination - needed for lyddane modification
*    nodep       - right ascension of ascending node
*    argpp       - argument of perigee
*    mp          - mean anomaly
*
*  outputs       :
*    ep          - eccentricity                           0.0 - 1.0
*    inclp       - inclination
*    nodep       - right ascension of ascending node
*    argpp       - argument of perigee
*    mp          - mean anomaly
*
*  coupling      :
*    none.
*
*  references    :
*    hoots, roehrich, norad spacetrack report #3 1980
*    hoots, norad spacetrack report #6 1986
*    hoots, schumacher and glover 2004
*    vallado, crawford, hujsak, kelso  2006
*------------------------------------------------------------------------------

      SUBROUTINE DPPER( e3    , ee2   , peo   , pgho  , pho   , pinco ,
     &                  plo   , se2   , se3   , sgh2  , sgh3  , sgh4  ,
     &                  sh2   , sh3   , si2   , si3   , sl2   , sl3   ,
     &                  sl4   , T     , xgh2  , xgh3  , xgh4  , xh2   ,
     &                  xh3   , xi2   , xi3   , xl2   , xl3   , xl4   ,
     &                  zmol  , zmos  , inclo , init  ,
     &                  Eccp  , Inclp , nodep, Argpp , Mp,
     &                  operationmode )
        IMPLICIT NONE
        CHARACTER Init, operationmode
        REAL*8  e3    , ee2   , peo   , pgho  , pho   , pinco , plo   ,
     &          se2   , se3   , sgh2  , sgh3  , sgh4  , sh2   , sh3   ,
     &          si2   , si3   , sl2   , sl3   , sl4   , T     , xgh2  ,
     &          xgh3  , xgh4  , xh2   , xh3   , xi2   , xi3   , xl2   ,
     &          xl3   , xl4   , zmol  , zmos  , inclo ,
     &          Eccp  , Inclp , nodep, Argpp , Mp

* -------------------------- Local Variables --------------------------
        REAL*8  alfdp , betdp , cosip , cosop , dalf  , dbet  , dls   ,
     &          f2    , f3    , pe    , pgh   , ph    , pinc  , pl    ,
     &          sel   , ses   , sghl  , sghs  , shl   , shs   , sil   ,
     &          sinip , sinop , sinzf , sis   , sll   , sls   , xls   ,
     &          xnoh  , zf    , zm
        REAL*8  Zel   , Zes   , Znl   , Zns
        !COMMON /DebugHelp/ Help
        CHARACTER Help
        INCLUDE 'ASTMATH.CMN'

* ----------------------------- Constants -----------------------------
        ZES  = 0.01675D0
        ZEL  = 0.05490D0
        ZNS  = 1.19459D-5
        ZNL  = 1.5835218D-4

* ------------------- CALCULATE TIME VARYING PERIODICS ----------------
        ZM   = ZMOS + ZNS*T

        IF (Init.eq.'y') ZM = ZMOS
        ZF   = ZM + 2.0D0*ZES*DSIN(ZM)
        SINZF= DSIN(ZF)
        F2   =  0.5D0*SINZF*SINZF - 0.25D0
        F3   = -0.5D0*SINZF*DCOS(ZF)
        SES  = SE2*F2 + SE3*F3
        SIS  = SI2*F2 + SI3*F3
        SLS  = SL2*F2 + SL3*F3 + SL4*SINZF
        SGHS = SGH2*F2 + SGH3*F3 + SGH4*SINZF
        SHS  = SH2*F2 + SH3*F3
        ZM   = ZMOL + ZNL*T

        IF (Init.eq.'y') ZM = ZMOL
        ZF   = ZM + 2.0D0*ZEL*DSIN(ZM)
        SINZF= DSIN(ZF)
        F2   =  0.5D0*SINZF*SINZF - 0.25D0
        F3   = -0.5D0*SINZF*DCOS(ZF)
        SEL  = EE2*F2 + E3*F3
        SIL  = XI2*F2 + XI3*F3
        SLL  = XL2*F2 + XL3*F3 + XL4*SINZF
        SGHL = XGH2*F2 + XGH3*F3 + XGH4*SINZF
        SHL  = XH2*F2 + XH3*F3
        PE   = SES + SEL
        PINC = SIS + SIL
        PL   = SLS + SLL
        PGH  = SGHS + SGHL
        PH   = SHS + SHL

        IF (Init.eq.'n') THEN
            PE    = PE   - PEO
            PINC  = PINC - PINCO
            PL    = PL   - PLO
            PGH   = PGH  - PGHO
            PH    = PH   - PHO
            Inclp = Inclp  + PINC
            Eccp  = Eccp   + PE
            SINIP = DSIN(Inclp)
            COSIP = DCOS(Inclp)

* ------------------------- APPLY PERIODICS DIRECTLY ------------------
c    sgp4fix for lyddane choice
c    strn3 used original inclination - this is technically feasible
c    gsfc used perturbed inclination - also technically feasible
c    probably best to readjust the 0.2 limit value and limit discontinuity
c    0.2 rad = 11.45916 deg
c    use next line for original strn3 approach and original inclination
c            IF (inclo.ge.0.2D0) THEN
c    use next line for gsfc version and perturbed inclination
            IF (Inclp.ge.0.2D0) THEN

                PH     = PH/SINIP
                PGH    = PGH - COSIP*PH
                Argpp  = Argpp + PGH
                nodep  = nodep + PH
                Mp     = Mp + PL
              ELSE

* ----------------- APPLY PERIODICS WITH LYDDANE MODIFICATION ---------
                SINOP  = DSIN(nodep)
                COSOP  = DCOS(nodep)
                ALFDP  = SINIP*SINOP
                BETDP  = SINIP*COSOP
                DALF   =  PH*COSOP + PINC*COSIP*SINOP
                DBET   = -PH*SINOP + PINC*COSIP*COSOP
                ALFDP  = ALFDP + DALF
                BETDP  = BETDP + DBET
                nodep = DMOD(nodep,TwoPi)
                
                ! sgp4fix for afspc written intrinsic functions
                ! nodep used without a trigonometric function ahead
                IF ((nodep .LT. 0.0D0) .and. (operationmode .eq. 'a')) 
     &                THEN
                    nodep = nodep + twopi
                  ENDIF
                XLS    = Mp + Argpp + COSIP*nodep
                DLS    = PL + PGH - PINC*nodep*SINIP
                XLS    = XLS + DLS
                XNOH   = nodep
                nodep  = DATAN2(ALFDP,BETDP)
                
                ! sgp4fix for afspc written intrinsic functions
                ! nodep used without a trigonometric function ahead
                IF ((nodep .LT. 0.0D0) .and. (operationmode .eq. 'a')) 
     &                THEN
                    nodep = nodep + twopi
                  ENDIF
                IF (DABS(XNOH-nodep) .GT. PI) THEN
                    IF(nodep .lt. XNOH) THEN
                        nodep = nodep+TWOPI
                      ELSE
                        nodep = nodep-TWOPI
                      ENDIF
                  ENDIF
                Mp   = Mp + PL
                Argpp=  XLS - Mp - COSIP*nodep
              ENDIF
          ENDIF



      RETURN
      END  !  end dpper


* -----------------------------------------------------------------------------
*
*                           SUBROUTINE DSCOM
*
*  This Subroutine provides deep space common items used by both the secular
*    and periodics subroutines.  input is provided as shown. this routine
*    used to be called dpper, but the functions inside weren't well organized.
*
*  author        : david vallado                  719-573-2600   28 jun 2005
*
*  inputs        :
*    epoch       -
*    ep          - eccentricity
*    argpp       - argument of perigee
*    tc          -
*    inclp       - inclination
*    nodep      - right ascension of ascending node
*    np          - mean motion
*
*  outputs       :
*    sinim  , cosim  , sinomm , cosomm , snodm  , cnodm
*    day         -
*    e3          -
*    ee2         -
*    em          - eccentricity
*    emsq        - eccentricity squared
*    gam         -
*    peo         -
*    pgho        -
*    pho         -
*    pinco       -
*    plo         -
*    rtemsq      -
*    se2, se3         -
*    sgh2, sgh3, sgh4        -
*    sh2, sh3, si2, si3, sl2, sl3, sl4         -
*    s1, s2, s3, s4, s5, s6, s7          -
*    ss1, ss2, ss3, ss4, ss5, ss6, ss7, sz1, sz2, sz3         -
*    sz11, sz12, sz13, sz21, sz22, sz23, sz31, sz32, sz33        -
*    xgh2, xgh3, xgh4, xh2, xh3, xi2, xi3, xl2, xl3, xl4         -
*    nm          - mean motion
*    z1, z2, z3, z11, z12, z13, z21, z22, z23, z31, z32, z33         -
*    zmol        -
*    zmos        -
*
*
*  coupling      :
*    none.
*
*  references    :
*    hoots, roehrich, norad spacetrack report #3 1980
*    hoots, norad spacetrack report #6 1986
*    hoots, schumacher and glover 2004
*    vallado, crawford, hujsak, kelso  2006
*------------------------------------------------------------------------------

      SUBROUTINE DSCOM( EPOCH , Eccp  , Argpp , Tc    , Inclp , nodep,
     &                  Np    ,
     &                  SNODM , CNODM , SINIM , COSIM , SINOMM, COSOMM,
     &                  DAY   , E3    , Ee2   , Eccm  , EMSQ  , GAM   ,
     &                  Peo   , Pgho  , Pho   , PInco , Plo   ,
     &                  RTemSq, Se2   , Se3   , Sgh2  , Sgh3  , Sgh4  ,
     &                  Sh2   , Sh3   , Si2   , Si3   , Sl2   , Sl3   ,
     &                  Sl4   , S1    , S2    , S3    , S4    , S5    ,
     &                  S6    , S7    , SS1   , SS2   , SS3   , SS4   ,
     &                  SS5   , SS6   , SS7   , SZ1   , SZ2   , SZ3   ,
     &                  SZ11  , SZ12  , SZ13  , SZ21  , SZ22  , SZ23  ,
     &                  SZ31  , SZ32  , SZ33  , Xgh2  , Xgh3  , Xgh4  ,
     &                  Xh2   , Xh3   , Xi2   , Xi3   , Xl2   , Xl3   ,
     &                  Xl4   , Xn    , Z1    , Z2    , Z3    , Z11   ,
     &                  Z12   , Z13   , Z21   , Z22   , Z23   , Z31   ,
     &                  Z32   , Z33   , Zmol  , Zmos )
        IMPLICIT NONE
        REAL*8  EPOCH , Eccp  , Argpp , Tc    , Inclp , nodep, Np    ,
     &          SNODM , CNODM , SINIM , COSIM , SINOMM, COSOMM, DAY   ,
     &          E3    , Ee2   , Eccm  , EMSQ  , GAM   , RTemSq, Se2   ,
     &          Peo   , Pgho  , Pho   , PInco , Plo   ,
     &          Se3   , Sgh2  , Sgh3  , Sgh4  , Sh2   , Sh3   , Si2   ,
     &          Si3   , Sl2   , Sl3   , Sl4   , S1    , S2    , S3    ,
     &          S4    , S5    , S6    , S7    , SS1   , SS2   , SS3   ,
     &          SS4   , SS5   , SS6   , SS7   , SZ1   , SZ2   , SZ3   ,
     &          SZ11  , SZ12  , SZ13  , SZ21  , SZ22  , SZ23  , SZ31  ,
     &          SZ32  , SZ33  , Xgh2  , Xgh3  , Xgh4  , Xh2   , Xh3   ,
     &          Xi2   , Xi3   , Xl2   , Xl3   , Xl4   , Xn    , Z1    ,
     &          Z2    , Z3    , Z11   , Z12   , Z13   , Z21   , Z22   ,
     &          Z23   , Z31   , Z32   , Z33   , Zmol  , Zmos

* -------------------------- Local Variables --------------------------
        REAL*8  c1ss  , c1L   , zcosis, zsinis, zsings, zcosgs,
     &          Zes   , zel
        INTEGER LsFlg
        REAL*8  a1    , a2    , a3    , a4    , a5    , a6    , a7    ,
     &          a8    , a9    , a10   , betasq, cc    , ctem  , stem  ,
     &          x1    , x2    , x3    , x4    , x5    , x6    , x7    ,
     &          x8    , xnodce, xnoi  , zcosg , zcosgl, zcosh , zcoshl,
     &          zcosi , zcosil, zsing , zsingl, zsinh , zsinhl, zsini ,
     &          zsinil, zx    , zy

        CHARACTER Help
        INCLUDE 'ASTMATH.CMN'

* ------------------------------ Constants ----------------------------
        ZES    =  0.01675D0
        ZEL    =  0.05490D0
        C1SS   =  2.9864797D-6
        C1L    =  4.7968065D-7
        ZSINIS =  0.39785416D0
        ZCOSIS =  0.91744867D0
        ZCOSGS =  0.1945905D0
        ZSINGS = -0.98088458D0

* ----------------- DEEP SPACE PERIODICS INITIALIZATION ---------------
        XN     = Np
        Eccm   = Eccp
        SNODM  = DSIN(nodep)
        CNODM  = DCOS(nodep)
        SINOMM = DSIN(Argpp)
        COSOMM = DCOS(Argpp)
        SINIM  = DSIN(Inclp)
        COSIM  = DCOS(Inclp)
        EMSQ   = Eccm*Eccm
        BETASQ = 1.0D0-EMSQ
        RTEMSQ = DSQRT(BETASQ)

* --------------------- INITIALIZE LUNAR SOLAR TERMS ------------------
        PEO    = 0.0D0
        PINCO  = 0.0D0
        PLO    = 0.0D0
        PGHO   = 0.0D0
        PHO    = 0.0D0
        DAY    = EPOCH + 18261.5D0 + TC/1440.0D0
        XNODCE = DMOD(4.5236020D0 - 9.2422029D-4*DAY,TwoPi)
        STEM   = DSIN(XNODCE)
        CTEM   = DCOS(XNODCE)
        ZCOSIL = 0.91375164D0 - 0.03568096D0*CTEM
        ZSINIL = DSQRT(1.0D0 - ZCOSIL*ZCOSIL)
        ZSINHL = 0.089683511D0*STEM / ZSINIL
        ZCOSHL = DSQRT(1.0D0 - ZSINHL*ZSINHL)
        GAM    = 5.8351514D0 + 0.0019443680D0*DAY
        ZX     = 0.39785416D0*STEM/ZSINIL
        ZY     = ZCOSHL*CTEM + 0.91744867D0*ZSINHL*STEM
        ZX     = DATAN2(ZX,ZY)
        ZX     = GAM + ZX - XNODCE
        ZCOSGL = DCOS(ZX)
        ZSINGL = DSIN(ZX)

* ---------------------------- DO SOLAR TERMS -------------------------
        ZCOSG = ZCOSGS
        ZSING = ZSINGS
        ZCOSI = ZCOSIS
        ZSINI = ZSINIS
        ZCOSH = CNODM
        ZSINH = SNODM
        CC    = C1SS
        XNOI  = 1.0D0 / XN

        DO LSFlg = 1,2
            A1 =   ZCOSG*ZCOSH + ZSING*ZCOSI*ZSINH
            A3 =  -ZSING*ZCOSH + ZCOSG*ZCOSI*ZSINH
            A7 =  -ZCOSG*ZSINH + ZSING*ZCOSI*ZCOSH
            A8 =   ZSING*ZSINI
            A9 =   ZSING*ZSINH + ZCOSG*ZCOSI*ZCOSH
            A10=   ZCOSG*ZSINI
            A2 =   COSIM*A7 + SINIM*A8
            A4 =   COSIM*A9 + SINIM*A10
            A5 =  -SINIM*A7 + COSIM*A8
            A6 =  -SINIM*A9 + COSIM*A10

            X1 =  A1*COSOMM + A2*SINOMM
            X2 =  A3*COSOMM + A4*SINOMM
            X3 = -A1*SINOMM + A2*COSOMM
            X4 = -A3*SINOMM + A4*COSOMM
            X5 =  A5*SINOMM
            X6 =  A6*SINOMM
            X7 =  A5*COSOMM
            X8 =  A6*COSOMM

            Z31= 12.0D0*X1*X1 - 3.0D0*X3*X3
            Z32= 24.0D0*X1*X2 - 6.0D0*X3*X4
            Z33= 12.0D0*X2*X2 - 3.0D0*X4*X4
            Z1 =  3.0D0* (A1*A1 + A2*A2) + Z31*EMSQ
            Z2 =  6.0D0* (A1*A3 + A2*A4) + Z32*EMSQ
            Z3 =  3.0D0* (A3*A3 + A4*A4) + Z33*EMSQ
            Z11= -6.0D0*A1*A5 + EMSQ* (-24.0D0*X1*X7-6.0D0*X3*X5)
            Z12= -6.0D0* (A1*A6 + A3*A5) + EMSQ*
     &           ( -24.0D0*(X2*X7+X1*X8) - 6.0D0*(X3*X6+X4*X5) )
            Z13= -6.0D0*A3*A6 + EMSQ*(-24.0D0*X2*X8 - 6.0D0*X4*X6)
            Z21=  6.0D0*A2*A5 + EMSQ*(24.0D0*X1*X5-6.0D0*X3*X7)
            Z22=  6.0D0* (A4*A5 + A2*A6) + EMSQ*
     &           (  24.0D0*(X2*X5+X1*X6) - 6.0D0*(X4*X7+X3*X8) )
            Z23=  6.0D0*A4*A6 + EMSQ*(24.0D0*X2*X6 - 6.0D0*X4*X8)
            Z1 = Z1 + Z1 + BETASQ*Z31
            Z2 = Z2 + Z2 + BETASQ*Z32
            Z3 = Z3 + Z3 + BETASQ*Z33
            S3 = CC*XNOI
            S2 = -0.5D0*S3 / RTEMSQ
            S4 = S3*RTEMSQ
            S1 = -15.0D0*Eccm*S4
            S5 = X1*X3 + X2*X4
            S6 = X2*X3 + X1*X4
            S7 = X2*X4 - X1*X3

* ------------------------------ DO LUNAR TERMS -----------------------
            IF (LSFLG.eq.1) THEN
                SS1   = S1
                SS2   = S2
                SS3   = S3
                SS4   = S4
                SS5   = S5
                SS6   = S6
                SS7   = S7
                SZ1   = Z1
                SZ2   = Z2
                SZ3   = Z3
                SZ11  = Z11
                SZ12  = Z12
                SZ13  = Z13
                SZ21  = Z21
                SZ22  = Z22
                SZ23  = Z23
                SZ31  = Z31
                SZ32  = Z32
                SZ33  = Z33
                ZCOSG = ZCOSGL
                ZSING = ZSINGL
                ZCOSI = ZCOSIL
                ZSINI = ZSINIL
                ZCOSH = ZCOSHL*CNODM+ZSINHL*SNODM
                ZSINH = SNODM*ZCOSHL-CNODM*ZSINHL
                CC    = C1L
              ENDIF
          ENDDO

        ZMOL  = DMOD( 4.7199672D0 + 0.22997150D0*DAY-GAM,TwoPi )
        ZMOS  = DMOD( 6.2565837D0 + 0.017201977D0*DAY,TwoPi )

* ---------------------------- DO SOLAR TERMS -------------------------
        SE2 =   2.0D0*SS1*SS6
        SE3 =   2.0D0*SS1*SS7
        SI2 =   2.0D0*SS2*SZ12
        SI3 =   2.0D0*SS2*(SZ13-SZ11)
        SL2 =  -2.0D0*SS3*SZ2
        SL3 =  -2.0D0*SS3*(SZ3-SZ1)
        SL4 =  -2.0D0*SS3*(-21.0D0-9.0D0*EMSQ)*ZES
        SGH2=   2.0D0*SS4*SZ32
        SGH3=   2.0D0*SS4*(SZ33-SZ31)
        SGH4= -18.0D0*SS4*ZES
        SH2 =  -2.0D0*SS2*SZ22
        SH3 =  -2.0D0*SS2*(SZ23-SZ21)

* ---------------------------- DO LUNAR TERMS -------------------------
        EE2 =   2.0D0*S1*S6
        E3  =   2.0D0*S1*S7
        XI2 =   2.0D0*S2*Z12
        XI3 =   2.0D0*S2*(Z13-Z11)
        XL2 =  -2.0D0*S3*Z2
        XL3 =  -2.0D0*S3*(Z3-Z1)
        XL4 =  -2.0D0*S3*(-21.0D0-9.0D0*EMSQ)*ZEL
        XGH2=   2.0D0*S4*Z32
        XGH3=   2.0D0*S4*(Z33-Z31)
        XGH4= -18.0D0*S4*ZEL
        XH2 =  -2.0D0*S2*Z22
        XH3 =  -2.0D0*S2*(Z23-Z21)


      RETURN
      END  !  dscom


* -----------------------------------------------------------------------------
*
*                           SUBROUTINE DSINIT
*
*  This Subroutine provides Deep Space contributions to Mean Motion Dot due
*    to geopotential resonance with half day and one day orbits.
*
*  Inputs        :
*    Cosim, Sinim-
*    Emsq        - Eccentricity squared
*    Argpo       - Argument of Perigee
*    S1, S2, S3, S4, S5      -
*    Ss1, Ss2, Ss3, Ss4, Ss5 -
*    Sz1, Sz3, Sz11, Sz13, Sz21, Sz23, Sz31, Sz33 -
*    T           - Time
*    Tc          -
*    GSTo        - Greenwich sidereal time                   rad
*    Mo          - Mean Anomaly
*    MDot        - Mean Anomaly dot (rate)
*    No          - Mean Motion
*    nodeo       - right ascension of ascending node
*    nodeDot     - right ascension of ascending node dot (rate)
*    XPIDOT      -
*    Z1, Z3, Z11, Z13, Z21, Z23, Z31, Z33 -
*    Eccm        - Eccentricity
*    Argpm       - Argument of perigee
*    Inclm       - Inclination
*    Mm          - Mean Anomaly
*    Xn          - Mean Motion
*    nodem       - right ascension of ascending node
*
*  Outputs       :
*    Eccm        - Eccentricity
*    Argpm       - Argument of perigee
*    Inclm       - Inclination
*    Mm          - Mean Anomaly
*    Xn          - Mean motion
*    nodem       - right ascension of ascending node
*    IRez        - Resonance flags              0-none, 1-One day,  2-Half day
*    Atime       -
*    D2201, D2211, D3210, D3222, D4410, D4422, D5220, D5232, D5421, D5433       -
*    Dedt        -
*    Didt        -
*    DMDT        -
*    DNDT        -
*    DNODT       -
*    DOMDT       -
*    Del1, Del2, Del3 -
*    Ses  , Sghl , Sghs , Sgs  , Shl  , Shs  , Sis  , Sls
*    THETA       -
*    Xfact       -
*    Xlamo       -
*    Xli         -
*    Xni
*
*  Locals        :
*    ainv2       -
*    aonv        -
*    cosisq      -
*    eoc         -
*    f220, f221, f311, f321, f322, f330, f441, f442, f522, f523, f542, f543        -
*    g200, g201, g211, g300, g310, g322, g410, g422, g520, g521, g532, g533        -
*    sini2       -
*    temp, temp1 -
*    Theta       -
*    xno2        -
*
*  Coupling      :
*    getgravconst-
*
*  references    :
*    hoots, roehrich, norad spacetrack report #3 1980
*    hoots, norad spacetrack report #6 1986
*    hoots, schumacher and glover 2004
*    vallado, crawford, hujsak, kelso  2006
*------------------------------------------------------------------------------

      SUBROUTINE DSINIT( whichconst,
     &                   Cosim , Emsq  , Argpo , S1    , S2    , S3    ,
     &                   S4    , S5    , Sinim , Ss1   , Ss2   , Ss3   ,
     &                   Ss4   , Ss5   , Sz1   , Sz3   , Sz11  , Sz13  ,
     &                   Sz21  , Sz23  , Sz31  , Sz33  , T     , Tc    ,
     &                   GSTo  , Mo    , MDot  , No    , nodeo ,nodeDot,
     &                   XPIDOT, Z1    , Z3    , Z11   , Z13   , Z21   ,
     &                   Z23   , Z31   , Z33   , Ecco  , EccSq ,
     &                   Eccm  , Argpm , Inclm , Mm    , Xn    , nodem,
     &                   IREZ  , Atime , D2201 , D2211 , D3210 , D3222 ,
     &                   D4410 , D4422 , D5220 , D5232 , D5421 , D5433 ,
     &                   Dedt  , Didt  , DMDT  , DNDT  , DNODT , DOMDT ,
     &                   Del1  , Del2  , Del3  , Xfact , Xlamo , Xli   ,
     &                   Xni )
        IMPLICIT NONE
        INTEGER  IRez, whichconst
        REAL*8   Cosim , Emsq  , Argpo , S1    , S2    , S3    , S4    ,
     &           S5    , Sinim , Ss1   , Ss2   , Ss3   , Ss4   , Ss5   ,
     &           Sz1   , Sz3   , Sz11  , Sz13  , Sz21  , Sz23  , Sz31  ,
     &           Sz33  , T     , Tc    , GSTo  , Mo    , MDot  , No    ,
     &           nodeo ,nodeDot,XPIDOT , Z1    , Z3    , Z11   , Z13   ,
     &           Z21   , Z23   , Z31   , Z33   , Eccm  , Argpm , Inclm ,
     &           Mm    , Xn    , nodem , Atime , D2201 , D2211 , D3210 ,
     &           D3222 , D4410 , D4422 , D5220 , D5232 , D5421 , D5433 ,
     &           Dedt  , Didt  , DMDT  , DNDT  , DNODT , DOMDT , Del1  ,
     &           Del2  , Del3  , Xfact , Xlamo , Xli   , Xni   , Ecco  ,
     &           Eccsq

* -------------------------- Local Variables --------------------------
        REAL*8  ainv2 , aonv  , cosisq, eoc   , f220  , f221  , f311  ,
     &          f321  , f322  , f330  , f441  , f442  , f522  , f523  ,
     &          f542  , f543  , g200  , g201  , g211  , g300  , g310  ,
     &          g322  , g410  , g422  , g520  , g521  , g532  , g533  ,
     &          ses   , sgs   , sghl  , sghs  , shs   , shl   , sis   ,
     &          sini2 , sls   , temp  , temp1 , Theta , xno2
        REAL*8  Q22   , Q31   , Q33   , ROOT22, ROOT44, ROOT54,
     &          RPTim , Root32, Root52, X2o3  , XKe   , Znl   ,
     &          Zns,  Emo, emsqo , tumin, mu, radiusearthkm, j2, j3, j4,
     &          j3oj2

        CHARACTER Help
        INCLUDE 'ASTMATH.CMN'

        Q22    = 1.7891679D-6
        Q31    = 2.1460748D-6
        Q33    = 2.2123015D-7
        ROOT22 = 1.7891679D-6
        ROOT44 = 7.3636953D-9
        ROOT54 = 2.1765803D-9
        RPTim  = 4.37526908801129966D-3 ! this equates to 7.29211514668855e-5 rad/sec
        Root32 = 3.7393792D-7
        Root52 = 1.1428639D-7
        X2o3   = 2.0D0 / 3.0D0
        ZNL    = 1.5835218D-4
        ZNS    = 1.19459D-5

        ! sgp4fix identify constants and allow alternate values
        CALL getgravconst( whichconst, tumin, mu, radiusearthkm, xke,
     &       j2, j3, j4, j3oj2 )

* ------------------------ DEEP SPACE INITIALIZATION ------------------
        IREZ = 0
        IF ((XN.lt.0.0052359877D0).AND.(XN.GT.0.0034906585D0)) THEN
            IREZ = 1
          ENDIF
        IF ((XN.ge.8.26D-3).AND.(XN.LE.9.24D-3).AND.(Eccm.GE.0.5D0))THEN
            IREZ = 2
          ENDIF

* ---------------------------- DO SOLAR TERMS -------------------------
        SES  =  SS1*ZNS*SS5
        SIS  =  SS2*ZNS*(SZ11 + SZ13)
        SLS  = -ZNS*SS3*(SZ1 + SZ3 - 14.0D0 - 6.0D0*EMSQ)
        SGHS =  SS4*ZNS*(SZ31 + SZ33 - 6.0D0)
        SHS  = -ZNS*SS2*(SZ21 + SZ23)
        
c       sgp4fix for 180 deg incl
        IF ((Inclm.lt.5.2359877D-2).or.(Inclm.gt.pi-5.2359877D-2)) THEN
            SHS = 0.0D0
          ENDIF
        IF (SINIM.ne.0.0D0) THEN
            SHS = SHS/SINIM
          ENDIF
        SGS  = SGHS - COSIM*SHS

* ----------------------------- DO LUNAR TERMS ------------------------
        DEDT = SES + S1*ZNL*S5
        DIDT = SIS + S2*ZNL*(Z11 + Z13)
        DMDT = SLS - ZNL*S3*(Z1 + Z3 - 14.0D0 - 6.0D0*EMSQ)
        SGHL = S4*ZNL*(Z31 + Z33 - 6.0D0)
        SHL  = -ZNL*S2*(Z21 + Z23)
        
c       sgp4fix for 180 deg incl
        IF ((Inclm.lt.5.2359877D-2).or.(Inclm.gt.pi-5.2359877D-2)) THEN
            SHL = 0.0D0
          ENDIF
        DOMDT= SGS+SGHL
        DNODT= SHS
        IF (SINIM .ne. 0.0D0) THEN
            DOMDT = DOMDT-COSIM/SINIM*SHL
            DNODT = DNODT+SHL/SINIM
        ENDIF

* --------------- CALCULATE DEEP SPACE RESONANCE EFFECTS --------------
        DNDT  = 0.0D0
        THETA = DMOD(GSTo + TC*RPTIM,TwoPi)
        Eccm  = Eccm + DEDT*T
        emsq  = eccm**2
        Inclm = Inclm + DIDT*T
        Argpm = Argpm + DOMDT*T
        nodem = nodem + DNODT*T
        Mm    = Mm + DMDT*T
        

* ------------------ Initialize the resonance terms -------------------
        IF (IREZ .ne. 0) THEN
            AONV = (XN/XKE)**X2O3

* -------------- GEOPOTENTIAL RESONANCE FOR 12 HOUR ORBITS ------------
        IF (IREZ .eq. 2) THEN
            COSISQ = COSIM*COSIM
            emo    = Eccm
            emsqo  = emsq
            Eccm   = ecco
            emsq   = eccsq
            EOC    = Eccm*EMSQ
            G201   = -0.306D0-(Eccm-0.64D0)*0.440D0
            IF (Eccm.le.0.65D0) THEN
                G211 =   3.616D0 -  13.2470D0*Eccm +  16.2900D0*EMSQ
                G310 = -19.302D0 + 117.3900D0*Eccm - 228.4190D0*EMSQ +
     &                 156.591D0*EOC
                G322 = -18.9068D0+ 109.7927D0*Eccm - 214.6334D0*EMSQ +
     &                 146.5816D0*EOC
                G410 = -41.122D0 + 242.6940D0*Eccm - 471.0940D0*EMSQ +
     &                 313.953D0*EOC
                G422 =-146.407D0 + 841.8800D0*Eccm - 1629.014D0*EMSQ +
     &                1083.435D0*EOC
                G520 =-532.114D0 + 3017.977D0*Eccm - 5740.032D0*EMSQ +
     &                3708.276D0*EOC
              ELSE
                G211 =  -72.099D0 +  331.819D0*Eccm -  508.738D0*EMSQ +
     &                  266.724D0*EOC
                G310 = -346.844D0 + 1582.851D0*Eccm - 2415.925D0*EMSQ +
     &                 1246.113D0*EOC
                G322 = -342.585D0 + 1554.908D0*Eccm - 2366.899D0*EMSQ +
     &                 1215.972D0*EOC
                G410 =-1052.797D0 + 4758.686D0*Eccm - 7193.992D0*EMSQ +
     &                 3651.957D0*EOC
                G422 =-3581.690D0 + 16178.11D0*Eccm - 24462.77D0*EMSQ +
     &                12422.52D0*EOC
                IF (Eccm.gt.0.715D0) THEN
                    G520 =-5149.66D0 + 29936.92D0*Eccm -54087.36D0*EMSQ
     &                    + 31324.56D0*EOC
                  ELSE
                    G520 = 1464.74D0 -  4664.75D0*Eccm + 3763.64D0*EMSQ
                  ENDIF
              ENDIF
            IF (Eccm.lt.0.7D0) THEN
                G533 = -919.22770D0 + 4988.6100D0*Eccm-9064.7700D0*EMSQ
     &               + 5542.21D0*EOC
                G521 = -822.71072D0 + 4568.6173D0*Eccm-8491.4146D0*EMSQ
     &               + 5337.524D0*EOC
                G532 = -853.66600D0 + 4690.2500D0*Eccm-8624.7700D0*EMSQ
     &               + 5341.4D0*EOC
              ELSE
                G533 =-37995.780D0 + 161616.52D0*Eccm-229838.20D0*EMSQ+
     &              109377.94D0*EOC
                G521 =-51752.104D0 + 218913.95D0*Eccm-309468.16D0*EMSQ+
     &              146349.42D0*EOC
                G532 =-40023.880D0 + 170470.89D0*Eccm-242699.48D0*EMSQ+
     &              115605.82D0*EOC
              ENDIF
            SINI2 =  SINIM*SINIM
            F220  =  0.75D0* (1.0D0+2.0D0*COSIM+COSISQ)
            F221  =  1.5D0*SINI2
            F321  =  1.875D0*SINIM * (1.0D0-2.0D0*COSIM-3.0D0*COSISQ)
            F322  = -1.875D0*SINIM * (1.0D0+2.0D0*COSIM-3.0D0*COSISQ)
            F441  = 35.0D0*SINI2*F220
            F442  = 39.3750D0*SINI2*SINI2
            F522  =  9.84375D0*SINIM * (SINI2* (1.0D0-2.0D0*COSIM-
     &               5.0D0*COSISQ)+0.33333333D0 * (-2.0D0+4.0D0*COSIM+
     &               6.0D0*COSISQ) )
            F523  =  SINIM * (4.92187512D0*SINI2 * (-2.0D0-4.0D0*COSIM+
     &               10.0D0*COSISQ) + 6.56250012D0*
     &               (1.0D0+2.0D0*COSIM-3.0D0*COSISQ))
            F542  =  29.53125D0*SINIM * (2.0D0-8.0D0*COSIM+COSISQ*
     &               (-12.0D0+8.0D0*COSIM+10.0D0*COSISQ) )
            F543  = 29.53125D0*SINIM * (-2.0D0-8.0D0*COSIM+COSISQ*
     &               (12.0D0+8.0D0*COSIM-10.0D0*COSISQ) )

            XNO2   =  XN * XN
            AINV2  =  AONV * AONV
            TEMP1  =  3.0D0*XNO2*AINV2
            TEMP   =  TEMP1*ROOT22
            D2201  =  TEMP*F220*G201
            D2211  =  TEMP*F221*G211
            TEMP1  =  TEMP1*AONV
            TEMP   =  TEMP1*ROOT32
            D3210  =  TEMP*F321*G310
            D3222  =  TEMP*F322*G322
            TEMP1  =  TEMP1*AONV
            TEMP   =  2.0D0*TEMP1*ROOT44
            D4410  =  TEMP*F441*G410
            D4422  =  TEMP*F442*G422
            TEMP1  =  TEMP1*AONV
            TEMP   =  TEMP1*ROOT52
            D5220  =  TEMP*F522*G520
            D5232  =  TEMP*F523*G532
            TEMP   =  2.0D0*TEMP1*ROOT54
            D5421  =  TEMP*F542*G521
            D5433  =  TEMP*F543*G533
            XLAMO  =  DMOD(Mo+nodeo+nodeo-THETA-THETA,TwoPi)
            XFACT  = MDot + DMDT + 2.0D0 * (nodeDot+DNODT-RPTIM) - No

            Eccm = emo
            emsq = emsqo
          ENDIF

        IF (Irez .eq. 1) THEN
* -------------------- SYNCHRONOUS RESONANCE TERMS --------------------
            G200  = 1.0D0 + EMSQ * (-2.5D0+0.8125D0*EMSQ)
            G310  = 1.0D0 + 2.0D0*EMSQ
            G300  = 1.0D0 + EMSQ * (-6.0D0+6.60937D0*EMSQ)
            F220  = 0.75D0 * (1.0D0+COSIM) * (1.0D0+COSIM)
            F311  = 0.9375D0*SINIM*SINIM*
     &               (1.0D0+3.0D0*COSIM) - 0.75D0*(1.0D0+COSIM)
            F330  = 1.0D0+COSIM
            F330  = 1.875D0*F330*F330*F330
            DEL1  = 3.0D0*XN*XN*AONV*AONV
            DEL2  = 2.0D0*DEL1*F220*G200*Q22
            DEL3  = 3.0D0*DEL1*F330*G300*Q33*AONV
            DEL1  = DEL1*F311*G310*Q31*AONV
            XLAMO = DMOD(Mo+nodeo+Argpo-THETA,TwoPi)
            XFACT = MDot + XPIDOT - RPTIM + DMDT + DOMDT + DNODT - No
          ENDIF

* ---------------- FOR SGP4, INITIALIZE THE INTEGRATOR ----------------
         XLI   = XLAMO
         XNI   = No
         ATIME = 0.0D0
         XN    = No + DNDT
      ENDIF ! Ires non-zero

      RETURN
      END  ! end dsinit


* -----------------------------------------------------------------------------
*
*                           SUBROUTINE DSPACE
*
*  This Subroutine provides deep space contributions to mean elements for
*    perturbing third body.  these effects have been averaged over one
*    revolution of the sun and moon.  for earth resonance effects, the
*    effects have been averaged over no revolutions of the satellite.
*    (mean motion)
*
*  author        : david vallado                  719-573-2600   28 jun 2005
*
*  inputs        :
*    d2201, d2211, d3210, d3222, d4410, d4422, d5220, d5232, d5421, d5433       -
*    dedt        -
*    del1, del2, del3  -
*    didt        -
*    dmdt        -
*    dnodt       -
*    domdt       -
*    irez        - flag for resonance           0-none, 1-one day, 2-half day
*    argpo       - argument of perigee
*    argpdot     - argument of perigee dot (rate)
*    t           - time
*    tc          -
*    gsto        - gst
*    xfact       -
*    xlamo       -
*    no          - mean motion
*    atime       -
*    em          - eccentricity
*    ft          -
*    argpm       - argument of perigee
*    inclm       - inclination
*    xli         -
*    mm          - mean anomaly
*    xni         - mean motion
*    nodem       - right ascension of ascending node
*
*  outputs       :
*    atime       -
*    em          - eccentricity
*    argpm       - argument of perigee
*    inclm       - inclination
*    xli         -
*    mm          - mean anomaly
*    xni         -
*    nodem       - right ascension of ascending node
*    dndt        -
*    nm          - mean motion
*
*
*  coupling      :
*    none        -
*
*  references    :
*    hoots, roehrich, norad spacetrack report #3 1980
*    hoots, norad spacetrack report #6 1986
*    hoots, schumacher and glover 2004
*    vallado, crawford, hujsak, kelso  2006
*------------------------------------------------------------------------------

      SUBROUTINE DSPACE( IRez  , D2201 , D2211 , D3210 , D3222 , D4410 ,
     &                   D4422 , D5220 , D5232 , D5421 , D5433 , Dedt  ,
     &                   Del1  , Del2  , Del3  , Didt  , Dmdt  , Dnodt ,
     &                   Domdt , Argpo , ArgpDot, T    , TC    , GSTo  ,
     &                   Xfact , Xlamo , No    ,
     &                   Atime , Eccm  , Argpm , Inclm , Xli   , Mm  ,
     &                   XNi   , nodem, Dndt  , XN  )
        IMPLICIT NONE
        INTEGER  IRez
        Real*8   D2201 , D2211 , D3210 , D3222 , D4410 , D4422 , D5220 ,
     &           D5232 , D5421 , D5433 , Dedt  , Del1  , Del2  , Del3  ,
     &           Didt  , Dmdt  , Dnodt , Domdt , Argpo , ArgpDot,T     ,
     &           TC    , GSTo  , Xfact , Xlamo , No    , Atime , Eccm  ,
     &           Argpm , Inclm , Xli   , Mm    , Xni   , nodem, Dndt  ,
     &           XN

* -------------------------- Local Variables --------------------------
        INTEGER  iretn , iret
        REAL*8   Delt  , Ft    , theta , x2li  , x2omi , xl    , xldot ,
     &           xnddt , xndt  , xomi
        REAL*8   G22   , G32   , G44   , G52   , G54   , Fasx2 ,
     &           Fasx4 , Fasx6 , RPtim , Step2 , Stepn , Stepp

        COMMON /DebugHelp/ Help
        CHARACTER Help
        INCLUDE 'ASTMATH.CMN'

* ----------------------------- Constants -----------------------------
        FASX2 = 0.13130908D0
        FASX4 = 2.8843198D0
        FASX6 = 0.37448087D0
        G22   = 5.7686396D0
        G32   = 0.95240898D0
        G44   = 1.8014998D0
        G52   = 1.0508330D0
        G54   = 4.4108898D0
        RPTIM = 4.37526908801129966D-3
        STEPP =    720.0D0
        STEPN =   -720.0D0
        STEP2 = 259200.0D0

* --------------- CALCULATE DEEP SPACE RESONANCE EFFECTS --------------
        DNDT  = 0.0D0
        THETA = DMOD(GSTo + TC*RPTIM,TwoPi)
        Eccm  = Eccm + DEDT*T

        Inclm = Inclm + DIDT*T
        Argpm = Argpm + DOMDT*T
        nodem = nodem + DNODT*T
        Mm    = Mm + DMDT*T

c   sgp4fix for negative inclinations
c   the following if statement should be commented out
c        IF(Inclm .lt. 0.0D0) THEN
c            Inclm  = -Inclm
c            Argpm  = Argpm-PI
c            nodem = nodem+PI
c          ENDIF

c   sgp4fix for propagator problems
c   the following integration works for negative time steps and periods
c   the specific changes are unknown because the original code was so convoluted
c      sgp4fix take out atime = 0.0 and fix for faster operation
        Ft    = 0.0D0      ! Just in case - should be set in loops if used.

        IF (IREZ .ne. 0) THEN
* ----- UPDATE RESONANCES : NUMERICAL (EULER-MACLAURIN) INTEGRATION ---
* ---------------------------- EPOCH RESTART --------------------------
         ! sgp4fix streamline check
         IF ((atime .eq. 0.0D0) .or. (t * atime .le. 0.0D0) .or. 
     &       (dabs(t) .lt. dabs(atime)) ) THEN
               atime  = 0.0D0
               xni    = no
               xli    = xlamo
            ENDIF
           ! sgp4fix move check outside loop
           IF (t .gt. 0.0D0) THEN
               delt = stepp
             else
               delt = stepn
             ENDIF

            iretn = 381 ! added for do loop
            iret  =   0 ! added for loop
            DO WHILE (IRetn.eq.381)

* --------------------------- DOT TERMS CALCULATED --------------------
* ------------------- NEAR - SYNCHRONOUS RESONANCE TERMS --------------
            IF (IREZ .ne. 2) THEN
                XNDT  = DEL1*DSIN(XLI-FASX2) +
     &                  DEL2*DSIN(2.0D0*(XLI-FASX4)) +
     &                  DEL3*DSIN(3.0D0*(XLI-FASX6))
                XLDOT = XNI + XFACT
                XNDDT = DEL1*DCOS(XLI-FASX2) +
     &            2.0D0*DEL2*DCOS(2.0D0*(XLI-FASX4)) +
     &            3.0D0*DEL3*DCOS(3.0D0*(XLI-FASX6))
                XNDDT = XNDDT*XLDOT
              ELSE

* --------------------- NEAR - HALF-DAY RESONANCE TERMS ---------------
                XOMI = Argpo + ArgpDot*ATIME
                X2OMI= XOMI + XOMI
                X2LI = XLI + XLI
                XNDT = D2201*DSIN(X2OMI+XLI-G22) + D2211*DSIN(XLI-G22) +
     &                 D3210*DSIN( XOMI+XLI-G32) +
     &                 D3222*DSIN(-XOMI+XLI-G32) +
     &                 D4410*DSIN(X2OMI+X2LI-G44)+ D4422*DSIN(X2LI-G44)+
     &                 D5220*DSIN( XOMI+XLI-G52) +
     &                 D5232*DSIN(-XOMI+XLI-G52) +
     &                 D5421*DSIN( XOMI+X2LI-G54)+
     &                 D5433*DSIN(-XOMI+X2LI-G54)
                XLDOT = XNI+XFACT
                XNDDT = D2201*DCOS(X2OMI+XLI-G22) + D2211*DCOS(XLI-G22)+
     &                  D3210*DCOS( XOMI+XLI-G32) +
     &                  D3222*DCOS(-XOMI+XLI-G32) +
     &                  D5220*DCOS( XOMI+XLI-G52) +
     &                  D5232*DCOS(-XOMI+XLI-G52) +
     &                  2.0D0*(D4410*DCOS(X2OMI+X2LI-G44) +
     &                  D4422*DCOS(X2LI-G44) +
     &                  D5421*DCOS( XOMI+X2LI-G54) +
     &                  D5433*DCOS(-XOMI+X2LI-G54))
                XNDDT = XNDDT*XLDOT
              ENDIF

* ------------------------------- INTEGRATOR --------------------------
              !  sgp4fix move end checks to end of routine
              IF (DABS(T-ATIME).ge.STEPP) THEN
                  IRET  = 0
                  IRETN = 381
                ELSE
                  FT    = T-ATIME
                  IRETN = 0
                ENDIF

              IF (IRETN.EQ.381) THEN
                  XLI   = XLI + XLDOT*DELT + XNDT*STEP2
                  XNI   = XNI + XNDT*DELT + XNDDT*STEP2
                  ATIME = ATIME + DELT
                ENDIF

              ENDDO

            XN = XNI + XNDT*FT  + XNDDT*FT*FT*0.5D0
            XL = XLI + XLDOT*FT + XNDT*FT*FT*0.5D0
            IF(IREZ .ne. 1) THEN
                Mm   = XL-2.0D0*nodem+2.0D0*THETA
                DNDT = XN-No
              ELSE
                Mm   = XL-nodem-Argpm+THETA
                DNDT = XN-No
              ENDIF

            XN = No + DNDT
          ENDIF

      RETURN
      END  ! end dspace

* -----------------------------------------------------------------------------
*
*                           SUBROUTINE JDay1
*
*  This subroutine finds the Julian date given the Year, Month, Day, and Time.
*
*  Author        : David Vallado                  719-573-2600    1 Mar 2001
*
*  Inputs          Description                    Range / Units
*    Year        - Year                           1900 .. 2100
*    Mon         - Month                          1 .. 12
*    Day         - Day                            1 .. 28,29,30,31
*    Hr          - Universal Time Hour            0 .. 23
*    Min         - Universal Time Min             0 .. 59
*    Sec         - Universal Time Sec             0.0D0 .. 59.999D0
*    WhichType   - Julian .or. Gregorian calender   'J' .or. 'G'
*
*  Outputs       :
*    JD          - Julian Date                    days from 4713 BC
*
*  Locals        :
*    B           - Var to aid Gregorian dates
*
*  Coupling      :
*    None.
*
*  References    :
*    Vallado       2007, 189, Alg 14, Ex 3-14
* -----------------------------------------------------------------------------

      SUBROUTINE JDAY1        ( Year,Mon,Day,Hr,Min, Sec, JD )
        IMPLICIT NONE
        INTEGER Year, Mon, Day, Hr, Min
        REAL*8  Sec, JD

        ! --------------------  Implementation   ----------------------
        JD= 367.0D0 * Year
     &        - INT( (7* (Year+INT ( (Mon+9)/12.0) ) ) * 0.25D0 )
     &        + INT( 275*Mon / 9.0 )
     &        + Day + 1721013.5D0
     &        + ( (Sec/60.0D0 + Min ) / 60.0D0 + Hr ) / 24.0D0
*     &      - 0.5D0*DSIGN(1.0D0, 100.0D0*Year + Mon - 190002.5D0) + 0.5D0
      RETURN
      END  ! end jday1


* -----------------------------------------------------------------------------
*
*                           SUBROUTINE DAYS2MDHMS
*
*  This subroutine converts the day of the year, days, to the equivalent month
*    day, hour, Minute and second.
*
*  Algorithm     : Set up array for the Number of days per month
*                  Find Leap Year - be sure to account for the 400 years
*                  Loop through a Temp value for WHILE the value is .lt. the days
*                  Perform INTEGER conversions to the correct day and month
*                  Convert remainder into H M S using type conversions
*
*  Author        : David Vallado                  719-573-2600    1 Mar 2001
*
*  Inputs          Description                    Range / Units
*    Year        - Year                          +1900 .. 2100+
*    Days        - Julian Day of the year         0.0D0  .. 366.0D0
*
*  OutPuts       :
*    Mon         - Month                          1 .. 12
*    Day         - Day                            1 .. 28,29,30,31
*    Hr          - Hour                           0 .. 23
*    Min         - Minute                         0 .. 59
*    Sec         - Second                         0.0D0 .. 59.999D0
*
*  Locals        :
*    DayofYr     - Day of year
*    Temp        - Temporary REAL*8 values
*    IntTemp     - Temporary INTEGER value
*    i           - Index
*    LMonth[12]  - INTEGER Array containing the Number of days per month
*
*  Coupling      :
*    None.
* -----------------------------------------------------------------------------

      SUBROUTINE DAYS2MDHMS  ( Year,Days,  Mon,Day,Hr,Min,Sec )
        IMPLICIT NONE
        REAL*8 Days,Sec
        INTEGER Year, Mon, Day, Hr, Min
* ----------------------------  Locals  -------------------------------
        INTEGER IntTemp,i,DayofYr, LMonth(12)
        REAL*8 Temp

        ! --------------------  Implementation   ----------------------
        ! -------------- Set up array of days in month  ---------------
        DO i = 1,12
            LMonth(i) = 31
          ENDDO
        LMonth( 2) = 28
        LMonth( 4) = 30
        LMonth( 6) = 30
        LMonth( 9) = 30
        LMonth(11) = 30

        DayofYr= IDINT(Days )

        ! ---------------- Find month and Day of month ----------------
        IF (MOD(Year,4).eq.0) THEN
            LMonth(2)= 29
          ENDIF
        i= 1
        IntTemp= 0
        DO WHILE ( (DayofYr.gt.IntTemp + LMonth(i) ) .and. ( i.lt.12 ))
            IntTemp= IntTemp + LMonth(i)
            i= i+1
          ENDDO
        Mon= i
        Day= DayofYr - IntTemp

        ! ---------------- Find hours Minutes and seconds -------------
        Temp= (Days - DayofYr )*24.0D0
        Hr  = IDINT( Temp )
        Temp= (Temp-Hr) * 60.0D0
        Min = IDINT( Temp )
        Sec = (Temp-Min) * 60.0D0

      RETURN
      END  ! end days2mdhms


*******************************************************8
      Subroutine HMS (EHour, EHr, EMin, ESec)

      Implicit None 

      Real*8 EHour, TempMin1, TempMin2, TempSec, ESec
      Integer EHr, EMin

      EHr = Int(EHour)
      TempMin1=EHour-EHr
      TempMin2=Tempmin1*60.0d0
      EMin= Int(TempMin2)
      TempSec = TempMin2-EMin
      ESec = TempSec*60.0D0

      End


C******************************************
C  Put angle X in range 0 - RNG

      REAL*8 FUNCTION SETRNG(X,RNG)

      IMPLICIT NONE

      REAL*8 X,RNG
      REAL*8 Y
      LOGICAL NEG

      NEG = (X .LT. 0.0D0)

      Y = DABS(X)

      Y = DMOD(Y,RNG)

      IF (NEG) THEN
        SETRNG = -Y + RNG
      ELSE
        SETRNG = Y
      ENDIF

      RETURN
      END
c**********************************************
      subroutine MMdoy(YYYY,MM,DD,doy)
c
c     K=2 => common year     K=1 => leap year
c
      IMPLICIT NONE
      
      integer YYYY, DD, MM, doy, K

      K=2

      if (mod(yyyy,4).eq.0) K=1
      if ((mod(yyyy,100).eq.0).AND.(mod(yyyy,400).eq.0)) K=2

      doy = int((275./9.)*float(MM))-K*INT((float(MM)+9.)/12.)+DD-30

      return
      end
     

CCCC Subroutine JDAY

      SUBROUTINE JDay        ( Year,Mon,Day,Hr,Min, Sec, JD )
        IMPLICIT NONE
        INTEGER Year, Mon, Day, Hr, Min
        REAL*8  Sec, JD

        ! --------------------  Implementation   ----------------------
        JD= 367.0D0 * Year
     &        - INT( (7* (Year+INT ( (Mon+9)/12) ) ) * 0.25D0 )
     &        + INT( 275*Mon / 9 )
     &        + Day + 1721013.5D0
     &        + ( (Sec/60.0D0 + Min ) / 60.0D0 + Hr ) / 24.0D0
*     &      - 0.5D0*DSIGN(1.0D0, 100.0D0*Year + Mon - 190002.5D0) + 0.5D0
      RETURN
      END


!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
CCCCC  Subroutine KIRA12
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!    

      SUBROUTINE KIRA12(ifcirc)
      IMPLICIT NONE

      COMMON /global1/ PROPNAME, TELE, FILEIN
      COMMON /PTNG/ JD2K,POINT,R_TELOBS,R_TELPRED,NDET,CIRCFLAG
      COMMON /CONST/ RTD,DTR, SPA

      REAL*8 RAhh,RAmm,RAsec,DECdeg,DECmm,DECsec,Akm,mu,sec,julday

      INTEGER JDET,NDET,NDET0,overflag,hh,mmin,ifcirc
      INTEGER Jpred,Npred,Npred0,shade,shadowflag,nresid,jresid,jp
!      INTEGER icdt   ! jlf - 6-9-05

      parameter(mu=3.968e5)
      PARAMETER (NPRED0 = 3010)  ! MAX NUMBER OF OBS TO predict
!NPRED0 must = NDET0, for JD2K must have a large enough array size between the
!prediction and observation loops.
      PARAMETER (NDET0 = NPRED0)  ! MAX NUMBER OF OBS TO FIT

      CHARACTER*1 charifcirc,priority,zero
      CHARACTER*2 TELE,cMMY,cDDM,zero2
      CHARACTER*3 stele,cdoy
      CHARACTER*4 cYYYY
      CHARACTER*5 JSCnum
      CHARACTER*7 charepoch
      CHARACTER*80 CLINE(0:NDET0)
      CHARACTER*80 pCLINE(0:Npred0)
      character*30 datafile,mat1,mat2,mat3,mat5    ! jlf - 6-9-05
      CHARACTER*19 mat4
      CHARACTER*10 blurb                 ! jlf - 6-9-05
      CHARACTER*10 yyyymmdd              ! jlf - 6-9-05
      CHARACTER*69 tleout1, tleout2       ! esb 4-15-08
      CHARACTER*20 PROPNAME
      CHARACTER*16 outfile
      CHARACTER*19 newoutfile
      CHARACTER*19 FILEIN
      
      INTEGER ddm,mmy,doyi               ! jlf - 6-9-05
      REAL*8 sys,amag                    ! jlf - 6-9-05
      REAL*8 ra_old,dec_old,time_old     ! jlf - 6-9-05
      REAL*8 dpradt,dpdecdt,dphadt, temppra       ! kja - 3-14-07
      REAL*8 dpraaccel, dpdecaccel, dpradt_old, dpdecdt_old       ! kja - 10-05-07

      INTEGER YYYY, ID(1:ndet0),IDin, IDXX, jdstart
      REAL*8 DOY,DOY0,GETJD2K,JD2K(1:NDET0), lastdoy, TLEepoch(1:ndet0)
      REAL*8 XXX,HOUR,fracmonth, SPA,timearc

      REAL*8 R_TEL0(1:3),R_TELOBS(1:3,1:NDET0)
      REAL*8 R_TELP(1:3),R_TELPRED(1:3,1:NDET0)
      REAL*8 T,STG,COSSTG,SINSTG

      REAL*8 pSTG,pCOSSTG,pSINSTG
      REAL*8 pR_TEL(1:3,1:Npred0)
      REAL*8 dtdays, MM0,ECC0
      REAL*8 INCDEG0,APDEG0,RAANDEG0,MADEG0
      REAL*8 ROBS(1:3),RR
      REAL*8 POS(1:3),VEL(1:3)
      REAL*8 pra,pdec, deltara, deltadec,jd2kelm,prax, pray

      REAL*8 JD2Ktle
      
      REAL*8 MMDOTO2,MMDDOTO6

      REAL*8 DRADT,DDECDT
      REAL*8 RA,DEC
      REAL*8 COSRA,SINRA,COSDEC,SINDEC
      REAL*8 POINT(1:3,1:NDET0),  resid(1:ndet0)

      REAL*8 R_DUM(1:3),V_DUM(1:3)

      REAL*8 X(1:6),P(1:7,1:6),Y(1:7),DVEC
      REAL*8 RNUM,RR0,VV0
      REAL*8 FTOL
      INTEGER L,ITER,J,JJ,K, multiplerun,cdtdata, obsdata
      INTEGER Iecc0                   ! esb 4-15-08

      REAL*8 MM,ECC,INC,AP,RAAN,MANOM
      REAL*8 resid_min   ! jlf - 6-9-05
      LOGICAL INORBIT, up
      LOGICAL CIRCFLAG

      REAL*8 RTD,DTR
      REAL*8 rsum,rsigma
      INTEGER newndet,npts,seed(1)
      COMMON/residuals/resid

      RTD = 180.0D0 / ACOS(-1.0D0)
      DTR = 1.0D0 / RTD
      seed(1)=1234
        call random_seed(put=seed)

      if(NPRED0.ne.NDET0)then
      PRINT*,'Error: NPRED0 must = NDET0, because of interdependencies,'
      print*,'(such as JD2K), which require the largest array size of '
      print*,'the two. Please change and recompile.'
      stop
      endif
                         
C      OPEN(UNIT=2,FILE='Orb_est_data.txt',STATUS='OLD',ACTION='READ')
      PRINT*,'OBSERVATIONS FROM TELESCOPE(0=MODEST,2=0.9m,3=combo):   '
      READ*,obsdata !telescope used
      PRINT*,'PREDICTIONS FOR TELESCOPE (0=MODEST,2=0.9m):  '
      READ*,cdtdata !telescope used
      !PRINT*,'WHAT IS THE NAME OF THE PROP FILE:  '
      !READ*,datafile(1:30)
      PRINT*,'WHAT IS THE JSC NUMBER (7####):   '
      READ*,JSCnum
      datafile = PROPNAME
      !outfile(1:7) = PROPNAME(5:11)
      WRITE(outfile(1:11),FMT='(A7)')PROPNAME(5:15)
      !outfile(8:16) = JSCnum//'.txt'
      !WRITE(outfile(8:16),FMT='(A9)')JSCnum//'.txt'
      
      PRINT*,datafile
!      PRINT*,outfile

  5   continue

      resid_min=1.0d20
      
C     PREDICTION TELESCOPE POSITIONS
      IF(cdtdata.eq.1) then
c     Cloudcroft=CDT/LMT
      TELE='cd'
      R_TELP(1) = -1452.873d0  ! km
      R_TELP(2) = -5157.335d0
      R_TELP(3) =  3453.484d0
      elseif(cdtdata.eq.0) then
C     CHILE=MODEST 289.19373 (E) 30.16908 (S), 2216 m
      TELE = 'mo'
      R_TELP(1) = 1815.028D0      ! km
      R_TELP(2) = -5213.888D0
      R_TELP(3) = -3187.705D0
      elseif(cdtdata.eq.2)then
C     CHILE=0.9 meter 289.19336 (E) 30.16882 (S), 2216 m
      TELE = 'c9'
      R_TELP(1) = 1814.999D0     ! km
      R_TELP(2) = -5213.914D0
      R_TELP(3) = -3187.680D0
C     use the average of the two positions
      elseif(cdtdata.eq.3)then 
C     289.193545 (E), 30.16895 (S), 2216 m
      TELE = 'av'
      R_TELP(1) = 1815.014D0     ! km
      R_TELP(2) = -5213.901D0
      R_TELP(3) = -3187.692D0      
      endif
      
C     OBSERVATION TELESCOPE POSITION      
      IF(cdtdata.eq.1) then
c     Cloudcroft=CDT/LMT
      R_TEL0(1) = -1452.873d0  ! km
      R_TEL0(2) = -5157.335d0
      R_TEL0(3) =  3453.484d0
      elseif(obsdata.eq.0) then
C     CHILE=MODEST
      R_TEL0(1) = 1815.028D0      ! km
      R_TEL0(2) = -5213.888D0
      R_TEL0(3) = -3187.705D0   
      elseif(obsdata.eq.2)then
C     CHILE=0.9 meter
      R_TEL0(1) = 1814.999D0     ! km
      R_TEL0(2) = -5213.914D0
      R_TEL0(3) = -3187.680D0
      elseif(obsdata.eq.3)then
C     use the average of the two positions      
      R_TEL0(1) = 1815.014D0     ! km
      R_TEL0(2) = -5213.901D0
      R_TEL0(3) = -3187.692D0        
      endif
            
      !sets the priority of all files to 9
      priority = '9'
      
      !changes the name of the output file to use the telescope and type
      WRITE(unit=charifcirc,FMT='(I1)')ifcirc
      newoutfile(1:2) = tele
      newoutfile(3:3) = charifcirc
      newoutfile(4:4) = priority
      !WRITE(newoutfile(1:2),'(A2)')tele
      !WRITE(newoutfile(3:3),'(A1)')charifcirc
      WRITE(newoutfile(5:19),FMT='(A15)')datafile(5:19)
      
      OPEN(UNIT=3,FILE=newoutfile,STATUS='unknown')     ! jlf - 6-9-05
      
      !creates four files: 1.mlb with the orbit, 2.mlb with the propagation, 
      !3.mlb with the residuals, and .tle for the TLE file
      mat1=trim(newoutfile)//'1.mlb'
      mat2=trim(newoutfile)//'2.mlb'
      mat3=trim(newoutfile)//'3.mlb'
      mat4=TRIM(newoutfile(5:15))//'.tle.txt'
      mat5=trim(newoutfile)//'5.mlb'
      
      PRINT*,TRIM(mat1)  ! solutions
      PRINT*,TRIM(mat2)  ! predictions
      PRINT*,TRIM(mat3)  ! final residuals
      PRINT*,TRIM(mat4)  ! TLEs
      PRINT*,TRIM(mat5)  ! removed 3 sigma points

      open(unit=13,file=trim(mat1),status='replace')
      open(unit=14,file=trim(mat2),status='replace')
      open(unit=15,file=trim(mat3),status='replace')       ! esb 4-08
      open(unit=16,file=trim(mat4),status='replace')       ! esb 4-15-08
      open(unit=17,file=trim(mat5),status='replace')       ! esb 9-3-08

      stele(1:1) = '#'
      stele(2:3) = tele
      cdoy(1:3) = outfile(5:7)
      
      WRITE(13,FMT='(a3,2x,a3,2x,a19)')
     &     stele,cdoy,FILEIN
      WRITE(14,FMT='(a3,2x,a3,2x, a19)')
     &     stele,cdoy,FILEIN
      WRITE(15,FMT='(a3,2x,a3,2x, a19)')
     &     stele,cdoy,FILEIN
      WRITE(16,FMT='(a19,a6)')FILEIN,
     &     '     '
      WRITE(17,FMT='(a3,2x,a3,2x, a19)')
     &     stele,cdoy,FILEIN


      OPEN(UNIT=31,FILE=datafile,STATUS='old',ACTION='READ')  ! jlf - 6-9-05
      overflag=0
 10   READ(31,FMT='(A80)',END=11) CLINE(0)

      if(overflag.eq.1)then
      print*,'Error: Lines remain in Prediction part of input.'
      print*,'File = ',trim(datafile),' not closed at end of',
     &' prediction loop!'
      print*,'Note: This is probably due to an incorrect # of'
      print*,'predictions called in the input: please check this.'
      stop
      endif

      READ(UNIT=CLINE(0)(1:80),*) XXX,NDET, multiplerun
C      READ(UNIT=1,*)
C      READ(UNIT=1,*)blurb, ifcirc
!      PRINT*, xxx, ndet, multiplerun

      if(ndet.gt.NDET0)then
      print*,'Error: NDET0 < ndet!'
      print*,'NDET0=',NDET0
      print*,'ndet=',ndet
      print*,'Meaning=array sizes arent big enough!'
      stop
      endif

      WRITE(3,FMT='(//A80)') CLINE(0)(1:80)

        DO JDET = 1,NDET
      !   print*,'JDET=',JDET
          if (CDTdata.eq.1) then
c  Branch for CDT input
          READ(31,FMT='(A80)') CLINE(JDET)
!          PRINT*,CLINE(0)
          READ(UNIT=CLINE(jdet)(1:80),*) IDxx,yyyy,doy0,ID,hour,ra,dec
          WRITE(3,FMT='(A80)') CLINE(jdet)(1:80)
!          PRINT*, cline(jdet)


          DEC = dec/(3600)            ! degrees.
           RA = (ra/(3600))/COS(dec*dtr)              ! degrees.
           HOUR = hour/(3600)          ! hours.
!          PRINT*,yyyy,doy0,id,hour,ra,dec
c branch for MODEST/C9 input
          else
          READ(31,FMT='(A80)') CLINE(JDET)
          
c          PRINT*, CLINE(Jdet)(1:80)


c          WRITE(3,FMT='(A80)') CLINE(jdet)(1:80)
c          print*,cline(jdet)(1:80)
          read(UNIT=cline(jdet)(1:80),*) IDin,RA,Dec,
     &     sys,amag,yyyymmdd,hour

           read(yyyymmdd (1:4),FMT='(I4)') YYYY
           read(yyyymmdd (6:7),FMT='(I2)') MMY
           read(yyyymmdd (9:10),FMT='(I2)') DDM
           

           
          Call MMdoy(YYYY,MMY,DDM,doyi)

!         PRINT *, '++++', YYYY,MMY,DDM,doyi
      !print*,'Loading...'
          end if
          ID(jdet)=IDin
          doy0=doyi*1.d0
          DOY = DOY0 + HOUR / 24.0D0
          TLEepoch(jdet)=DOY 
          IF(jdet.eq.NDET) lastdoy = doy    ! esb 4-15-08 kja 4-16-08
          JD2K(JDET) = GETJD2K(YYYY,DOY)    ! days.

      write (3,FMT='(2x,i4,2x,3f12.6)') ID(jdet), jd2k(jdet), RA, DEC

          !deterime the epoch of date
           write(unit=cYYYY,FMT='(I4)')YYYY
           charepoch(1:4) = cYYYY
           charepoch(5:5) ='.'
           !write(unit=cMMY,FMT='(I2)')INT((MMY/12.0d0)*100)
           write(unit=cMMY,FMT='(I2)')INT((DOY/365.25)*100)
           charepoch(6:7) = cMMY
           !charepoch(8:9) = cDDM


C  Fix for precession
c  Meeus constants m and n in degrees instead of arcseconds
c     assume that T in centuries is small (0.02) so that secondary
c     terms in m and n are negilible
c  Observed RA and Dec are now mean positions of date/equator and not J2000.

          DRADT = 0.0128125D0
     &      + 5.56667D-3 * SIN(RA * DTR) * TAN(DEC * DTR)
          DDECDT = 5.56667D-3 * COS(RA * DTR)

          RA = RA + DRADT * JD2K(JDET) / 365.25D0
          DEC = DEC + DDECDT * JD2K(JDET) / 365.25D0
c       point is vector to (ra, dec) = geocentric positions of date
          COSRA = COS(RA * DTR)
          SINRA = SIN(RA * DTR)
          COSDEC = COS(DEC * DTR)
          SINDEC = SIN(DEC * DTR)
          POINT(1,JDET) = COSRA * COSDEC !first part of ECI conversion ~MFH
          POINT(2,JDET) = SINRA * COSDEC
          POINT(3,JDET) = SINDEC

c      Correct for Earth rotation at mean local sideral time  STG
c
          T = JD2K(JDET) / 36525.0D0
          STG = 280.46061837D0 + 360.98564736629D0 * JD2K(JDET)
          IF (STG .LT. 0.0D0) THEN
            STG = -MOD(-STG,360.0D0) + 360.0D0
          ELSE
            STG = MOD(STG,360.0D0)
          ENDIF
          STG = STG + T * T * (0.000387933 - T / 38710000.0D0)

          COSSTG = COS(STG * DTR)
          SINSTG = SIN(STG * DTR)
c       R_TELOBS is vector to observation sensor (geocentric) at mean local sideral time
c
          R_TELOBS(1,JDET) = R_TEL0(1) * COSSTG - R_TEL0(2) * SINSTG
          R_TELOBS(2,JDET) = R_TEL0(1) * SINSTG + R_TEL0(2) * COSSTG
          R_TELOBS(3,JDET) = R_TEL0(3)
          
c       R_TELPRED is vector to prediction sensor (geocentric) at mean local sideral time
c
          R_TELPRED(1,JDET) = R_TELP(1) * COSSTG - R_TELP(2) * SINSTG
          R_TELPRED(2,JDET) = R_TELP(1) * SINSTG + R_TELP(2) * COSSTG
          R_TELPRED(3,JDET) = R_TELP(3)
          
        END DO  ! JDET

c
c      test to see if we have an orbital arc of 30 minutes or longer
c
       timearc =(jd2k(ndet)-jd2k(1))*1440
       IF((ifcirc.ge.1).AND.(timearc.le.30.0))  then
       PRINT*,'TIMEARC(',timearc,') LESS THAN 30 MINUTES:',
     &'USE ONLY CIRCULAR SOLUTION'
      PRINT*,'IF ECCENTRIC SOLUTION STILL DESIRED PRESS ENTER',
     &'  OR CONTROL C to ABORT'
       PAUSE 30
       end if


        WRITE(3,FMT='(/"  NPTS    MM        Ecc        Inc       RAAN
     & AP      MANOM    delvec"/)')


      !ECI Coordinates of a fictional GEO orbit ~ MFH
 99     R_DUM(1) = POINT(1,1) * 42000.0D0       ! km
        R_DUM(2) = POINT(2,1) * 42000.0D0
        R_DUM(3) = POINT(3,1) * 42000.0D0
        V_DUM(1) = -POINT(2,1) * SQRT(398600.8D0 / 42000.0D0)
        V_DUM(2) = POINT(1,1) * SQRT(398600.8D0 / 42000.0D0)
        V_DUM(3) = 0.0D0

        X(1) = R_DUM(1) ! Pseudo-state-vector to describe elset
        X(2) = R_DUM(2) !   start with original vector
        X(3) = R_DUM(3)
        X(4) = V_DUM(1)
        X(5) = V_DUM(2)
        X(6) = V_DUM(3)


        FTOL = 1.0D-12

c      Set circflag true to limit orbit calculation to circular orbits
        CIRCFLAG = .true.

       DO L = 1,100 ! Repeat to make sure we're not in a rut
C      print*,'MID_IT=',L
          RR0 = SQRT(X(1)**2 + X(2)**2 + X(3)**2)
          VV0 = SQRT(X(4)**2 + X(5)**2 + X(6)**2)


          DO J = 1,7
            DO K = 1,6
              P(J,K) = X(K)
            END DO
          END DO

          DO J = 1,6
            CALL RANDOM_NUMBER(RNUM)
            P(J,1) = P(J,1) + (2.0D0 * RNUM - 1.0D0) * 1.0D-1 * RR0
            CALL RANDOM_NUMBER(RNUM)
            P(J,2) = P(J,2) + (2.0D0 * RNUM - 1.0D0) * 1.0D-1 * RR0
            CALL RANDOM_NUMBER(RNUM)
            P(J,3) = P(J,3) + (2.0D0 * RNUM - 1.0D0) * 1.0D-1 * RR0
           CALL RANDOM_NUMBER(RNUM)
            P(J,4) = P(J,4) + (2.0D0 * RNUM - 1.0D0) * 1.0D-1
     &                      * MAX(VV0,0.1D0)
            CALL RANDOM_NUMBER(RNUM)
            P(J,5) = P(J,5) + (2.0D0 * RNUM - 1.0D0) * 1.0D-1
     &                      * MAX(VV0,0.1D0)
            CALL RANDOM_NUMBER(RNUM)
            P(J,6) = P(J,6) + (2.0D0 * RNUM - 1.0D0) * 1.0D-1
     &                      * MAX(VV0,0.1D0)
          END DO

          DO J = 1,7
            DO K = 1,6
              X(K) = P(J,K)
            END DO
            Y(J) = DVEC(X)
          END DO




          CALL AMOEBA(P,Y,FTOL,ITER)

          JJ = 1
          DO J = 2,7
            IF (Y(J) .LT. Y(JJ))  JJ = J
          END DO

!          PRINT*,L,Y(JJ)
        
          DO K = 1,6
            X(K) = P(JJ,K)
          END DO


          IF (Y(JJ) .LT. 1.0D-20) GOTO 12  ! CLOSE ENOUGH!

        END DO  ! L

 12     CONTINUE


       FTOL = 1.0D-10
c^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

        if (ifcirc.eq.0) GO TO 13


c^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        CIRCFLAG = .FALSE.

        DO L = 1,100  ! Repeat to make sure we're not in a rut
!      print*,'ECC_ITERATION=',L
          RR0 = SQRT(X(1)**2 + X(2)**2 + X(3)**2)
          VV0 = SQRT(X(4)**2 + X(5)**2 + X(6)**2)


          DO J = 1,7
            DO K = 1,6
              P(J,K) = X(K)
            END DO
          END DO

          DO J = 1,6
            CALL RANDOM_NUMBER(RNUM)
            P(J,1) = P(J,1) + (2.0D0 * RNUM - 1.0D0) * 1.0D-2 * RR0
            CALL RANDOM_NUMBER(RNUM)
            P(J,2) = P(J,2) + (2.0D0 * RNUM - 1.0D0) * 1.0D-2 * RR0
            CALL RANDOM_NUMBER(RNUM)
            P(J,3) = P(J,3) + (2.0D0 * RNUM - 1.0D0) * 1.0D-2 * RR0
            CALL RANDOM_NUMBER(RNUM)
            P(J,4) = P(J,4) + (2.0D0 * RNUM - 1.0D0) * 1.0D-2
     &                      * MAX(VV0,0.01D0)
            CALL RANDOM_NUMBER(RNUM)
            P(J,5) = P(J,5) + (2.0D0 * RNUM - 1.0D0) * 1.0D-2
     &                      * MAX(VV0,0.01D0)
            CALL RANDOM_NUMBER(RNUM)
            P(J,6) = P(J,6) + (2.0D0 * RNUM - 1.0D0) * 1.0D-2
     &                      * MAX(VV0,0.01D0)
          END DO

          DO J = 1,7
            DO K = 1,6
              X(K) = P(J,K)
            END DO
            Y(J) = DVEC(X)


          END DO

          CALL AMOEBA(P,Y,FTOL,ITER)

          JJ = 1
          DO J = 2,7
            IF (Y(J) .LT. Y(JJ))  JJ = J
          END DO


c          PRINT*,L,Y(JJ)
        
          DO K = 1,6
            X(K) = P(JJ,K)
          END DO

          IF (Y(JJ) .LT. 1.0D-20) GOTO 13  ! CLOSE ENOUGH!

        END DO  ! L

 13     CONTINUE
c
c      code added to sum residuals and eliminate points with 3sigma residuals
c       esb 1/18/08
c
          rsum=0.0
          npts=ndet
          newndet=ndet
          do jdet=1,ndet

c        PRINT*,jdet,id(jdet),jd2k(jdet), resid(jdet)
          rsum=rsum+resid(jdet)*resid(jdet)

          end do
          rsigma=SQRT(rsum/ndet)

c          PRINT*,resid_min,rsigma
          if (rsigma.le.75) THEN
             lastdoy = TLEepoch(ndet)
             GO TO 9
          endif

   89         ndet=newndet

            do jdet=1,ndet
c      print here to see residuals when one is > 3sigma
c             PRINT*,ndet, jdet,id(jdet),jd2k(jdet), resid(jdet)
            jresid = jdet+nresid
             if (resid(jdet).ge.3*rsigma) then
c       print here to see rejected residual
c               PRINT*,newndet, jdet,id(jdet),jd2k(jdet),resid(jdet)
        PRINT*,'ID=',id(jdet),'Point has been removed.  Please check.'
          WRITE(17,FMT='(i4, 2f15.6)') ID(jdet),jd2k(jdet),resid(jdet)

               do jp=jdet,ndet

           POINT(1,jp) =  POINT(1,Jp+1)
           POINT(2,Jp) =  POINT(2,Jp+1)
           POINT(3,Jp) =  POINT(3,Jp+1)
           R_TELOBS(1,Jp) =  R_TELOBS(1,Jp+1)
           R_TELOBS(2,Jp) =  R_TELOBS(2,Jp+1)
           R_TELOBS(3,Jp) =  R_TELOBS(3,Jp+1)
           R_TELPRED(1,Jp) = R_TELPRED(1,Jp+1)
           R_TELPRED(2,Jp) = R_TELPRED(2,Jp+1)
           R_TELPRED(3,Jp) = R_TELPRED(3,Jp+1)
           JD2K(Jp) = JD2K(Jp+1)
           resid(jp) = resid(jp+1)
           ID(Jp) = ID(Jp+1)
               end do
               nresid = nresid+1
               newndet=newndet-1

c         PRINT*,'after',newndet, jdet,id(jdet),jd2k(jdet), resid(jdet)
c      PRINT*,'after',newndet, jdet+1,id(jdet+1),jd2k(jdet+1),
c     &   resid(jdet+1)
           GO TO 89
                END if

c           PRINT*,jdet,point(1,jdet)
c       PAUSE 0
           END do

c           PRINT*,ndet,resid_min,rsigma
           lastdoy=TLEepoch(ndet)

    9 continue
c
c     end of new code esb 1/18/08..................................
c
        DO K = 1,3
          R_DUM(K) = X(K)
          V_DUM(K) = X(K + 3)
        END DO

C  Use pseudo-vector to create final elset
  21     CALL ORBELMS(R_DUM,V_DUM,MM,ECC,INC,AP,RAAN,MANOM,INORBIT)

c      moved this if statement to before following test of Akm
c        so the last iteration would be tested and not the next to last
c           esb 1/23/08
c

        if (Y(JJ) .LE.(resid_min+0.01)) then

        mm0=mm
        ecc0=ecc
        incdeg0=inc
        apdeg0=ap
        raandeg0=raan
        madeg0=manom
        resid_min=y(jj)
        jdstart = jd2k(1)
        REWIND (15)
        wRITE(15,FMT='(a3,2x,a3,2x, a25, f6.2)')
     &     stele,cdoy,outfile,rsigma
        write (15,FMT= '(f12.6, f12.3)')
     &        ((jd2k(jdet)-jdstart-0.5), (resid(jdet)-rsigma), 
     &        jdet=1,ndet)

        end if
c      print here to get results of each set of iterations
c        PRINT*,resid_min,rsigma,jj,multiplerun
c      PAUSE 5

!      testRSAT=sqrt(R_DUM(1)**2+R_DUM(2)**2+R_DUM(3)**2)
      Akm= (mu/(MM/86400d0)**2d0)**(1d0/3d0)
!      print*,Akm,Akm*(1d0-ECC)
  	    if(Akm*(1d0-ECC).lt.6386.0D0)then! 6371 + 15 km atmospere
            print*,'Error: Estimated Orbit for ',trim(datafile)
            print*,'intersects the Earth!'
            print*,'ECC=',ECC,' Perigee=',Akm*(1d0-ECC),'km'
            stop
        endif





c        PRINT*,ID(JJ),MM,INC,RAAN,ECC

        WRITE(3,FMT='(i6,1X,F8.6,1X,g10.4,4(1X,F8.4),1X,G10.4)')
     &    Npts,MM,ECC,INC,RAAN,AP,manom,Y(JJ)

        WRITE(13,FMT='(i6,1X,F8.6,1X,g10.4,4(1X,F8.4),1X,G10.4)')
     &    Npts,MM,ECC,INC,RAAN,AP,manom,Y(JJ)


c     set epoch of elements to last observation time
       jd2kelm = jd2k(ndet)
       !jd2kelm = jd2k(1)
       !write(*,*)ndet
       !write(*,*)jd2kelm
       !write(*,*)lastdoy
C       jd2kelm = lastdoy


       multiplerun = multiplerun - 1
       if (multiplerun.ge.1) GO TO 99


c=============================esb added==================================
C     section to read in future positions and carry out predictions
C     for those positions based on last set of orbital elements
C
C     Read in number of positions


c
        READ(31,FMT='(A80)',ERR=115,END=114) pCLINE(0)
        READ(UNIT=pCLINE(0)(1:80),*) XXX,NPRED
        if(NPRED.gt.NDET0)then
            print*,'Error: NPRED > NDET0'
            print*,'NPRED=',NPRED
            print*,'NDET0=',NDET0
            print*,'Meaning the size of the JD2K array is too small'
            print*,'Increase NDET0/NPRED0 to accomodate please.'
            stop
        endif
          WRITE(3,FMT='(//A80)') pCLINE(0)(1:80)
!         write(77,FMT='(//A80)') pCLINE(0)(1:80)
      overflag=1
        do  jpred=1,npred
      !print*,'JPRED=',jpred
          READ(31,FMT='(A80)',ERR=115,END=114) pCLINE(Jpred)
!          WRITE(52,'(A80)')pCLINE(Jpred)

           read(UNIT=pcline(jpred)(1:80),*) yyyymmdd,hour

!          WRITE(53,'(1x,A10,1x,F20.10)')yyyymmdd,hour

           read(yyyymmdd (1:4),FMT='(I4)') YYYY
           read(yyyymmdd (6:7),FMT='(I2)') MMY
           read(yyyymmdd (9:10),FMT='(I2)') DDM
           
          Call MMdoy(YYYY,MMY,DDM,doyi)

          doy0=doyi*1.d0
          DOY = DOY0 + HOUR / 24.0D0

          JD2K(JPRED) = GETJD2K(YYYY,DOY)    ! days.

c      No need to correct for precession as the elements have been
c      determined for the current date from positions of date.

c      Correct for Earth rotation at mean local sideral time
c
          T = JD2K(Jpred) / 36525.0D0          ! T decimal centuries
          PSTG = 280.46061837D0 + 360.98564736629D0 * JD2K(Jpred)
          IF (PSTG .LT. 0.0D0) THEN
            PSTG = -MOD(-PSTG,360.0D0) + 360.0D0
          ELSE
            PSTG = MOD(PSTG,360.0D0)
          ENDIF
          PSTG = PSTG + T * T * (0.000387933 - T / 38710000.0D0)

          PCOSSTG = COS(PSTG * DTR)
          PSINSTG = SIN(PSTG * DTR)
c       pR_TEL is vector to sensor (geocentric) at mean local sideral time
c
          pR_TEL(1,Jpred) = R_TELP(1) * PCOSSTG - R_TELP(2) * PSINSTG
          pR_TEL(2,Jpred) = R_TELP(1) * PSINSTG + R_TELP(2) * PCOSSTG
          pR_TEL(3,Jpred) = R_TELP(3)


c     section to calculate the predicted position from orbital elements
c     now setup to use TLEs for specific dates
c       instead of TLEs from observed positions

        MMDOTO2 = 0.0D0
        MMDDOTO6 = 0.0D0
        UP = .TRUE.
        
        !JD2Ktle = GETJD2K(YYYY,lastdoy)    ! days 
        !WRITE(*,*)JD2Ktle
        !WRITE(*,*)JD2K(Jpred)

        !DTDAYS = JD2K(Jpred) - JD2Ktle
        !WRITE(*,*)DTDAYS
         
        DTDAYS = JD2K(Jpred) - JD2Kelm

c       WRITE(3,FMT='(/"   ID      MM       Ecc         Inc     RAAN
c     &  AP    MANOM     dtdays")')
c       WRITE(3,FMT='(i6,1X,F8.6,1X,g10.4,4(1X,F8.4),1X,G11.4)')
c     &    ID,MM0,ECC0,INcdeg0,RAANdeg0,APdeg0,madeg0,dtdays


      shade=0

      print*, 'SGPCalled'
       CALL SGP_CLASSIC(DTDAYS,MM0,ECC0,
     &                   INCDEG0,APDEG0,RAANDEG0,MADEG0,
     &                   MMDOTO2,MMDDOTO6,POS,VEL,UP)

      Akm= (mu/(MM0/86400d0)**2d0)**(1d0/3d0)
!      print*,'AKM0=',Akm,Akm*(1d0-ECC)
  	   if(Akm*(1d0-ECC).lt.6386.0D0)then! 6371 + 15 km atmospere
        print*,'Error: Estimated Orbit for ',trim(datafile)
        print*,'intersects the Earth!'
        print*,'ECC=',ECC,' Perigee=',Akm*(1d0-ECC),'km'
        stop
       endif
       if(.not.up)then
        print*,'Error: Satellite reentered. File=',trim(datafile)
	    goto 11
       endif
       if(sqrt(POS(1)**2+POS(2)**2+POS(3)**2).lt.6386d0)then
        print*,'Error! Position is below the minimum of 6386 km!'
        stop
       endif



!     write(54,'(9(ES20.10,1x))')DTDAYS,MM0,ECC0,INCDEG0,APDEG0,
!    &RAANDEG0,MADEG0,MMDOTO2,MMDDOTO6

      shade=shadowflag(POS,T)
33    format(/i5,3x,A11,1x,A30,A7,1x,I2,A1,I2,A1,F6.3)!hh:mm:ss
34    format(/i5,3x,A11,1x,A30,A7,1x,I1,I1,A1,I1,I1,A1,F6.3)!0h:0m:ss
35    format(/i5,3x,A11,1x,A30,A7,1x,I2,A1,I1,I1,A1,F6.3)!hh:0m:ss
36    format(/i5,3x,A11,1x,A30,A7,1x,I1,I1,A1,I2,A1,F6.3)!0h:mm:ss

c      hh=int(hour)
c      mmin=int((hour-dble(hh))*60d0)
c      sec=(60d0*(hour-dble(hh))-dble(mmin))*60d0
c following code is from TLERADECPfjuly2007 which rounds minutes correctly
c
      hh=int(hour)
      mmin=int((hour-dble(hh))*60d0)
      if (mmin.ge.60d0) then
         hh = hh+1
         mmin = 0.0d0
      endif
      sec=(60d0*(hour-dble(hh))-dble(mmin))*60.0d0 +0.0001d0
      IF(sec.ge.60.0d0) then
         sec = 0.0d0
         mmin = mmin +1
      endif


      call JDay(YYYY,MMY,DDM,hh,mmin,sec,Julday)
      !print*,'shade=',shade

      IF(shade.eq.1)then
      if(hh.ge.10.AND.mmin.ge.10)WRITE(3,33) jpred,'In Shadow',
     &trim(pCLINE(jpred)),' hrs = ',hh,':',mmin,':',sec
      if(hh.ge.10.AND.mmin.lt.10)WRITE(3,35) jpred,'In Shadow',
     &trim(pCLINE(jpred)),' hrs = ',hh,':',0,mmin,':',sec
      if(hh.lt.10.AND.mmin.lt.10)WRITE(3,34) jpred,'In Shadow',
     &trim(pCLINE(jpred)),' hrs = ',0,hh,':',0,mmin,':',sec
      if(hh.lt.10.AND.mmin.ge.10)WRITE(3,36) jpred,'In Shadow',
     &trim(pCLINE(jpred)),' hrs = ',0,hh,':',mmin,':',sec
      else
      if(hh.ge.10.AND.mmin.ge.10)WRITE(3,33) jpred,'Illuminated',
     &trim(pCLINE(jpred)),' hrs = ',hh,':',mmin,':',sec
      if(hh.ge.10.AND.mmin.lt.10)WRITE(3,35) jpred,'Illuminated',
     &trim(pCLINE(jpred)),' hrs = ',hh,':',0,mmin,':',sec
      if(hh.lt.10.AND.mmin.lt.10)WRITE(3,34) jpred,'Illuminated',
     &trim(pCLINE(jpred)),' hrs = ',0,hh,':',0,mmin,':',sec
      if(hh.lt.10.AND.mmin.ge.10)WRITE(3,36) jpred,'Illuminated',
     &trim(pCLINE(jpred)),' hrs = ',0,hh,':',mmin,':',sec


      endif

c     SGP_classic returns the topocentric state vector (pos) to the target
c     POS vector (geocentric) is the pointing to the target from the sensor
c     ROBS vector is the pointing to the target from the sensor at time pSTG
c     section to normalize the returned vector from SGP_classic

        ROBS(1) =  POS(1) - pR_TEL(1,Jpred)
        ROBS(2) =  POS(2) - pR_TEL(2,Jpred)
        ROBS(3) =  POS(3) - pR_TEL(3,Jpred)

        RR = SQRT(ROBS(1)**2 + ROBS(2)**2 + ROBS(3)**2)

        ROBS(1) = ROBS(1) / RR
        ROBS(2) = ROBS(2) / RR
        ROBS(3) = ROBS(3) / RR
c  ROBS is now unit vector from sensor to target (pra, pdec)

            
        pdec = ASIN(robs(3))*rtd
        prax = (ACOS(robs(1)/COS(pdec*dtr)))
        pray = (ASIN(robs(2)/COS(pdec*dtr)))
        pra = ATAN2(robs(2), robs(1))*rtd
        IF(pra<0) pra = pra +360.0d0
        pray = pray*rtd
        prax = prax*rtd

!        deltara = (ra - pra)*3600
!        deltadec = (dec - pdec)*3600


c       pra, pdec in degrees, dpradt, dpdecdt in arc-seconds/sec
        write(3,300)dtdays, pstg,pra,pdec

233    FORMAT(f20.10)

!      IF(jpred.ge.173)then
!      PRINT*,'test',jpred
!      endif
      

        RAhh=24d0*pra/360d0
        RAmm=60d0*(RAhh-DBLE(INT(RAhh)))
        RAsec=60d0*(RAmm-DBLE(INT(RAmm)))

        DECdeg=pdec
        DECmm=60d0*(pdec-DBLE(INT(pdec)))
        DECsec=60d0*(DECmm-DBLE(INT(DECmm)))
      if(DECdeg.gt.0d0)then
      WRITE(3,302)INT(RAhh),INT(RAmm),RAsec,INT(DECdeg),
     &abs(INT(DECmm)),abs(DECsec)
      else
      WRITE(3,3302)INT(RAhh),INT(RAmm),RAsec,abs(INT(DECdeg)),
     &abs(INT(DECmm)),abs(DECsec)
      endif

  300 FORMAT("dtdays = ",f12.5,"  pstg = ",f12.5," pra = ",f12.5," deg
     & pdec = ",f12.5,' deg')
  302 FORMAT("  pra = ",I2,'h ',I2,'m ',F7.4,"s    pdec = ",I3,'d ',I2,
     &'m ',F7.4,'s ')
 3302 FORMAT("  pra = ",I2,'h ',I2,'m ',F7.4,"s    pdec =  -",I2.2,'d ',
     &I2,'m ',F7.4,'s ')

c   calculate predicted rates
c   need at least 2 prediction times to get a rate.
c    branch added for initial rate case.
        IF(jpred.eq.1) then
           dpradt= 0.0d0
           dpdecdt= 0.0d0
           dphadt = 0.0d0
           dpraaccel = 0.0d0
           dpdecaccel = 0.0d0
        ELSEIF(jpred.eq.2) then
           dpraaccel = 0.0d0
           dpdecaccel = 0.0d0  
!          if (ra_old.ge.359.2.AND.pra.le.0.2) then
           IF (abs(pra-ra_old).GT.10d0) THEN
              IF(pra.lt.ra_old)then
              temppra = pra+360
              ELSEIF(pra.gt.ra_old)then
              temppra = 360-pra
              else
              PRINT*,'Equivalence!'
              pause
              endif
              dpradt=(temppra-ra_old)/(jd2k(jpred)-time_old)/24.0d0
!          elseif (ra_old.le.0.2.AND.pra.ge.359.2) then
!              temppra = 360-pra
!              dpradt=(temppra-ra_old)/(jd2k(jpred)-time_old)/24.0d0
          else              
              dpradt=(pra-ra_old)/(jd2k(jpred)-time_old)/24.0d0
          endif 
           dpdecdt=(pdec-dec_old)/(jd2k(jpred)-time_old)/24.0d0
           dphadt = 15.041 - dpradt     
        ELSE
        IF (abs(pra-ra_old).GT.10d0) THEN
              IF(pra.lt.ra_old)then
              temppra = pra+360
              ELSEIF(pra.gt.ra_old)then
              temppra = 360-pra
              else
              PRINT*,'Equivalence!'
              pause
              endif
!          if (ra_old.ge.359.2.AND.pra.le.0.2) then
 !              temppra = pra+360
!              dpradt=(temppra-ra_old)/(jd2k(jpred)-time_old)/24.0d0
 !         elseif (ra_old.le.0.2.AND.pra.ge.359.2) then
 !             temppra = 360-pra
              dpradt=(temppra-ra_old)/(jd2k(jpred)-time_old)/24.0d0
          else              
              dpradt=(pra-ra_old)/(jd2k(jpred)-time_old)/24.0d0
          endif 
        dpraaccel = (dpradt - dpradt_old)/(jd2k(jpred)-time_old)/24.0d0
          dpdecdt=(pdec-dec_old)/(jd2k(jpred)-time_old)/24.0d0
        dpdecaccel=(dpdecdt - dpdecdt_old)/(jd2k(jpred)-time_old)/24.0d0
          dphadt = 15.041 - dpradt
        ENDIF

        WRITE(3,FMT='("dpradt =  ",(f12.5),"   arc-sec/sec")') dpradt
        WRITE(3,FMT='("dpdecdt = ",(f12.5),"   arc-sec/sec")') dpdecdt
        WRITE(3,FMT='("dphadt = ",(f12.5),"   arc-sec/sec")') dphadt
        WRITE(3,FMT=
     &   '("dpraaccel =  ",(f12.5),"   arc-sec/sec2")')dpraaccel
        WRITE(3,FMT=
     &   '("dpdecaccel = ",(f12.5),"   arc-sec/sec2")')dpdecaccel
!      print*,jd2k(jpred),j2000,1d0
        WRITE(3,FMT=
     &   '("SPA = ",(f6.2),"   degrees")')SPA


      if(DECdeg.gt.0d0)then
        write(14,304)hour,hh,mmin,sec,dtdays, pstg,pra,pdec,INT(RAhh),
     &  INT(RAmm),RAsec,INT(DECdeg),abs(INT(DECmm)),abs(DECsec),
     &  dpradt,dpdecdt,dphadt,amag,charepoch, doyi,dpraaccel,
     &  dpdecaccel,shade,RR,SPA!,julday !jd2k(jpred)+j2000+1.5d0
      else
        write(14,3305)hour,hh,mmin,sec,dtdays,pstg,pra,pdec,INT(RAhh),
     &  INT(RAmm),RAsec,abs(INT(DECdeg)),abs(INT(DECmm)),abs(DECsec),
     &  dpradt,dpdecdt,dphadt,amag,charepoch, doyi ,dpraaccel,
     &  dpdecaccel,shade,RR,SPA!,julday !jd2k(jpred)+j2000+1.5d0
      endif
304   format(1x,F8.5,1x,I2,1x,I2,1x,F6.3,1x,4(f12.5,1x),2(I2,1x),F7.4,
     &1x,I3.2,1x,I2,1x,F7.4,1x,3(f12.5,1x),1x,F6.2,1x,A7,1X,
     & i3,1x, 2(f12.5,1X),1x,i1,1x,F10.3,1x,f6.2,1x,ES20.10)
           
3305  format(1x,F8.5,1x,I2,1x,I2,1x,F6.3,1x,4(f12.5,1x),2(I2,1x),F7.4,
     &1x,"-",I2.2,1x,I2,1x,F7.4,1x,3(f12.5,1x),1x,F6.2,1x,A7,1x,
     & i3,1x,2(f12.5,1X),1x,i1,1x,F10.3,1x,f6.2,1x,ES20.10)


        ra_old=pra
        dec_old=pdec
        dpradt_old = dpradt
        dpdecdt_old = dpdecdt
        time_old=jd2k(jpred)

        end do   ! jpred
c
c      create TLE output file            ! esb 4-15-08
      WRITE(UNIT=tleout1(1:1),FMT='(A1)')'1'
      WRITE(UNIT=tleout2(1:1),FMT='(A1)')'2'     
      WRITE(UNIT=tleout1(2:7),FMT='(1x,a5)')JSCnum
      WRITE(UNIT=tleout2(2:8),FMT='(1x,a5,1x)')JSCnum
      WRITE(UNIT=tleout1(8:9),FMT='(a2)')'M '
      WRITE(UNIT=tleout1(10:18),FMT='(a8,1X)')newoutfile(8:15)
      WRITE(UNIT=tleout1(19:20),FMT='(a2)')yyyymmdd(3:4)

      Iecc0=ecc0*10e06

      IF (lastdoy.lt.10) THEN !added to force the zero in the date
        zero2 = '00'
        WRITE(UNIT=tleout1(21:22),FMT='(a2)')zero2
        WRITE(UNIT=tleout1(23:33),FMT='(F10.8,1X)')lastdoy
      ELSEIF ((lastdoy.GT.9).AND.(lastdoy.LT.100)) THEN
        zero = '0'
        WRITE(UNIT=tleout1(21:22),FMT='(a1)')zero        
        WRITE(UNIT=tleout1(22:33),FMT='(F11.8,1X)') lastdoy
      ELSE
        WRITE(UNIT=tleout1(21:33),FMT='(F12.8,1X)') lastdoy        
      ENDIF
          
      WRITE(UNIT=tleout1(34:44),FMT='(a11)')' .00000000 '
      WRITE(UNIT=tleout1(45:53),FMT='(a9)') ' 00000-0 '
      WRITE(UNIT=tleout1(54:62),FMT='(a9)') ' 00000-0 '
      WRITE(UNIT=tleout1(62:69),FMT='(a8)') ' 0 00000'
      
      IF (incdeg0.lt.10) THEN !added to force the leading zeros
        zero2 = '00'
        WRITE(UNIT=tleout2(9:10),FMT='(A2)') zero2
        WRITE(UNIT=tleout2(11:17),FMT='(F6.4,1x)') incdeg0
      ELSEIF ((incdeg0.LT.100).and.(incdeg0.GT.9)) THEN
        zero = '0'
        WRITE(UNIT=tleout2(9:9),FMT='(A1)') zero
        WRITE(UNIT=tleout2(10:17),FMT='(F7.4,1x)') incdeg0
      ELSE
        WRITE(UNIT=tleout2(9:17),FMT='(F8.4,1x)') incdeg0
      ENDIF
      
      IF (raandeg0.lt.10) THEN !added to force the leading zeros
        zero2 = '00'
        WRITE(UNIT=tleout2(18:19),FMT='(A2)') zero2
        WRITE(UNIT=tleout2(20:26),FMT='(F6.4,1x)') raandeg0
      ELSEIF ((raandeg0.LT.100).and.(raandeg0.GE.10)) THEN
        zero = '0'
        WRITE(UNIT=tleout2(18:18),FMT='(A1)') zero
        WRITE(UNIT=tleout2(19:26),FMT='(F7.4,1x)') raandeg0
      ELSE
        WRITE(UNIT=tleout2(18:26),FMT='(F8.4,1x)') raandeg0
      ENDIF
      
      WRITE(UNIT=tleout2(27:34),FMT='(i7.7,1x)') Iecc0
      
      IF (apdeg0.lt.10) THEN !added to force the leading zeros
        zero2 = '00'
        WRITE(UNIT=tleout2(35:36),FMT='(A2)') zero2
        WRITE(UNIT=tleout2(37:43),FMT='(F6.4,1x)') apdeg0
      ELSEIF ((apdeg0.LT.100).and.(apdeg0.GE.10)) THEN
        zero = '0'
        WRITE(UNIT=tleout2(35:35),FMT='(A1)') zero
        WRITE(UNIT=tleout2(36:43),FMT='(F7.4,1x)') apdeg0
      ELSE
        WRITE(UNIT=tleout2(35:43),FMT='(F8.4,1x)') apdeg0
      ENDIF

      IF (madeg0.lt.10) THEN !added to force the leading zeros
        zero2 = '00'
        WRITE(UNIT=tleout2(44:45),FMT='(A2)') zero2
        WRITE(UNIT=tleout2(46:52),FMT='(F6.4,1x)') madeg0
      ELSEIF ((madeg0.LT.100).and.(madeg0.GE.10)) THEN
        zero = '0'
        WRITE(UNIT=tleout2(44:44),FMT='(A1)') zero
        WRITE(UNIT=tleout2(45:52),FMT='(F7.4,1x)') madeg0
      ELSE
        WRITE(UNIT=tleout2(44:52),FMT='(F8.4,1x)') madeg0
      ENDIF
      
      WRITE(UNIT=tleout2(53:63),FMT='(F11.8)') mm0
      WRITE(UNIT=tleout2(64:69),FMT='(a6)')'000000'
      WRITE(16,FMT='(A69)')tleout1
      WRITE(16,FMT='(A69)')tleout2
C      WRITE(16,FMT='(A69)')tleout2
C      PRINT*, tleout1
C      PRINT*, tleout2

c    end of TLE loop        ! esb 4-15-08

c====================================================================
c        END DO  ! JDET

       GOTO 10

 11     CLOSE(31,STATUS='KEEP')




C      GOTO 5
111   continue
C        CLOSE(2,STATUS='KEEP')

c      END DO  ! POSFILE
      close(31)
C      close(2)
      CLOSE(3,STATUS='KEEP')
      close(13)
      close(14)
c      CLOSE(15)
      CLOSE(16)
      CLOSE(17)

      GO TO 999
c      IF(cdtdata.EQ.-42)then            !esb removed 4-15-08
114   PRINT*,'End of file in ',trim(datafile)
      print*,'JPRED=',jpred
      print*,'This was a premature ending, and may mean'
      print*,'that the # of predictions was too many.'
      print*,'Please check the input file.'
      stop
115   print*,'There was a read error in the input file:',trim(datafile)
      print*,'Terminating process, please check the input file.'
      print*,'JPRED at failure was = ',jpred
      stop
c      endif                          !esb removed 4-15-08

  999 RETURN
      END SUBROUTINE


CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC
C  SUBROUTINE SURVEYCHASENEW
CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC

C     Last Change: 16 April 2008
C     KJA 16 April, made the propagation to start at 2200 UTday -1 and for 24 hours
     
C     KJA 13 Mar 2007
C     Changed the prop time to be rounded up to the minute, changed inputs

C     KJA 1 Mar 2007
C     New formats to RA,DEC, and MAG

C     This program will be used to build the prediction files for the 
C     survey and chance program

C     Inputs need to be one set of observations with the 
C     YYYYDOY.obj# line at the top and the observations following it

      SUBROUTINE SURVEYCHASENEW
      IMPLICIT NONE
      COMMON /global1/ PROPNAME, tele, FILEIN
      COMMON /global2/DATE, UT
      
      INTEGER YYYY,JDOY,NDET,MONTE,i
      INTEGER TIMEhrs, TIMEmins, JDET,DAY,HOUR
      
      DOUBLE PRECISION TIME, MINS,HOURb4mid,newUTb4mid, newUT
      DOUBLE PRECISION HOURnew, MINsnew, UT
      CHARACTER*20 FILEOUT,FILETEMP,FILEOUT2
      CHARACTER*58 XLINE,CLINE,TESTLINE
      CHARACTER*12 XXX
      CHARACTER*34 SHORT
      CHARACTER*10 DATE
      CHARACTER*8  BEGDATE,CHECKHOUR
      CHARACTER*51 CHARSTRING2
      CHARACTER*52 CHARSTRING1
      CHARACTER*20 PROPNAME
      CHARACTER*2 TELE
      CHARACTER*19 FILEIN
            
      PRINT*,'INPUT OBSERVATIONS FILE : '
      READ*,FILEIN(1:19)
      OPEN(UNIT=31,FILE=FILEIN,STATUS='OLD',ACTION='READ')
      
c      PRINT*,'HOW LONG DO YOU WANT THE PREDICTION (IN HOURS):  '
c      READ*,TIMEhrs

C     Changed the TIMEhrs to 26 to force a longer prediction time
      TIMEhrs = 50  
      TIMEmins = TIMEhrs*60
      
C      PRINT*,'OUTPUT ORBITS FILE : '

C      READ*,FILEOUT(1:20)
      FILEOUT='prop'//FILEIN(4:19)
      PROPNAME = FILEOUT
      
      OPEN(UNIT=32,FILE=FILEOUT,STATUS='UNKNOWN')     
        
      READ(31,FMT='(A58)') XLINE
      READ(XLINE,*) XXX,NDET
      PRINT*,XXX,NDET
      MONTE = 10
      i=0
      
C      CHECK TO SEE IF THERE ARE THE SAME NUMBER OF DETECTIONS AS EXPECTED
      DO while(.true.)
         READ(31,*,end = 15, err=10)TESTLINE
         i=i+1
         !if (i.gt.NDET) THEN
         !   WRITE(*,*)'Mismatch in detection number'
         !   GOTO 20
         !ENDIF
      ENDDO
 10    WRITE(*,*)'ERROR FOUND'
 15    CONTINUE

      NDET = i

      WRITE(32,FMT='(A12,1X,I4,1X,I2)')XXX,NDET,MONTE
c      PRINT*,xxx,ndet,monte
      REWIND(31)       
      
      READ(31,FMT='(A58)') XLINE
      
      DO JDET = 1,NDET  ! READ ALL THE OBS
         READ(31,FMT='(A58)') CLINE
	     WRITE(32,FMT='(A58)') CLINE
C	     WRITE(3,FMT='(A58)') CLINE
	     READ(CLINE(1:39),FMT='(A40)') SHORT
         READ(CLINE(40:49),FMT='(A10)') DATE
	     READ(CLINE(51:58),FMT='(F8.5)') UT
         READ(CLINE(51:58),FMT='(A8)') CHECKHOUR
	     READ(CHECKHOUR(1:2),FMT='(I2)')HOUR
C	     READ(CHECKHOUR(4:8),FMT='(F5.5)')MINS
c         PRINT*,HOUR, MINS
      END DO
      
c     Force all observations to start at 22 hrs on the previous day
      
C      RDMINS = (INT(MINS*60) + 1)
c      PRINT*,HOUR,MINS,RDMINS
C      HOURnew = HOUR
      HOURnew = 00
      HOURb4mid = 22
C      MINSnew = RDMINS
      MINSnew = 00
      newUT = HOURnew + MINSnew/60
      newUTb4mid = HOURb4mid + MINSnew/60
c      PRINT*,newUT,HOURnew,MINSnew

      WRITE(32,FMT='(A12,1X,I4)')XXX,TIMEmins     

C     Code forcing all predictions to be from 22 hrs previous day to 
C     24 hours on observing day 
      IF (HOUR.GT.21) THEN     
        DO JDET = 1,TIMEmins ! WRITE THE NUMBER OF FUTURE PREDICTIONS
          IF (JDET .EQ. 1) THEN
            TIME = 22
	        WRITE(32,FMT='(A10,5X,F11.8)')DATE,TIME
          ENDIF
          IF ((JDET .LE. 120).AND.(JDET .GE. 2)) THEN
	        TIME = TIME + 1.0d0/60.0d0 !ADDING an exact(esb1/29) MINUTE TO EACH TIME
            WRITE(32,FMT='(A10,5X,F11.8)')DATE,TIME	        
	      ENDIF
          IF (JDET .EQ. 121)THEN
            TIME = 0
            READ(DATE(1:8),FMT='(A8)')BEGDATE
	        READ(DATE(9:10),FMT='(I2)')DAY
	        DAY = DAY + 1
            WRITE(32,FMT='(A8,I2.2,5X,f11.8)')BEGDATE,DAY,TIME
          ENDIF
          IF ((JDET .GE. 122).AND.(JDET.LE.1560)) THEN 
	        TIME = TIME + 1.0d0/60.0d0 !ADDING an exact MINUTE TO EACH TIME
	        WRITE(32,FMT='(A8,I2.2,5X,f11.8)')BEGDATE,DAY,TIME
	      ENDIF
          IF (JDET .EQ. 1561)THEN
            TIME = 0
	        DAY = DAY + 2
            WRITE(32,FMT='(A8,I2.2,5X,f11.8)')BEGDATE,DAY,TIME
          ENDIF	      
	      IF (JDET.GE.1562) THEN
	      	TIME = TIME + 1.0d0/60.0d0 !ADDING an exact MINUTE TO EACH TIME
            WRITE(32,FMT='(A8,I2.2,5X,f11.8)')BEGDATE,DAY,TIME	      
	      ENDIF
        END DO
      ELSE   !FOR OBSERVATIONS THAT START AFTER MIDNIGHT
        DO JDET = 1,TIMEmins ! WRITE THE NUMBER OF FUTURE PREDICTIONS
          IF (JDET .EQ. 1) THEN
            TIME = 22
            READ(DATE(1:8),FMT='(A8)')BEGDATE
	        READ(DATE(9:10),FMT='(I2)')DAY
	        DAY = DAY - 1
	        WRITE(32,FMT='(A8,I2.2,5X,f11.8)')BEGDATE,DAY,TIME
          ENDIF
          IF ((JDET .LE. 120).AND.(JDET .GE. 2)) THEN
	        TIME = TIME + 1.0d0/60.0d0 !ADDING an exact(esb1/29) MINUTE TO EACH TIME
            WRITE(32,FMT='(A8,I2.2,5X,f11.8)')BEGDATE,DAY,TIME	        
	      ENDIF
          IF (JDET .EQ. 121)THEN
            TIME = 0
            WRITE(32,FMT='(A10,5X,F11.8)')DATE,TIME
          ENDIF
          IF ((JDET .GE. 122).AND.(JDET.LE.1560)) THEN  
	        TIME = TIME + 1.0d0/60.0d0 !ADDING an exact MINUTE TO EACH TIME
	        WRITE(32,FMT='(A10,5X,F11.8)')DATE,TIME
	      ENDIF
	      IF (JDET .EQ. 1561)THEN
            TIME = 0
	        DAY = DAY + 2
            WRITE(32,FMT='(A8,I2.2,5X,f11.8)')BEGDATE,DAY,TIME
          ENDIF	      
	      IF (JDET.GE.1562) THEN
	      	TIME = TIME + 1.0d0/60.0d0 !ADDING an exact MINUTE TO EACH TIME
            WRITE(32,FMT='(A8,I2.2,5X,f11.8)')BEGDATE,DAY,TIME	      
	      ENDIF
        END DO 
      ENDIF  
C     Code that determines the prop time from the observation time
   
C      IF (HOUR .GT. 21) THEN !loop for the before midnight observations
C        DO JDET = 1,TIMEmins ! WRITE THE NUMBER OF FUTURE PREDICTIONS
C          IF (JDET .EQ. 1) THEN
C	        TIME = RDMINS
C	        READ(DATE(1:8),FMT='(A8)')BEGDATE
C	        READ(DATE(9:10),FMT='(I2)')DAY
C	        DAY = DAY + 1
C	        IF (DAY .LT. 10) THEN
C	        ZERO = '0'
C	        WRITE(2,FMT='(A8,A1,I1,5X,f11.8)')BEGDATE,ZERO,DAY,TIME
C	        ELSE
C	        WRITE(2,FMT='(A8,I2,5X,F11.8)')BEGDATE,DAY,TIME
C	        ENDIF
C	     ELSE
C	        TIME = TIME + 1.0d0/60.0d0 !ADDING an exact(esb1/29) MINUTE TO EACH TIME
C	        IF (DAY .LT. 10) THEN
C	         ZERO = '0'
C	         WRITE(2,FMT='(A8,A1,I1,5X,F11.8)')BEGDATE,ZERO,DAY,TIME
C	         ELSE
C	         WRITE(2,FMT='(A8,I2,5X,F11.8)')BEGDATE,DAY,TIME
C	        ENDIF
C	     ENDIF
C        END DO
C      ELSE    !loop for the observations after midnight
C        DO JDET = 1,TIMEmins ! WRITE THE NUMBER OF FUTURE PREDICTIONS
C          IF (JDET .EQ. 1) THEN
C	        TIME = newUT  !KJA 3-13-07 observations right after detection
c                      format changed to f11.8 to avoid truncation of minutes
C	        WRITE(2,FMT='(A10,5X,F11.8)')DATE,TIME
C	      ELSE
C	        TIME = TIME + 1.0d0/60.0d0 !ADDING an exact MINUTE TO EACH TIME
C	        WRITE(2,FMT='(A10,5X,F11.8)')DATE,TIME
C	      ENDIF
C        END DO   
C      ENDIF

20    CONTINUE
    
      CLOSE(32)
      
      RETURN
      END SUBROUTINE