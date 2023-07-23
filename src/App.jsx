import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Root from './routes/Root'
import Home from './components/Home/Home'
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
        element: <dev>News</dev>,
      },

      {
        path: 'contacts',
        element: <div>Contacts</div>,
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
