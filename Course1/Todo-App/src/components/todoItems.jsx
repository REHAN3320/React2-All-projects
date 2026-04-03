import TodoItemDisplay from "./TodoItemDisplay";
const TodoItems = ({ Items }) => {
  return (
    <>
      <div className="items-container">
        {Items.map((item) => (
          <TodoItemDisplay
            todoDate={item.dueDate}
            todoName={item.itemName}
          ></TodoItemDisplay>
        ))}
      </div>
    </>
  );
};
export default TodoItems;
