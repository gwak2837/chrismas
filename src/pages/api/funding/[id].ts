import type { NextApiRequest, NextApiResponse } from 'next'

import { pool } from '../../../common/postgres'
import { fundings } from '.'

const sql = `
SELECT funding.id, title, image_url, story, price, present_image_url, present_name, child.id, name, age
FROM funding
  JOIN child on child.id = funding.child_id
WHERE funding.id = $1
`

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const fundingId = Number(req.query.id)

  if (!fundingId) return res.status(400).json({ message: 'Wrong funding id' })

  // const { rows } = await pool.query(sql, [fundingId])

  res.status(200).json(fundings[fundingId - 1])
}
