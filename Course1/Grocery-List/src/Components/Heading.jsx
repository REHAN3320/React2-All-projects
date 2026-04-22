import Input from "./Input";

const Heading = ({ FoodList, AddItem, InputValue, EmptyInput }) => {
  return (
    <div className="border-2 text-shadow-amber-900  bg-amber-600 flex flex-col justify-center items-center p-5">
      <h1 className=" text-center text-2xl uppercase font-semibold ">
        Grocery list
      </h1>
      <Input
        FoodList={FoodList}
        AddItem={AddItem}
        InputValue={InputValue}
        EmptyInput={EmptyInput}
      ></Input>
    </div>
  );
};

export default Heading;
