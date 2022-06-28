const userController = require('../../controllers/userController')
const userValidation = require('../../validations/userValidation')
const validate = require('express-validation')

module.exports.user = function (router){
    router.route('/users').get(userController.getUsers)
    router
        .route('/users')
        .post(validate(userValidation.addUpdateUser),userController.addUsers)
}