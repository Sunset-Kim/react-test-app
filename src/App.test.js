import { render, screen } from "@testing-library/react";
import App from "./App";

test("App render after count 0", () => {
  render(<App />);
  const countElement = screen.getByTestId("count");
  expect(countElement).toHaveTextContent(0);
});

test("minus button의 텍스트는 '-' 입니다.", () => {
  render(<App />);
  const countElement = screen.getByTestId("btn-minus");
  expect(countElement).toHaveTextContent("-");
});

test("plus button의 텍스트는 '+' 입니다.", () => {
  render(<App />);
  const countElement = screen.getByTestId("btn-plus");
  expect(countElement).toHaveTextContent("+");
});
