import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const Password = ({ value, onChangeHandler }) => {
  const [view, setView] = useState(false);

  return (
    <div>
      <input
        type={view ? "text" : "password"}
        name="password"
        value={value}
        onChange={onChangeHandler}
        placeholder="Enter your password"
        required
      />
      <span
        className="eye-icon"
        role="button"
        onClick={() => setView((prev) => !prev)}
      >
        {view ? <FaEye title="Show" /> : <FaEyeSlash title="Hide" />}
      </span>
    </div>
  );
};
