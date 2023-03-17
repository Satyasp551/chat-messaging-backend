import Joi, { ObjectSchema } from "joi";

const loginSchema: ObjectSchema = Joi.object().keys({
    username: Joi.string().required().min(4).max(8).messages({
        'string.base': 'Username must be a type of string',
        'string.min': 'Username length should be minimum of 4 letters',
        'string.max': 'Username length cannot exceed 8 letters',
        'string.empty': 'Username cannot be empty'
    }),
    password: Joi.string().required().min(4).max(8).messages({
        'string.base': 'Password must be a type of string',
        'string.min': 'Password length should be minimum of 4 letters',
        'string.max': 'Password length cannot exceed 8 letters',
        'string.empty': 'Password cannot be empty'
    })
})

export { loginSchema }