import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LoginRegistrationPage } from './index';

export default {
  component: LoginRegistrationPage,
  title: 'LoginRegistrationPage',
} as ComponentMeta<typeof LoginRegistrationPage>;

const Template: ComponentStory<typeof LoginRegistrationPage> = (args) => (
  <LoginRegistrationPage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
