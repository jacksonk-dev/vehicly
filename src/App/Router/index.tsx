import { createBrowserRouter } from 'react-router-dom';

import LandingPage from 'App/Page/LandingPage';

export default createBrowserRouter([
    {
        path: '/',
        element: <LandingPage />
    }
])