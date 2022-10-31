import { fireEvent, render, screen } from "@testing-library/react";
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

test("minus button을 누르면 count가 -1로 변합니다", () => {
  render(<App />);
  const count = screen.getByTestId("count");
  const minusButton = screen.getByTestId("btn-minus");
  fireEvent.click(minusButton);

  expect(count).toHaveTextContent("-1");
});

test("plus button을 누르면 count가 1로 변합니다", () => {
  render(<App />);
  const count = screen.getByTestId("count");
  const plusButton = screen.getByTestId("btn-plus");
  fireEvent.click(plusButton);

  expect(count).toHaveTextContent("1");
});

test("on/off button render", () => {
  render(<App />);
  const displayButton = screen.getByTestId("btn-display");
  expect(displayButton).toHaveTextContent("on/off");
  expect(displayButton).toHaveStyle(`
  background: tomato;
  `);
});

test("when click on/off button, disable plus, minus button", () => {
  render(<App />);
  const displayButton = screen.getByTestId("btn-display");

  fireEvent.click(displayButton);

  const plusButton = screen.getByTestId("btn-plus");
  const minusButton = screen.getByTestId("btn-minus");

  expect(plusButton).toBeDisabled();
  expect(minusButton).toBeDisabled();

  fireEvent.click(displayButton);

  expect(plusButton).toBeEnabled();
  expect(minusButton).toBeEnabled();
});
