import Image from 'next/image'
import Link from 'next/link'

import { SERVER_URL } from '../../../common/constants'

async function getFirstFunding(fundingId: number) {
  const res = await fetch(`${SERVER_URL}/api/funding/${fundingId}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Funding({ params }: any) {
  const firstFunding = await getFirstFunding(params.id)

  return (
    <>
      <h2>선물하기</h2>
      <h2>가지고 싶은 선물</h2>
    </>
  )
}
