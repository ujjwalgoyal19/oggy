import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Locality } from './index';

export default {
  component: Locality,
  title: 'Locality',
} as ComponentMeta<typeof Locality>;

const Template: ComponentStory<typeof Locality> = (args) => (
  <Locality {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
