import { screen, render } from "@testing-library/react";
import { Text } from "./Text";
import type { TypographyAs } from "./TextProps";

describe("Text", () => {
  const text = "This is some text";
  it("renders the text", async () => {
    render(<Text variant="base">{text}</Text>);

    expect(await screen.findByText(text)).toBeInTheDocument();
  });

  it("wraps it in the appropriate HTML element", async () => {
    const tags: TypographyAs[] = ["div", "span", "p", "label"];

    tags.forEach(async (tag: TypographyAs) => {
      render(
        <Text variant="base" as={tag}>
          {text}
        </Text>
      );

      const element = await screen.findByText(text);
      expect(element.tagName.toLowerCase()).toEqual(tag);
    });
  });
});
