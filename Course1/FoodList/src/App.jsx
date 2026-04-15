import { useState } from "react";
import Heading from "./Components/Heading";
import ItemMap from "./Components/ItemMap";
const App = () => {
  let NewInput = "";
  const [foodList, setfoodList] = useState([
    "Bread",
    "Apple",
    "Meat",
    "Vegetables",
    "Milk",
  ]);

  const InputValue = (event) => {
    NewInput = event.target.value;
  };

  const EmptyInput = (event) => {
    event.target.value = "";
  };

  const AddItem = () => {
    if (NewInput === "") {
      alert("Please enter a new Product!");
    } else {
      let newFoodList = [NewInput, ...foodList];
      setfoodList(newFoodList);
    }
  };

  return (
    <>
      <div
        className="w-screen min-h-screen bg-amber-500 p-10 flex justify-center items-center
      text-white "
      >
        <div className="  bg-amber-700 border-2 border-black w-fit h-fit p-5 ">
          <Heading
            Foodlist={foodList}
            InputValue={InputValue}
            AddItem={AddItem}
            EmptyInput={EmptyInput}
          ></Heading>
          <ItemMap FoodList={foodList}></ItemMap>
        </div>
      </div>
      <div className="w-screen h-screen bg-amber-800"></div>
    </>
  );
};

export default App;
