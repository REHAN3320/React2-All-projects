const ErrorMessage = ({ items }) => {
  return <>{items.length === 0 && <h3>Give me Some Food</h3>}</>;
};
export default ErrorMessage;
