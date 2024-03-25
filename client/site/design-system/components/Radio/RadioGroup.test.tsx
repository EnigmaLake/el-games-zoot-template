import { fireEvent, render, screen } from "@testing-library/react";
import { Radio } from "./Radio";
import { RadioGroup } from "./RadioGroup";

describe("RadioGroup", () => {
  it("renders the children radio buttons", async () => {
    render(
      <RadioGroup groupLabel="Category">
        <Radio>Item 1</Radio>
        <Radio>Item 2</Radio>
      </RadioGroup>
    );

    expect(await screen.findByText("Item 1")).toBeInTheDocument();
    expect(await screen.findByText("Item 2")).toBeInTheDocument();
  });

  it("calls the onChange handler with the appropriate values to check a single radio button", async () => {
    const onChange = jest.fn();
    render(
      <RadioGroup groupLabel="Category" onChange={onChange}>
        <Radio>Item 1</Radio>
        <Radio>Item 2</Radio>
      </RadioGroup>
    );

    const option1 = await screen.findByText("Item 1");
    fireEvent.click(option1);
    expect(onChange).toBeCalledWith({ "Item 1": true, "Item 2": false });
  });

  it("calls the onChange handler with the appropriate values when switching input", async () => {
    const onChange = jest.fn();
    render(
      <RadioGroup groupLabel="Category" onChange={onChange}>
        <Radio>Item 1</Radio>
        <Radio>Item 2</Radio>
      </RadioGroup>
    );

    const option1 = await screen.findByText("Item 1");
    fireEvent.click(option1);
    expect(onChange).toBeCalledWith({ "Item 1": true, "Item 2": false });
    const option2 = await screen.findByText("Item 2");
    fireEvent.click(option2);
    expect(onChange).toBeCalledWith({ "Item 1": false, "Item 2": true });
  });
});
