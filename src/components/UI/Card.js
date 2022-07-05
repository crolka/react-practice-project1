import React from "react";

import styles from "./Card.module.css";

const Card = (props) => {
  const inheritedStyles = `${styles.card} ${props.className}`;

  return (
    <div className={inheritedStyles}>
      {props.children}
    </div>
  );
};

export default Card;
