import css from "./InputData.module.css";
function InputData() {
  let InputValue;
  return (
    <div className={"todo-container"}>
      <div className={`my-row row`}>
        <div className={`col-6 my-col`}>
          <input
            type="text"
            placeholder="Enter Text Here"
            className={`${css.InputText} input-text`}
            readOnly
          />
        </div>
        <div className={`col-4 my-col`}>
          <input type="date" className={css.InputDate} />
        </div>
        <div className={`col-2 my-col`}>
          <button
            type="button"
            className="btn btn-success my-Button"
            onClick={(InputValue = document.querySelector("input-text"))}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}
export default InputData;
