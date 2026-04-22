const Input = ({
  InputTextData,
  InputDateData,
  AddObject,
  InputValue,
  DateValue,
}) => {
  return (
    <div className="bg-blue-700 p-3 px-7 flex justify-between w-full h-15 border-2 border-blue-950 shadow-inner shadow-blue-800">
      {/* INput Text                         */}
      <input
        type="text"
        placeholder="Enter Text Here"
        className="border-2 border-blue-950 p-1 bg-blue-800 min-w-70 outline-0
      hover:scale-102 ease-in-out duration-100 "
        onChange={InputTextData}
        value={InputValue}
      />
      {/* Input Date                         */}
      <input
        type="date"
        className="border-2 p-1
      hover:scale-102 ease-in-out duration-100 border-blue-950 bg-blue-800 "
        onChange={InputDateData}
        value={DateValue}
      />

      {/* Add Button                         */}
      <button
        className="border-2 p-1 px-4 bg-green-700 hover:scale-105 ease-in-out duration-100 hover:bg-green-800 border-blue-950"
        onClick={AddObject}
      >
        ADD
      </button>
    </div>
  );
};

export default Input;
