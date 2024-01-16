import "./card.scss";

interface CardProps {
  type?: string;
  title?: string;
  imgSrc?: string;
  url?: string;
  day?: string;
  desc?: string;
  onClick?: () => void;
}
export const Card = ({
  type = "default",
  title,
  imgSrc,
  url,
  day,
  desc,
  ...props
}: CardProps) => {


  return <li className={['hk-card', `hk-card--${type}`].join(' ')}
    {...props}>
    <header className="hk-card-header">
      <h3>{title}</h3>
      <p className="day">{day}</p>
    </header>
    <a href={url}>
      <div className="hk-card-frame">
        <img src={imgSrc} alt={title} />
      </div>
      <p className="hk-card-desc" dangerouslySetInnerHTML={{ __html: desc }}></p>
    </a>
  </li>
}