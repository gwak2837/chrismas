import Image from 'next/image'

import { SERVER_URL } from '../common/constants'
import styles from './page.module.css'

async function getData() {
  const res = await fetch(SERVER_URL + '/api', { cache: 'no-store' })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {
  const data = await getData()

  return (
    <main>
      <h1>크리스마스 선물 주기</h1>
      <div>데이터베이스 서버 시간: {data.time}</div>
    </main>
  )
}
