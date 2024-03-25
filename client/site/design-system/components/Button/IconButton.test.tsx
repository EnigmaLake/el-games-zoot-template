import { screen, render } from "@testing-library/react";
import { IconButton } from "./IconButton";
import userEvent from "@testing-library/user-event";
import { AddIcon } from "@chakra-ui/icons";

describe("IconButton", () => {
  it("renders the icon", async () => {
    render(
      <IconButton>
        <AddIcon data-testid="add-icon" />
      </IconButton>
    );

    expect(await screen.findByTestId("add-icon")).toBeInTheDocument();
  });

  it("calls the onClick handler", async () => {
    const onClick = jest.fn();

    render(
      <IconButton onClick={onClick}>
        <AddIcon />
      </IconButton>
    );

    userEvent.click(await screen.findByRole("button"));
    expect(onClick).toHaveBeenCalled;
  });
});
