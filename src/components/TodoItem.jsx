function TodoItem1({ todoName, todoDate }) {
  return (
    <div className="container">
      <div className="row mm-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" class="btn btn-danger mm-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;
