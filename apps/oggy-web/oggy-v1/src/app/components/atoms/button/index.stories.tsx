import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './index';

export default {
  component: Button,
  title: 'Button',
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  CTA: false,
  Primary: false,
  Secondary: false,
  Text: false,
  Image: false,
  Ghost: false,
  Dropdown: false,
  Plus: false,
  Hamburger: false,
  Expendable: false,
};
