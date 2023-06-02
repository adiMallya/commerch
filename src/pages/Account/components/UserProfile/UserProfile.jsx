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
    dataDispatch({
      type: ACTION_TYPE.SHOW_TOAST,
      payload: { type: "success", msg: "Logged Out. See you soon!" },
    });
    navigate("/");
    dataDispatch({ type: ACTION_TYPE.SHOW_LOADER, payload: true });
    setTimeout(() => {
      document.documentElement.scrollTop = 0;
      dataDispatch({ type: ACTION_TYPE.SHOW_LOADER, payload: false });
    }, 1000);
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
      <button className="btn btn--primary-outline" onClick={logOutUser}>
        Log Out
      </button>
    </>
  );
};
