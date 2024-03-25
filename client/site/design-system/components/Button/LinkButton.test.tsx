import { screen, render } from "@testing-library/react";
import { LinkButton } from "./LinkButton";
import userEvent from "@testing-library/user-event";
import { AddIcon } from "@chakra-ui/icons";

describe("LinkButton", () => {
  const text = "This is some text";
  it("renders the text", async () => {
    render(<LinkButton>{text}</LinkButton>);

    expect(await screen.findByText(text)).toBeInTheDocument();
  });

  it("calls the onClick handler", async () => {
    const onClick = jest.fn();

    render(<LinkButton onClick={onClick}>{text}</LinkButton>);

    userEvent.click(await screen.findByRole("button"));
    expect(onClick).toHaveBeenCalled;
  });

  it("is marked as disabled", async () => {
    render(<LinkButton disabled>{text}</LinkButton>);

    expect(await screen.findByRole("button")).toHaveAttribute("disabled");
  });

  it("renders the loading spinner", async () => {
    render(<LinkButton loading>{text}</LinkButton>);
    expect(await screen.findByRole("button")).toHaveAttribute("data-loading");
  });

  it("renders the left icon", async () => {
    render(
      <LinkButton leftIcon={<AddIcon data-testid="left-icon" />}>
        {text}
      </LinkButton>
    );
    expect(await screen.findByTestId("left-icon")).toBeInTheDocument;
  });

  it("renders the right icon", async () => {
    render(
      <LinkButton rightIcon={<AddIcon data-testid="right-icon" />}>
        {text}
      </LinkButton>
    );
    expect(await screen.findByTestId("right-icon")).toBeInTheDocument;
  });
});
