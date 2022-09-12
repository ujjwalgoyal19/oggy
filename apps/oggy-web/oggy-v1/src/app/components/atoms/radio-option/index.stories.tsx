import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RadioOption } from './index';

export default {
  component: RadioOption,
  title: 'RadioOption',
} as ComponentMeta<typeof RadioOption>;

const Template: ComponentStory<typeof RadioOption> = (args) => (
  <RadioOption {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
