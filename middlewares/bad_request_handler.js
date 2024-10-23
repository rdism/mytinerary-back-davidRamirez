const bad_request_handler = (error, req, res, next) => {
    if (error && error.status === 400) {
        return res.status().json({
            success: false,
            message: `Solicitud incorrecta. La petición con el método: ${req.method} y con la ruta: ${req.url} contiene datos inválidos o incompletos.`,
            error: error.message || "Error desconocido"
        });
    }
}

export default bad_request_handler;