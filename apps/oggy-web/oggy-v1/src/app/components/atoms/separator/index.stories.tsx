import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Separator } from './index';

export default {
  component: Separator,
  title: 'Separator',
} as ComponentMeta<typeof Separator>;

const Template: ComponentStory<typeof Separator> = (args) => (
  <Separator {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  Vertical: false,
  Horizontal: false,
  Color: '',
  ColorType: '',
};
