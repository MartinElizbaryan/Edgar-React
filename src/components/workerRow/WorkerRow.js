import { Fragment } from "react";

const WorkerRow = (props) => {
  const { id, name, salary, total } = props;

  return (
    <Fragment>
      <td>{id}</td>
      <td>{name}</td>
      <td>{salary}</td>
      <td>{total}</td>
    </Fragment>
  );
};

export default WorkerRow;
