import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SelectGroup } from "./SelectGroup";
import { SelectGroupCard } from "./SelectGroupCard";

describe("SelectGroup", () => {
  it("renders the children", async () => {
    render(
      <SelectGroup defaultValue="option-1">
        <SelectGroupCard value="option-1">Option 1</SelectGroupCard>
        <SelectGroupCard value="option-2">Option 2</SelectGroupCard>
        <SelectGroupCard value="option-3">Option 3</SelectGroupCard>
      </SelectGroup>
    );

    expect(await screen.findByText("Option 1")).toBeInTheDocument();
    expect(await screen.findByText("Option 2")).toBeInTheDocument();
    expect(await screen.findByText("Option 3")).toBeInTheDocument();
  });

  it("calls the onChange callback", async () => {
    const onChange = jest.fn();
    render(
      <SelectGroup onChange={onChange} defaultValue="option-1">
        <SelectGroupCard value="option-1">Option 1</SelectGroupCard>
        <SelectGroupCard value="option-2">Option 2</SelectGroupCard>
      </SelectGroup>
    );
    userEvent.click(await screen.findByLabelText("Option 1"));
    expect(onChange).toBeCalled;
  });
});
