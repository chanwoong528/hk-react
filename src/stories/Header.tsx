import React from 'react'
import "./header.scss";

interface HeaderProps {

  type?: string;
  title?: string;
  sub?: string;
  btns?: React.ReactElement;
}


export const Header = ({ type = "default",
  title = "default", sub, btns, ...props }: HeaderProps) => {
  return (
    <div className={['hk-header', `hk-header--${type}`].join(' ')}
      {...props}>
      <div className='title-wrap'>
        <h2>{title}</h2>
        {!!sub ? <span className='sub-title'>{sub}</span> : ""}
      </div>
      {btns}
    </div>
  )
}

