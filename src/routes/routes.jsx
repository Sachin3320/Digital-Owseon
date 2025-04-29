import { createBrowserRouter } from 'react-router-dom';
import RouterLayout from '../Components/Layout/RouterLayout';
import HomePage from '../Pages/HomePage';
import AboutUs from '../Pages/AboutUs';

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <RouterLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutUs />,
      },
    ],
  },
]);

export default Routes;
