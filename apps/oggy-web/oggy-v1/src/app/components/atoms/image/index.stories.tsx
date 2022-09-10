import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Image } from './index';

export default {
  component: Image,
  title: 'Image',
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
