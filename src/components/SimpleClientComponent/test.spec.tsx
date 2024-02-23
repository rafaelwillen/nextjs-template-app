import { fireEvent, render } from "@testing-library/react";
import SimpleClientComponent from "./index";

test("increments counter on button click", () => {
  const { getByText } = render(<SimpleClientComponent />);

  // Initial counter text should be "Counter: 0"
  expect(getByText("Counter: 0")).toBeInTheDocument();

  // Find the button and click it
  const button = getByText("Click me");
  fireEvent.click(button);

  // Counter text should now be "Counter: 1"
  expect(getByText("Counter: 1")).toBeInTheDocument();
});
