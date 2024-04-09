import { useState } from "react";

export const useCountState = (defaultValue = 0) => {
  const [count, setCount] = useState(defaultValue);

  const addCount = () => {
    setCount(count + 1);
  };

  return { count, addCount };
};

export const useShowState = (defaultValue = false) => {
  const [isShow, setIsShow] = useState(defaultValue);

  const show = () => {
    setIsShow(true);
  };

  const hide = () => {
    setIsShow(false);
  };

  const toggle = () => {
    // isShow ? setIsShow(false) : setIsShow(true);
    setIsShow(!isShow);
  };
  return { isShow, show, hide, toggle };
};
