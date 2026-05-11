import { Link } from "react-router-dom";
const Navbar = () => {
  const onToggleMenu = (e) => {
    console.log(e);
    const ToggleMenu = document.querySelector(".togglemenu");
    if (e.target.className === "fa-solid fa-bars") {
      e.target.className = "fa-solid fa-xmark";
    } else {
      e.target.className = "fa-solid fa-bars";
    }
    ToggleMenu.classList.toggle("left-[0%]");
  };

  return (
    <div className="absolute h-17 flex mx-auto justify-between items-center p-10 pt-15 top-0 w-full text-white ">
      <h1 className="text-3xl font-extrabold font-serif ">M.Rehan</h1>
      <div className="flex justify-between">
        <div
          className="absolute togglemenu text-lg font-semibold
       
      min-h-[40vh] min-w-[15vh] left-[-100%] top-[90%] duration-500 px-5 scale-90 

      bg-black

      flex justify-center flex-col gap-8 border-l-2

      md:flex-row md:items-center md:gap-[10vh] md:static md:h-fit md:w-auto md:bg-none md:bg-transparent md:border-0 md:duration-0"
        >
          <Link to="/">Home</Link>
          <Link to="/about">About-Me</Link>
          <Link to="/projects">My-Projects</Link>
        </div>
        <div className="cursor-pointer md:hidden">
          <i className="fa-solid fa-bars" onClick={(e) => onToggleMenu(e)}></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
