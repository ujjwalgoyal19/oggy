import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Photos } from './index';

export default {
  component: Photos,
  title: 'Photos',
} as ComponentMeta<typeof Photos>;

const Template: ComponentStory<typeof Photos> = (args) => <Photos {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
