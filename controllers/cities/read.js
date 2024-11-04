import City from "../../models/City.js";

const allCities = async (req, res, next) => {
    try {
        console.log("Iniciando la consulta para obtener todas las ciudades...");
        let query = req.query.search ? { cityName: { $regex: '^' + req.query.search, $options: 'i' } } : {};
        let all = await City.find(query);
        console.log("Resulatado de la consulta: ", all);
        return res.status(200).json({
            response: all
        });
    } catch (error) {
        console.error("Error durante la consulta: ", error);
        next(error);
    }
};

let cityByID = async (req, res, next) => {
    try {
        console.log(req.params.id);
        let { id } = req.params;
        let city = await City.findOne({ _id: id });
        if (!city) {
            next();
        }
        return res.status(200).json({
            response: city
        });
    } catch (error) {
        next(error);
    }
};

export { allCities, cityByID };
