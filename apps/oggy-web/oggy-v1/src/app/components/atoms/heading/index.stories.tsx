import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Heading } from './index';

export default {
  component: Heading,
  title: 'Heading',
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  Engraved: false,
  Embossed: false,
  HeadingSize: '',
  HeadingWeight: '',
  HeadingColor: '',
  MarginLeft: '',
  MarginRight: '',
  MarginTop: '',
  MarginBottom: '',
  TextAlign: '',
};
