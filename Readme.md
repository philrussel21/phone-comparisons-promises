### Problem Statement
Make sure that this is done with Promises.

You are required to replace your phone due to an unfortunate 
altercation between it and the wall.

#### You have a couple of tests that you run any big purchase against

1. It needs to have been made in the last 2 years.
2. You don't believe in the big 2. No Apple or Google
3. Can you afford it. Nan's birthday won't pay for itself so you can 
only afford $500.00

#### Each of these need:

- to be standalone functions
- to return an array of objects
- be eventually passed to the options function that will result
in an array of objects of the best options.

#### How to run the tests

inside the directory that we cloned the Challenge into, run:

> npm init -y

To Install the testing framework, run the install command: 

> npm install jest

We now need to Update the script that is found inside of the package.json file. it should look like:

"scripts": {
 "test": "jest" 
 }


inside your terminal you can now run: 

> npm test

