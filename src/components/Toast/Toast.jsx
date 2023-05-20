import { useDataContext } from "../../contexts";
import { ACTION_TYPE } from "../../utils";
import { useEffect } from "react";
import "./Toast.css";

export const Toast = (props) => {
  const { position = "top-right" } = props;
  const {
    toast: { type, msg },
    dispatch,
  } = useDataContext();

  const closeToast = () => {
    dispatch({ type: ACTION_TYPE.SHOW_TOAST, payload: null });
  };

  useEffect(() => {
    const timeId = setTimeout(closeToast, 2000);
    return () => clearTimeout(timeId);
  });

  return (
    <div className={`toast ${position} toast-${type} `}>
      {msg}
      <button className="btn-close" onClick={close}></button>
    </div>
  );
};
