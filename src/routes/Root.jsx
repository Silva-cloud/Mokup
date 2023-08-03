import { Outlet } from 'react-router-dom';
import NotificationIconComponent from '../components/NotificationIconComponent/NotificationIconComponent'
import NavBar from '../components/NavBar/NavBar';
import Box from '@mui/material/Box'


function Root() {
  return (
    <>
        <Box sx={{
          display: {sm:'none'}
        }}>
          <NotificationIconComponent />
        </Box>
        <Outlet />
        <NavBar />
    </>
  );
}

export default Root;
