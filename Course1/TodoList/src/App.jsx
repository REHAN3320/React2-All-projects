import Heading from "./Components/Heading";
import Input from "./Components/Input";
import DisplayList from "./Components/DisplayList";
import { useRef, useState } from "react";
const App = () => {
  const [InputValue, setInputValue] = useState("");
  const [DateValue, setDateValue] = useState("");
  const [TodoList, setTodoList] = useState([
    { Text: "Exercise", Date: "2002-04-12" },
    { Text: "HomeWork", Date: "2016-12-29" },
    { Text: "Movie", Date: "2024-01-12" },
  ]);

  const InputTextData = (event) => {
    setInputValue(event.target.value);
  };
  const InputDateData = (event) => {
    setDateValue(event.target.value);
  };
  const AddObject = (event) => {
    event.preventDefault();
    if (InputValue === "" || DateValue === "") {
      if (InputValue === "") {
        alert("Pls Enter a TASK");
      } else {
        alert("Pls Enter a Date");
      }
    } else {
      const NewFoodList = [...TodoList, { Text: InputValue, Date: DateValue }];
      setTodoList(NewFoodList);
      setDateValue("");
      setInputValue("");
    }
  };
  const DleteItem = (idx) => {
    let newTodoList = TodoList.filter((_, i) => i !== idx);
    setTodoList(newTodoList);
  };

  return (
    <>
      {/* Screen                                  */}
      <div className="flex item-center justify-center p-10 h-screen w-screen bg-blue-900">
        {/* Top Container                         */}
        <div
          className="border-4 border-blue-950
         w-190 p-5        
        flex flex-col items-center
        bg-blue-600 text-white drop-shadow-current shadow-blue-950 shadow-lg
        "
        >
          <Heading></Heading>
          <Input
            InputTextData={InputTextData}
            InputDateData={InputDateData}
            AddObject={AddObject}
            InputValue={InputValue}
            DateValue={DateValue}
          ></Input>
          <DisplayList TodoList={TodoList} DleteItem={DleteItem}></DisplayList>
        </div>
      </div>
    </>
  );
};
export default App;
