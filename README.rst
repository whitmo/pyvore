========
 pyvore
========

A multichannel chat room for gevent-socketio written in pyramid::

  https://github.com/sontek/gevent-socketio


Getting Started
---------------

You'll need python 2.6.5 or better and a redis instance running on the
default port.


Dev install steps:

- create/activate virtualenv.

- install pyvore from source::

  pip install -e git+https://github.com/whitmo/pyvore.git#egg=pyvore

- install pyvores un-released dependencies::

  pip install -r $VIRTUAL_ENV/src/pyvore/dev.txt


Go to the source directory::

  cd $VIRTUAL_ENV/src/pyvore

- populate the database::

  populate_pyvore development.ini

- Profit!::
  
  pserve development.ini


Credit
------

Written by John Anderson and A. Bourget at pycon 2012

