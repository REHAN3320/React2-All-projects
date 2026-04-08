import ProfileContainer from "./components/ProfileContainer";
import css from "./App.module.css";
const App = () => {
  return (
    <>
      <div className={css.bigContainer}>
        <ProfileContainer user="M.Rehan"></ProfileContainer>
        <ProfileContainer user="Hammad"></ProfileContainer>
        <ProfileContainer user="Ahmad"></ProfileContainer>
        <ProfileContainer user="Ali"></ProfileContainer>
        <ProfileContainer user="Fahad"></ProfileContainer>
        <ProfileContainer user="Haroon"></ProfileContainer>
      </div>
    </>
  );
};
export default App;
