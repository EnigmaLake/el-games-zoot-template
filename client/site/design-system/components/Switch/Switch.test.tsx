import { screen, render, fireEvent } from "@testing-library/react";
import { Switch } from "./Switch";

describe("Switch", () => {
  const text = "This is some text";
  it("renders the text", async () => {
    render(<Switch>{text}</Switch>);

    expect(await screen.findByText(text)).toBeInTheDocument();
  });

  it("calls the onChange handler with the appropriate value", async () => {
    const onChange = jest.fn();
    render(<Switch onChange={onChange}>{text}</Switch>);

    const switchControl = await screen.findByText(text);
    fireEvent.click(switchControl);
    expect(onChange).toBeCalledWith(true);
  });

  it("renders correctly in disabled state", async () => {
    render(<Switch disabled>{text}</Switch>);

    expect(await screen.findByTestId("switch")).toHaveAttribute(
      "data-disabled"
    );
  });
});
