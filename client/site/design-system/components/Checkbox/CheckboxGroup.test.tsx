import { screen, render, fireEvent } from "@testing-library/react";
import { CheckboxGroup } from "./CheckboxGroup";
import { Checkbox } from "./Checkbox";

describe("CheckboxGroup", () => {
  it("renders the children checkboxes", async () => {
    render(
      <CheckboxGroup groupLabel="Check all">
        <Checkbox>Item 1</Checkbox>
        <Checkbox>Item 2</Checkbox>
      </CheckboxGroup>
    );

    expect(await screen.findByText("Item 1")).toBeInTheDocument();
    expect(await screen.findByText("Item 2")).toBeInTheDocument();
  });

  it("renders the parent checkbox", async () => {
    render(
      <CheckboxGroup groupLabel="Check all">
        <Checkbox>Item 1</Checkbox>
        <Checkbox>Item 2</Checkbox>
      </CheckboxGroup>
    );

    expect(await screen.findByText("Check all")).toBeInTheDocument();
  });

  it("calls the onChange handler with the appropriate values to check all the boxes", async () => {
    const onChange = jest.fn();
    render(
      <CheckboxGroup groupLabel="Check all" onChange={onChange}>
        <Checkbox>Item 1</Checkbox>
        <Checkbox>Item 2</Checkbox>
      </CheckboxGroup>
    );

    const checkbox = await screen.findByText("Check all");
    fireEvent.click(checkbox);
    expect(onChange).toBeCalledWith({ "Item 1": true, "Item 2": true });
  });

  it("calls the onChange handler with the appropriate values to check a single box", async () => {
    const onChange = jest.fn();
    render(
      <CheckboxGroup groupLabel="Check all" onChange={onChange}>
        <Checkbox>Item 1</Checkbox>
        <Checkbox>Item 2</Checkbox>
      </CheckboxGroup>
    );

    const checkbox = await screen.findByText("Item 1");
    fireEvent.click(checkbox);
    expect(onChange).toBeCalledWith({ "Item 1": true, "Item 2": false });
  });
});
