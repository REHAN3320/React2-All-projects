const Navbar = () => {
  return (
    <div
      className="bg-red-400  text-white
      h-30 px-20 py-3 border-b-2
      flex items-center justify-between"
    >
      <div className="flex gap-4 w-80px h-20px uppercase tracking-wider">
        <h1 className="text-5xl font-semibold ">Company</h1>
        <h1 className="text-4xl pt-2 font-thin">Name</h1>
      </div>
      <div className="flex gap-15 font-medium text-2xl">
        <h2>Home</h2>
        <h2>Features</h2>
        <h2>About</h2>
        <h2>Services</h2>
        <h2>Contact</h2>
        <i className="fa-solid fa-bars self-center"></i>
      </div>
    </div>
  );
};

export default Navbar;
