function [ok] = toler(got, expect)
  ## Does a *relative* comparison, returns ok=1 if within, ok=0 otherwise.
  TOLERANCE     = 1e-2;         # 1e-14
  if (got == expect)            # exact match
    ok = 1;
  else
    if ((got == 0 | expect == 0) & (abs(got) < TOLERANCE & abs(expect) < TOLERANCE)) # defend against divide by zero
      ok = 1;
    else
      reldiff = abs(got - expect) / max(abs(got), abs(expect));
      ok = (reldiff < TOLERANCE );
    end
  end
  if (ok == 0)
    printf("expect=%-12g   got=%-12g\n", expect, got);
  end

%% From http://stackoverflow.com/questions/2202641/how-do-i-compare-all-elements-of-two-arrays

%# absolute tolerance equality
isequalAbs = @(x,y,tol) ( abs(x-y) <= tol );

%# relative tolerance equality
isequalRel = @(x,y,tol) ( abs(x-y) <= ( tol*max(abs(x),abs(y)) + eps) );
