import Heading from "./Heading";
import TaskData from "./TaskData";
import TaskList from "./TaskList";
const EmployDashboard = ({ loggedInUserData, setuser }) => {
  return (
    <div className="h-screen w-full bg-black p-20">
      <div className="bg-[#1C1C1C] min-h-135 border-2 h-full flex flex-col justify-between rounded-xl overflow-clip ">
        <Heading
          loggedInUserData={loggedInUserData}
          setuser={setuser}
        />
        <TaskData loggedInUserData={loggedInUserData} />
        <TaskList loggedInUserData={loggedInUserData} />
      </div>
    </div>
  );
};

export default EmployDashboard;
