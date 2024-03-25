import { screen, render } from "@testing-library/react";
import { SegmentController } from "./SegmentController";
import { Segment } from "./Segment";
import userEvent from "@testing-library/user-event";

describe("SegmentController", () => {
  it("renders the segments", async () => {
    render(
      <SegmentController>
        <Segment value="option 1">Option 1</Segment>
        <Segment value="option 2">Option 2</Segment>
      </SegmentController>
    );

    expect(await screen.findByText("Option 1")).toBeInTheDocument();
    expect(await screen.findByText("Option 2")).toBeInTheDocument();
  });

  it("calls the onChange handler with the appropriate value", async () => {
    const onChange = jest.fn();
    render(
      <SegmentController onChange={onChange}>
        <Segment value="option 1">Option 1</Segment>
        <Segment value="option 2">Option 2</Segment>
      </SegmentController>
    );

    const segment = await screen.findByText("Option 2");
    await userEvent.click(segment);
    expect(onChange).toBeCalledWith("option 2");
  });
});
