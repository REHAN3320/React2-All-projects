function RightCenter() {
  return (
    <div
      className="
    bg-white h-full w-1/5 mr-15 min-h-40 max-h-150 flex flex-col items-center justify-between p-10
    "
    >
      <h3 className="text-2xl font-bold uppercase border-b-2">Your Company</h3>
      <div className="flex items-center gap-3 ">
        <i className="fa-solid fa-user text-2xl "></i>
        <div className="flex flex-col">
          <h3 className="uppercase">Enter UserName</h3>
          <input type="text" className="border-b-2" />
        </div>
      </div>
      <div className="gap-3 flex items-center">
        <i class="fa-solid fa-lock text-2xl "></i>
        <div>
          <h3>Enter Password</h3>
          <input type="text" className="border-b-2" />
        </div>
      </div>
      <button className="bg-red-400 text-2xl font-bold px-15 py-1 hover:scale-105 hover:bg-red-500      hover:ease-in-out duration-100 cursor-grab">
        LOGIN
      </button>
      <div className="flex flex-col items-center gap-3">
        <h2 className="text-xl font-bold">OR</h2>
        <i class="fa-solid fa-arrow-down"></i>
      </div>
    </div>
  );
}

export default RightCenter;
