require('dotenv').config();
console.log(process.env.DATABASE_URL)
module.exports = {
  "migrationDirectory": "migrations",
  "driver": "pg",
  "connectionString": (process.env.NODE_ENV === 'test')
     ? 'postgresql://malasiawoods@localhost/calc-test'
     : "postgresql://malasiawoods@localhost/calc",
     "ssl": !!process.env.SSL,
     "timezone":"UTC"
}
