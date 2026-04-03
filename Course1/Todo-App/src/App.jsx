import AppName from "./components/AppName";
import InputData from "./components/InputData";
import TodoItems from "./components/todoItems";
import "./App.css";
import Box1 from "./components/Box1";
function App() {
  const Items = [
    {
      itemName: "Milk",
      dueDate: "04-10-2026",
    },
    {
      itemName: "Bread",
      dueDate: "30-3-2016",
    },
  ];
  return (
    <>
      <Box1>
        <center className="component-container">
          <AppName></AppName>
          <InputData></InputData>
          <TodoItems Items={Items}></TodoItems>
        </center>
      </Box1>
    </>
  );
}

export default App;
