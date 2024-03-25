import { screen, render } from "@testing-library/react";
import { ProgressBar } from "./ProgressBar";

describe("ProgressBar", () => {
  it("renders the progress bar", async () => {
    render(<ProgressBar progress={10} />);

    expect(await screen.findByRole("progressbar")).toBeInTheDocument();
  });
});
