import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Review } from './index';

export default {
  component: Review,
  title: 'Review',
} as ComponentMeta<typeof Review>;

const Template: ComponentStory<typeof Review> = (args) => <Review {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
