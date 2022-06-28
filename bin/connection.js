const Sequelize = require('sequelize')

const sequelize = new Sequelize(
	process.env.DATABASE_NAME,
	process.env.DATABASE_USERNAME,
	process.env.DATABASE_PASSWORD,
	{
		dialect: 'mssql',
		host: process.env.DATABASE_HOST,
		port: parseInt(process.env.DATABASE_PORT),
		logging: false,
		pool: {
			idle: 30000,
			min: 1,
			max: 20
		},
		dialectOptions: {
			options: {
				enableArithAbort: true,
				trustServerCertificate: true,
				requestTimeout: 60000
			}
		},
	}

)

sequelize
	.sync()
	.then(() => {
		console.log('Connection with dataBase has been established!')
	})
	.catch((err) => {
		console.log(err)
	})

module.exports = sequelize
