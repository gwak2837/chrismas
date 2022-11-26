import Link from 'next/link'

import s from './page.module.css'

export default async function FundingLayout({ children }: any) {
  return (
    <main>
      <h1 className={s.h1}>
        <Link href="/funding">크리스마스 선물</Link>
      </h1>

      {children}
    </main>
  )
}
