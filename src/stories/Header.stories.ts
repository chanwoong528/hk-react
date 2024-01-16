import type { Meta, StoryObj } from "@storybook/react";

import { Header } from "./Header";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Header",
  component: Header,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "padded",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const NewsLetterHeader: Story = {
  args: { type: "newsletter", title: "신규 뉴스레터" },
};
export const NewsLetterHeaderFinished: Story = {
  args: { type: "newsletter finished", title: "종료된 뉴스레터" },
};

// export const Secondary: Story = {
//   args: {
//     label: "Card",
//   },
// };

// export const Large: Story = {
//   args: {
//     size: "Card",
//     label: "Card",
//   },
// };

// export const Small: Story = {
//   args: {
//     size: "small",
//     label: "Button",
//   },
// };
