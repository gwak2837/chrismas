import { Pool } from 'pg'

import { POSTGRES_CA } from './constants'

export const pool = new Pool({
  connectionString: process.env.CONNECTION_STRING,
  ssl: {
    ca: `-----BEGIN CERTIFICATE-----\n${POSTGRES_CA}\n-----END CERTIFICATE-----`,
    checkServerIdentity: () => {
      return undefined
    },
  },
})

pool
  .connect()
  .then(() => console.log('connected'))
  .catch((err) => console.error('connection error', err.stack))
