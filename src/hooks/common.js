import { useState } from "react";

export const useCountState = (defaultValue = 0) => {
  const [count, setCount] = useState(defaultValue);

  const addCount = () => {
    setCount(count + 1);
  };

  return { count, addCount };
};

export const useIsShowState = (defaultValue)=>{
  const [isShow, setIsShow] = useState(defaultValue)

  const showElement = ()=>{
    setIsShow(true)
  }
  
  const hideElement =()=>{
    setIsShow(false)
  }

  const toggleElement = ()=>{
    isShow ? setIsShow(false) : setIsShow(true)
    
  }
  return {isShow, showElement, hideElement, toggleElement}
}
