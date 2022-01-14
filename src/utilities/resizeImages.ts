// resizeImages.ts

// Import module for processing images
import sharp from 'sharp';

// Creates a resized jpg at /public/images/generated/imgName_<width>x<height>.jpg
// The image at /public/images/original/imgName.jpg will be resized and a new files
// will be created with the new width and height
// returns true if resized file is successfully created
const resizeJpg = async (imgName: string, width: number, height: number): Promise<boolean> => {
    let success: boolean = true;
    const imgSrc = `public/images/original/${imgName}.jpg`;
    const imgDest = `public/images/generated/${imgName}_${width}x${height}.jpg`;
    try{
        //Create new resized image
        await sharp(imgSrc)
          .resize(width, height)
          .toFile(imgDest);
    }catch(err){
        success = false;
    }
    return success;
};

export default {
    resizeJpg
};

