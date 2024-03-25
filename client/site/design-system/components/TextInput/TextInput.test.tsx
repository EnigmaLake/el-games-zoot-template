import { screen, render } from "@testing-library/react";
import { TextInput } from "./TextInput";
import { Search } from "../../icons/library/Search";
import userEvent from "@testing-library/user-event";

describe("TextInput", () => {
  it("renders the component", async () => {
    render(<TextInput />);

    expect(await screen.findByRole("textbox")).toBeInTheDocument();
  });

  it("renders the placeholder", async () => {
    const placeholder = "Basic placeholder";
    render(<TextInput placeholder={placeholder} />);

    expect(await screen.findByRole("textbox")).toHaveAttribute(
      "placeholder",
      placeholder
    );
  });

  it("calls the onChange handler with the appropriate value", async () => {
    const onChange = jest.fn();
    render(<TextInput onChange={onChange} />);

    const inputEl = await screen.findByRole("textbox");
    await userEvent.type(inputEl, "hi");
    expect(onChange).toBeCalledWith("hi");
  });

  it("renders the value", async () => {
    const value = "some entered text";
    render(<TextInput value={value} onChange={jest.fn} />);

    expect(await screen.findByRole("textbox")).toHaveAttribute("value", value);
  });

  it("renders correctly in disabled state", async () => {
    render(<TextInput disabled />);

    expect(await screen.findByRole("textbox")).toHaveAttribute("disabled");
  });

  it("renders the caption", async () => {
    const caption = "caption";
    render(<TextInput caption={caption} />);

    expect(await screen.findByText(caption)).toBeInTheDocument();
  });

  it("renders the error and error icon", async () => {
    const error = "error";
    render(<TextInput error={error} />);

    expect(await screen.findByText(error)).toBeInTheDocument();
    expect(await screen.findByTestId("error-icon")).toBeInTheDocument();
  });

  it("renders the note", async () => {
    const note = "note";
    render(<TextInput note={note} />);

    expect(await screen.findByText(note)).toBeInTheDocument();
  });

  it("renders the label", async () => {
    const label = "label";
    render(<TextInput caption={label} />);

    expect(await screen.findByText(label)).toBeInTheDocument();
  });

  it("renders the left icon", async () => {
    render(<TextInput leftIcon={<Search />} />);

    expect(
      await screen.findByTestId("text-input-left-icon")
    ).toBeInTheDocument();
  });
});
