import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Page404 } from './index';

export default {
  component: Page404,
  title: 'Page404',
} as ComponentMeta<typeof Page404>;

const Template: ComponentStory<typeof Page404> = (args) => (
  <Page404 {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
