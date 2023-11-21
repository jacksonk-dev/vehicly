import { createBrowserRouter } from 'react-router-dom';

import LandingPage from 'App/Page/LandingPage';
import BikesPage from 'App/Page/Bikes';
import BikerWearPage from 'App/Page/BikerWear';
import AccessoriesPage from 'App/Page/Accessories';
import App from 'App';

export default createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <LandingPage />
      },
      {
        path: '/bikes',
        element: <BikesPage />
      },
      {
        path: '/biker-wear',
        element: <BikerWearPage />
      },
      {
        path: '/accessories',
        element: <AccessoriesPage />
      }
    ]
  },
]);