import { useState } from "react";
const App = () => {
  const [num, setnum] = useState({ user: "Rehan", age: 20 });

  const newNum = { ...num };

  newNum.age = newNum.age - 1;
  const btnClicked = () => {
    setnum(newNum);
  };

  return (
    <div className="m-10 p-5 bg-amber-300 w-fit border-2">
      <h1
        className="bg-amber-600 border-2 flex items-center
        m-5 mx-15 h-50 min-w-50 text-9xl justify-center "
      >
        {num.age}
      </h1>
      {/* Buttons Div */}
      <div className="flex justify-center flex-wrap">
        <button
          onClick={btnClicked}
          className="bg-amber-600 border-2 gap-10
        m-5 w-20"
        >
          btn
        </button>
      </div>
    </div>
  );
};

export default App;
