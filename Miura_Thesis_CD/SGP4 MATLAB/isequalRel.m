%% tolerance test implementation from
%% http://stackoverflow.com/questions/2202641/how-do-i-compare-all-elements-of-two-arrays

function yesno = isequalRel(x,y,tol);
  yesno = ( abs(x-y) <= ( tol*max(abs(x),abs(y)) + eps) );
  if (!  yesno)
    printf("fail x=%e y=%e tol=%e\n", x, y, tol);
  end
