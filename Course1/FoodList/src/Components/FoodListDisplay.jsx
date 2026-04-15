const FoodListDisplay = ({ item, ItemDelete }) => {
  const BuyButtonClicked = () => {
    alert(`${item} is added to cart`);
  };
  return (
    <>
      {/* FoodList Mapping */}
      <li className="list-none flex  justify-between m-5">
        {item}
        <div className="flex gap-2">
          <button
            className="border-2 border-black rounded-sm p-1 px-3 font-serif font-normal bg-amber-700 transition duration-200 hover:scale-105 ease-in-out"
            onClick={BuyButtonClicked}
          >
            Buy
          </button>
          <button
            className="border-2 border-black rounded-sm p-1 px-3 font-serif font-normal bg-amber-700 transition duration-200 hover:scale-105 ease-in-out"
            onClick={ItemDelete}
          >
            Delete
          </button>
        </div>
      </li>
    </>
  );
};

export default FoodListDisplay;
