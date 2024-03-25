import type { Meta, StoryFn } from "@storybook/react";
import { Modal } from "./Modal";
import type { ModalProps } from "./ModalProps";
import React from "react";
import { Flex } from "@chakra-ui/react";

const oneButtonFooter: ModalProps["footerButtons"] = [
  {
    variant: "primary",
    label: "Ok",
    onClick: () => {},
  },
];

const twoButtonsFooter: ModalProps["footerButtons"] = [
  {
    variant: "primary",
    label: "Ok",
    onClick: () => {},
  },
  {
    variant: "tertiary",
    label: "Cancel",
    onClick: () => {},
  },
];

const threeButtonsFooter: ModalProps["footerButtons"] = [
  {
    variant: "primary",
    label: "Ok",
    onClick: () => {},
  },
  {
    variant: "secondary",
    label: "Disabled",
    onClick: () => {},
    disabled: true,
  },
  {
    variant: "tertiary",
    label: "Cancel",
    onClick: () => {},
  },
];

export default {
  title: "Design System/Modal",
  component: Modal,
  parameters: {
    docs: {
      page: () => <></>, // Disabled because it breaks the Docs.
    },
  },
  argTypes: {
    onGoBack: {
      control: {
        type: "radio",
      },
      options: ["Show", "Hide"],
      mapping: {
        Show: () => {
          //
        },
        Hide: undefined,
      },
    },
    footerButtons: {
      control: {
        type: "radio",
      },
      options: ["OneButton", "TwoButtons", "ThreeButtons"],
      mapping: {
        OneButton: oneButtonFooter,
        TwoButtons: twoButtonsFooter,
        ThreeButtons: threeButtonsFooter,
      },
    },
  },
} as Meta<typeof Modal>;

const Template: StoryFn<ModalProps> = (args: ModalProps) => {
  return <Modal {...args}>Modal content!</Modal>;
};

const LongTemplate: StoryFn<ModalProps> = (args: ModalProps) => {
  return (
    <Modal {...args}>
      <Flex
        bg="#CCC"
        flexGrow={1}
        h="500px"
        color="black"
        justify="center"
        align="center"
      >
        Big box
      </Flex>
    </Modal>
  );
};

const defaultProps = {
  isOpen: true,
  modalPositioning: "minimum-margin",
  footerButtons: "OneButton",
  footerButtonsDirection: "horizontal",
  size: "md",
  onGoBack: "Hide",
} as Meta<typeof Modal>;

export const Playground = Template.bind({});
Playground.args = defaultProps;

export const WithHeader = Template.bind({});
WithHeader.args = {
  ...defaultProps,
  header: "This the header",
  closable: true,
  onGoBack: "Show",
} as Meta<typeof Modal>;

export const WithOneButtonFooter = Template.bind({});
WithOneButtonFooter.args = {
  ...defaultProps,
  footerButtons: "OneButton",
} as Meta<typeof Modal>;

export const WithTwoButtonsFooter = Template.bind({});
WithTwoButtonsFooter.args = {
  ...defaultProps,
  footerButtons: "TwoButtons",
} as Meta<typeof Modal>;

export const WithVerticalFooter = Template.bind({});
WithVerticalFooter.args = {
  ...defaultProps,
  footerButtons: "TwoButtons",
  footerButtonsDirection: "vertical",
} as Meta<typeof Modal>;

export const WithScroll = LongTemplate.bind({});
WithScroll.args = {
  ...defaultProps,
  header: "This the header",
  footerButtons: "TwoButtons",
  onGoBack: "Show",
} as Meta<typeof Modal>;

export const WithScrollableFooter = LongTemplate.bind({});
WithScrollableFooter.args = {
  ...defaultProps,
  header: "This the header",
  scrollFooter: true,
  footerButtons: "ThreeButtons",
  onGoBack: "Show",
} as Meta<typeof Modal>;
