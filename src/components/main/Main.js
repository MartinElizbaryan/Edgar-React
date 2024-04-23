import React from "react";
import WorkerRow from "../workerRow/WorkerRow";
import { useMain } from "./Main.hooks";

const Main = () => {
  const { workers, count, addCount } = useMain();

  return (
    <main>
      <div>
        <button onClick={() => addCount()}>+1</button>
        <button onClick={() => addCount(100)}>+100</button>
        {count}
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Salaries</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {workers.map(({ id, name, salariesJoined, total }) => (
            <tr key={id}>
              <WorkerRow
                id={id}
                name={name}
                salary={salariesJoined}
                total={total}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default Main;
