import { useState, Fragment } from "react";
import { useCountState, useShowState } from "./hooks/common";

const App = () => {
  const { count, addCount } = useCountState(0);
  const [age, setAge] = useState(5);

  const {
    isShow: isShowButton,
    show: showButton,
    hide: hideButton,
    toggle: toggleButton,
  } = useShowState();

  const {
    isShow: isShowTextBlock,
    show: showTextBlock,
    hide: hideTextBlock,
    toggle: toggleTextBlock,
  } = useShowState(true);

  const editAge = (newAge) => {
    setAge(newAge);
  };

  return (
    <div>
      {/* <button onClick={() => add()}>Add+</button> */}
      <button onClick={showButton}>Show</button>
      <button onClick={hideButton}>Hide</button>
      <button onClick={toggleButton}>Toggle</button>

      <br />
      <br />

      <button onClick={showTextBlock}>Show</button>
      <button onClick={hideTextBlock}>Hide</button>
      <button onClick={toggleTextBlock}>Toggle</button>

      <br />
      <br />

      {isShowTextBlock && <div>Some text</div>}

      {isShowButton && (
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
