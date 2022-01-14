# ImageProcessingAPI
A web API for resizing images

Prerequisite Software
* Node >= 12.13 (For Sharp module)

To install other application dependencies run
* npm install

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
  * Example queries to the /api/images endpoint
  * Example query1: localhost:3000/api/images/?jpgname=fjord&width=500&height=200
  * Example query 2: localhost:3000/api/images/?jpgname=encenadaport&width=200&height=200
  * Example query 3: localhost:3000/api/images/?jpgname=palmtunnel&width=10&height=10
  * Example query 4: localhost:3000/api/images/?jpgname=santamonica&width=10&height=100
  * Example query 5: localhost:3000/api/images/?jpgname=icelandwaterfall&width=5000&height=5000
  * Example query 6: localhost:3000/api/images/?jpgname=icelandwaterfall
Any other project functionality and Need-to-Know
* public/images/original directory contains original images for resizing
* public/images/generated directory is where resized/generated images are placed
* Source Typescript code is in the src folder
* Production Javascript code is compiled into the build folder
* Functionality for resizing images is in the src/utilities folder
* Unit tests are in the src/test folder