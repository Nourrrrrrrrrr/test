const userDB = require('../db/userDB')
const connection = require("../bin/connection")
const Sequelize = require('sequelize')
const bcrypt = require('bcryptjs')

module.exports.getUser=async(query)=>{
    try{
        return userDB.getUsers(query)
    }catch(err){
        throw err
    }
}

module.exports.addUser = async(body)=>{
    let queries = []
    const t = await connection.transaction({
        deferrable: Sequelize.Deferrable.SET_DEFERRED,
    })
    try{
        const psw = bcrypt.hashSync(body.password, 10)
        queries.push(userDB.addUser({
            firstName : body.firstName,
            lastName : body.lastName,
            avatar : body.avatar ? fileDestinationPath + body.avatar :null,
            email : body.email,
            password : psw
        }, t))
        await Promise.all(queries)
        return t.commit()
    }catch(err){
        await t.rollback()
        throw err
    }
}