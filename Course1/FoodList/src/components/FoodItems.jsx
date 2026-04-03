import ItemDisplay from "./ItemDisplay";
const FoodItems = ({ items }) => {
  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <ItemDisplay key={item} foods={item}></ItemDisplay>
        ))}
      </ul>
    </>
  );
};
export default FoodItems;
