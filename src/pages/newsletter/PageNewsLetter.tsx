import React from 'react'


import { Card } from '../../stories/Card'

import { NEWSLETTER_LIST } from './NEWSLETTERCODE'



const PageNewsLetter = () => {

  return (
    <div>
      <ul>{
        NEWSLETTER_LIST.filter(item => item.listType === "new")
          .map((newsletter) => {
            return <Card
              key={newsletter.code}
              title={newsletter.title}
              day={newsletter.day}
              desc={newsletter.desc}
              type={newsletter.type}
              imgSrc={newsletter.imgSrc}
              url=''
            />
          })}</ul>
      <ul>{
        NEWSLETTER_LIST.filter(item => item.listType === "issue")
          .map((newsletter) => {
            return <Card
              key={newsletter.code}
              title={newsletter.title}
              day={newsletter.day}
              desc={newsletter.desc}
              type={newsletter.type}
              imgSrc={newsletter.imgSrc}
              url=''
            />
          })}</ul>
      <ul>{
        NEWSLETTER_LIST.filter(item => item.listType === "interest")
          .map((newsletter) => {
            return <Card
              key={newsletter.code}
              title={newsletter.title}
              day={newsletter.day}
              desc={newsletter.desc}
              type={newsletter.type}
              imgSrc={newsletter.imgSrc}
              url=''
            />
          })}</ul>
    </div>
  )
}

export default PageNewsLetter