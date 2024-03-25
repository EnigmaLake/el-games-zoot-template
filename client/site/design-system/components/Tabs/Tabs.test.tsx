import { screen, render } from "@testing-library/react";
import { Tabs } from "./Tabs";
import { Check1 } from "../../icons/library/Check1";
import { Size } from "../../types/shared";

describe("Tabs", () => {
  it("renders the tabs correctly", async () => {
    const props = {
      isFitted: true,
      tabs: ["Tab 1", { text: "Tab 2" }, { text: "Tab 3", icon: <Check1 /> }],
      panels: [
        "Tab 1 contents",
        "Tab 2 contents",
        <div key="eslint-hooray">
          <h1>Tab 3</h1>
        </div>,
      ],
      width: "full",
      size: "md" as Size,
      defaultTabIndex: 0,
    };
    render(<Tabs {...props} />);

    // Tab 1 is not an icon tab
    expect(await screen.findByTestId("tabs-tab-0")).toBeInTheDocument();
    expect(screen.queryByTestId("tabs-icon-tab-0")).toBeNull();

    // Tab 3 is an icon tab
    expect(await screen.findByTestId("tabs-icon-tab-2")).toBeInTheDocument();
    expect(screen.queryByTestId("tabs-tab-2")).toBeNull();
  });
});
