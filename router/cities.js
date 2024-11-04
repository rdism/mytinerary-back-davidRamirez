import { Router } from "express";
import { allCities, cityByID } from "../controllers/cities/read.js";
import { deleteCity } from "../controllers/cities/delete.js";

const routerCities = Router();

// Rutas para obtener ciudades
routerCities.get('/all', allCities);
routerCities.get('/id/:id', cityByID);

// Ruta para eliminar una ciudad por ID
routerCities.delete('/id/:id', deleteCity);

export default routerCities;