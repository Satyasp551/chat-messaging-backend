import Joi, { ObjectSchema } from "joi";

const emailSchema: ObjectSchema = Joi.object().keys({
    email: Joi.string().required().email().messages({
        'string.base': 'Email must be a type of string',
        'string.email': 'Email must be valid',
        'string.empty': 'Email cannot be empty'
    })
})

const passwordSchema: ObjectSchema = Joi.object().keys({
    password: Joi.string().required().min(4).max(8).messages({
        'string.base': 'Password must be a type of string',
        'string.min': 'Password length should be minimum of 4 letters',
        'string.max': 'Password length cannot exceed 8 letters',
        'string.empty': 'Password cannot be empty'
    }),
    confirmPassword: Joi.string().required().valid(Joi.ref('password')).messages({
        'any.only': 'Passwords should match',
        'any.required': 'Confirm password is a required field'
    })
})

export { emailSchema, passwordSchema }