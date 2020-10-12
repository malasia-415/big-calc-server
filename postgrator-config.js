require('dotenv').config();
console.log(process.env.DATABASE_URL)
module.exports = {
  "migrationDirectory": "migrations",
  "driver": "pg",
  "connectionString": (process.env.NODE_ENV === 'test')
     ? process.env.TEST_DATABASE_URL
     : process.env.DATABASE_URL,
    //  ? 'postgresql://malasiawoods@localhost/calc-test'
    //  : "postgresql://malasiawoods@localhost/calc",
     "ssl": !!process.env.SSL,
     "timezone":"UTC"
}
