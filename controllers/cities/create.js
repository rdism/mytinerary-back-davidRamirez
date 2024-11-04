import City from "../../models/City";

const createCity = async (req, res, next) => {
    try {
        const city = await City.create(req.body)
        return res.status(200).json({
            createCity: city
        })
    } catch (error) {
        next(error)
    }
};

export { createCity };