import { render } from "@testing-library/react";

import LandingPage from '.';

describe('Landing Page', () => {
    test('should render', () => {
        render(<LandingPage />)
    });
});