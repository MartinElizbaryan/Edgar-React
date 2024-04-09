import { useState, Fragment } from "react";
import { useCountState, useIsShowState } from "./hooks/common";

const App = () => {
  const { count, addCount } = useCountState(0);
  const [age, setAge] = useState(5);
  const {isShow, showElement, hideElement, toggleElement} = useIsShowState(false)

  const editAge = (newAge) => {
    setAge(newAge);
  };

  return (
    <div>
      {/* <button onClick={() => add()}>Add+</button> */}
      <button onClick={showElement}>Show</button>
      <button onClick={hideElement}>Hide</button>
      <button onClick={toggleElement}>Toggle</button>

      <br />
      <br />

      {isShow && (
        <Fragment>
          <button onClick={addCount}>Add+1</button>
          <button onClick={() => editAge(20)}>Set Age 20</button>
          <button onClick={() => editAge(100)}>Set Age 100</button>
          <h1>Count: {count}</h1>
          <h1>Age: {age}</h1>
        </Fragment>
      )}
    </div>
  );
};

export default App;

// HomeWork

// hide, show, toggle with custom hook
// vonca ashxatum useSate
// Fragment-i gaxapary
// read useEffect -> https://legacy.reactjs.org/docs/hooks-effect.html

// const state2 = (defaultValue) => {
//   let value = defaultValue;
//   let setValue = (newValue) => {
//     const needToRender = newValue !== value;
//     value = newValue;
//     // if(needToRender) render()
//   };

//   return { value, setValue };
// };

// const { value: count, setValue: setCount } = state2(0);
// const { value: age, setValue: setAge } = state2(0);
