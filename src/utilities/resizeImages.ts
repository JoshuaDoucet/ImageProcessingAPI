// resizeImages.ts

// Import module for processing images
import sharp from 'sharp';

// Creates a resized jpg at /assets/images/thumb/imgName_thumb.jpg
// The image at /assets/images/fulll/imgName.jpg will be resized and a new files
// will be created with the new width and height
// returns true if resized file is successfully created
const resizeJpg = async (imgName: string, width: number, height: number): Promise<boolean> => {
    let success: boolean = true;
    const imgSrc = "assets/images/full/" + imgName + ".jpg";
    const imgDest = "assets/images/thumb/" + imgName + "_thumb.jpg";
    try{
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

