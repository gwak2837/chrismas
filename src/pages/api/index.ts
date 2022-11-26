import type { NextApiRequest, NextApiResponse } from 'next'

import { pool } from '../../common/postgres'

type Data = {
  time: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { rows } = await pool.query('SELECT CURRENT_TIMESTAMP')

  res.status(200).json({ time: `${new Date(rows[0].current_timestamp).toLocaleString()}` })
}
