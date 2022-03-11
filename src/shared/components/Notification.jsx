import React, { useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";
import { useState } from "react";
import styled from "styled-components";

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

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: black;
  padding: 1rem;
  background-color: gainsboro;

  .showing {
    animation: showing 0.5s ease-in-out;
  }

  .hiding {
    animation: hiding 0.5s ease-in-out;
  }

  @keyframes showing {
    0% {
      opacity: 0;
      transform: translateY(100%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes hiding {
    0% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(100%);
    }
  }
`;
