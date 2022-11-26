import type { NextApiRequest, NextApiResponse } from 'next'
import { Client } from 'pg'

import { POSTGRES_CA } from '../../common/constants'

const client = new Client({
  connectionString: process.env.CONNECTION_STRING,
  ssl: {
    ca: `-----BEGIN CERTIFICATE-----\n${POSTGRES_CA}\n-----END CERTIFICATE-----`,
    checkServerIdentity: () => {
      return undefined
    },
  },
})

client
  .connect()
  .then(() => console.log('connected'))
  .catch((err) => console.error('connection error', err.stack))

type Data = {
  time: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { rows } = await client.query('SELECT CURRENT_TIMESTAMP')

  res.status(200).json({ time: `${new Date(rows[0].current_timestamp).toLocaleString()}` })
}
