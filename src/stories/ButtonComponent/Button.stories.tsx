import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button.component";
import { Theme } from "../../Theme";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

export const LoginPrimary = Template.bind({});
LoginPrimary.args = {
  label: "Next",
  bgColor: Theme.colors.darkslategrayColor,
  color: Theme.colors.weldonBlueColor,
  size: "26px",
  border: `solid 2px ${Theme.colors.darkslategrayColor}`,
  borderRadius: true,
};

export const LoginSecondary = Template.bind({});
LoginSecondary.args = {
  label: "Back",
  bgColor: Theme.colors.yankeesBlueColor,
  color: Theme.colors.weldonBlueColor,
  size: "26px",
  border: `solid 2px ${Theme.colors.darkslategrayColor}`,
  borderRadius: true,
};

export const inAppPrimary = Template.bind({});
inAppPrimary.args = {
  label: "Update Profile",
  bgColor: Theme.colors.yankeesBlueColor,
  color: Theme.colors.whiteColor,
  size: "20px",
  border: "",
  borderRadius: false,
};

export const inAppSecondary = Template.bind({});
inAppSecondary.args = {
  label: "Cancel",
  bgColor: Theme.colors.lotionColor,
  color: Theme.colors.yankeesBlueColor,
  size: "20px",
  border: `solid 2px ${Theme.colors.brightGrayColor}`,
  borderRadius: false,
};
