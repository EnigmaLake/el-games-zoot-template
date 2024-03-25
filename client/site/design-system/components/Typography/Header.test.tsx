import { screen, render } from "@testing-library/react";
import { Header } from "./Header";
import type { HeaderVariant } from "./HeaderProps";

describe("Header", () => {
  const text = "This is some text";
  it("renders the text", async () => {
    render(<Header>{text}</Header>);

    expect(await screen.findByText(text)).toBeInTheDocument();
  });

  it("wraps it in the appropriate HTML element", async () => {
    const tags: HeaderVariant[] = ["h1", "h2", "h3", "h4", "h5", "h6"];

    tags.forEach(async (tag: HeaderVariant) => {
      render(<Header variant={tag}>{text}</Header>);

      const element = await screen.findByText(text);
      expect(element.tagName.toLowerCase()).toEqual(tag);
    });
  });
});
