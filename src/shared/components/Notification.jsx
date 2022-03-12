import React, { useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";
import { useState } from "react";
import Wrapper from "./Notification.styles";

const animationTiming = {
  enter: 500,
  exit: 400,
};

const Notification = () => {
  const title = useSelector((state) => state.lastRated.title);
  const rating = useSelector((state) => state.lastRated.rating);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!title) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [title]);

  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={show}
      timeout={animationTiming}
      classNames={{
        enter: "",
        enterActive: "showing",
        exit: "",
        exitActive: "hiding",
      }}
    >
      <Wrapper>
        <span>Ostatnio ocenione: <strong>{title}</strong></span>
        <span className="ms-2">
          {" "}
          Ocena: <strong>{rating}</strong>
        </span>
      </Wrapper>
    </CSSTransition>
  );
};

export default Notification;


