require('dotenv').config();
console.log(process.env.DATABASE_URL)
module.exports = {
  "migrationDirectory": "migrations",
  "driver": "pg",
  "connectionString": (process.env.NODE_ENV === 'test')
     ? 'postgresql://dunder-mifflin@localhost/calc-test'
     : "postgresql://dunder-mifflin@localhost/calc",
     "ssl": !!process.env.SSL,
}
