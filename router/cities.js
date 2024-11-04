import { Router } from "express";
import { allCities, cityByID } from "../controllers/cities/read.js";

const routerCities = Router();

routerCities.get('/all', allCities);
routerCities.get('/id/:id', cityByID);

export default routerCities;