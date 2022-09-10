import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Chain } from './index';

export default {
  component: Chain,
  title: 'Chain',
} as ComponentMeta<typeof Chain>;

const Template: ComponentStory<typeof Chain> = (args) => <Chain {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  Heading: '',
};
