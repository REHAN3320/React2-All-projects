let Time = () => {
  let time = new Date();

  return (
    <p>
      This is the current time: {time.toLocaleDateString()}-
      {time.toLocaleTimeString()}
      {"AM"}
    </p>
  );
};
export default Time;
