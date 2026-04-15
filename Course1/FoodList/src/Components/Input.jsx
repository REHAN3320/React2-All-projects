const Input = ({ InputValue, AddItem, EmptyInput }) => {
  return (
    <>
      <div className="flex gap-1">
        <input
          type="text"
          maxLength={20}
          minLength={2}
          placeholder="Enter Here"
          className="border-2 border-black w-70 p-1 outline-0 "
          onChange={InputValue}
          onClick={EmptyInput}
        />
        <button
          className="border-2 border-black rounded-sm p-1 px-3 font-serif font-normal bg-amber-700 transition duration-200 hover:scale-105 ease-in-out"
          onClick={AddItem}
        >
          Add
        </button>
      </div>
    </>
  );
};

export default Input;
