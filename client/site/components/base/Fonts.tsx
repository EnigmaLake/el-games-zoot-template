import { Global } from "@emotion/react";
import { FC } from "react";

const Fonts: FC = () => (
  <Global
    styles={`
      @font-face {
        font-family: "Inter";
        src: url("/fonts/Inter/Inter-Thin.ttf");
        font-style: normal;
        font-weight: 100;
        font-display: swap;
      }
      @font-face {
        font-family: "Inter";
        src: url("/fonts/Inter/Inter-ExtraLight.ttf");
        font-style: normal;
        font-weight: 200;
        font-display: swap;
      }
      @font-face {
        font-family: "Inter";
        src: url("/fonts/Inter/Inter-Light.ttf");
        font-style: normal;
        font-weight: 300;
        font-display: swap;
      }
      @font-face {
        font-family: "Inter";
        src: url("/fonts/Inter/Inter-Regular.ttf");
        font-style: normal;
        font-weight: 400;
        font-display: swap;
      }
      @font-face {
        font-family: "Inter";
        src: url("/fonts/Inter/Inter-Medium.ttf");
        font-style: normal;
        font-weight: 500;
        font-display: swap;
      }
      @font-face {
        font-family: "Inter";
        src: url("/fonts/Inter/Inter-SemiBold.ttf");
        font-style: normal;
        font-weight: 600;
        font-display: swap;
      }
      @font-face {
        font-family: "Inter";
        src: url("/fonts/Inter/Inter-Bold.ttf");
        font-style: normal;
        font-weight: 700;
        font-display: swap;
      }
      @font-face {
        font-family: "Inter";
        src: url("/fonts/Inter/Inter-ExtraBold.ttf");
        font-style: normal;
        font-weight: 800;
        font-display: swap;
      }
      @font-face {
        font-family: "Inter";
        src: url("/fonts/Inter/Inter-Black.ttf");
        font-style: normal;
        font-weight: 900;
        font-display: swap;
      }
      @font-face {
        font-family: "Roboto Mono";
        src: url("/fonts/Roboto_Mono/RobotoMono_Bold.ttf");
        font-style: normal;
        font-weight: 700;
        font-display: swap;
      }
    `}
  />
);

export default Fonts;
