const TaskData = ({ loggedInUserData }) => {
  return (
    <div className="gap-5 w-full p-5 flex items-center justify-between">
      <div className="bg-blue-400 w-[45%] p-3 rounded-2xl">
        <h3 className="text-4xl font-bold">
          {loggedInUserData.taskCount.newTask}
        </h3>
        <div className="flex items-center gap-0.5">
          <h1 className="text-2xl font-semibold">New Tasks</h1>
          <h1 className="pt-1">✨</h1>
        </div>
      </div>
      <div className="bg-red-400 w-[45%] p-3 rounded-2xl">
        <h3 className="text-4xl font-bold">
          {loggedInUserData.taskCount.failed}
        </h3>
        <div className="flex items-center gap-0.5">
          <h1 className="text-2xl font-semibold">Failed Tasks</h1>
          <h1 className="pt-1">❌</h1>
        </div>
      </div>
      <div className="bg-green-400 w-[45%] p-3 rounded-2xl">
        <h3 className="text-4xl font-bold">
          {loggedInUserData.taskCount.completed}
        </h3>
        <div className="flex items-center gap-0.5">
          <h1 className="text-2xl font-semibold">Completed Tasks</h1>
          <h1 className="pt-1">✅</h1>
        </div>
      </div>
      <div className="bg-yellow-400 w-[45%] p-3 rounded-2xl">
        <h3 className="text-4xl font-bold">
          {loggedInUserData.taskCount.active}
        </h3>
        <div className="flex items-center gap-0.5">
          <h1 className="text-2xl font-semibold">Accepted Tasks</h1>
          <h1 className="pt-1">🔜</h1>
        </div>
      </div>
    </div>
  );
};

export default TaskData;
