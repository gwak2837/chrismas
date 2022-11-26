import Link from 'next/link'

import Snowman from '../svgs/snowman'
import s from './page.module.css'

export default async function Home() {
  return (
    <main className={s.main}>
      <div className={s.flex}>
        <div className={s.gridItem}>
          <h2 className={s.h2}>결식아동을 위한 크리스마스 펀딩 플랫폼</h2>

          <h1 className={s.h1}>
            <span className={s.highlightText}>결식아동</span>에게
            <br />
            특별한 <span className={s.highlightText}>크리스마스</span>를 <br />
            선물해보세요
          </h1>

          <button className={s.button}>
            <Link href="/funding">
              <h3 className={s.h3}>선물하기</h3>
            </Link>
          </button>
        </div>

        <Snowman width="700" />
      </div>
    </main>
  )
}
