const Input = ({ InputValue }) => {
  return (
    <>
      <div
        className="
          min-w-80 min-h-20 bg-slate-500 mb-5 border-2 border-slate-950
          flex items-center justify-center rounded-3xl
            shadow-inner shadow-slate-950 
          "
      >
        <input
          type="text"
          className="
            border-b-2 border-slate-950 min-w-60 text-2xl outline-0 
            font-semibold
            "
          value={InputValue}
          readOnly
        />
      </div>
    </>
  );
};

export default Input;
