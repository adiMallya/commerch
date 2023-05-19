import "./Loader.css";

export const Loader = () => {
  return (
    <div className="loader-container">
      <svg
        xmlnsXlink="http://www.w3.org/2000/svg"
        xlinkHref="http://www.w3.org/1999/xlink"
        style={{
          margin: "auto",
          // background: "rgb(241, 242, 243)",
          display: "block",
        }}
        width="149px"
        height="149px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <defs>
          <clipPath
            id="ldio-0nbxvbt8il6r-cp"
            x="0"
            y="0"
            width="100"
            height="100"
          >
            <path d="M81.3,58.7H18.7c-4.8,0-8.7-3.9-8.7-8.7v0c0-4.8,3.9-8.7,8.7-8.7h62.7c4.8,0,8.7,3.9,8.7,8.7v0C90,54.8,86.1,58.7,81.3,58.7z"></path>
          </clipPath>
        </defs>
        <path
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.7928"
          d="M82 63H18c-7.2,0-13-5.8-13-13v0c0-7.2,5.8-13,13-13h64c7.2,0,13,5.8,13,13v0C95,57.2,89.2,63,82,63z"
        ></path>
        <g clipPath="url(#ldio-0nbxvbt8il6r-cp)">
          <g>
            <rect x="-100" y="0" width="25" height="100" fill="#397870"></rect>
            <rect x="-75" y="0" width="25" height="100" fill="#30ad9d"></rect>
            <rect x="-50" y="0" width="25" height="100" fill="#2dd4bf"></rect>
            <rect x="-25" y="0" width="25" height="100" fill="#fcfefd"></rect>
            <rect x="0" y="0" width="25" height="100" fill="#397870"></rect>
            <rect x="25" y="0" width="25" height="100" fill="#30ad9d"></rect>
            <rect x="50" y="0" width="25" height="100" fill="#2dd4bf"></rect>
            <rect x="75" y="0" width="25" height="100" fill="#fcfefd"></rect>
            <animateTransform
              attributeName="transform"
              type="translate"
              dur="0.47169811320754723s"
              repeatCount="indefinite"
              keyTimes="0;1"
              values="0;100"
            ></animateTransform>
          </g>
        </g>
      </svg>
    </div>
  );
};
