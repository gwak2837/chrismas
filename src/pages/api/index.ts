import { Client } from 'pg'

const client = new Client({ connectionString: process.env.CONNECTION_STRING })

client
  .connect()
  .then(() => console.log('connected'))
  .catch((err) => console.error('connection error', err.stack))
