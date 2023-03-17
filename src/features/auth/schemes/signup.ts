import Joi, { ObjectSchema } from "joi";

const signUpSchema: ObjectSchema = Joi.object().keys({
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
    }),
    email: Joi.string().required().email().messages({
        'string.base': 'Email must be a type of string',
        'string.email': 'Email must be valid',
        'string.empty': 'Email cannot be empty'
    }),
    avatarColor: Joi.string().required().messages({
        'any.required': 'Avatar color is mandatory'
    }),
    avatarImage: Joi.string().required().messages({
        'any.required': 'Avatar Image is mandatory'
    })
})

export { signUpSchema }