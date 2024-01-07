const validate  = (schema) => async(req,res,next) =>{
    try{
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    }catch(err){
        const {errors} = err;
        console.log(errors[0].message);
    //    console.log(err.errors[0].message);
        res.status(400).json({message : "validation failed"});
    }
};

module.exports = validate;

