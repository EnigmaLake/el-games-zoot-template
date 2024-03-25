import { screen, render } from "@testing-library/react";
import { Divider } from "./Divider";

describe("Divider", () => {
  it("renders the component", async () => {
    render(<Divider data-testid="divider" />);

    expect(screen.getByTestId("divider")).toBeInTheDocument();
  });
});
