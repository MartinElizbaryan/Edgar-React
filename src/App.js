import React, { useState } from "react";
import User from "./classes/User";
import { randomNames,randomSurnames,randomActions } from "./helpers/user";


const App = () => {
  const [tasks, setTasks] = useState([]);

  const addRandomTask = () => {
    const newTask = new User(randomNames(),randomSurnames(), 'nod done',randomActions())

    setTasks([...tasks, newTask]);
  };

  const del = (id)=>{
    setTasks(tasks.filter((item)=>id !== item.Id))
  }
  const doneOrReopen = (action, id)=>{
    if(action === 'ReOpen red'){
      tasks.forEach((item)=>{
        if(id === item.Id){
          const button = document.getElementById(`inp${item.Id}`)
          item.action = 'DoneGreen'
          item.status = 'not done'
          button.style.background = 'green'
        }
      })
      setTasks([...tasks])
    }else{
      tasks.forEach((item)=>{
        if(id === item.Id){
          const button = document.getElementById(`inp${item.Id}`)
          item.action = 'ReOpen red'
          item.status = 'Done'
          button.style.background = 'red'

        }
      })
      setTasks([...tasks])
    }
  }

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
              <td><button id={`inp${item.Id}`} onClick={() => doneOrReopen(item.action, item.Id)}>{item.action}</button></td>
              <td><button onClick={() => del(item.Id)}>delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={() => addRandomTask()}>add random task</button>
    </div>
  );
};

export default App;
