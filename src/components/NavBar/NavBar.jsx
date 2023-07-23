import React, { useState, useEffect } from 'react';
import { VscBell, VscHeart, VscSearch } from 'react-icons/vsc';
import { AiOutlineHome, AiOutlineCreditCard } from 'react-icons/ai';
import { BsMenuButtonWide, BsPersonFill } from 'react-icons/bs';

import './NavBar.css'; // Import the CSS file

const ThreeColumnIconLayout = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [showAlternativeContent, setShowAlternativeContent] = useState(false);

  const handleIconClick = (iconName) => {
    setSelectedIcon(iconName === selectedIcon ? null : iconName);
  };

  const isIconSelected = (iconName) => iconName === selectedIcon;

  const handleScroll = () => {
    // Check if the user has scrolled to the end of the page
    const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
    setShowAlternativeContent(scrolledToBottom);
  };

  useEffect(() => {
    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);
    return () => {
      // Clean up the scroll event listener when the component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`wrapper ${selectedIcon ? 'sticky' : 'sticky'}`}>
      {showAlternativeContent ? (
        // Render the alternative content when scrolled to the end of the page
        <div className="alternative-content">
        <h4>update</h4>
      </div>
      ) : (
        // Render the default content
        <div className="column">
          <AiOutlineHome
            size={45}
            className={`icon ${
              isIconSelected('AiOutlineHome') ? 'selected' : ''
            }`}
            onClick={() => handleIconClick('AiOutlineHome')}
          />
          <AiOutlineCreditCard
            size={45}
            className={`icon ${
              isIconSelected('AiOutlineCreditCard') ? 'selected' : ''
            }`}
            onClick={() => handleIconClick('AiOutlineCreditCard')}
          />
          <BsMenuButtonWide
            size={45}
            className={`icon ${
              isIconSelected('BsMenuButtonWide') ? 'selected' : ''
            }`}
            onClick={() => handleIconClick('BsMenuButtonWide')}
          />
          <BsPersonFill
            size={45}
            className={`icon ${
              isIconSelected('BsPersonFill') ? 'selected' : ''
            }`}
            onClick={() => handleIconClick('BsPersonFill')}
          />
          <VscSearch
            size={45}
            className={`icon ${
              isIconSelected('VscSearch') ? 'selected' : ''
            }`}
            onClick={() => handleIconClick('VscSearch')}
          />
        </div>
      )}
    </div>
  );
};

export default ThreeColumnIconLayout;
