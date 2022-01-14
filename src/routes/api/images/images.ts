// images.ts

import express from 'express';
import path from 'path';
import fs from 'fs';

// Module for resizing images
import imgSizer from '../../../utilities/resizeImages';

//Router to be exported
const routes = express.Router();

/*
// This route endpoint is used for the Image Resizing API
// The api/images API tool is used to resize and display images
//
// The API route has 3 main URL query parameters
//   jpgname - the filename, without an extensiono, that exists on the API server at the public/images/original dir
//   width - the desired width of the image specified by jpgname
//   height - the desired width of the image specified by jpgname
//
// This endpoint will result in 1 of 4 responses
//   1. The API documentation when no query params are provided
//   2. An existing originalimage in its original size. Use jpgname param 
//   3. A generated resized image. Use jpgname, width, and height params
//   4. An error message for invalid params or image requests
//
// Example query 1: ?jpgname=fjord&width=500&height=200
// Example query 2: ?jpgname=encenadaport&width=200&height=200
// Example query 3: ?jpgname=palmtunnel&width=10&height=10
// Example query 4: ?jpgname=santamonica&width=10&height=100
// Example query 5: ?jpgname=icelandwaterfall&width=5000&height=5000
// Example query 6: ?jpgname=icelandwaterfall
*/

// API documentation strring display to user for visiting images root endpoint with no query params
const apiDocStr =
  '// This route is used for the Image Resizing API <br/> The api/images API tool is used to resize and display images <br/> <br/> The API route has 3 main URL query parameters<br/>   jpgname - the filename, without an extensiono, that exists on the API server at the public/images/original dir<br/>   width - the desired width of the image specified by jpgname<br/>   height - the desired width of the image specified by jpgname<br/><br/> This endpoint will result in 1 of 4 responses<br/>   1. The API documentation when no query params are provided<br/>   2. An existing originalimage in its original size. Use jpgname param <br/>   3. A generated resized image. Use jpgname, width, and height params<br/>   4. An error message for invalid params or image requests<br/><br/> Example query1: ?jpgname=fjord&width=500&height=200<br/> Example query 2: ?jpgname=encenadaport&width=200&height=200<br/> Example query 3: ?jpgname=palmtunnel&width=10&height=10<br/> Example query 4: ?jpgname=santamonica&width=10&height=100<br/> Example query 5: ?jpgname=icelandwaterfall&width=5000&height=5000<br/> Example query 6: ?jpgname=icelandwaterfall';

routes.get('/', async (req, res) => {
  // Flag for valid image dimmensions
  let dimsValid = true;
  // Get query params for resizing image
  const jpgname: string = (req.query.jpgname as unknown) as string;
  const widthStr: string = (req.query.width as unknown) as string;
  const heightStr: string = (req.query.height as unknown) as string;

  // If none of the API parameters are provided, display the Image Processing API documentation
  if (jpgname == undefined && widthStr == undefined && heightStr == undefined) {
    res.send(apiDocStr);
  }
  // If jpgname provided without width and height dimmensions
  else if (
    jpgname != undefined &&
    widthStr == undefined &&
    heightStr == undefined
  ) {
    const pathToImage = path.resolve(`public/images/original/${jpgname}.jpg`);
    // send image response
    res.sendFile(pathToImage);
  }
  // if the jpgname, width, and height are defined, check if the dims are valid
  else if (
    jpgname != undefined &&
    widthStr != undefined &&
    heightStr != undefined
  ) {
    // Attempt to convert width and height params to numbers
    const width = parseInt(widthStr);
    const height = parseInt(heightStr);
    // check if width and height are numbers
    if (isNaN(width) || isNaN(height)) {
      dimsValid = false;
      // once conerted to numbers, ensure they are positive
      if (width < 0 || height < 0) {
        dimsValid = false;
      }
    }
    // if image dimensions are valid, attempt to resize the jpgname image
    if (dimsValid) {
      // Get path to image resource based on the query params, jpgname, width, height
      const pathToFile = path.resolve(
        `public/images/generated/${jpgname}_${width}x${height}.jpg`
      );
      // if the desired image name and size already exists, send it as the response
      if (fs.existsSync(pathToFile)) {
        console.log('Existing File Used');
        res.sendFile(pathToFile);
      }
      // Otherwise generate the newly sized image and send it
      else {
        // if an image was successfully created or already exists
        const imgCreatedResult = imgSizer.resizeJpg(jpgname, width, height);
        // wait for promise signaling the image creation task returned
        const imgCreated = await imgCreatedResult.then(sucess => sucess);
        // if the scaled image task returned successful
        if (imgCreated) {
          // send image response
          console.log(`New image generated at ${pathToFile}`);
          res.sendFile(pathToFile);
        } else {
          res.send('Image API Error: provide a valid image name');
        }
      }
    } else {
      res.send(
        'Image API Error: width or height URL parameters incorrect.' +
          '\n For example: /api/images?jpgname=fjord&width=400&width=150'
      );
    }
  } else {
    res.send(
      'Image API Error: check that you have entered the URL parameters correctly.' +
        '<br/> For example: /api/images/?jpgname=fjord&width=500&height=250'
    );
  }
});

export default routes;
