import { createBrowserRouter } from 'react-router-dom';

import LandingPage from 'App/Page/LandingPage';
import BikesPage from 'App/Page/Bikes';

export default createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: '/bikes',
    element: <BikesPage />
  }
]);