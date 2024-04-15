import React, { Fragment, useEffect, useState } from "react";
import { getCollectionData, getUsers } from "./helpers/user";
import { PLACEHOLDER_URL, QUERY_TYPE } from "./constants/common";

const App = () => {
 const randomPersons = [{
  person : 'edgar hambardzumyan',
  description : 'qwe@gmail.com',
  status : 'not done'
 },
 {
  person : 'martin elizbaryan',
  description : 'rty@gmail.com',
  status : 'not done'
 },
 {
  person : 'vazgen alavedyan',
  description : 'uio@gmail.com',
  status : 'not done'
 },
 {
  person : 'karen mxitaryan',
  description : 'asd@gmail.com',
  status : 'not done'
 }]

 const [tasks, setTasks] = useState([])


 
 const addRandomTask = () =>{
 tasks.push(randomPersons[Math.floor(Math.random() * 4)])
 setTasks([...tasks]) 
 console.log(tasks);
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
            <th><button onClick={()=> addRandomTask()}>add random task</button></th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((item)=>{
              (
                <tr>
                  <td>{item.person}</td>
                  <td>{item.description}</td>
                  <td>{item.status}</td>
                </tr>
              )
            })}
            
          

          
        </tbody>
      </table>
    </div>
  );
};

export default App;
