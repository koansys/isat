=====================
 Running With Apache
=====================

If you access your app with a file:/// protocol, it won't work as
cross-origin restrictions prevent image loading.  You have to serve it
with a web server like Apache.

On OS X, I use Apache.  I put the code in my home dir, and create a
symlink to it from the personal Sites directory the Mac gives you, e.g.:

  ~/Sites/sot -> ~/Projects/smd/sot

You'll have to tweak Apache for Mountain Lion to let it serve your
files.  Unser /etc/apache2/users/ create a file based on your
username, like `cshenton.conf` and inside, configure it to allow your
Sites path and also to use symlinks::

  <Directory "/Users/cshenton/Sites/">
             Options Indexes MultiViews FollowSymlinks
             AllowOverride All
             Order allow,deny
             Allow from all
  </Directory>


Of course you'll need to replace 'cshenton' with your username in the
filename and in the Directory specification.

Then restart apache so it reads the config::

  sudo apachectl restart

Now point your browser at your directory and the SOT visualization subdir:

  http://localhost/~cshenton/sot/viz/


