/**
 * All design system components should be treated as core to the aqua site and exported from here.
 */
import { AlertBanner } from "../components/alertBanner";
import { Button, CloseButton, IconButton } from "../components/button";
import { Checkbox, CheckboxGroup } from "../components/checkbox";
import { Dropdown } from "../components/dropdown";
import { Modal } from "../components/modal";
import { NumberInput, NumberInputButton } from "../components/numberInput";
import { Radio, RadioGroup } from "../components/radio";
import { SegmentController } from "../components/segmentController";
import { Switch } from "../components/switch";
import { Tabs } from "../components/tabs";
import { TextInput, TextInputLight } from "../components/textInput";
import { Header, Text } from "../components/typography";
import { BLUR } from "./blur";
import { BREAKPOINTS } from "./breakpoints";
import colors from "./colors";
import { FONTS } from "./fonts";
import { RADII } from "./radii";
import { SHADOWS } from "./shadows";
import { SPACING } from "./spacing";

const base = {
  components: {
    ButtonV2: Button,
    Header,
    TextV2: Text,
    IconButton,
    CloseButton,
    Switch,
    CheckboxV2: Checkbox,
    CheckboxGroup,
    TextInput,
    TextInputLight,
    Dropdown,
    Tabs,
    SegmentController,
    Modal,
    AlertBanner,
    RadioV2: Radio,
    RadioGroup,
    NumberInputV2: NumberInput,
    NumberInputButton,
    Drawer: {
      variants: {
        clickThrough: {
          overlay: {
            pointerEvents: "none",
            background: "transparent",
          },
          dialogContainer: {
            pointerEvents: "none",
            background: "transparent",
          },
          dialog: {
            pointerEvents: "auto",
          },
        },
      },
    },
  },
  breakpoints: BREAKPOINTS,
  space: SPACING,
  radii: RADII,
  shadows: SHADOWS,
  blur: BLUR,
  fonts: FONTS,
  colors,
};

export default base;
