function TodoItemDisplay({ todoDate, todoName }) {
  return (
    <div className="todo-container">
      <div className="row my-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button " className="btn btn-danger my-Button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItemDisplay;
