import AcceptTask from "../../TaksList/AcceptTask";
import NewTask from "../../TaksList/NewTask";
import CompleteTask from "../../TaksList/CompleteTask";
import FailledTask from "../../TaksList/FailledTask";
const TaskList = ({ loggedInUserData }) => {
  return (
    <div className="h-[55%] w-full flex items-center justify-center">
      <div
        id="taskslist"
        className="h-fit w-[96%] flex flex-nowrap items-center justify-start py-5 gap-3 overflow-x-auto "
      >
        {loggedInUserData.tasks.map((e, idx) => {
          if (e.active) {
            return <AcceptTask key={idx} Data={e} />;
          }
          if (e.newTask) {
            return <NewTask key={idx} Data={e} />;
          }
          if (e.completed) {
            return <CompleteTask key={idx} Data={e} />;
          }
          if (e.failed) {
            return <FailledTask key={idx} Data={e} />;
          }
        })}
      </div>
    </div>
  );
};

export default TaskList;
