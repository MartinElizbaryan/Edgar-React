import React, { useState } from "react";

const randomPersons = [
  {
    person: "edgar hambardzumyan",
    description: "qwe@gmail.com",
    status: "not done",
  },
  {
    person: "martin elizbaryan",
    description: "rty@gmail.com",
    status: "not done",
  },
  {
    person: "vazgen alavedyan",
    description: "uio@gmail.com",
    status: "not done",
  },
  {
    person: "karen mxitaryan",
    description: "asd@gmail.com",
    status: "not done",
  },
];

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addRandomTask = () => {
    const newTask =
      randomPersons[Math.floor(Math.random() * randomPersons.length)];

    setTasks([...tasks, newTask]);
  };

  console.log(tasks);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Person</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((item) => (
            <tr>
              <td>{item.person}</td>
              <td>{item.description}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={() => addRandomTask()}>add random task</button>
    </div>
  );
};

export default App;
