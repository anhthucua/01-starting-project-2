import React from "react";
import ReactDOM from 'react-dom';
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";

function Backdrop(props) {
  return <div className={classes.backdrop} onClick={props.onConFirm} />;
}

function ModalOverlay(props) {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConFirm}>Okay</Button>
      </footer>
    </Card>
  )
}

function ErrorModal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop 
          onConFirm={props.onConFirm} 
        />, 
        document.getElementById('backdrop-root')
      )}

      {ReactDOM.createPortal(
        <ModalOverlay 
          title={props.title}
          message={props.message} 
          onConFirm={props.onConFirm}
        />, 
        document.getElementById('overlay-root')
      )}
      
    </React.Fragment>
  );
}

export default ErrorModal;
