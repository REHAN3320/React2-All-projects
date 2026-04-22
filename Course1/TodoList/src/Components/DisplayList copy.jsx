const DisplayList = ({ TodoList, DateList }) => {
  return (
    // Center Container
    <div className="bg-blue-700 w-full h-full border-2 border-blue-950 border-t-0 px-10 py-5">
      {/* A big div showing every item                            */}
      <div className="w-full bg-gray-500 ">
        {/*to map the todo List                              */}
        {TodoList.map((ListItem, idx) => [
          <span className="flex items-center h-15 gap-3 w-fit">
            <h1>{idx + 1} -</h1>
            <h1>{ListItem}</h1>
          </span>,
        ])}
        {/*to map the Date                                   */}
        {DateList.map((DateItem) => [
          <span className="flex items-center h-15 gap-3 w-fit">
            <h2>{DateItem}</h2>
            <button className="border-2 p-1 px-4 bg-red-700 hover:scale-105 ease-in-out duration-100 hover:bg-red-600 border-blue-950">
              Delete
            </button>
          </span>,
        ])}
      </div>
    </div>
  );
};

export default DisplayList;
