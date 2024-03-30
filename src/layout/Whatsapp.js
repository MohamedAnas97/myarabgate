import React, { useState, useEffect } from 'react';

const Whatsapp = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(!showText);
    }, 4000); 

    return () => clearTimeout(timer);
  }, [showText]);

  return (
    <div
      style={{
        position: "fixed",
        right: "4px",
        bottom: "8px",
        zIndex: 20,
      }}
      className="animate"
    >
      <span className={showText ? "whatsapp-text visible" : "whatsapp-text"}>Send Message</span>
      <a
        href="https://api.whatsapp.com/send?phone=971585443090&text="
        target="_blank"
      >
        <img
          src="/assets/images/arab2/whatsapp.png"
          alt="WhatsApp Icon"
          className='whatsapp-icon'
        />
      </a>
    </div>
  );
};

export default Whatsapp;
