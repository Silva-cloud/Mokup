import { useState, useEffect } from 'react';
import { VscBell, VscSearch } from 'react-icons/vsc';
import { AiOutlineHome, AiOutlineCreditCard } from 'react-icons/ai';
import { BsMenuButtonWide, BsPersonFill } from 'react-icons/bs';
import { RxExit } from "react-icons/rx";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box'
import { Stack } from '@mui/material';
import { NavLink } from "react-router-dom";

import './NavBar.css'; // Import the CSS file

const ThreeColumnIconLayout = () => {
  const [selectedIcon, setSelectedIcon] = useState('AiOutlineHome');
  const [showAlternativeContent, setShowAlternativeContent] = useState(false);

  const handleIconClick = (iconName) => {
    // console.log(iconName, '----', selectedIcon)
    setSelectedIcon(iconName === selectedIcon ? selectedIcon : iconName);
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

  //blue dot for the bell icon
  const notificationStyle = {
    position: 'absolute',
    top: 0,
    right: 20,
    width: 12,
    height: 12,
    borderRadius: '50%',
    backgroundColor: 'royalblue',
    display: 'block',
  };

  //stoping the switch between update and bottom navbar on sm viewport
  const theme = useTheme();
  const smMatched = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Box sx={{
      position: 'fixed',
      bottom: '0',
      left: {sm: '0'},
      top: {sm: '0',},
      width: {xs:'100vw', sm: 'auto'},
      backgroundColor: 'white',
      zIndex: '1000',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'
    }}>
      <div className={`wrapper ${selectedIcon ? 'sticky' : 'sticky'}`}>
          {/* place media query boolean here */}
          {showAlternativeContent && !smMatched ? (
            // Render the alternative content when scrolled to the end of the page
            <Box  sx={{
              width: {xs:'100vw'},
              display: {sm: 'none'}
            }}>
              <div className="alternative-content">
              <h4>update</h4>
            </div>
            </Box>
          ) : (
            // Render the default content
              <div className="column">
                <Stack spacing={3}
                direction={{ xs: 'row' ,sm: 'column' }} 
                sx={{
                  backgroundColor: 'white',
                  position: 'fixed',
                  bottom: '0',
                  height: {sm:'100%'},
                  width: {xs:'100vw', sm: 'auto'}
                }}>
                  <Box sx={{
                    display: {xs: 'none',sm:'block'}
                  }}>
                    <VscSearch
                      size={45}
                      className={`icon ${
                        isIconSelected('VscSearch') ? 'selected' : ''
                      }`}
                      onClick={() => handleIconClick('VscSearch')}
                    />
                  </Box>
                  <NavLink to='/'>
                    <AiOutlineHome
                      size={45}
                      className={`icon ${
                        isIconSelected('AiOutlineHome') ? 'selected' : ''
                      }`}
                      onClick={() => handleIconClick('AiOutlineHome')}
                    />
                  </NavLink>
                  <NavLink to='news'>
                    <AiOutlineCreditCard
                      size={45}
                      className={`icon ${
                        isIconSelected('AiOutlineCreditCard') ? 'selected' : ''
                      }`}
                      onClick={() => handleIconClick('AiOutlineCreditCard')}
                    />
                  </NavLink>
                  <NavLink to='contacts'>
                    <BsMenuButtonWide
                      size={45}
                      className={`icon ${
                        isIconSelected('BsMenuButtonWide') ? 'selected' : ''
                      }`}
                      onClick={() => handleIconClick('BsMenuButtonWide')}
                    />
                  </NavLink>
                  <Box sx={{
                    flexGrow: {sm:1}
                  }}>
                    <BsPersonFill
                      size={45}
                      className={`icon ${
                        isIconSelected('BsPersonFill') ? 'selected' : ''
                      }`}
                      onClick={() => handleIconClick('BsPersonFill')}
                    />
                  </Box>
                  <Box sx={{
                    display: {sm:'none'}
                  }}>
                    <VscSearch
                      size={45}
                      className={`icon ${
                        isIconSelected('VscSearch') ? 'selected' : ''
                      }`}
                      onClick={() => handleIconClick('VscBell')}
                    />
                  </Box>
                  <Box sx={{
                    display: {xs: 'none',sm:'block'},
                    position: 'relative',
                  }}>
                    <VscBell
                      size={45}
                      className={`icon ${
                        isIconSelected('VscBell') ? 'selected' : ''
                      }`}
                      onClick={() => handleIconClick('VscBell')}
                    />
                    <div style={notificationStyle}></div>
                  </Box>
                  <Box sx={{
                    display: {xs: 'none',sm:'block'}
                  }}>
                    <RxExit
                      size={45}
                      className={`icon ${
                        isIconSelected('RxExit') ? 'selected' : ''
                      }`}
                      onClick={() => handleIconClick('RxExit')}
                    />
                  </Box>
                </Stack>
              </div>
          )}
      </div>
    </Box>
  );
};

export default ThreeColumnIconLayout;
