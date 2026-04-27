const InputContainer = ({
  OnSubmitHandler,
  InputHeadingHandler,
  InputDetailHandler,
  InputHeading,
  InputDetail,
}) => {
  return (
    <>
      <form
        onSubmit={(e) => OnSubmitHandler(e)}
        className=" p-10 w-full flex flex-col gap-3 "
      >
        <h1 className="text-3xl uppercase font-medium m-2"> Add Notes</h1>
        <input
          type="text"
          placeholder="Enter Notes Heading"
          onChange={(event) => InputHeadingHandler(event)}
          value={InputHeading}
          maxLength={15}
          className="border-2 border-white px-3 py-3 outline-0 w-full text-2xl bg-black"
        />
        <textarea
          type="text"
          placeholder="Enter details here"
          className="border-2  bg-black border-white px-3 py-3 outline-0 w-full"
          onChange={(event) => InputDetailHandler(event)}
          value={InputDetail}
        />
        <button className="border-2 border-white px-3 py-1 outline-0 w-full  hover:bg-green-950 hover:scale-103 duration-100  ease-in-out  bg-black ">
          Save
        </button>
      </form>
    </>
  );
};

export default InputContainer;
