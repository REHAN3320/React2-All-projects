import css from "./Profile.module.css";
const ProfileContainer = (props) => {
  return (
    <>
      <div className={css.ProfileContainer}>
        <div className={css.Name}>
          <img
            className={css.ProfilePicture}
            src="https://71465b5a-0602-48c7-a377-3478de53dec5.mdnplay.dev/shared-assets/images/examples/grapefruit-slice.jpg"
            alt=""
          />
          <h1>{props.user}</h1>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            sequi.
          </h3>
          <button className={css.ProfileButton}>View Profile</button>
        </div>
      </div>
    </>
  );
};

export default ProfileContainer;
