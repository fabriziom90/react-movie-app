import React from "react";

const Logo = ({ children }) => {
  return (
    <div id="logo" className="text-center">
      <img src="./logo_boolean.png" alt="" />
      {children}
    </div>
  );
};

export default Logo;
