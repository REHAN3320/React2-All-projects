const AcceptTask = ({ Data }) => {
  console.log(Data);

  return (
    <div className="flex-shrink-0 px-5 py-3 w-100 h-full  bg-yellow-400 rounded-xl  ">
      <div className="flex items-center justify-between text-xl">
        <h1 className="bg-red-600 rounded-xl px-3 py-1">{Data.category}</h1>
        <h2 className="font-bold">{Data.taskDate}</h2>
      </div>
      <div className="mt-4 h-full w-full">
        <h1 className="text-3xl font-bold">{Data.taskTitle}</h1>
        <h3
          id="tasks"
          className="text-lg font-medium mt-2 h-28 w-full overflow-auto"
        >
          {Data.description}
        </h3>
        <div className="flex mt-4 justify-between items-center ">
          <button className="bg-green-500 px-4 py-1 text-center rounded-xl  ">
            Task Completed
          </button>
          <button className="bg-red-500 px-4 py-1 text-center rounded-xl  ">
            Task Failed
          </button>
        </div>
      </div>
    </div>
  );
};

export default AcceptTask;
