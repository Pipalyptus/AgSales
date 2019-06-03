#! /bin/sh -x
# Assumes a pwd of AgSales/ dir

# Run db setup
cd db/

# Use line below for setup with root user has a password of 'password'
mysql -u root --password=password -e 'source ./db_setup.sql;'

# Use line below for setup with root user has no password (i.e. Travis)
# mysql -e 'source ./db_setup.sql;'


# Hash passwords inserted
pwd
cd ../api
pwd
ls
node hashPWs.js

# Return to top level dir
cd ../
