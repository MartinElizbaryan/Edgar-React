import { useState } from "react";
import Task from "../../classes/Task";
import {
  randomDescription,
  randomNames,
  randomStatus,
} from "../../helpers/user";

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [settings, setSettings] = useState({
    name: {
      isToDown: true,
      isActive: false,
    },
    status: {
      isToDown: false,
      isActive: true,
    },
  });

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

  const sortByName = () => sortByField("name");

  const sortByStatus = () => sortByField("status");

  const sortByField = (field) => {
    const cloneTasks = [...tasks];

    cloneTasks.sort((a, b) => {
      if (a[field] > b[field]) {
        return settings[field].isToDown ? 1 : -1;
      }

      if (a[field] < b[field]) {
        return settings[field].isToDown ? -1 : 1;
      }

      return 0;
    });

    setTasks(cloneTasks);

    setSettings({
      ...settings,
      [field]: { isToDown: !settings[field].isToDown, isActive: true },
    });
  };

  const sortByStatusDone = () => {
    // Todo - change like preview code

    const cloneTasks = [...tasks];
      cloneTasks.sort((a, b) => {
        if (settings.status.isToDown) {
          if (a.status > b.status) {
            return 1;
          }
          if (a.status < b.status) {
            return -1;
          }
        }
      })
    setTasks(cloneTasks)
    setSettings({
      ...settings,
      status: { isToDown: !settings.status.isToDown, isActive: true },
    });
  };

  const allDone = ()=>{
    const cloneTasks = [...tasks]
    cloneTasks.map((item)=> item.status = true)
    setTasks(cloneTasks)
  }
  
  const allReOpen = ()=>{
    const cloneTasks = [...tasks]
    cloneTasks.map((item)=> item.status = false)
    setTasks(cloneTasks)
  }

  const statusReverse = ()=>{
    const cloneTasks = [...tasks]
    cloneTasks.map((item) => item.status = !item.status)
    setTasks(cloneTasks)
  }

  const allReOpenedStatusDelete = ()=>{
    setTasks([...tasks].filter((item)=> item.status === true))
  }

  return {
    addRandomTask,
    tasks,
    reopenTask,
    doneTask,
    deleteTask,
    sortByName,
    sortByStatus,
    sortByStatusDone,
    allDone,
    allReOpen,
    statusReverse,
    allReOpenedStatusDelete
  };
};
