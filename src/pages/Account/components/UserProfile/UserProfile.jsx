import { useNavigate } from "react-router-dom";
import { useAuthContext, useDataContext } from "../../../../contexts";
import { ACTION_TYPE } from "../../../../utils";
import "./UserProfile.css";

export const UserProfile = () => {
  const navigate = useNavigate();
  const { user, dispatch: authDispatch } = useAuthContext();
  const { dispatch: dataDispatch } = useDataContext();

  const { firstName, lastName, email } = user;

  const logOutUser = () => {
    authDispatch({ type: ACTION_TYPE.LOG_OUT });
    dataDispatch({ type: ACTION_TYPE.LOG_OUT });
    navigate("/");
    document.documentElement.scrollTop = 0;
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
