import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LinkHoverImage } from './index';

export default {
  component: LinkHoverImage,
  title: 'LinkHoverImage',
  argTypes: {
    hoverHandler: { action: 'hoverHandler executed!' },
  },
} as ComponentMeta<typeof LinkHoverImage>;

const Template: ComponentStory<typeof LinkHoverImage> = (args) => (
  <LinkHoverImage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  text: '',
  image: '',
  subtext: '',
  url: '',
  hoverState: false,
  margin: '',
};
