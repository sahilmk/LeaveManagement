import { ComponentMeta, ComponentStory } from "@storybook/react";
import NavbarComponent from "./Navbar.component";

export default {
  title: "Navbar",
  component: NavbarComponent,
  argTypes: {},
} as ComponentMeta<typeof NavbarComponent>;

const Template: ComponentStory<typeof NavbarComponent> = (args) => {
  return <NavbarComponent />;
};

export const PrimaryNavbar = Template.bind({});
PrimaryNavbar.args = {
  userName: "John Doe",
};
