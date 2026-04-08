const Card = (props) => {
  return (
    <>
      <div className="card">
        <div className="top">
          <img className="logoImage" src={props.logo} alt="" />
          <div className="Button">
            <button className="SaveButton">
              SAVE
              <i className="fa-solid fa-bookmark"></i>
            </button>
          </div>
        </div>
        <div className="center">
          <h3>
            {props.company} <span>{props.time}</span>
          </h3>
          <h2>{props.specialization}</h2>
          <div className="h4Container">
            <h4>*Part Time</h4>
            <h4>*Senior Level</h4>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>{props.salery}</h3>
            <p>
              {props.city}, {props.country}
            </p>
          </div>
          <button className="ApplyButton">Apply Now</button>
        </div>
      </div>
    </>
  );
};
export default Card;
