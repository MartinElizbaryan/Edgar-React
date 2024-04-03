import sum, { minus } from "./fn";
import { sum as suuuuum, multiple } from "./fn2";

const App = () => {
  const result = sum(1, 3);

  return (
    <div>
      <h1>Count: {result}</h1>
    </div>
  );
};

export default App;
