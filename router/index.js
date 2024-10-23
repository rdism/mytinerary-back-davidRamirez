import Router from "express";
import routerCities from "./cities.js";

const routerIndex = Router();

routerIndex.use('/cities', routerCities);

export default routerIndex;