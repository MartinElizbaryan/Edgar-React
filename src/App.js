import React, { useEffect, useState } from "react";
import { getCollectionData, getUsers } from "./helpers/user";
import { PLACEHOLDER_URL, QUERY_TYPE } from "./constants/common";

const App = () => {
 const tasks = [{
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
 const [x, setx] = useState(false)
 
 const addRandomTask = ()=>{
 setx(true)
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
            <th><button onClick={addRandomTask()}>add random task</button></th>
          </tr>
        </thead>
        <tbody>
          {(
            <tr>{x && tasks[0].person}</tr>
          )}

          
        </tbody>
      </table>
    </div>
  );
};

export default App;
