import { screen, render } from "@testing-library/react";
import { BaseButton } from "./BaseButton";
import userEvent from "@testing-library/user-event";
import { AddIcon } from "@chakra-ui/icons";

describe("BaseButton", () => {
  const text = "This is some text";
  it("renders the text", async () => {
    render(<BaseButton>{text}</BaseButton>);

    expect(await screen.findByText(text)).toBeInTheDocument();
  });

  it("calls the onClick handler", async () => {
    const onClick = jest.fn();

    render(<BaseButton onClick={onClick}>{text}</BaseButton>);

    userEvent.click(await screen.findByRole("button"));
    expect(onClick).toHaveBeenCalled;
  });

  it("is marked as disabled", async () => {
    render(<BaseButton disabled>{text}</BaseButton>);

    expect(await screen.findByRole("button")).toHaveAttribute("disabled");
  });

  it("renders the loading spinner", async () => {
    render(<BaseButton loading>{text}</BaseButton>);
    expect(await screen.findByRole("button")).toHaveAttribute("data-loading");
  });

  it("renders the left icon", async () => {
    render(
      <BaseButton leftIcon={<AddIcon data-testid="left-icon" />}>
        {text}
      </BaseButton>
    );
    expect(await screen.findByTestId("left-icon")).toBeInTheDocument;
  });

  it("renders the right icon", async () => {
    render(
      <BaseButton rightIcon={<AddIcon data-testid="right-icon" />}>
        {text}
      </BaseButton>
    );
    expect(await screen.findByTestId("right-icon")).toBeInTheDocument;
  });
});
