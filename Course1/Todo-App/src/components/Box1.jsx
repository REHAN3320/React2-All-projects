import script from "./Box1.module.css";
const Box1 = (props) => {
  return (
    <>
      <div className={script.Box1}>{props.children}</div>
    </>
  );
};
export default Box1;
