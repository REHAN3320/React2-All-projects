import { useState } from "react";
import InputContainer from "./components/InputContainer";
import TodoListsContainer from "./components/TodoListsContainer";

const App = () => {
  const [InputHeading, setInputHeading] = useState("");
  const [InputDetail, setInputDetail] = useState("");
  const [Tasks, setTasks] = useState([]);
  //ON Submit Handler

  const OnSubmitHandler = (e) => {
    e.preventDefault();
    const newTasks = [
      ...Tasks,
      {
        Heading: ` ${InputHeading}`,
        Details: `${InputDetail}`,
      },
    ];
    setTasks(newTasks);
    setInputHeading("");
    setInputDetail("");
  };

  //Heading Input
  const InputHeadingHandler = (event) => {
    setInputHeading(event.target.value);
  };
  //Detail Input
  const InputDetailHandler = (event) => {
    setInputDetail(event.target.value);
  };
  const Deletelist = (idx) => {
    let newTasks = Tasks.filter((_, i) => i !== idx);
    setTasks(newTasks);
  };
  return (
    <>
      <div
        className="bg-gray-700 min-h-screen w-screen text-white p-15 lg:flex lg:h-screen
      "
      >
        <InputContainer
          InputHeadingHandler={InputHeadingHandler}
          OnSubmitHandler={OnSubmitHandler}
          InputDetailHandler={InputDetailHandler}
          InputHeading={InputHeading}
          InputDetail={InputDetail}
        ></InputContainer>
        <TodoListsContainer
          Tasks={Tasks}
          Deletelist={Deletelist}
        ></TodoListsContainer>
      </div>
    </>
  );
};

export default App;
