import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Home } from './index';

export default {
  component: Home,
  title: 'Home',
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
