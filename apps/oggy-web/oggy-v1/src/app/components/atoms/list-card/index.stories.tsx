import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListCard } from './index';

export default {
  component: ListCard,
  title: 'ListCard',
} as ComponentMeta<typeof ListCard>;

const Template: ComponentStory<typeof ListCard> = (args) => (
  <ListCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  text: '',
  subtext: '',
  url: '',
  padding: '',
  width: '',
};
