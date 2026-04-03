import Button from "./components/Button";
import Input from "./components/Input";
import css from "./App.module.css";
function App() {
  return (
    <div className={css.Calculater}>
      <Input></Input>
      <Button></Button>
    </div>
  );
}
export default App;
