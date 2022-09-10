import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Gallery } from './index';

export default {
  component: Gallery,
  title: 'Gallery',
} as ComponentMeta<typeof Gallery>;

const Template: ComponentStory<typeof Gallery> = (args) => (
  <Gallery {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
