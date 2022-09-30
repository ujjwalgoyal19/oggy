import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LocalitySuggestions } from './index';

export default {
  component: LocalitySuggestions,
  title: 'LocalitySuggestions',
  argTypes: {
    ChangeHandler: { action: 'ChangeHandler executed!' },
  },
} as ComponentMeta<typeof LocalitySuggestions>;

const Template: ComponentStory<typeof LocalitySuggestions> = (args) => (
  <LocalitySuggestions {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
