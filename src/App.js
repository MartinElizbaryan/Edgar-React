import React, { useEffect, useState } from "react";
import { getCollectionData, getUsers } from "./helpers/user";
import { PLACEHOLDER_URL, QUERY_TYPE } from "./constants/common";

const App = () => {
  const [data, setData] = useState([]);
  // const [dataType, setDataType] = useState(QUERY_TYPE.users);

  useEffect(() => {
    getData();
  }, []);

  const getRandomUser = ()=>{

  }

  const getData = async () => {
    const users = await getUsers();
    setData(users);
  };

  // const selectUsers = () => setDataType(QUERY_TYPE.users);
  // const selectTodos = () => setDataType(QUERY_TYPE.todos);

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
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td></td>
              <td>
                <button>Done green</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
          <tr>
            <td>
              <button onClick={}>Add Random Task</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;
