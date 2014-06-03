FORTRAN	= gfortran

.SUFFIXES: .for

%.o : %.for
	$(FORTRAN) -c $<

%.o : %.FOR
	$(FORTRAN) -c $<


testfor: testfor.o SGP4EXT.o SGP4IO.o SGP4UNIT.o
	$(FORTRAN) -o testfor testfor.o SGP4EXT.o SGP4IO.o SGP4UNIT.o

testfor.o: testfor.for
	$(FORTRAN) -c $<


clean:
	rm testfor testfor.o SGP4*.og