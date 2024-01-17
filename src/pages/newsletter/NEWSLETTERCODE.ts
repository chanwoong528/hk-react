export const NEWSLETTER_CODE = {
  basic: "basic",
  brief: "brief",
  story: "story",
  insight: "insight",
  insight_s2: "insight_s2",
  memorial: "memorial",
  rabbit: "rabbit",
  touchyou: "touchyou",
  careeup: "careeup",
  anilog: "anilog",
  munhak: "munhak",
  movie: "movie",
  herspective: "herspective",
  europelife: "europelife",
  eurokick: "eurokick",
  bookissue: "bookissue",
  woorimal: "woorimal",
};

export const NEWSLETTER_STATUS = {
  DEFAULT: "default",
  SUBSCRIBED: "subscribed",
  FINISHED: "finished",
};

export const NEWSLETTER_LIST = [
  {
    code: NEWSLETTER_CODE.europelife,
    title: "슬기로운 유럽생활",
    day: "월요일",
    dayCode: "mon",
    time: "08:00",
    name: "슬기로운 유럽 생활*",
    desc: "놓치면 손해인 유럽 뉴스와 <br/> ‘힙’한 이야기 몽땅 챙겨 전합니다.",
    type: "newsletter",
    imgSrc: new URL(
      `../../assets/image/newsletter/cardBg/newjam_cate_${NEWSLETTER_CODE.europelife}.png`,
      import.meta.url
    ).href,
    listType: "new",
  },
  {
    code: NEWSLETTER_CODE.eurokick,
    title: "강은영의 유로 힐킥",
    day: "화요일",
    dayCode: "tue",
    time: "08:30",
    name: "강은영의 유로 힐킥*",
    desc: "축구에 ‘진심’인 이들을 위한 <br/> '유럽축구 이야기방'을 표방합니다.",
    type: "newsletter",
    imgSrc: new URL(
      `../../assets/image/newsletter/cardBg/newjam_cate_${NEWSLETTER_CODE.eurokick}.png`,
      import.meta.url
    ).href,
    listType: "new",
  },
  {
    code: NEWSLETTER_CODE.bookissue,
    title: "조태성의 북&이슈",
    day: "수요일",
    dayCode: "wed",
    time: "08:00",
    name: "조태성의 북앤이슈*",
    desc: "책 속 문장을 함께 거닐며<br>우리가 발 디딘 한국 사회를 음미해봅시다.",
    type: "newsletter",
    imgSrc: new URL(
      `../../assets/image/newsletter/cardBg/newjam_cate_${NEWSLETTER_CODE.bookissue}.png`,
      import.meta.url
    ).href,
    listType: "new",
  },
  {
    code: NEWSLETTER_CODE.woorimal,
    title: "노경아의 달곰한 우리말",
    day: "목요일",
    dayCode: "thu",
    time: "07:30",
    name: "노경아의 달곰한 우리말",
    desc: "사소한 듯 중요한 우리말.<br>생활 속 이야기로 바른 쓰임을 알려 드릴게요.",
    type: "newsletter",
    imgSrc: new URL(
      `../../assets/image/newsletter/cardBg/newjam_cate_${NEWSLETTER_CODE.woorimal}.png`,
      import.meta.url
    ).href,
    listType: "new",
  },
  {
    code: NEWSLETTER_CODE.brief,
    title: "위클리 브리프",
    name: "뉴잼 브리프",
    time: "07:30",
    day: "화요일",
    dayCode: "tue",
    desc: "한국일보의 알찬 취재, 기획을<br>매주 화요일 일목요연하게 받아보세요.",
    type: "newsletter",
    imgSrc: new URL(
      `../../assets/image/newsletter/cardBg/newjam_cate_${NEWSLETTER_CODE.brief}.png`,
      import.meta.url
    ).href,
    listType: "issue",
  },
  {
    code: NEWSLETTER_CODE.story,
    title: "위클리 스토리",
    day: "금요일",
    dayCode: "fri",
    time: "07:30",
    name: "뉴잼 스토리",
    desc: "한국일보의 연재, 이야기를<br>매주 금요일 차곡차곡 만나세요.",
    type: "newsletter",
    imgSrc: new URL(
      `../../assets/image/newsletter/cardBg/newjam_cate_${NEWSLETTER_CODE.story}.png`,
      import.meta.url
    ).href,
    listType: "issue",
  },

  {
    code: NEWSLETTER_CODE.herspective,
    title: "이혜미의 허스펙티브",
    day: "화요일",
    dayCode: "tue",
    time: "08:00",
    name: "허스펙티브",
    desc: "‘허스펙티브’는 평등하고 다정한 세상을<br>꿈꾸는 사람들의 공간입니다.",
    type: "newsletter",
    imgSrc: new URL(
      `../../assets/image/newsletter/cardBg/newjam_cate_${NEWSLETTER_CODE.herspective}.png`,
      import.meta.url
    ).href,
    listType: "interest",
  },
  {
    code: NEWSLETTER_CODE.anilog,
    title: "고은경의 애니로그",
    day: "수요일",
    dayCode: "wed",
    time: "09:00",
    name: "애니로그",
    desc: "반려인구 1,500만 시대,<br>쉽고 정확한 동물 이야기를 들려드려요.",
    type: "newsletter",
    imgSrc: new URL(
      `../../assets/image/newsletter/cardBg/newjam_cate_${NEWSLETTER_CODE.anilog}.png`,
      import.meta.url
    ).href,
    listType: "interest",
  },
  {
    code: NEWSLETTER_CODE.insight_s2,
    title: "디너 인사이트",
    day: "수요일",
    dayCode: "wed",
    time: "19:00",
    name: "디너 인사이트",
    desc: "한국일보 논설실의 관점있는 디너,<br>매주 수요일에 보내드려요.",
    type: "newsletter",
    imgSrc: new URL(
      `../../assets/image/newsletter/cardBg/newjam_cate_${NEWSLETTER_CODE.insight_s2}.png`,
      import.meta.url
    ).href,
    listType: "interest",
  },
  {
    code: NEWSLETTER_CODE.touchyou,
    title: "치유하는 터전, 터치유",
    day: "목요일",
    dayCode: "thu",
    time: "14:00",
    name: "터치유*",
    desc: "평범한 이웃들의 비범한 고민,<br>일상을 지키는 마음 돌봄 이야기를 담아요.",
    type: "newsletter",
    imgSrc: new URL(
      `../../assets/image/newsletter/cardBg/newjam_cate_${NEWSLETTER_CODE.touchyou}.png`,
      import.meta.url
    ).href,
    listType: "interest",
  },
  {
    code: NEWSLETTER_CODE.careeup,
    title: "커리어 길라잡이, 커리업",
    day: "목요일",
    dayCode: "thu",
    time: "14:00",
    name: "커리업*",
    desc: "자신만의 커리어 궤적을 개척하는<br> 모험에 초대합니다",
    type: "newsletter",
    imgSrc: new URL(
      `../../assets/image/newsletter/cardBg/newjam_cate_${NEWSLETTER_CODE.careeup}.png`,
      import.meta.url
    ).href,
    listType: "interest",
  },
  {
    code: NEWSLETTER_CODE.movie,
    title: "라제기의 영화로운",
    day: "금요일",
    dayCode: "fri",
    time: "11:00",
    name: "영화로운",
    desc: "영화 전문 기자가 전하는<br>남다른 시네마 토크에 빠져보세요.",
    type: "newsletter",
    imgSrc: new URL(
      `../../assets/image/newsletter/cardBg/newjam_cate_${NEWSLETTER_CODE.movie}.png`,
      import.meta.url
    ).href,
    listType: "interest",
  },

  {
    code: NEWSLETTER_CODE.memorial,
    title: "가만한 당신, 못다 한 말들",
    day: "금요일",
    dayCode: "fri",
    desc: "흩어지고 달아나려는 ‘가만한 당신'의<br>언저리 이야기를 전합니다. ",
    type: "newsletter",
    imgSrc: new URL(
      `../../assets/image/newsletter/cardBg/newjam_cate_${NEWSLETTER_CODE.memorial}.png`,
      import.meta.url
    ).href,
    listType: NEWSLETTER_STATUS.FINISHED,
  },
  {
    code: NEWSLETTER_CODE.insight,
    title: "이충재의 인사이트",
    day: "금요일",
    dayCode: "fri",
    desc: "이충재 주필이 엄선한 화두와 칼럼을 주중<br>매일 오전 7시 보내드립니다.",
    type: "newsletter",
    imgSrc: new URL(
      `../../assets/image/newsletter/cardBg/newjam_cate_${NEWSLETTER_CODE.insight}.png`,
      import.meta.url
    ).href,
    listType: NEWSLETTER_STATUS.FINISHED,
  },
  {
    code: NEWSLETTER_CODE.munhak,
    title: "무낙: Munhak",
    day: "금요일",
    dayCode: "fri",
    desc: "당신의 일상에 문학을 똑똑(knock knock)!<br>신선한 문학 소식을 배달합니다.",
    type: "newsletter",
    imgSrc: new URL(
      `../../assets/image/newsletter/cardBg/newjam_cate_${NEWSLETTER_CODE.munhak}.png`,
      import.meta.url
    ).href,
    listType: NEWSLETTER_STATUS.FINISHED,
  },
  {
    code: NEWSLETTER_CODE.rabbit,
    title: "토끼랑 산다",
    day: "금요일",
    dayCode: "fri",
    desc: "토끼랑 동거 9년차 이순지 기자가<br>토끼의 세계를 전합니다.",
    type: "newsletter",
    imgSrc: new URL(
      `../../assets/image/newsletter/cardBg/newjam_cate_${NEWSLETTER_CODE.rabbit}.png`,
      import.meta.url
    ).href,
    listType: NEWSLETTER_STATUS.FINISHED,
  },
  {
    code: NEWSLETTER_CODE.basic,
    title: "옛 뉴잼",
    day: "금요일",
    desc: "뉴스 안에 담긴 시시콜몰<br>What, How, Why를 재밌고 알차게 전합니다.",
    type: "newsletter",
    imgSrc: new URL(
      `../../assets/image/newsletter/cardBg/newjam_cate_${NEWSLETTER_CODE.basic}.png`,
      import.meta.url
    ).href,
    listType: NEWSLETTER_STATUS.FINISHED,
  },
];

const transformNewsletterData = (letterlistParam) => {
  const days = ["mon", "tue", "wed", "thu", "fri"];
  const numListToShow = 3;

  const tableData = days.map((day) => {
    const newsletters = letterlistParam
      .filter((item) => item.dayCode?.toLowerCase() === day)
      .sort((a, b) => (a < b ? -1 : 1));
    const limitedNewsletters = newsletters.slice(0, numListToShow);
    const fillCount = Math.max(0, numListToShow - limitedNewsletters.length);
    const fillerObjects = Array.from({ length: fillCount }, (_) => ({
      time: "",
      name: "",
    }));
    return {
      dayCode: day,
      dateLabel: NEWSLETTER_LIST.find(
        (item) =>
          item.dayCode.toLowerCase() === day &&
          item.listType !== NEWSLETTER_STATUS.FINISHED
      )?.day,
      newsletterList: newsletters
        .slice(0, numListToShow)
        .map((newsletter) => ({
          time: newsletter.time,
          name: newsletter.name,
        }))
        .concat(fillerObjects),
    };
  });

  return {
    numListToShow,
    tableData,
  };
};

export const NEWSLETTER_TABLE_FORMAT = transformNewsletterData(NEWSLETTER_LIST);
