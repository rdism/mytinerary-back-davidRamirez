const error_handler = (error, req, res, next) => {
    const statusCode = error.status || 500;
    const errorMessage = error.message || "Error interno del servidor.";

    return res.status(statusCode).json({
        success: false,
        message: errorMessage,
        stack: process.env.NODE_ENV === 'development' ? error.stack : {}  // Mostrar la pila solo en desarrollo

    });
};

export default error_handler;