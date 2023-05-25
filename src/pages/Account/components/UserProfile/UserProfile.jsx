import { useAuthContext } from "../../../../contexts";
import "./UserProfile.css";

export const UserProfile = () => {
  const {
    user: { user },
    logOutUser,
  } = useAuthContext();

  const { firstName, lastName, email } = user;
  return (
    <>
      <div className="profile-details">
        <div className="col">
          <span role="label">Name</span>
          <span role="label">Email</span>
        </div>
        <div className="col">
          <span>{`${firstName} ${lastName}`}</span>
          <span>{email}</span>
        </div>
      </div>
      <button className="btn btn--secondary-outline" onClick={logOutUser}>
        Log Out
      </button>
    </>
  );
};
