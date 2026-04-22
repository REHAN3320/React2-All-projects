const DisplayButtons = ({ Item, ButtonCliked }) => {
  return (
    <>
      <button
        className="h-20 w-20 p-2 mx-1 my-1 
        bg-slate-700 rounded-2xl border-2 border-slate-950
        hover:scale-105 ease-in-out duration-100 hover:bg-slate-600
        shadow-xl shadow-slate-700 "
        onClick={(event) => {
          ButtonCliked(event);
        }}
      >
        {Item}
      </button>
    </>
  );
};

export default DisplayButtons;
