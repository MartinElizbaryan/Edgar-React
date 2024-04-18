import React from "react";
import { useTasks } from "./Tasks.hooks";

const Tasks = () => {
  const { addRandomTask, tasks, reopenTask, doneTask, deleteTask } = useTasks();

  return (
    <div>
      <button onClick={() => addRandomTask()}>add random task</button>
      <button>Sort By Name</button>
      <button>Sort By Status</button>
      <button>Sort By Status (Done)</button>

      <br />
      <br />
      <br />

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
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.status ? "Done" : "-"}</td>
              <td>
                {item.status ? (
                  <button
                    style={{ background: "red" }}
                    onClick={() => reopenTask(item.id)}
                  >
                    Reopen
                  </button>
                ) : (
                  <button
                    style={{ background: "green" }}
                    onClick={() => doneTask(item.id)}
                  >
                    Done
                  </button>
                )}

                <button onClick={() => deleteTask(item.id)}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tasks;

/*

{
  name: {
    isToDown: true,
    isActive: false,
  },
  status: {
    isToDown: false,
    isActive: true,
  }
}

*/
