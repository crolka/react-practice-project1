import React from "react";

import Card from "./Card";
import Button from "./Button";

import styles from "./ModalOverlay.module.css";

const ModalOverlay = (props) => {

  return (
    <div>
      <div className={styles.backdrop} onClick={props.onConfirm} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.headerText}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.contentText}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onConfirm}>Ok</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ModalOverlay;
