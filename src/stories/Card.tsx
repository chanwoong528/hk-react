import { NEWSLETTER_STATUS } from "../pages/newsletter/NEWSLETTERCODE";
import "./card.scss";

interface CardProps {
  status?: string
  type?: string;
  title?: string;
  imgSrc?: string;
  url?: string;
  day?: string;
  desc?: string;
  onClick?: () => void;
}
export const Card = ({
  status = "default",
  type = "default",
  title,
  imgSrc,
  url,
  day,
  desc,
  ...props
}: CardProps) => {

  const renderFooterByType = () => {
    switch (status) {
      case NEWSLETTER_STATUS.FINISHED:

        return (
          <footer className="hk-card-footer">
            <a className="hk-card-footer-btn">지난레터보기</a>
          </footer>
        )
      case NEWSLETTER_STATUS.SUBSCRIBED:
        return <footer className="hk-card-footer">
          <button className="hk-card-footer-btn subs-btn on">구독중</button>
          <a className="hk-card-footer-btn">지난레터보기</a>
        </footer>
      default:
        return <footer className="hk-card-footer"><button className="hk-card-footer-btn subs-btn">구독</button> <a className="hk-card-footer-btn">지난레터보기</a></footer>;
    }
  }



  return <li className={['hk-card', `hk-card--${type}${status === NEWSLETTER_STATUS.FINISHED ? " finished" : ""}`].join(' ')}
    {...props}>
    <header className="hk-card-header">
      <h3>{title}</h3>
      {
        status === NEWSLETTER_STATUS.FINISHED ?
          <p className="day">연재종료</p> :
          <p className="day">{day}</p>
      }
    </header>
    <a href={url}>
      <div className="hk-card-frame">
        <img src={imgSrc} alt={title} />
      </div>
      <p className="hk-card-desc" dangerouslySetInnerHTML={{ __html: desc }}></p>
    </a>
    {renderFooterByType()}
  </li>
}