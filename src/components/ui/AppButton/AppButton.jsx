import React from "react";
import clsx from "clsx";

import styles from "./AppButton.module.scss";

export const AppButton = ({
  children,
  className,
  variant = "transparent",
  ...props
}) => {
  const variantColor = {
    transparent: styles.transparent,
    outlined: styles.outlined,
  };

  return (
    <button
      className={clsx(styles.button, variantColor[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
