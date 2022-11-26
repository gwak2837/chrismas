import Image from 'next/image'
import { useQuery } from 'react-query'

import styles from './page.module.css'

async function getData() {
  const res = await fetch('/api', { cache: 'no-store' })

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default function Home() {
  const data = await getData()

  return (
    <main>
      <h1>크리스마스 선물 주기</h1>
      <div>데이터베이스 서버 시간: {data}</div>
    </main>
  )
}
