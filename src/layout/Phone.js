import React, { useState, useEffect } from 'react';

const CallButton = ({ phoneNumber }) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(!showText);
    }, 4000); // 

    return () => clearTimeout(timer);
  }, [showText]);

  const handleClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div
      style={{
        position: "fixed",
        right: "6px",
        bottom: "70px",
        zIndex: 20,
        cursor: "pointer",
      }}
      onClick={handleClick}
      className="animate"
    >
      <span className={showText ? "call-now-text visible" : "call-now-text"}>Call Now</span>
      <img
        src="/assets/images/arab/phone-call1.png"
        alt="Phone Icon"
        className="phone-icon"
      />
    </div>
  );
};

export default CallButton;
