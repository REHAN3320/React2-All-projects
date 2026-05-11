import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";

const AllTasks = () => {
  const { userdata, setuserdata } = useContext(AuthContext);
  return (
    // !bg Parent Div
    <div className="h-full w-full  bg-[#1C1C1C] p-3 rounded-xl flex flex-col gap-2 ">
      {/*//! Fix Heading DIV */}
      <div className="border-red-400 border-4 flex justify-between px-3  gap-3 rounded-t-lg py-2  ">
        <h1 className="w-1/5 font-bold ">Employee</h1>
        <div className="flex justify-between w-full text-center font-semibold ">
          <h1 className="w-1/5  ">New</h1>
          <h1 className="w-1/5 ">Active</h1>
          <h1 className="w-1/5 ">Completed</h1>
          <h1 className="w-1/5 ">Failed</h1>
        </div>
        {/*//! Employees overflow div Container */}
      </div>
      <div id="tasks" className="flex h-full flex-col gap-2 ">
        {userdata.employees.map((e, idx) => {
          return (
            //! Employee  div
            <div
              className="border-green-400 border-2 flex justify-between px-3 py-1  gap-3 rounded-lg  "
              key={idx}
            >
              <h1 className="w-1/5 font-bold ">{e.name}</h1>
              <div className="flex justify-between w-full text-center font-bold text-lg ">
                <h1 className="w-1/5  text-blue-400 ">{e.taskCount.newTask}</h1>
                <h1 className="w-1/5 text-yellow-400 ">{e.taskCount.active}</h1>
                <h1 className="w-1/5 text-green-400 ">
                  {e.taskCount.completed}
                </h1>
                <h1 className="w-1/5 text-red-400 ">{e.taskCount.failed}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTasks;
