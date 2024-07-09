function AddTodo() {
  return (
    <div className="container text-center">
      <div className="row mm-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" id="" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success mm-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
