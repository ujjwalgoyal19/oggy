import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Slider } from './index';

export default {
  component: Slider,
  title: 'Slider',
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  childSize: 0,
};
