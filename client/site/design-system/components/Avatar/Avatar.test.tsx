import { screen, render } from "@testing-library/react";
import { Avatar } from "./Avatar";
import userEvent from "@testing-library/user-event";

describe("Avatar", () => {
  it("renders the image", async () => {
    render(
      <Avatar
        alt="some alt text"
        src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Michael_Jordan_in_2014.jpg"
      />
    );

    expect(await screen.findByRole("img")).toBeInTheDocument();
  });

  it("renders the alt text", async () => {
    const alt = "some alt text";
    render(
      <Avatar
        alt={alt}
        src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Michael_Jordan_in_2014.jpg"
      />
    );

    expect(await screen.findByRole("img")).toHaveAttribute("alt", alt);
  });

  it("renders as a button", async () => {
    const alt = "some alt text";
    render(
      <Avatar
        alt={alt}
        onClick={jest.fn()}
        src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Michael_Jordan_in_2014.jpg"
      />
    );

    expect(await screen.findByRole("button")).toBeInTheDocument();
  });

  it("calls the onClick handler", async () => {
    const onClick = jest.fn();
    const alt = "some alt text";
    render(
      <Avatar
        alt={alt}
        onClick={onClick}
        src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Michael_Jordan_in_2014.jpg"
      />
    );

    await userEvent.click(await screen.findByRole("button"));
    expect(onClick).toHaveBeenCalled;
  });
});
