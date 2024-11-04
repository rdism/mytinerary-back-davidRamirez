import City from "../../models/City.js";

const deleteCity = async (req,res,next) => {
    try {
        let { id } = req.params;
        let deletedCity = await City.findByIdAndDelete(id);

        if (!deletedCity) {
            next();
        }

        return res.status(200).json({
            message: "Ciudad eliminada con éxito",
            city: deletedCity
        });
    } catch (error) {
        next(error)
    }
}

export { deleteCity };