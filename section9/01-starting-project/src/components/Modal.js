import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div>
      <div classNAme={classes.backdrop}></div>
      <div className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <button>Okay</button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
