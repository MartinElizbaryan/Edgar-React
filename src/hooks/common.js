import { useState } from "react";

export const useCountState = (defaultValue = 0) => {
  const [count, setCount] = useState(defaultValue);

  const addCount = () => {
    setCount(count + 1);
  };

  return { count, addCount };
};
