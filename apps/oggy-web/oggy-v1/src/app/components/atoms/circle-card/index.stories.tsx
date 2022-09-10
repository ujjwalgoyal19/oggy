import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CircleCard } from './index';

export default {
  component: CircleCard,
  title: 'CircleCard',
} as ComponentMeta<typeof CircleCard>;

const Template: ComponentStory<typeof CircleCard> = (args) => (
  <CircleCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  size: '',
  text: '',
  link: '',
};
