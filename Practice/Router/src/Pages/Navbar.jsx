import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex justify-between bg-blue-400 h-20 items-center p-3 text-lg font-bold">
      <h1>M.Rehan</h1>
      <div className="flex justify-baseline gap-3 underline ">
        <Link to="/about" className="active">
          AboutUS
        </Link>
        <Link to="/contact" className="active">
          Contact
        </Link>
        <Link to="/" className="active">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
