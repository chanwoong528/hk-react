import React from 'react'

import { NEWSLETTER_LIST } from '../newsletter/NEWSLETTERCODE'
import { Card } from '../../stories/Card'
import { Header } from '../../stories/Header';

import "./compMainNewsletterList.scss";
import { Button } from '../../stories/Button';

const CompMainNewsletterList = () => {
  return (
    <>
      <Header type="main-section" title='뉴스레터' btns={<Button btnType="link" title='더보기' linkHref="/NewsLetter/NewsJam" />} />
      <ul className='main-section-newsletter-list'>
        {NEWSLETTER_LIST.filter(item => item.listType !== "finished").map((newsletter) => {
          return <Card
            type="main-newsletter"
            key={newsletter.code}
            title={newsletter.title}
            day={newsletter.day}
            desc={newsletter.desc}
            imgSrc={newsletter.imgSrc}
            thumbSrc={newsletter.thumbSrc}
            code={newsletter.code}
            // onClickBtn={onClickSubscribeBtn}
            url=''
          />
        })}
      </ul>
    </>

  )
}

export default CompMainNewsletterList