import css from "./Input.module.css";
const Input = () => {
  return (
    <>
      <div className={css.InputContainer}>
        <input type="text" className={css.Input} readOnly />
      </div>
    </>
  );
};
export default Input;
