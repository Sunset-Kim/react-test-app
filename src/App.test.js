import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);

  const lintTest = screen.getByRole("button", {
    name: "lintTest",
  });

  expect(lintTest).toHaveTextContent("lintTest");

  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
