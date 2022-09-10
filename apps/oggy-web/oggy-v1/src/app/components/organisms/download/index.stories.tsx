import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Download } from './index';

export default {
  component: Download,
  title: 'Download',
} as ComponentMeta<typeof Download>;

const Template: ComponentStory<typeof Download> = (args) => (
  <Download {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
