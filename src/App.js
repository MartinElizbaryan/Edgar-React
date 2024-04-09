import React, { useEffect, useState } from "react";
import { getCollectionData, getUsers } from "./helpers/user";
import { PLACEHOLDER_URL, QUERY_TYPE } from "./constants/common";

const App = () => {
  const [data, setData] = useState([]);
  const [countData, setCountData] = useState(0);
  // const [dataType, setDataType] = useState(QUERY_TYPE.users);

  const addCountData = () => setCountData(countData + 1);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const users = await getUsers();
    setData(users);
  };

  // const selectUsers = () => setDataType(QUERY_TYPE.users);
  // const selectTodos = () => setDataType(QUERY_TYPE.todos);

  return (
    <div>
      <button onClick={addCountData}>Add Count</button>
      {/* <button onClick={selectUsers}>Users</button> */}
      {/* <button onClick={selectTodos}>Todos</button> */}

      <h1>Count: {countData}</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.getName()}</td>
              <td>{user.getEmail()}</td>
              <td>{user.getPhone()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
