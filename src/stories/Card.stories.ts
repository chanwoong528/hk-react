import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./Card";
import {
  NEWSLETTER_LIST,
  NEWSLETTER_STATUS,
} from "../pages/newsletter/NEWSLETTERCODE";

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
    ...NEWSLETTER_LIST[0],
  },
};

export const NewsLetterCardFinished: Story = {
  args: {
    ...NEWSLETTER_LIST.find(
      (item) => item.listType === NEWSLETTER_STATUS.FINISHED
    ),
    status: NEWSLETTER_STATUS.FINISHED,
  },
};
export const NewsLetterCardSubscribed: Story = {
  args: {
    ...NEWSLETTER_LIST.find(
      (item) => item.listType === NEWSLETTER_STATUS.FINISHED
    ),
    status: NEWSLETTER_STATUS.SUBSCRIBED,
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
