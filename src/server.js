const knex = require('knex')
const app = require('./app')

const { PORT, DATABASE_URL } = require('./config')
console.log(DATABASE_URL);

const db = knex({
  client: 'pg',
  // connection: DATABASE_URL,
  connection: {
    port: '5432',
    host: 'ec2-18-211-86-133.compute-1.amazonaws.com',
    user: 'nspursnbrhcgvw',
    password: "8eaa1311b06579f17f84a7028c1eb7bf7b9c09d0a47dcc3d9146156e1080ebe4",
    database: 'dbvs1hk5r6jp43',
    ssl: { rejectUnauthorized: false }
  }
})

app.set('db', db)

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})