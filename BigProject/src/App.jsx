import Login from "./Components/Auth/Login";
import EmployDashboard from "./Components/Dashborad/EmployDashboard/EmployDashboard";
import AdminDashboard from "./Components/Dashborad/AdminDashboard/AdminDashboard";
import { useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthProvider";
const App = () => {
  const [user, setuser] = useState(null);
  const [loggedInUserData, setloggedInUserData] = useState(null);
  const { userdata, setuserdata } = useContext(AuthContext);

  //localStorage.clear();

  //!  Stay Loged IN ?

  useEffect(() => {
    if (userdata) {
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

      if (loggedInUser) {
        setuser(loggedInUser.role);
        setloggedInUserData(loggedInUser.data);
      }
    }
  }, [userdata]);
  //
  // !Login Checker .

  const handleLogin = (email, password) => {
    //
    //!Admin Login
    if (email === "admin@company.com" && password === "123") {
      const admin = userdata.admin.find(
        (e) => email === e.email && password === e.password,
      );
      setuser("admin");
      setloggedInUserData(admin);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin", data: admin }),
      );

      //
      //!Employees Login
    } else if (userdata.employees) {
      const employee = userdata.employees.find(
        (e) => email === e.email && password === e.password,
      );
      if (employee) {
        setuser("employee");
        setloggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee }),
        );
      }
    } else {
      alert("Invalid data entered");
    }
  };

  return (
    <>
      <div className="text-white ">
        {!user ? <Login handleLogin={handleLogin} /> : ""}
        {user === "employee" ? (
          <EmployDashboard
            setuser={setuser}
            loggedInUserData={loggedInUserData}
          />
        ) : (
          ""
        )}
        {user === "admin" ? (
          <AdminDashboard
            setuser={setuser}
            loggedInUserData={loggedInUserData}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};
export default App;
