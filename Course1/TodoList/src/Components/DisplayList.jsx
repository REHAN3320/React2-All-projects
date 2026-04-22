const DisplayList = ({ TodoList, DleteItem }) => {
  return (
    <div className="bg-blue-700 w-full h-full border-2 border-blue-950 border-t-0 px-10 py-5   shadow-inner shadow-blue-800">
      {TodoList.map((Item, idx) => [
        <div className="flex justify-between items-center h-15 hover:bg-blue-900 p-3 rounded-2xl ease-in-out duration-100 hover:scale-105  ">
          <div className="flex gap-3">
            <h1>{idx + 1} - </h1>
            <h1>{Item.Text}</h1>
          </div>
          <div className="flex gap-30">
            <h2>{Item.Date}</h2>
            <button
              className="border-2 p-1 px-4 bg-red-700 hover:scale-105 ease-in-out duration-100 hover:bg-red-600 border-blue-950"
              onClick={() => DleteItem(idx)}
            >
              Delete
            </button>
          </div>
        </div>,
      ])}
    </div>
  );
};

export default DisplayList;
