import css from "./Button.module.css";
const Button = () => {
  const Buttons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "0",
    "=",
  ];
  return (
    <>
      <div className={css.buttonContainer}>
        {Buttons.map((button) => (
          <button className={css.Button}>{button}</button>
        ))}
      </div>
    </>
  );
};
export default Button;
