import { NEWSLETTER_STATUS } from "../pages/newsletter/NEWSLETTERCODE";
import "./card.scss";

interface CardProps {
  status?: string;
  code?: string;
  type?: string;
  title?: string;
  imgSrc?: string;
  thumbSrc?: string;
  url?: string;
  day?: string;
  desc?: string;

  onClickBtn?: (groupCdParam: string) => void;

}
export const Card = ({
  status = "default",
  type = "default",
  code,
  title,
  imgSrc,
  url,
  day,
  desc,
  thumbSrc,
  onClickBtn,
  ...props
}: CardProps) => {

  const renderFooterByType = () => {
    switch (status) {
      case NEWSLETTER_STATUS.FINISHED:

        return (
          <div className="hk-card-footer">
            <a href={`/NewsLetter/${code}`} className="hk-card-footer-btn">지난레터보기</a>
          </div>
        )
      case NEWSLETTER_STATUS.SUBSCRIBED:
        return <div className="hk-card-footer">
          <button
            className={`hk-card-footer-btn subs-btn ${NEWSLETTER_STATUS.SUBSCRIBED}`}
            onClick={() => onClickBtn(code)}
          >구독중</button>
          <a href={`/NewsLetter/${code}`} className="hk-card-footer-btn">지난레터보기</a>
        </div>
      default:
        return <div className="hk-card-footer">
          <button
            className="hk-card-footer-btn subs-btn"
            onClick={() => onClickBtn(code)}>구독</button>
          <a href={`/NewsLetter/${code}`} className="hk-card-footer-btn">지난레터보기</a>
        </div>;
    }
  }

  if (type === "main-newsletter") {
    return <li className={['hk-card', `hk-card--${type}${status === NEWSLETTER_STATUS.FINISHED ? " finished" : ""}`].join(' ')}
      {...props}>
      <a href={`/NewsLetter/${code}`} className="innerlink">
        <aside className="img-side-txt">
          <h3 className="sub-tit">{title}</h3>
          <p className="para" dangerouslySetInnerHTML={{ __html: desc }}></p>
          <p className="date-info">{day}</p>
        </aside>
        <figure className="img-box">
          <img src={thumbSrc} alt={title} />
        </figure>
      </a>

    </li>
  }


  return <li className={['hk-card', `hk-card--${type}${status === NEWSLETTER_STATUS.FINISHED ? " finished" : ""}`].join(' ')}
    {...props}>
    <div className="hk-card-header">
      <h3>{title}</h3>
      {
        status === NEWSLETTER_STATUS.FINISHED ?
          <p className="day">연재종료</p> :
          <p className="day">{day}</p>
      }
    </div>
    <a href={url}>
      <div className="hk-card-frame">
        <img src={imgSrc} alt={title} />
      </div>
      <p className="hk-card-desc" dangerouslySetInnerHTML={{ __html: desc }}></p>
    </a>
    {renderFooterByType()}
  </li>
}