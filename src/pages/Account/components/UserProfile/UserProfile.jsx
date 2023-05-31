import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../../contexts";
import { ACTION_TYPE } from "../../../../utils";
import "./UserProfile.css";

export const UserProfile = () => {
  const navigate = useNavigate();
  const { user, dispatch } = useAuthContext();

  const { firstName, lastName, email } = user;

  const logOutUser = () => {
    dispatch({ type: ACTION_TYPE.LOG_OUT });
    navigate("/");
  };

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
