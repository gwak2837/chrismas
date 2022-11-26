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

  res.status(200).json(fundings)
}

const children = [
  {
    id: 1,
    name: '고현준',
    age: 15,
  },
  {
    id: 2,
    name: '곽태욱',
    age: 15,
  },
  {
    id: 3,
    name: '이수민',
    age: 13,
  },
  {
    id: 4,
    name: '김도윤',
    age: 11,
  },
  {
    id: 5,
    name: '박서준',
    age: 12,
  },
  {
    id: 6,
    name: '이하준',
    age: 13,
  },
  {
    id: 7,
    name: '이서아',
    age: 14,
  },
  {
    id: 8,
    name: '김하윤',
    age: 15,
  },
  {
    id: 9,
    name: '박지안',
    age: 16,
  },
  {
    id: 10,
    name: '유아린',
    age: 9,
  },
]

export const fundings = [
  {
    id: 1,
    title: '변신 로보트를 가지고 싶은 15살 현준 어린이',
    imageUrl: '/images/1.png',
    story: '',
    price: 200_000,
    present_image_url: '',
    present_name: '변신 로보트',
    child: children[0],
  },
  {
    id: 2,
    title: '레고 장난감을 가지고 싶은 15살 태욱 어린이',
    imageUrl: '/images/2.png',
    story: '',
    price: 100_000,
    present_image_url: '',
    present_name: '레고 장난감',
    child: children[1],
  },
  {
    id: 3,
    title: '아이폰을 가지고 싶은 13살 수민 어린이',
    imageUrl: '/images/3.png',
    story: '',
    price: 1_400_000,
    present_image_url: '',
    present_name: '아이폰',
    child: children[2],
  },
  {
    id: 4,
    title: '에어팟 2세대를 가지고 싶은 15살 현준 어린이',
    imageUrl: '/images/4.png',
    story: '',
    price: 300_000,
    present_image_url: '',
    present_name: '에어팟 2세대',
    child: children[0],
  },
  {
    id: 5,
    title: '에어팟 2세대를 가지고 싶은 15살 현준 어린이',
    imageUrl: '',
    story: '',
    price: 300_000,
    present_image_url: '',
    present_name: '에어팟 2세대',
    child: children[3],
  },
  {
    id: 6,
    title: '에어팟 2세대를 가지고 싶은 15살 현준 어린이',
    imageUrl: '',
    story: '',
    price: 300_000,
    present_image_url: '',
    present_name: '에어팟 2세대',
    child: children[4],
  },
  {
    id: 7,
    title: '에어팟 2세대를 가지고 싶은 15살 현준 어린이',
    imageUrl: '',
    story: '',
    price: 300_000,
    present_image_url: '',
    present_name: '에어팟 2세대',
    child: children[5],
  },
  {
    id: 8,
    title: '에어팟 2세대를 가지고 싶은 15살 현준 어린이',
    imageUrl: '',
    story: '',
    price: 300_000,
    present_image_url: '',
    present_name: '에어팟 2세대',
    child: children[6],
  },
  {
    id: 9,
    title: '에어팟 2세대를 가지고 싶은 15살 현준 어린이',
    imageUrl: '',
    story: '',
    price: 300_000,
    present_image_url: '',
    present_name: '에어팟 2세대',
    child: children[7],
  },
  {
    id: 10,
    title: '에어팟 2세대를 가지고 싶은 15살 현준 어린이',
    imageUrl: '',
    story: '',
    price: 300_000,
    present_image_url: '',
    present_name: '에어팟 2세대',
    child: children[8],
  },
  {
    id: 11,
    title: '에어팟 2세대를 가지고 싶은 15살 현준 어린이',
    imageUrl: '',
    story: '',
    price: 300_000,
    present_image_url: '',
    present_name: '에어팟 2세대',
    child: children[9],
  },
]
