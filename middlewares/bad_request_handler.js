const bad_request_handler = (err, req, res, next) => {
    if (err && err.status === 400) {
        return res.status(400).json({
            success: false,
            message: `Solicitud incorrecta. La petición con el método: ${req.method} y con la ruta: ${req.url} contiene datos inválidos o incompletos.`,
            error: err.message || "Error desconocido"
        });
    }
    next(err);
}

export default bad_request_handler;