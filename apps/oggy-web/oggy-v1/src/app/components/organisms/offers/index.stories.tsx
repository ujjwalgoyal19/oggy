import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Offers } from './index';

export default {
  component: Offers,
  title: 'Offers',
} as ComponentMeta<typeof Offers>;

const Template: ComponentStory<typeof Offers> = (args) => <Offers {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
