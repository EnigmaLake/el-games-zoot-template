import { render, screen } from "@testing-library/react";
import { Pagination } from "./Pagination";

describe("Pagination", () => {
  it("renders the component", async () => {
    render(
      <Pagination
        page={2}
        pageCount={10}
        isLoading={false}
        onPageChange={() => {
          // no-op
        }}
      />
    );

    expect(screen.getByText("Page")).toBeInTheDocument();
    expect(screen.getByDisplayValue("2")).toBeInTheDocument();
    expect(screen.getByText("of 10")).toBeInTheDocument();
    expect(screen.getByTestId("beginning")).toBeEnabled();
    expect(screen.getByTestId("previous")).toBeEnabled();
    expect(screen.getByTestId("next")).toBeEnabled();
    expect(screen.getByTestId("end")).toBeEnabled();
  });
  it("buttons should be disabled", async () => {
    render(
      <Pagination
        page={1}
        pageCount={1}
        isLoading={false}
        onPageChange={() => {
          // no-op
        }}
      />
    );

    expect(screen.getByTestId("page")).toBeEnabled();
    expect(screen.getByTestId("beginning")).toBeDisabled();
    expect(screen.getByTestId("previous")).toBeDisabled();
    expect(screen.getByTestId("next")).toBeDisabled();
    expect(screen.getByTestId("end")).toBeDisabled();
  });
  it("buttons should be disabled when loading", async () => {
    render(
      <Pagination
        page={3}
        pageCount={10}
        isLoading={true}
        onPageChange={() => {
          // no-op
        }}
      />
    );

    expect(screen.getByTestId("page")).toBeDisabled();
    expect(screen.getByTestId("beginning")).toBeDisabled();
    expect(screen.getByTestId("previous")).toBeDisabled();
    expect(screen.getByTestId("next")).toBeDisabled();
    expect(screen.getByTestId("end")).toBeDisabled();
  });
});
