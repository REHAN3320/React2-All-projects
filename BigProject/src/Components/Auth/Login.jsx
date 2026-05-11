import { useState } from "react";
let Email, Password;

const Login = ({ handleLogin }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    Email = email;
    Password = password;
    setemail("");
    setpassword("");
    handleLogin(email, password);
  };

  return (
    <div className="h-screen w-screen bg-black flex items-center justify-center ">
      <div className="border-2 bg-[#1C1C1C] px-15 py-18 rounded-xl ">
        {/* Form */}

        <form
          className=" flex flex-col gap-5 items-center justify-center"
          onSubmit={(e) => SubmitHandler(e)}
        >
          {/* Email Input */}
          <h1 className="text-4xl font-bold uppercase font-mono">Login Page</h1>
          <input
            type="email"
            placeholder="Enter your email "
            required
            className="bg-tranparent outline-0 border-2  px-5 py-3 rounded-full text-xl placeholder:text-gray-400 font-meduim"
            onChange={(e) => {
              setemail(e.target.value);
            }}
            value={email}
          />
          {/* Password Input */}
          <input
            type="password"
            placeholder="Enter Password"
            required
            className="bg-tranparent outline-0 border-2 px-5 py-3  rounded-full text-xl placeholder:text-gray-400      font-meduim"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            value={password}
          />
          {/* Submit Button */}
          <button className="bg-tranparent outline-0 border-0 px-15 py-2 bg-emerald-600 rounded-full text-xl font-medium">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
