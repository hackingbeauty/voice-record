#!/bin/bash

set -o errexit # Exit on error
while getopts wx OPTION
do
     case $OPTION in
         w)
            NODE_PATH=./src ./node_modules/.bin/mocha --opts test/mocha.opts --require ignore-styles --compilers js:babel-register --recursive --watch
            ;;
         x)
            NODE_PATH=./src ./node_modules/.bin/mocha --opts test/mocha.opts --require ignore-styles --compilers js:babel-register --recursive
            ;;
     esac
done

if [ $? -eq 0 ] #If all tests pass, exit code will be 0
then
  exit 0
else
  exit 1
fi
