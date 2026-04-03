import css from "./ItemDisplay.module.css";
const ItemDisplay = ({ foods }) => {
  const buyButtonClicked = () => {
    console.log(`${foods} is being bought`);
  };
  return (
    <>
      <li className={`${css.listItem} list-group-item`}>
        <span className={css.itemSpan}>{foods}</span>
        <button
          type="button"
          className={`btn btn-success ${css.buyButton}`}
          onClick={buyButtonClicked}
        >
          Buy
        </button>
      </li>
    </>
  );
};
export default ItemDisplay;
