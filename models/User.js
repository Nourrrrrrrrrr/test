const sequelize = require('sequelize')
const Op = sequelize.Op
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      idUser: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      firstName: {
        type: DataTypes.STRING,
      },
      lastName: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isUnique(value, next) {
            let ID = this.getID()
            User.findOne({
              where: [
                { email: value },
                { idUser: { [Op.ne]: ID } }
              ]
            }).done((user) => {
              if (user) {
                return next(new Error("L'adresse E-mail est déjà utilisée"))
              }
              next()
            })
          },
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING,
      },
      avatar : {
        type: DataTypes.STRING,
      },
      resetPassword : {
        type: DataTypes.BOOLEAN
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      },
      deletedAt: {
        type: DataTypes.DATE
      },
    },
    {
      timestamps: true,
      tableName: 'User'
    }
  )
  
  User.associate = function () {
  }

  return User
}
