import { screen, render } from "@testing-library/react";
import { Dropdown } from "./Dropdown";
import userEvent from "@testing-library/user-event";
import { Search } from "../../icons/library/Search";
import { DropdownOption } from "./DropdownOption";

describe("Dropdown", () => {
  it("renders the component", async () => {
    render(
      <Dropdown buttonText="Select an option">
        <DropdownOption value="1" key={1}>
          Menu Item 1
        </DropdownOption>
        <DropdownOption value="2" key={2}>
          Menu Item 2
        </DropdownOption>
      </Dropdown>
    );

    expect(await screen.findByRole("button")).toBeInTheDocument();
  });

  it("renders the dropdown options", async () => {
    render(
      <Dropdown buttonText="Select an option">
        <DropdownOption value="1" key={1}>
          Menu Item 1
        </DropdownOption>
        <DropdownOption value="2" key={2}>
          Menu Item 2
        </DropdownOption>
      </Dropdown>
    );

    await userEvent.click(await screen.findByRole("button"));

    expect(await screen.findByText("Menu Item 1")).toBeInTheDocument();
    expect(await screen.findByText("Menu Item 2")).toBeInTheDocument();
  });

  it("renders the placeholder if no option selected", async () => {
    const placeholder = "Basic placeholder";
    render(
      <Dropdown placeholder={placeholder} buttonText="Select an option">
        <DropdownOption value="1" key={1}>
          Menu Item 1
        </DropdownOption>
        <DropdownOption value="2" key={2}>
          Menu Item 2
        </DropdownOption>
      </Dropdown>
    );

    expect(await screen.findByText(placeholder)).toBeInTheDocument();
  });

  it("calls the onChange handler with the appropriate value", async () => {
    const onChange = jest.fn();
    render(
      <Dropdown onChange={onChange} buttonText="Select an option">
        <DropdownOption value="1" key={1}>
          Menu Item 1
        </DropdownOption>
        <DropdownOption value="2" key={2}>
          Menu Item 2
        </DropdownOption>
      </Dropdown>
    );

    await userEvent.click(await screen.findByRole("button"));
    const option = await screen.findByTestId("dropdown-option-1");
    screen.debug(option);
    await userEvent.click(option);
    expect(onChange).toBeCalledWith("1");
  });

  it("renders correctly in disabled state", async () => {
    render(
      <Dropdown disabled buttonText="Select an option">
        <DropdownOption value="1" key={1}>
          Menu Item 1
        </DropdownOption>
        <DropdownOption value="2" key={2}>
          Menu Item 2
        </DropdownOption>
      </Dropdown>
    );

    expect(await screen.findByRole("button")).toHaveAttribute("disabled");
  });

  it("renders the caption", async () => {
    const caption = "caption";
    render(
      <Dropdown caption={caption} buttonText="Select an option">
        <DropdownOption value="1" key={1}>
          Menu Item 1
        </DropdownOption>
        <DropdownOption value="2" key={2}>
          Menu Item 2
        </DropdownOption>
      </Dropdown>
    );

    expect(await screen.findByText(caption)).toBeInTheDocument();
  });

  it("renders the error and error icon", async () => {
    const error = "error";
    render(
      <Dropdown error={error} buttonText="Select an option">
        <DropdownOption value="1" key={1}>
          Menu Item 1
        </DropdownOption>
        <DropdownOption value="2" key={2}>
          Menu Item 2
        </DropdownOption>
      </Dropdown>
    );

    expect(await screen.findByText(error)).toBeInTheDocument();
    expect(await screen.findByTestId("error-icon")).toBeInTheDocument();
  });

  it("renders the note", async () => {
    const note = "note";
    render(
      <Dropdown note={note} buttonText="Select an option">
        <DropdownOption value="1" key={1}>
          Menu Item 1
        </DropdownOption>
        <DropdownOption value="2" key={2}>
          Menu Item 2
        </DropdownOption>
      </Dropdown>
    );

    expect(await screen.findByText(note)).toBeInTheDocument();
  });

  it("renders the label", async () => {
    const label = "label";
    render(
      <Dropdown label={label} buttonText="Select an option">
        <DropdownOption value="1" key={1}>
          Menu Item 1
        </DropdownOption>
        <DropdownOption value="2" key={2}>
          Menu Item 2
        </DropdownOption>
      </Dropdown>
    );

    expect(await screen.findByText(label)).toBeInTheDocument();
  });

  it("renders the left icon", async () => {
    render(
      <Dropdown leftIcon={<Search />} buttonText="Select an option">
        <DropdownOption value="1" key={1}>
          Menu Item 1
        </DropdownOption>
        <DropdownOption value="2" key={2}>
          Menu Item 2
        </DropdownOption>
      </Dropdown>
    );

    expect(
      await screen.findByTestId("text-input-left-icon")
    ).toBeInTheDocument();
  });
});
