import css from "./App.module.css";
import ErrorMessage from "./components/ErrorMeassage";
import FoodItems from "./components/FoodItems";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
function App() {
  let foodItems = ["Steak", "Apple", "Banana", "Pineapple", "Potato"];
  return (
    <>
      <Container>
        <Container>
          <h1 className={css.heading}>Healthy Food</h1>
        </Container>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodInput></FoodInput>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
    </>
  );
}
export default App;
