import React, { useEffect, useState } from 'react'

import { NEWSLETTER_LIST, NEWSLETTER_STATUS, NEWSLETTER_TABLE_FORMAT } from './NEWSLETTERCODE'

import { Card } from '../../stories/Card'
import { Header } from '../../stories/Header';
import { Table } from '../../stories/Table';
import { Modal } from '../../stories/Modal';
import { Button } from '../../stories/Button';

import { patchGudok } from '../../http/newsletterApi';

import "./pageNewsletter.scss";

const ModalDescription = (type: string = "수신 허용 처리완료") => {

  const getCurrentDate = () => {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    return `${year}년 ${month}월 ${day}일`
  }


  return <>
    <ul className='description-list'>
      <li>전송자: 한국일보</li>
      <li>수신허용 일자: <span className="agree-popup-date">{getCurrentDate()}</span></li>
      <li>처리내용: {type}</li>
    </ul>
    <br />
    <p>언제든지 [설정 &gt; 이벤트 및 프로모션 수신 동의]에서 설정변경 가능합니다.</p>
  </>
}


const PageNewsLetter = () => {
  const [userInfo, setUserInfo] = useState({
    memUuid: undefined,
    gudokList: []
  })
  const [modalContent, setModalContent] = useState({
    open: false,
    title: "",
    desc: () => ModalDescription()
  })

  useEffect(() => {
    if (!!window) {
      setUserInfo({ ...window["userData"], gudokList: window["userGudok"] })
    }
  }, [])
  useEffect(() => {
    if (!!modalContent.open) {
      document.querySelector("body").style.overflow = "hidden"
    } else {
      document.querySelector("body").style.overflow = "auto"
    }
  }, [modalContent.open])

  const onClickSubscribeBtn = (groupCdParam: string) => {
    if (!!userInfo.memUuid) {
      //loggedIn
      const existGudok = userInfo.gudokList.find((gudok) => gudok.groupCd === groupCdParam)
      if (!!existGudok) {
        //exist -> unsubscribe
        //api param ex)=> {nLetterAgree=N, groupCd=story, updateStatus=N},
        const filteredGL = userInfo.gudokList.filter(gudok => gudok.groupCd !== groupCdParam)
        patchGudok({ nLetterAgree: "N", groupCd: groupCdParam, updateStatus: "N" }).then(() => {
          setUserInfo({ ...userInfo, gudokList: filteredGL })
          onClickToggleModal("수신 거부 안내", ModalDescription("수신 거부 처리완료"))
        });
      } else {
        //subscribe gudok
        //api param ex)=> {nLetterAgree=Y, groupCd=eurokick}
        patchGudok({ nLetterAgree: "Y", groupCd: groupCdParam }).then(() => {
          setUserInfo({ ...userInfo, gudokList: [...userInfo.gudokList, { groupCd: groupCdParam }] })
          onClickToggleModal("수신 허용 안내", ModalDescription())
        });

      }
    } else {
      //not loggedIn
      if (!!window) {
        window["openGateSubsc"](groupCdParam)
      }
    }
  }
  const onClickToggleModal = (title?: string, desc?) => {
    setModalContent({ ...modalContent, open: !modalContent?.open, title: title, desc: () => desc })
  }

  return (
    <div>
      {
        !!modalContent.open ?
          <Modal type='default'
            title={modalContent.title}
            desc={modalContent.desc()}
            btnLayout="flex-end"
            btns={<Button title="확인" btnType="nothing" onClick={onClickToggleModal} />}
          />
          : null
      }
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