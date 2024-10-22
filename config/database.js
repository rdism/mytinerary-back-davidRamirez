import mongoose from "mongoose";

let url = process.env.URI_MONGO;

mongoose.connect(url)
    .then(() => console.log("Base de datos conectada"))
    .catch(error => console.log(error));