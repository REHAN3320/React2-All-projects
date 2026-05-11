import { useState } from "react";
import { setLocalStorage } from "../../../utils/LocalStorage";

const Heading = ({ loggedInUserData, setuser }) => {
  const logOut = () => {
    setuser(null);
  };

  return (
    <div className="flex justify-between items-center px-7 py-3 ">
      <div>
        <h3 className="text-xl font-medium">Hello,</h3>
        <h1 className="text-3xl font-bold">{loggedInUserData.name}👋</h1>
      </div>
      <button
        className="bg-red-600 px-3 py-1 rounded-lg font-medium active:scale-95"
        onClick={logOut}
      >
        Log Out
      </button>
    </div>
  );
};

export default Heading;
