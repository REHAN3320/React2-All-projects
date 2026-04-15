import FoodListDisplay from "./FoodListDisplay";

const ItemMap = ({ FoodList, ItemDelete }) => {
  return (
    <>
      <div className="border-2 border-black min-w-120 text-3xl font-semibold mt-5 p-1 bg-amber-600  ">
        {FoodList.map((item, idx) => (
          <FoodListDisplay
            key={idx}
            item={item}
            ItemDelete={ItemDelete}
          ></FoodListDisplay>
        ))}
      </div>
    </>
  );
};
export default ItemMap;
