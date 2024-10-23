const not_found_handler = (req, res, next) => {
    return res.status(404).json({
        success: false,
        message: `Ruta no encontrada. La petición con el método: ${req.method} y con la ruta: ${req.url}`
    });
};

export default not_found_handler;