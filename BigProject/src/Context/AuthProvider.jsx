import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  //
  // !Taking data from the local storage so i can be shared to every file easily ..

  const [userdata, setuserdata] = useState(null);
  useEffect(() => {
    setLocalStorage();
    const { employees, admin } = getLocalStorage();
    setuserdata({ employees, admin });
  }, []);

  return (
    <div>
      <AuthContext.Provider value={{ userdata, setuserdata }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
