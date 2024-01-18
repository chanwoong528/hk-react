import React from 'react'

import "./modal.scss";

interface ModalProps {
  type: "default" | ""
  title?: string;
  desc: React.ReactElement | React.ReactElement[] | string;
  btns?: React.ReactElement | React.ReactElement[];
  btnLayout?: "flex-end" | "flex-start" | "center" | "space-between"

}


export const Modal = ({
  type = "default",
  title,
  desc,
  btns,
  btnLayout,
  ...props
}: ModalProps) => {

  return (
    <div className="dim" >
      <div className={["hk-modal", `hk-modal--${type}`].join(" ")} {...props}>
        {!!title ? <h1 className="hk-modal-title">{title}</h1> : null}
        <div className="hk-modal-content">
          {desc}
        </div>
        <div className="hk-modal-btn-con" style={{ justifyContent: btnLayout }}>
          {btns}
        </div>
      </div>
    </div >
  );
};
