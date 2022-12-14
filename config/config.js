require('dotenv').config()
module.exports = {
  development: {
    database: 'gather_development',
    dialect: 'postgres'
  },
  test: {
    database: 'gather_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
// should line 12 say DATABASE_URL instead??
