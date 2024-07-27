import React from "react";

const PreLoader = () => {
  return (
    <div className="preloader">
      <div className="logo-wrapper">
        <img src="assets/images/arab/brand.png" alt="Logo" className="logo" />
        <div className="custom-loader">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
