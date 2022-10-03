import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PDFEmbed } from './index';

export default {
  component: PDFEmbed,
  title: 'PDFEmbed',
} as ComponentMeta<typeof PDFEmbed>;

const Template: ComponentStory<typeof PDFEmbed> = (args) => (
  <PDFEmbed {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  File: '',
};
