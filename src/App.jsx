import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Root from './routes/Root'
import Home from './components/Home/Home'
import News from './components/News/News'
import Contacts from './components/Contacts/Contacts'
import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root basename={true}/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'news',
        element: <News />,
      },

      {
        path: 'contacts',
        element: <Contacts />,
      },

      {
        path: 'profile',
        element: <div>Profile</div>,
      },
    ],
  },
]);

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
