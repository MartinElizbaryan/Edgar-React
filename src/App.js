// import sum, { minus } from "./fn";
// import { sum as suuuuum, multiple } from "./fn2";
// import {plus , multiple , minus} from './a'
import User from './c';

const App = () => {
  const user1 = new User('edgar', 'hambardzumyan')
  const user2 = new User('martin', 'elizbaryan')
  console.log(user1);
  console.log(user1.getFullName());
  console.log(user2.getFullName());
  // const result = sum(1, 3);
  // console.log(plus(2,2));
  // console.log(multiple(2,2));
  // console.log(minus(2,2));

  return (
    <div>
      <h1>Name: {user2.getFullName()}</h1>
    </div>
  );
};

export default App;
