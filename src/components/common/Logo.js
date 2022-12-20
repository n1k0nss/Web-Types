import React from "react";
import KeyboardAltIcon from "@mui/icons-material/KeyboardAlt";

const Logo = ({ isFocusedMode, isMusicMode }) => {
  return (
    <div className="header" style={{visibility: isFocusedMode ? 'hidden' : 'visible' }}>
      <h1>
        Web-Typing <KeyboardAltIcon fontSize="large" />
      </h1>
      <span className="sub-header">
      елегантний тренажер друку, просто почніть друкувати
      </span>
    </div>
  );
};

export default Logo;
