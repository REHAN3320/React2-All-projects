import LeftCenter from "./LeftCenter";
import RightCenter from "./RightCenter";
const Center = () => {
  return (
    <div
      className="
    px-15 pt-15 pb-45  h-full flex justify-between min-h-70 items-center
    "
    >
      <LeftCenter></LeftCenter>
      <RightCenter></RightCenter>
    </div>
  );
};

export default Center;
