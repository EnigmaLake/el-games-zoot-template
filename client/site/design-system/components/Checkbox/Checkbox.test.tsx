import { screen, render, fireEvent } from "@testing-library/react";
import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
  const text = "This is some text";
  it("renders the label", async () => {
    render(<Checkbox>{text}</Checkbox>);

    expect(await screen.findByText(text)).toBeInTheDocument();
  });

  it("renders the indeterminate icon", async () => {
    render(<Checkbox indeterminate>{text}</Checkbox>);

    expect(await screen.findByTestId("indeterminate")).toBeInTheDocument();
  });

  it("renders the checkmark icon", async () => {
    render(<Checkbox checked>{text}</Checkbox>);

    expect(await screen.findByTestId("checkmark")).toBeInTheDocument();
  });

  it("renders the sub label", async () => {
    render(<Checkbox subLabel="137">{text}</Checkbox>);

    expect(await screen.findByText("137")).toBeInTheDocument();
  });

  it("renders correctly in error state", async () => {
    render(<Checkbox error>{text}</Checkbox>);

    expect(await screen.findByTestId("checkbox-input")).toHaveAttribute(
      "aria-invalid",
      "true"
    );
  });

  it("renders correctly in disabled state", async () => {
    render(<Checkbox disabled>{text}</Checkbox>);

    expect(await screen.findByTestId("checkbox-input")).toHaveAttribute(
      "aria-disabled",
      "true"
    );
  });

  it("calls the onChange handler with the appropriate value", async () => {
    const onChange = jest.fn();
    render(<Checkbox onChange={onChange}>{text}</Checkbox>);

    const checkbox = await screen.findByText(text);
    fireEvent.click(checkbox);
    expect(onChange).toBeCalledWith(true);
  });
});
