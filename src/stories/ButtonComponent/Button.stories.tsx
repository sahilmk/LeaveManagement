import { ComponentMeta, ComponentStory } from "@storybook/react";
import ButtonComponent from "./Button.component";

export default {
  title: "Button",
  component: ButtonComponent,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof ButtonComponent>;

const Template: ComponentStory<typeof ButtonComponent> = (args) => (
  <ButtonComponent {...args} />
);

export const LoginPrimary = Template.bind({});
LoginPrimary.args = {
  label: "Next",
  bgColor: "#284960",
  color: "#7a99af",
  size: "26px",
  border: "solid 2px #284960",
  borderRadius: true,
};

export const LoginSecondary = Template.bind({});
LoginSecondary.args = {
  label: "Back",
  bgColor: "#173346",
  color: "#7a99af",
  size: "26px",
  border: "solid 2px #284960",
  borderRadius: true,
};

export const inAppPrimary = Template.bind({});
inAppPrimary.args = {
  label: "Update Profile",
  bgColor: "#173346",
  color: "#fff",
  size: "20px",
  border: "",
  borderRadius: false,
};

export const inAppSecondary = Template.bind({});
inAppSecondary.args = {
  label: "Cancel",
  bgColor: "#fafafa",
  color: "#173346",
  size: "20px",
  border: "solid 2px #ebebeb",
  borderRadius: false,
};
