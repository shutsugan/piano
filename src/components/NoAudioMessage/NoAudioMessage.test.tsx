import React from "react";
import { render } from "@testing-library/react";

import { NoAudioMessage } from "./index";

test("renders the component with the no audio message", () => {
  const expected = "Seems like your brower doesn't support Audio API.";
  const { getByText } = render(<NoAudioMessage />);
  const elementContent = getByText(expected);

  expect(elementContent).toBeInTheDocument();
});
