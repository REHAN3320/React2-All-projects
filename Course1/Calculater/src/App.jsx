import Input from "./Components/Input";
import ButtonsMap from "./Components/ButtonsMap";
import { useState } from "react";

const ButtonList = [
  "8",
  "9",
  "+",
  "6",
  "7",
  "-",
  "4",
  "5",
  "*",
  "2",
  "3",
  "/",
  "1",
  "0",
  ".",
  "AC",
  "=",
];
const App = () => {
  const [InputValue, setInputValue] = useState("");

  const ButtonCliked = (event) => {
    if (event.target.textContent === "=") {
      const result = eval(InputValue);
      setInputValue(result);
    } else if (event.target.textContent === "AC") {
      setInputValue("");
    } else {
      const EnteredValue = event.target.textContent;
      setInputValue(InputValue + EnteredValue);
    }
  };

  return (
    <>
      {/* Screen */}
      <div
        className="
  h-screen w-screen flex items-center justify-center
  bg-amber-400 
  "
      >
        {/* Calculater Container */}
        <div
          className="
        bg-slate-700 border-2 border-slate-950
        w-120 h-fit p-10 rounded-4xl
        flex flex-col items-center justify-between
        shadow-2xl shadow-current scale-70
        "
        >
          <Input InputValue={InputValue}></Input>
          <ButtonsMap
            ButtonList={ButtonList}
            ButtonCliked={ButtonCliked}
          ></ButtonsMap>
        </div>
      </div>
    </>
  );
};
export default App;
