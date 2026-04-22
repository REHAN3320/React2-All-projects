import DisplayButtons from "./DisplayButtons";
const ButtonsMap = ({ ButtonList, ButtonCliked }) => {
  return (
    <>
      <div
        className="
          min-w-100 h-fit p-2 border-2 border-slate-950 text-3xl outline-0 bg-slate-500 font-medium font-mono
          flex justify-center gap-x-10 flex-wrap rounded-2xl
          shadow-inner shadow-slate-700 
          "
      >
        {ButtonList.map((Item, idx) => (
          <DisplayButtons
            key={idx}
            Item={Item}
            ButtonCliked={ButtonCliked}
          ></DisplayButtons>
        ))}
      </div>
    </>
  );
};

export default ButtonsMap;
