import express from 'express';
import path from 'path';
import imgSizer from '../../../utilities/resizeImages';

const routes = express.Router();

routes.get('/', (req, res) => {
    // Flag for valid image dimmensions
    let dimsValid: boolean = true;
    // Get query params for resizing image
    let jpgname: string = (req.query.jpgname as unknown) as string;
    let widthStr: string = (req.query.width as unknown) as string;
    let heightStr: string = (req.query.height as unknown) as string;
    let width: number, height: number;
    
    // Attempt to convert width and height params to numbers
    try{
        width = parseInt(widthStr);
        height = parseInt(heightStr);
    }catch(err){
        height = 1;
        width = 1;
        dimsValid = false;
    }
    
    // if image dimensions are valid, attempt to resize the jpgname image
    if(dimsValid){
        
        // if an image was successfully created or already exists
        const imgCreated = imgSizer.resizeJpg(jpgname, width, height)
            .then((result) =>{
                console.log(`1 ${result}`);
                return result;
            });
        
        // TODO look into resizeJpg and see if async/await is even needed
        
        console.log(imgCreated);
        
        /*
        if(imgCreated){
            // Get path to image resource based on the jpgname query param value
            const pathToFile = path.resolve(`public/images/original/${jpgname}_${width}x${height}.jpg`);
            // send image response
            res.sendFile(pathToFile);
        }
        */
    }else{
        res.send("Image API Error: check that you have entered integers for width and height parameters.");
    }
    

});

export default routes;
