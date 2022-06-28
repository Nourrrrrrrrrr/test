const usersService = require('../services/userService')

module.exports.getUsers = async (req, res, next) => {
    usersService.getUser(req.query)
    .then((user)=>{
        res.json(user)
    })
    .catch((err)=>{
        next(err)
    })
}

module.exports.addUsers = async (req, res, next) => {
    usersService.addUser(req.body)
    .then(()=>{
        res.json({ status: 'success' })
    })
    .catch((err)=>{
        next(err)
    })
}