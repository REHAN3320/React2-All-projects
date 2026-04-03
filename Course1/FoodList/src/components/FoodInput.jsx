import css from "./FoodInput.module.css";
const FoodInput = () => {
  return (
    <>
      <div className={css.FoodInputContainer}>
        <input
          type="text"
          className={css.FoodInput}
          onChange={(event) => console.log(event.target.value)}
        />
      </div>
    </>
  );
};
export default FoodInput;
