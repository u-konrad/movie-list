import React, { Fragment, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";
import { useState } from "react";
import Wrapper from "./Notification.styles";
import { IoIosClose, IoIosArrowUp } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";

const animationTiming = {
  enter: 500,
  exit: 400,
};

const Notification = () => {
  const ratedList = useSelector((state) => state.lastRated.ratedList);
  const [show, setShow] = useState(false);

  const listHasEntries = !!ratedList?.length;

  useEffect(() => {
    if (!listHasEntries) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [ratedList]);

  return (
    <Fragment>
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
          <button
            className="btn btn-outline-dark"
            onClick={() => setShow(false)}
          >
            <IoIosClose />
          </button>
          <div>
            <p className="text-start mb-2">Ostatnio ocenione:</p>
            {ratedList.map((movie) => (
              <p className="text-start d-flex justify-content-between mb-2 ">
                <span>
                  <strong>{movie.title}</strong>
                </span>
                <span>
                  <strong>{movie.value}</strong>{" "}
                  <AiFillStar style={{ color: "goldenrod" }} />
                </span>
              </p>
            ))}
          </div>
        </Wrapper>
      </CSSTransition>
      {listHasEntries & !show ? (
        <button
          className="btn btn-outline-dark btn-open"
          onClick={() => setShow(true)}
        >
          <IoIosArrowUp />
        </button>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default Notification;
