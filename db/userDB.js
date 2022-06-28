const sequelize = require('sequelize')
const models = require('../models')

module.exports.addUser = (body, t = undefined) => {
    return models.User.create(body, { transaction: t })
}

module.exports.updateUser = (body, query, t = undefined) => {
    return models.User.update(body, {
      where: sequelize.and(
        query.idUser ? { idUser: query.idUser } : null,
      ),
      transaction: t
    })
}

module.exports.getUsers = (query, t=undefined) => {
    return models.User.findAll({
        attributes : query.attributes ? query.attributes :  { exclude: ['updatedAt', 'deletedAt', 'createdAt'] },
        where: sequelize.and(
            query.idUser ? {idUser: query.idUser }:null,
            query.email ? sequelize.where(sequelize.fn('upper', sequelize.col('email')),query.email):null,
            query.psw ? {password : query.psw} : null,
        ),
        transaction : t
    })
}

module.exports.deleteUser = (query, t=undefined) => {
    return models.User.destroy({
        where: { idUser: query.idUser },
        transaction: t,
        force: query.force ? query.force : null,
    })  
}