import React from 'react'
import { BrowserView, MobileView } from 'react-device-detect';

import { Card } from '../../stories/Card'
import { NEWSLETTER_LIST } from './NEWSLETTERCODE'

import "./pageNewsletter.scss";
import { Header } from '../../stories/Header';

const PageNewsLetter = () => {

  return (
    <>
      <MobileView>
        <h1>This is rendered only on mobile</h1>
      </MobileView>
      <BrowserView>
        <main>
          <section className='newsletter-con'>
            <Header title='신규 뉴스레터' type="newsletter" />
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
                })}
            </ul>
          </section>
          <section className='newsletter-con'>
            <Header title='이슈 뉴스레터' type="newsletter" />
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
                })}
            </ul>
          </section>

          <section className='newsletter-con'>
            <Header title='관심사별 뉴스레터' type="newsletter" />
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
                })}
            </ul>
          </section>
          <section className='newsletter-con'>
            <Header title='종료된  뉴스레터' type="newsletter finished" />
            <ul>{
              NEWSLETTER_LIST.filter(item => item.listType === "finished")
                .map((newsletter) => {
                  return <Card
                    status={newsletter.listType}
                    key={newsletter.code}
                    title={newsletter.title}
                    day={newsletter.day}
                    desc={newsletter.desc}
                    type={newsletter.type}
                    imgSrc={newsletter.imgSrc}
                    url=''
                  />
                })}
            </ul>
          </section>

        </main>
      </BrowserView>
    </>
  )
}

export default PageNewsLetter