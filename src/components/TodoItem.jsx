import { MdDelete } from "react-icons/md";

function TodoItem1({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row mm-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger mm-button"
            onClick={() => onDeleteClick(todoName)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;
