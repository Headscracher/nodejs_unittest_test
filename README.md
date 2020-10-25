[![Actions Status](https://github.com/{owner}/{repo}/workflows/{workflow_name}/badge.svg)](https://github.com/{owner}/{repo}/actions)

# NodeJS Unit-Test test
This is just a little repository to test the github ci functionalities, especially the build and test workflow.
For this example there are 3 unit test written with jest in one file.

The worflow itself is just calling the npm test script ( included in the package.json ), which is calling jest.
Jest itself is installed with yarn to see if there is any difference to the npm package for github. There is not.

VSCode is the IDE of my choise, so I created this litte test in there, too. Therefore I searched for the option to debug
my unit tests. The result is included in the launch.json

To be completely clear, this was just me messing around a bit with the github nodejs ci workflow.
Feel free to take anything thats helping you, but be aware of the fact that the way I created these unit tests and the scope of the the
unit tests are far of the best practise.