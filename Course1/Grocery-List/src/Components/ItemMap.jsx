const ItemMap = ({ FoodList, ItemDelete }) => {
  const BuyButtonClicked = (item) => {
    alert(`${item} is added to cart`);
  };
  return (
    <>
      <div className="border-2 text-shadow-amber-900 min-w-125 min-h-23 text-3xl font-semibold mt-5 p-1 bg-amber-600  ">
        {FoodList.map((item, idx) => (
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
                onClick={() => BuyButtonClicked(item)}
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
        ))}
      </div>
    </>
  );
};
export default ItemMap;
