import React from "react";
import { render } from "@testing-library/react";

import { Footer } from "./index";

test("render footer with year", () => {
  const currentYear = new Date().getFullYear();
  const expected = `Piano ${currentYear}`;

  const { getByText } = render(<Footer />);
  const footerContent = getByText(expected);

  expect(footerContent).toBeInTheDocument();
});
