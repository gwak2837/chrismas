import Image from 'next/image'
import Link from 'next/link'
import { useQuery } from 'react-query'

import { fundings, SERVER_URL } from '../../common/constants'
import s from './page.module.css'

async function getFirstFunding() {
  const res = await fetch(SERVER_URL + '/api/funding')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {
  return (
    <>
      <div className={s.imageContainer}>
        <Image src="/images/cover.png" alt="cover image" fill />
      </div>

      <div>
        <h2 className={s.h1}>선물이 필요한 아이들</h2>

        <ul className={s.grid}>
          {fundings.map((funding: any) => (
            <li key={funding.id} className={s.gridItem}>
              <Link href={`/funding/${funding.id}`}>
                <div className={s.imageContainer2}>
                  <Image src={funding.imageUrl} alt="cover image" fill />
                </div>
                <h3 className={s.h3}>
                  {funding.present_name}를 가지고 싶은 {funding.child.age}살{' '}
                  {funding.child.name.slice(1)} 어린이
                </h3>
                <h4 className={s.h4}>사연 보러가기</h4>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
