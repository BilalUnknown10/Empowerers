import { v2 } from "cloudinary";
import fs from 'fs'


 v2.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET
    });


    const uploadOnCloudinary = async (localFilePath, folder = "Empowerers") => {
        try {
            if(!localFilePath) return null;
           const response = await v2.uploader.upload(localFilePath,{
                folder : folder,
                resource_type : "auto"
            });
            // console.log("file upload successfully");
            fs.unlinkSync(localFilePath);
            return response;
        } catch (error) {
            fs.unlinkSync(localFilePath)
            console.log("error form cloudinary",error);
        }
    };

    const deleteOnCloudinary = async (deleteFilePath) => {
        try {
            if(!deleteFilePath) return null;
            const response = await v2.uploader.destroy(deleteFilePath);
            // console.log("file deleted successfully");
            // console.log(response);
        } catch (error) {
            console.log(error)
        }
    }

export {uploadOnCloudinary, deleteOnCloudinary}