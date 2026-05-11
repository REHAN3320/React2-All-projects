import Heading from "../EmployDashboard/Heading";
import CreateTask from "./CreateTask";
import AllTasks from "./AllTasks";
const AdminDashboard = ({ loggedInUserData, setuser }) => {
  return (
    <div className="h-full w-screen bg-black px-10 py-5 flex flex-col gap-4 ">
      <Heading loggedInUserData={loggedInUserData} setuser={setuser} />
      <CreateTask loggedInUserData={loggedInUserData} />
      <AllTasks loggedInUserData={loggedInUserData} />
    </div>
  );
};

export default AdminDashboard;
