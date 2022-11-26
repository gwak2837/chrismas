import type { NextApiRequest, NextApiResponse } from 'next'

import { pool } from '../../../common/postgres'

const sql = `
SELECT id, title, price, image_url
FROM funding
WHERE id < $1
ORDER BY id DESC
LIMIT 20
`

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // const { rows } = await pool.query(sql, [req.query.id ?? Number.MAX_SAFE_INTEGER])
  // res.status(200).json(fundings)
}
