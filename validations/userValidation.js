const Joi  = require("joi")

module.exports.addUpdateUser = {
  body: Joi.object({
    firstName : Joi.string().required(),
    lastName : Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    avatar : Joi.string().optional().allow("")
  }),
}