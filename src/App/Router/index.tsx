import { createBrowserRouter } from 'react-router-dom';

import LandingPage from 'App/LandingPage';

export default createBrowserRouter([
    {
        path: '/',
        element: <LandingPage />
    }
])