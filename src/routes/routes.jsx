import { createBrowserRouter } from 'react-router-dom';
import RouterLayout from '../Components/Layout/RouterLayout';
import HomePage from '../Pages/HomePage';
import AboutUs from '../Pages/AboutUs';
import ContactUs from '../Pages/ContactUs';

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
        path: '/about',
        element: <AboutUs />,
      },
      {
        path: '/contact',
        element: <ContactUs />,
      },
    ],
  },
]);

export default Routes;
