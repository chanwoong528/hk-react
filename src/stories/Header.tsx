import React from 'react'
import "./header.scss";

interface HeaderProps {

  type?: string;
  title?: string;
  sub?: string;
}


export const Header = ({ type = "default",
  title = "default", sub, ...props }: HeaderProps) => {
  return (
    <header className={['hk-header', `hk-header--${type}`].join(' ')}
      {...props}>
      <h2>{title}</h2>
      {!!sub ? <span className='sub-title'>{sub}</span> : ""}
    </header>
  )
}

