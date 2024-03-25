import { render, screen } from "@testing-library/react";
import { AlertBanner } from "./AlertBanner";
import { Text } from "../Typography/Text";

describe("Banner", () => {
  it("renders the banner", async () => {
    render(
      <AlertBanner variant="success">
        <Text variant="small" color="primary">
          The message
        </Text>
      </AlertBanner>
    );

    expect(await screen.findByRole("alert")).toBeInTheDocument();
    expect(await screen.findByText("The message")).toBeInTheDocument();
  });
  it("renders the banner with icon", async () => {
    render(
      <AlertBanner variant="success" showIcon>
        <Text variant="small" color="primary">
          The message
        </Text>
      </AlertBanner>
    );

    expect(await screen.findByRole("alert")).toBeInTheDocument();
    expect(await screen.findByText("The message")).toBeInTheDocument();
    expect(await screen.findByTestId("alert-icon")).toBeInTheDocument();
  });
});
