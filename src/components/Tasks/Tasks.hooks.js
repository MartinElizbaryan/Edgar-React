import { useState } from "react";
import Task from "../../classes/Task";
import {
  randomDescription,
  randomNames,
  randomStatus,
} from "../../helpers/user";

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [isDown, setIsDown] = useState({
      name: {
        isToDown: true,
        isActive: false,
      },
      status: {
        isToDown: false,
        isActive: true,
      }
  })

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

  const sortByName = () =>{
    setTasks([...tasks].sort((a, b)=> {
      if(isDown.name.isToDown){
        if (a.name > b.name) {
          return 1
        }
        if (a.name < b.name) {
          return -1
        }
        return 0

      }else{
        if (a.name > b.name) {
          return -1
        }
        if (a.name < b.name) {
          return 1
        }
        return 0
      }
    }))
    setIsDown({...isDown, name : {isToDown : !isDown.name.isToDown, isActive : true}})
  }

  const sortByStatus =()=>{
    setTasks([...tasks].sort((a,b) => {
      if(isDown.status.isToDown){
        return a.status - b.status
      }else{
        return b.status - a.status
      }
    }))
    setIsDown({...isDown, status : {isToDown : !isDown.status.isToDown, isActive : true}})
  }

  const sortByStatusDone = ()=>{
    setTasks([...tasks].sort((a,b)=>{
      if(isDown.status.isToDown){
        if(a.status > b.status){

          return 1
        }
        if(a.status < b.status){
  
          return -1
        }

      }
    }))
  }

  return { addRandomTask, tasks, reopenTask, doneTask, deleteTask, sortByName, sortByStatus,sortByStatusDone };
};
