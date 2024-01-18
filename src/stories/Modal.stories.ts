import type { Meta, StoryObj } from "@storybook/react";

import { Modal } from "./Modal";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Modal",
  component: Modal,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "padded",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const CommonModal: Story = {
  args: {
    type: "default",
    title: "신규 뉴스레터",
    desc: `
    전송자: 한국일보
    수신허용 일자: 2024년 1월 18일
    처리내용: 수신 허용 처리완료
  
    언제든지 [설정 > 이벤트 및 프로모션 수신 동의]에서 설정변경 가능합니다.
    `,
  },
};

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
