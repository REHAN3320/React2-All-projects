import Input from "./Input";

const Heading = ({ FoodList, AddItem, InputValue, EmptyInput }) => {
  return (
    <div className="border-2 border-black  bg-amber-600 flex flex-col justify-center items-center p-5">
      <h1 className=" min-w-90 text-center text-3xl uppercase font-semibold ">
        Healthy Foods
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
