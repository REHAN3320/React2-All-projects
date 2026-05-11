const NotFound = () => {
  return (
    <>
      <div className=" bg-white h-full w-full font-serif ">
        <div className=" flex w-full h-full scale-70 text-center justify-center items-center gap-2 ">
          <div className="bg-[url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)] w-full h-90 bg-center ">
            <h1 className="text-7xl">404</h1>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <h3 className="text-7xl">Look like you're lost</h3>

            <p>the page you are looking for not avaible!</p>

            <a
              href="/"
              className="text-white py-5 px-5 bg-green-500 my-20 inline-block text-4xl"
            >
              Go to Home
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
