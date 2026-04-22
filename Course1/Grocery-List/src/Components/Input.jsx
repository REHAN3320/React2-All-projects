const Input = ({ InputValue, AddItem, EmptyInput }) => {
  return (
    <>
      <div className="flex gap-2">
        <input
          type="text"
          maxLength={20}
          minLength={2}
          placeholder="Enter Here"
          className="border-2 text-shadow-amber-900 w-60 p-1 outline-0  focus:border-amber-900 focus:outline focus:outline-amber-900
          hover:shadow-lg shadow-amber-900 rounded-sm
          transition duration-200 hover:scale-101 ease-in-out"
          onChange={InputValue}
          onClick={EmptyInput}
        />
        <button
          className="border-2 bg-amber-700 p-1 px-3 
         font-serif font-normal
         transition duration-200 hover:scale-105 ease-in-out
         hover:shadow-lg shadow-amber-900 rounded-sm"
          onClick={AddItem}
        >
          Add
        </button>
      </div>
    </>
  );
};

export default Input;
