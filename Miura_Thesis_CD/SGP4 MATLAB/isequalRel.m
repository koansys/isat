function yesno = isequalRel(x,y,tol);
  yesno = ( abs(x-y) <= ( tol*max(abs(x),abs(y)) + eps) );
  if (!  yesno)
    printf("fail x=%e y=%e tol=%e\n", x, y, tol);
  end