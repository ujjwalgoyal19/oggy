import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Overview } from './index';

export default {
  component: Overview,
  title: 'Overview',
} as ComponentMeta<typeof Overview>;

const Template: ComponentStory<typeof Overview> = (args) => (
  <Overview {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
