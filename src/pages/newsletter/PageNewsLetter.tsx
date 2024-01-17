import React, { useEffect, useState } from 'react'

import { Card } from '../../stories/Card'
import { NEWSLETTER_LIST, NEWSLETTER_STATUS, NEWSLETTER_TABLE_FORMAT } from './NEWSLETTERCODE'

import "./pageNewsletter.scss";
import { Header } from '../../stories/Header';
import { Table } from '../../stories/Table';

const PageNewsLetter = () => {
  const [userInfo, setUserInfo] = useState({
    gudokList: []
  })

  useEffect(() => {
    if (!!window) {
      setUserInfo({ ...window["userData"], gudokList: window["userGudok"] })
    }
  }, [])


  const onClickSubscribeBtn = (groupCdParam: string) => {
    const existGudok = userInfo.gudokList.find((gudok) => gudok.groupCd === groupCdParam)
    if (!!existGudok) {
      //exist -> unsubscribe
      const filteredGL = userInfo.gudokList.filter(gudok => gudok.groupCd !== groupCdParam)
      setUserInfo({ ...userInfo, gudokList: filteredGL })
    } else {
      //subscribe gudok
      setUserInfo({ ...userInfo, gudokList: [...userInfo.gudokList, { groupCd: groupCdParam }] })
    }


  }


  return (
    <div>
      <div className='newsletter-table-con'>
        <Header title='뉴스레터 편성표' type="newsletter table" sub='*는 격주 연재' />
        <Table
          type='newsletter'
          numListToShow={NEWSLETTER_TABLE_FORMAT.numListToShow}
          tableData={NEWSLETTER_TABLE_FORMAT.tableData}
        />
      </div>


      <section className='newsletter-con'>
        <Header title='신규 뉴스레터' type="newsletter" />
        <ul>{
          NEWSLETTER_LIST.filter(item => item.listType === "new")
            .map((newsletter) => {
              return <Card
                status={!!userInfo.gudokList.find(gudok => gudok.groupCd === newsletter.code) ?
                  NEWSLETTER_STATUS.SUBSCRIBED : NEWSLETTER_STATUS.DEFAULT}
                key={newsletter.code}
                title={newsletter.title}
                day={newsletter.day}
                desc={newsletter.desc}
                type={newsletter.type}
                imgSrc={newsletter.imgSrc}
                code={newsletter.code}
                onClickBtn={onClickSubscribeBtn}
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
                status={!!userInfo.gudokList.find(gudok => gudok.groupCd === newsletter.code) ?
                  NEWSLETTER_STATUS.SUBSCRIBED : NEWSLETTER_STATUS.DEFAULT}
                key={newsletter.code}
                title={newsletter.title}
                day={newsletter.day}
                desc={newsletter.desc}
                type={newsletter.type}
                imgSrc={newsletter.imgSrc}
                code={newsletter.code}
                onClickBtn={onClickSubscribeBtn}

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
                status={!!userInfo.gudokList.find(gudok => gudok.groupCd === newsletter.code) ?
                  NEWSLETTER_STATUS.SUBSCRIBED : NEWSLETTER_STATUS.DEFAULT}
                key={newsletter.code}
                title={newsletter.title}
                day={newsletter.day}
                desc={newsletter.desc}
                type={newsletter.type}
                imgSrc={newsletter.imgSrc}
                code={newsletter.code}
                onClickBtn={onClickSubscribeBtn}
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

    </div>
  )
}

export default PageNewsLetter