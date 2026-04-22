const FoodListDisplay = ({ idx, item, ItemDelete }) => {
  const BuyButtonClicked = () => {
    alert(`${item} is added to cart`);
  };

  return (
    <>
      {/* FoodList Mapping */}
      <div
        className="flex justify-between items-center pr-3
      hover:bg-amber-500 rounded-2xl
       transition duration-100 hover:scale-95 ease-in-out 
       hover:shadow-lg shadow-amber-900  
       hover:outline-2 outline-amber-900"
      >
        <div
          className="m-6 text-2xl font-normal
         flex gap-1
        "
        >
          <div className="font-mono">{idx + 1}:</div>
          <div className="font-medium">{item}</div>
        </div>

        <div className="flex gap-2 max-h-12 text-2xl ">
          <button
            className="border-2 text-shadow-amber-900 rounded-sm p-1 px-3 font-serif font-normal
            bg-amber-700 transition duration-200 hover:scale-105 ease-in-out  hover:shadow-lg shadow-amber-900"
            onClick={BuyButtonClicked}
          >
            Buy
          </button>
          <button
            className="border-2 text-shadow-amber-900 rounded-sm p-1 px-3 font-serif font-normal
            bg-amber-700 transition duration-200 hover:scale-105 ease-in-out
             hover:shadow-lg shadow-amber-900"
            onClick={() => ItemDelete(idx)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default FoodListDisplay;
