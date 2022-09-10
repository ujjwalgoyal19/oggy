import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Link } from './index';

export default {
  component: Link,
  title: 'Link',
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
