import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ImageGallery } from './index';

export default {
  component: ImageGallery,
  title: 'ImageGallery',
} as ComponentMeta<typeof ImageGallery>;

const Template: ComponentStory<typeof ImageGallery> = (args) => (
  <ImageGallery {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
