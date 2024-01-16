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

export const NEWSLETTER_LIST = [
  {
    code: NEWSLETTER_CODE.europelife,
    title: "슬기로운 유럽생활",
    day: "월요일",
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
    day: "화요일",
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
    desc: "영화 전문 기자가 전하는<br>남다른 시네마 토크에 빠져보세요.",
    type: "newsletter",
    imgSrc: new URL(
      `../../assets/image/newsletter/cardBg/newjam_cate_${NEWSLETTER_CODE.movie}.png`,
      import.meta.url
    ).href,
    listType: "interest",
  },
];
