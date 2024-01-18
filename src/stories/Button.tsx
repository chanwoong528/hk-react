import React from 'react';
// import './button.css';
// import "./button.module.scss";
import "./button.scss";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  title?: string;
  btnType?: "nothing" | "link"
  linkHref?: string
  /**
   * Optional click handler
   */

  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  title,
  btnType,
  linkHref,

  ...props
}: ButtonProps) => {
  const mode = primary ? 'hk-button--primary' : 'hk-button--secondary';
  if (btnType === "link") {
    return <a
      href={linkHref}
      type="button"
      className={['hk-button', `hk-button--${size}`, mode, btnType].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {title}
    </a>
  }
  return (
    <button
      type="button"
      className={['hk-button', `hk-button--${size}`, mode, btnType].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {title}
    </button>
  );
};
