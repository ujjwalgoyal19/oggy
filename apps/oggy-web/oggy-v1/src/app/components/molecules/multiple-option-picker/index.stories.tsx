import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MultipleOptionPicker } from './index';

export default {
  component: MultipleOptionPicker,
  title: 'MultipleOptionPicker',
  argTypes: {
    HandleOnSelect: { action: 'HandleOnSelect executed!' },
  },
} as ComponentMeta<typeof MultipleOptionPicker>;

const Template: ComponentStory<typeof MultipleOptionPicker> = (args) => (
  <MultipleOptionPicker {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
