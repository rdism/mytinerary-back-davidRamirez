import mongoose from "mongoose";

let url = process.env.URI_MONGO;

mongoose.set('debug', true);

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    socketTimeoutMS: 30000, // Tiempo máximo de espera para las respuestas
    serverSelectionTimeoutMS: 30000, // Tiempo máximo de espera para seleccionar un servidor
})
    .then(() => console.log("Base de datos conectada"))
    .catch(error => console.log(error));