import React from "react";
import { render } from "@testing-library/react";

import { Logo } from "./index";

test("render the Logo", () => {
  const expected = "PIANO";

  const { getByText } = render(<Logo />);
  const logoContent = getByText(expected);

  expect(logoContent).toBeInTheDocument();
});
