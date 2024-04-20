import { useState } from "react";
import Task from "../../classes/Task";
import {
  randomDescription,
  randomNames,
  randomStatus,
} from "../../helpers/user";

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  const addRandomTask = () => {
    const newTask = new Task(
      randomNames(),
      randomDescription(),
      randomStatus()
    );

    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => id !== item.id));
  };

  const doneTask = (id) => {
    const changedTasks = tasks.map((item) => {
      if (item.id === id) {
        item.status = true;
      }

      return item;
    });

    setTasks(changedTasks);
  };

  const reopenTask = (id) => {
    const changedTasks = tasks.map((item) => {
      if (item.id === id) {
        item.status = false;
      }

      return item;
    });

    setTasks(changedTasks);
  };
  const [isDown, setIsDown] = useState([1,-1])

  const sortByName = () =>{
    setTasks([...tasks].sort((a, b)=> {
      setIsDown([...isDown].reverse())
      if (a.name > b.name) {
        return isDown[0]
      }
      if (a.name < b.name) {
        return isDown[1]
      }
      return 0
    }))
  }

  const sortByStatus =()=>{
    setTasks([...tasks].sort((a,b) => b.status - a.status))
  }

  return { addRandomTask, tasks, reopenTask, doneTask, deleteTask, sortByName, sortByStatus };
};
