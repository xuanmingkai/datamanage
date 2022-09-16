import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux'

import {actionTypes} from '../../store/constant'

const whitelist = ["/", "/admin", "/results", "/profile"];

const IdleTimer = () => {
  const location = useLocation();
  let timeout;

  const dispatch = useDispatch()

  const goBackToHome = () => {
    dispatch({type: actionTypes.STATUS_TIMER, statusTimer: true})
  };

  const restartAutoReset = () => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      goBackToHome();
    }, 1000 * 60);
  };

  const onMouseMove = () => {
    restartAutoReset();
  };

  useEffect(() => {
    // Whitelist certain pages
    let preventReset = false;
    for (const path of whitelist) {
      if (path === location.pathname) {
        preventReset = true;
      }
    }
    if (preventReset) {
      return;
    }

    // initiate timeout
    restartAutoReset();

    // listen for mouse events
    window.addEventListener("mousemove", onMouseMove);

    // cleanup
    return () => {
      if (timeout) {
        clearTimeout(timeout);
        window.removeEventListener("mousemove", onMouseMove);
      }
    };
  }, [location]);
  return <div />;
};

export default IdleTimer
