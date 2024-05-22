/* eslint-disable import/no-extraneous-dependencies -- disable */

import type { Meta, StoryObj } from '@storybook/react';

import { BaseLoader } from '../src/base-loader';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof BaseLoader> = {
  title: 'base components/BaseLoader',
  component: BaseLoader,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
    docs: {
      subtitle: '组件级加载动画组件',
      description: {
        component: '支持自定义文字提示内容，自定义大小等配置。',
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    spinning: { control: 'boolean' },
    tip: { control: 'text' },
    size: { control: 'select', options: ['small', 'default', 'large'] },
    center: { control: 'boolean' },
    mask: { control: 'boolean' },
    vertical: { control: 'boolean' },
    spinProps: { control: 'object' },
    className: { control: 'text' },
  },
  args: {
    tip: '加载中...',
    size: 'default',
  },
  decorators: [
    (Story) => (
      <div className="em-relative em-min-h-10 em-min-w-20 em-w-full">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Center: Story = {
  name: '加载动画居中',
  args: {
    center: true,
    vertical: false,
  },
  parameters: {
    docs: {
      description: {
        story: '加载动画居中',
      },
    },
  },
  render: (args) => {
    return (
      <div className="em-h-48">
        <BaseLoader {...args} />
      </div>
    );
  },
};

export const Vertical: Story = {
  name: '文字提示在垂直方向',
  args: {
    vertical: true,
  },
};

export const CustomTipText: Story = {
  name: '自定义文字提示内容',
  args: {
    tip: '努力加载中，请稍等...',
  },
};

export const Mask: Story = {
  name: '显示遮罩',
  args: {
    center: true,
    mask: true,
  },
  decorators: [
    (Story) => (
      <div className="em-bg-slate-700 em-p-5 relative">
        <div className="em-relative em-min-h-20 em-min-w-20 em-w-full ">
          <Story />
        </div>
      </div>
    ),
  ],
};

export const LargeSize: Story = {
  args: {
    size: 'large',
  },
};

export const DefaultSize: Story = {
  args: {
    size: 'default',
  },
};

export const SmallSize: Story = {
  args: {
    size: 'small',
  },
};
