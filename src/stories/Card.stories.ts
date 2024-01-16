import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./Card";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Card",
  component: Card,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const NewsLetterCard: Story = {
  args: {
    type: "newsletter",
    title: "슬기로운 유럽생활",
    day: "월요일",
    desc: "놓치면 손해인 유럽 뉴스와 <br/> ‘힙’한 이야기 몽땅 챙겨 전합니다.",
  },
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
