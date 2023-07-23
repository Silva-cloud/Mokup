import React, { useState, useEffect } from 'react';
import { VscBell, VscChromeClose } from 'react-icons/vsc';

const NotificationIconComponent = () => {
  const [showCloseIcon, setShowCloseIcon] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isAtEnd = window.scrollY + window.innerHeight >= document.body.scrollHeight;
      setShowCloseIcon(isAtEnd);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={wrapperStyle}>
      <div style={containerStyle}>
        {showCloseIcon ? null : (
          <div style={notificationStyle}></div>
        )}
        <div style={iconContainerStyle}>
          {showCloseIcon ? (
            <VscChromeClose size={30} />
          ) : (
            <VscBell size={30} />
          )}
        </div>
      </div>
    </div>
  );
};

const wrapperStyle = {
  width: '100%', // Take full width of the page
  display: 'flex', // Use flexbox to align the iconContainerStyle to the right
  justifyContent: 'flex-end', // Align the iconContainerStyle to the right of the page
  padding: 20, // Add desired padding
  position: 'fixed',
  top: 0,
  backgroundColor: 'white',
  height: 15,
  transition: 'background-color 0.3s ease', // Add a transition for background color change
};

const containerStyle = {
  position: 'relative',
  display: 'inline-block',
};

const notificationStyle = {
  position: 'absolute',
  top: -5,
  right: -5,
  width: 12,
  height: 12,
  borderRadius: '50%',
  backgroundColor: 'royalblue',
  display: 'block',
};

const iconContainerStyle = {
  textAlign: 'right',
  color: 'gray',
};

export default NotificationIconComponent;
