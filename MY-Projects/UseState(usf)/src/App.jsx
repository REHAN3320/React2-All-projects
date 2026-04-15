import { useState } from "react";
const App = () => {
  const [num, setnum] = useState(0);
  const AddNum = () => {
    setnum(num + 1);
  };
  const SubtractNum = () => {
    setnum(num - 1);
  };
  const AddNum10 = () => {
    setnum(num + 10);
  };
  const SubtractNum10 = () => {
    setnum(num - 10);
  };

  return (
    <div className="m-10 p-5 bg-amber-300 w-fit border-2">
      <h1
        className="bg-amber-600 border-2 flex items-center
        m-5 mx-15 h-50 min-w-50 text-9xl justify-center "
      >
        {num}
      </h1>
      {/* Buttons Div */}
      <div className="flex justify-center flex-wrap">
        <button
          onClick={AddNum}
          className="bg-amber-600 border-2 gap-10
      m-5 w-18 "
        >
          Add
        </button>
        <button
          onClick={SubtractNum}
          className="bg-amber-600 border-2 gap-10
        m-5 w-20"
        >
          Subtract
        </button>
        <button
          onClick={AddNum10}
          className="bg-amber-600 border-2 gap-10
        m-5 w-20"
        >
          +10
        </button>
        <button
          onClick={SubtractNum10}
          className="bg-amber-600 border-2 gap-10
        m-5 w-20"
        >
          -10
        </button>
      </div>
    </div>
  );
};

export default App;
