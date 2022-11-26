import Link from 'next/link'

import { SERVER_URL } from '../../common/constants'
import s from './page.module.css'

async function getData() {
  const res = await fetch(SERVER_URL + '/api')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {
  const data = await getData()

  return (
    <main>
      <h1>크리스마스 선물</h1>
    </main>
  )
}
