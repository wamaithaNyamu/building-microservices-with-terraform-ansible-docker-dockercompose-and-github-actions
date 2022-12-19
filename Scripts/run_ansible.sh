#!/bin/bash
# this runs ansible on your laptop
# cd to root
cd ..
#  create environment variables from .env in the microservices folder file
cd microservices

# Read the .env file and export each key-value pair as an environment variable
while read line; do
  export $line
done < .env

# cd to root and run ansible
cd ..

ansible-playbook playbook.yml -u root --private-key=$HOME/.ssh/microservicekeys/id_rsa -i inventory.ini -vvv --extra-vars "source=microservices"

echo "----------------------- All done now! -----------------------"

exit
exec bash

