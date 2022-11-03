const CustomError = require("../models/CustomError");

class ErrorsMiddleware {
    constructor() {}

    error404(req, res, next) {
        return res.status(404).json({
            descripcion: `Ruta ${req.url} método ${req.method} no implementada`,
        });
    }

    errorLogger(err, req, res, next) {
        next();
    }

    errorHandler(err, req, res, next) {
        console.log(err);
        if (typeof err !== CustomError) return res.status(500).json(err);
        return res.status(err.status).json(err.msg);
    }
}

module.exports = ErrorsMiddleware;
