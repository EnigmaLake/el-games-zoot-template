import { screen, render } from "@testing-library/react";
import { SelectGroupCard } from "./SelectGroupCard";

describe("SelectGroup", () => {
  it("renders the text", async () => {
    render(<SelectGroupCard value="option-1">Option 1</SelectGroupCard>);

    expect(await screen.findByText("Option 1")).toBeInTheDocument();
  });

  it("is disabled when disabled prop is passed", async () => {
    render(
      <SelectGroupCard value="option-1" disabled>
        Option 1
      </SelectGroupCard>
    );
    expect(await screen.findByLabelText("Option 1")).toBeDisabled();
  });
});
