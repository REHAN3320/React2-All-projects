import { useContext, useState } from "react";
import AuthProvider, { AuthContext } from "../../../Context/AuthProvider";
const CreateTask = () => {
  const [taskTitle, settaskTitle] = useState("");
  const [description, setdescription] = useState("");
  const [taskDate, settaskDate] = useState("");
  const [assignTo, setassignTo] = useState("");
  const [category, setcategory] = useState("");
  const [Task, setTask] = useState({});

  const { userdata, setuserdata } = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();
    setTask({
      taskTitle,
      taskDate,
      category,
      description,
      active: false,
      newTask: true,
      failed: false,
      comleted: false,
    });

    const data = userdata.employees;

    data.forEach((e) => {
      if (assignTo == e.name) {
        e.tasks.push(Task);
        e.taskCount.newTask = e.taskCount.newTask + 1;
        setuserdata({ ...userdata, employees: data });
      }
    });

    setassignTo("");
    setcategory("");
    setdescription("");
    settaskDate("");
    settaskTitle("");
  };

  return (
    <form
      onSubmit={(e) => {
        submitHandler(e);
      }}
    >
      <div className="w-full bg-[#1C1C1C]  flex items-center justify-between  px-7 py-5 rounded-xl">
        <div className="h-full flex flex-col  justify-start gap-6  w-[40%]">
          <div className=" flex flex-col gap-1">
            <h1 className="text-xl font-semibold">Task Title 🏷️</h1>
            <input
              type="text"
              placeholder="Enter Task"
              required
              className="border-2 outline-0 px-2 py-1 rounded-lg"
              value={taskTitle}
              onChange={(e) => {
                settaskTitle(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-semibold">Date 📅</h1>
            <input
              type="Date"
              className="rounded-lg border-2 outline-0 px-2 py-1"
              required
              value={taskDate}
              onChange={(e) => {
                settaskDate(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-semibold">Asign to 👉🏻</h1>
            <input
              type="text"
              required
              placeholder="Employee name"
              className="border-2 outline-0 px-2 py-1 rounded-lg"
              value={assignTo}
              onChange={(e) => {
                setassignTo(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-semibold">Category 📜</h1>
            <input
              type="text"
              required
              placeholder="design, dev, etc"
              className="border-2 outline-0 px-2 py-1 rounded-lg"
              value={category}
              onChange={(e) => {
                setcategory(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-[40%] h-full">
          <h1 className="text-xl font-semibold">Description 🧾</h1>
          <textarea
            name=""
            id=""
            required
            className="border-2 outline-0 px-2 py-1 text-lg h-60 rounded-xl"
            placeholder="Explain Your Task"
            value={description}
            onChange={(e) => {
              setdescription(e.target.value);
            }}
          ></textarea>
          <button className="border-2 py-2 bg-green-400 rounded-lg active:scale-95 ">
            Create Task
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateTask;
