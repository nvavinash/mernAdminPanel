const errorMiddleware = (err,req,res,next)=>{

    const status = err.status || 500;
    const message = err.message || "O..oh BackEnd Error";
    const extradetails = err.extradetails || "O..oh Error from Backend..!";

    return res.status(status).json({message, extradetails});
}
module.exports = errorMiddleware;