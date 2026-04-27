import { FiDelete } from "react-icons/fi";
const TodoListsContainer = ({ Tasks, Deletelist }) => {
  return (
    <div className="p-10 lg:p-5 w-full bg-black lg:border-l-2  border-t-2 overflow-hidden ">
      <h1 className="text-3xl uppercase font-medium m-2"> Recent Notes</h1>
      <div className=" flex flex-wrap gap-6 h-full overflow-auto ">
        {Tasks.map((item, idx) => [
          <div
            key={idx}
            className="
            bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeigVqx1Lfyb0l2i1Z34B4Z2EbtMIMKNBRPg&s')]
            bg-cover
            
          rounded-2xl text-black pt-5 px-2 h-52 w-45 
          border-2 hover:scale-101 duration-200 ease-in-out
          overflow-auto relative"
          >
            <div className="flex justify-between">
              <h2 className="float-left w-5 h-5 bg-black rounded text-amber-50 flex justify-center items-center ">
                {idx + 1}
              </h2>

              <h2 className="text-center font-bold underline mx-1 ">
                {item.Heading}
              </h2>

              <button
                className="float-top-right w-6 h-5 rounded bg-red-700  flex justify-center items-center text-amber-50
                 hover:bg-red-500 hover:scale-105 duration-100  ease-in-out "
                onClick={() => Deletelist(idx)}
              >
                <FiDelete />
              </button>
            </div>
            <h4 className="font-medium leading-tight p-1">{item.Details}</h4>
          </div>,
        ])}
      </div>
    </div>
  );
};

export default TodoListsContainer;
