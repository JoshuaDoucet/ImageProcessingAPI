# ImageProcessingAPI
A web API for resizing images

Prerequisite Software
* Node >= 12.13 (For Sharp module)

The scripts needed to test/start/build the application
* To compile TS to JS run "npm run build"
* To run server run "npm run start"
* To use Prettier run "npm run prettier"
* To use ESLint run "npm run lint"
* To run Jasmine tests run "npm run jasmine"
* To build and run Jasmine test run "npm run test"

Any endpoints that should be accessed to test that you have created the required functionality.
* / enpoint is a simple homepage
* /api endpoint displays a TOC of the API tools and their paths
* /api/images enpoint resizes and/or displays images

Any other project functionality and Need-to-Know
* public/images/original directory contains original images for resizing
* public/images/generated directory is where resized/generated images are placed
* Source Typescript code is in the src folder
* Production Javascript code is compiled into the build folder
* Functionality for resizing images is in the src/utilities folder
* Unit tests are in the src/test folder