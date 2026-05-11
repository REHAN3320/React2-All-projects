import { useState } from "react";
import axios from "axios";

const App = () => {
  const [UserData, setUserData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=3&limit=30",
    );

    setUserData(response.data);
  };

  let printUserData = "No Data Availabe";
  if (UserData.length > 0) {
    printUserData = UserData.map((item, idx) => [
      <div key={idx}>
        <a href={item.url} target="_blank">
          <div className="h-50 w-50">
            <img
              src={item.download_url}
              alt="Image"
              className="h-full w-full border-2 rounded-2xl"
            />
          </div>
          <h2 className="text-lg text-center">{item.author}</h2>
        </a>
      </div>,
    ]);
  }

  return (
    <div className="p-10">
      <div className="flex items-center justify-center">
        <button
          className="px-3 py-1 bg-green-500 border-2 text-2xl font-bold "
          onClick={getData}
        >
          Get Data
        </button>
      </div>
      <div className="flex flex-wrap items-center justify-center pt-10 gap-4 text-3xl font-bold">
        {printUserData}
      </div>
    </div>
  );
};

export default App;
