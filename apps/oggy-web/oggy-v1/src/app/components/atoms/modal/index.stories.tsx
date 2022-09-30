import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from './index';

export default {
  component: Modal,
  title: 'Modal',
  argTypes: {
    Close: { action: 'Close executed!' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  Backdrop: false,
  Open: false,
};
