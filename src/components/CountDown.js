import React, { useEffect, useState } from "react";
import { MdOutlineChevronRight } from "react-icons/md";

const CountDown = () => {
  const [days, setDays] = useState(6);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const style = {
    backgroundImage: `url('/images/campaign-cover-countdown.jpg')`,
    height: "500px",
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          if (hours === 0) {
            if (days === 0) {
              setDays(6);
              setHours(0);
              setMinutes(0);
              setSeconds(0);
            } else {
              setDays(days - 1);
              setHours(23);
              setMinutes(59);
              setSeconds(59);
            }
          } else {
            setHours(hours - 1);
            setMinutes(59);
            setSeconds(59);
          }
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [days, hours, minutes, seconds]);

  return (
    <div style={style}>
      <div className="d-flex mt-3 align-items-center justify-content-around flex-wrap">
        <div className="days ">
          <span className="d-num">{days} </span>
          <span className="d-text">days</span>
        </div>
        <div className="hours ">
          <span className="d-num">{hours} </span>
          <span className="d-text">hours</span>
        </div>
        <div className="minutes ">
          <span className="d-num">{minutes} </span>
          <span className="d-text">minutes</span>
        </div>
        <div className="seconds ">
          <span className="d-num">{seconds} </span>
          <span className="d-text">seconds</span>
        </div>
      </div>
      <div className="count-first mt-5 text-center">
        <h1>WOO! Flash Sale</h1>
        <span>
          Shop Now <MdOutlineChevronRight />
        </span>
      </div>
    </div>
  );
};

export default CountDown;
