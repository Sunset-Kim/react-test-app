import { render, screen } from "@testing-library/react";
import App from "./App";

test("App render after count 0", () => {
  render(<App />);
  const countElement = screen.getByTestId("count");
  expect(countElement).toHaveTextContent(0);
});
