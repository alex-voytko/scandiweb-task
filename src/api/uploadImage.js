import axios from "axios";

axios.defaults.baseURL = "https://api.cloudinary.com/v1_1/alexvoytko";

const uploadImage = imgFile =>
    axios
        .post("/image/upload", imgFile)
        .then(res => res.data.secure_url)
        .catch(error => console.log(error.message));

export default uploadImage;
