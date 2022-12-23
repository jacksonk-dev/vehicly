import { render } from "@testing-library/react";

import AppBar from '.';

describe('AppBar', () => {
    beforeEach(() => {
      render(<AppBar />);
    });

    test("Should contain app title", () => {
      // Can't be blank
    });
});