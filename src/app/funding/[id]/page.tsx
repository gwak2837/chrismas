import Image from 'next/image'
import Link from 'next/link'

import { SERVER_URL, fundings } from '../../../common/constants'
import s from './page.module.css'

export default async function Funding({ params }: any) {
  const funding = fundings[params.id - 1]

  return (
    <>
      <div className={s.flex}>
        <div className={s.flexItem}>
          <h2 className={s.h2}>선물하기</h2>
          <div className={s.imageContainer2}>
            <Image src={funding.imageUrl} alt="funding image" fill />
          </div>
          <h3>{funding.title}</h3>
        </div>

        <div className={s.flexItem2} />

        <div className={s.flexItem11}>
          <h2 className={s.h2}>가지고 싶은 선물</h2>
          <div className={s.grid}>
            <div className={s.imageContainer}>
              <Image src={funding.present_image_url} alt="funding image" className={s.image} fill />
            </div>
            <div className={s.gridItem}>
              <h3>{funding.present_name}</h3>
              <div className={s.price}>가격: {funding.price}원</div>
              <div className={s.progress}>
                <div className={s.progress2} style={{ width: `${funding.progress}%` }} />
              </div>
              <div>진행률: {funding.progress}%</div>
              <button>펀딩하기</button>
            </div>
          </div>
        </div>
      </div>

      <div className={s.margin}>
        <h3>사연</h3>
        <p>{funding.story}</p>
      </div>
    </>
  )
}
