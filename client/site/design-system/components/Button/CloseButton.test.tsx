import { screen, render } from "@testing-library/react";
import { CloseButton } from "./CloseButton";
import userEvent from "@testing-library/user-event";

describe("CloseButton", () => {
  it("renders the close icon", async () => {
    render(<CloseButton />);

    expect(await screen.findByTestId("close-icon")).toBeInTheDocument();
  });

  it("calls the onClick handler", async () => {
    const onClick = jest.fn();

    render(<CloseButton onClick={onClick} />);

    userEvent.click(await screen.findByRole("button"));
    expect(onClick).toHaveBeenCalled;
  });
});
