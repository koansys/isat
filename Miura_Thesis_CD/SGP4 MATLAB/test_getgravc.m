whichconst = 72;

# Format output for easier use as JavaScript objects.

[tumin, mu, radiusearthkm, xke, j2, j3, j4, j3oj2] = getgravc(721);
printf('721: { tumin: %16.12f, mu: %16.12f, radiusearthkm: %16.12f, xke: %16.12f, j2: %16.12f, j3: %16.12f, j4: %16.12f, j3oj2: %16.12f}\n',
       tumin, mu, radiusearthkm, xke, j2, j3, j4, j3oj2);
[tumin, mu, radiusearthkm, xke, j2, j3, j4, j3oj2] = getgravc(72);
printf(' 72: { tumin: %16.12f, mu: %16.12f, radiusearthkm: %16.12f, xke: %16.12f, j2: %16.12f, j3: %16.12f, j4: %16.12f, j3oj2: %16.12f}\n',
       tumin, mu, radiusearthkm, xke, j2, j3, j4, j3oj2);
[tumin, mu, radiusearthkm, xke, j2, j3, j4, j3oj2] = getgravc(84);
printf(' 84: { tumin: %16.12f, mu: %16.12f, radiusearthkm: %16.12f, xke: %16.12f, j2: %16.12f, j3: %16.12f, j4: %16.12f, j3oj2: %16.12f}\n',
       tumin, mu, radiusearthkm, xke, j2, j3, j4, j3oj2);

# And now for something completely different -- scientific notation!
# This reduces artifacts due to rounding in subsequent tests.

[tumin, mu, radiusearthkm, xke, j2, j3, j4, j3oj2] = getgravc(721);
printf('721: { tumin: %12e, mu: %12e, radiusearthkm: %12e, xke: %12e, j2: %12e, j3: %12e, j4: %12e, j3oj2: %12e}\n',
       tumin, mu, radiusearthkm, xke, j2, j3, j4, j3oj2);
[tumin, mu, radiusearthkm, xke, j2, j3, j4, j3oj2] = getgravc(72);
printf(' 72: { tumin: %12e, mu: %12e, radiusearthkm: %12e, xke: %12e, j2: %12e, j3: %12e, j4: %12e, j3oj2: %12e}\n',
       tumin, mu, radiusearthkm, xke, j2, j3, j4, j3oj2);
[tumin, mu, radiusearthkm, xke, j2, j3, j4, j3oj2] = getgravc(84);
printf(' 84: { tumin: %12e, mu: %12e, radiusearthkm: %12e, xke: %12e, j2: %12e, j3: %12e, j4: %12e, j3oj2: %12e}\n',
       tumin, mu, radiusearthkm, xke, j2, j3, j4, j3oj2);

### OK, we're not *really* testing MATLAB yet against itself,
### but generating these for use by JavaScript translation.