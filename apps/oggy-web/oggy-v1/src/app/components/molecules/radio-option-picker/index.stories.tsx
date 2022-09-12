import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RadioOptionPicker } from './index';

export default {
  component: RadioOptionPicker,
  title: 'RadioOptionPicker',
  argTypes: {
    ChangeSelectedOption: { action: 'ChangeSelectedOption executed!' },
  },
} as ComponentMeta<typeof RadioOptionPicker>;

const Template: ComponentStory<typeof RadioOptionPicker> = (args) => (
  <RadioOptionPicker {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  Active: 0,
};
