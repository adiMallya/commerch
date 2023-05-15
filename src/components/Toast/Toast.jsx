import { useEffect, useState } from "react";
import "./Toast.css";

export const Toast = (props) => {
  const { position = "top-right", type = "info" } = props;

  return (
    <div className={`toast ${position} toast-${type} `}>
      {"This is success!"}
      <button className="btn-close"></button>
    </div>
  );
};
