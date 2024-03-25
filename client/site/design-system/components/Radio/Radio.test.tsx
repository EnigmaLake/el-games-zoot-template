import { fireEvent, render, screen } from "@testing-library/react";
import { Radio } from "./Radio";

describe("Radio", () => {
  const text = "This is some text";
  it("renders the label", async () => {
    render(<Radio>{text}</Radio>);

    expect(await screen.findByText(text)).toBeInTheDocument();
  });

  it("renders the sub label", async () => {
    render(<Radio subLabel="137">{text}</Radio>);

    expect(await screen.findByText("137")).toBeInTheDocument();
  });

  it("renders correctly in error state", async () => {
    render(<Radio error>{text}</Radio>);

    expect(await screen.findByTestId("radio-input")).toHaveAttribute(
      "aria-invalid",
      "true"
    );
  });

  it("renders correctly in disabled state", async () => {
    render(<Radio disabled>{text}</Radio>);

    expect(await screen.findByTestId("radio-input")).toHaveAttribute(
      "aria-disabled",
      "true"
    );
  });

  it("calls the onChange handler with the appropriate value", async () => {
    const onChange = jest.fn();
    render(<Radio onChange={onChange}>{text}</Radio>);

    const RadioInput = await screen.findByText(text);
    fireEvent.click(RadioInput);
    expect(onChange).toBeCalledWith(true);
  });
});
