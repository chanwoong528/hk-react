import React from 'react'
import "./header.scss";

interface HeaderProps {

  type?: string;
  title?: string;
}


export const Header = ({ type = "default",
  title = "default", ...props }: HeaderProps) => {
  return (
    <h2 className={['hk-header', `hk-header--${type}`].join(' ')}
      {...props}>{title}</h2>
  )
}

