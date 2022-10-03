import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from './index';

export default {
  component: Input,
  title: 'Input',
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  Key: 0,
  Id: '',
  Name: '',
  Value: '',
  Small: false,
  Medium: false,
  Large: false,
  Placeholder: '',
  Label: '',
  Active: false,
  Checkbox: false,
  Radio: false,
  Text: false,
  Password: false,
  Dropdown: false,
  DWidth: '',
  DHeight: '',
};
