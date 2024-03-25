import type { Meta, StoryFn } from "@storybook/react";
import { Pagination } from "./Pagination";
import type { PaginationProps } from "./PaginationProps";
import React from "react";

export default {
  title: "Design System/Pagination",
  component: Pagination,
} as Meta<typeof Pagination>;

const Template: StoryFn<PaginationProps> = (args: PaginationProps) => {
  return <Pagination {...args} />;
};

const defaultProps = {
  page: 1,
  pageCount: 15,
  onPageChange: () => {},
  isLoading: false,
} as PaginationProps;

export const Playground = Template.bind({});
Playground.args = defaultProps;
