const {z} = require("zod");

const signupSchema = z.object({
    username: z
    .string({required_error: "Name is Required"})
    .trim()
    .min(3, {message:"Name must be at least 3 chars."})
    .max(255, {message: "not more than 255 char"}),

    email: z.
    string({required_error: "Email is Required"})
    .trim()
    .email({message :"Invalid email address"})
    .min(3, {message:"email must be at least 3 chars."})
    .max(255, {message: "not more than 255 char"}),

    phone: z
    .string({required_error: "phone no. is Required"})
    .trim()
    .min(10, {message:"Phone Number must be at least 10."})
    .max(10, {message: "Do not user +91 or any country code"}),
    
    password: z
    .string({required_error: "Password is Required"})
    .min(6, {message:"Password must be at least 6 chars."})
    .max(1024, {message: "not more than 1024 char"})   
});

const loginSchema = z.object({
    email : z
    .string({required_error: "Email is required"})
    .trim()
    .email({message: "email must be at least 3 character"})
    .min(3, {message : "Enter Valid Email"}),

    password: z
    .string({required_error : "Enter Valid Password"})
    .min(6,{message : "Enter valid Password 6 char"})
    
});

module.exports = {signupSchema,loginSchema};