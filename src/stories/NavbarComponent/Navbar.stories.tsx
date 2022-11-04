import { ComponentMeta, ComponentStory } from "@storybook/react";
import Navbar from "./Navbar.component";

export default {
  title: "Navbar",
  component: Navbar,
  argTypes: {},
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => {
  return <Navbar />;
};

export const PrimaryNavbar = Template.bind({});
PrimaryNavbar.args = {
  user: "Pinak",
};
