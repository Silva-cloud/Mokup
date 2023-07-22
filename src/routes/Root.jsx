import { Outlet } from 'react-router-dom';
import NotificationIconComponent from '../components/NotificationIconComponent/NotificationIconComponent'
import NavBar from '../components/NavBar/NavBar';

function Root() {
  return (
    <>
        <NotificationIconComponent />
        <Outlet />
        <NavBar />
    </>
  );
}

export default Root;
