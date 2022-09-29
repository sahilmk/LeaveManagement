import { ComponentMeta, ComponentStory } from '@storybook/react'
import Sidebar from "./Sidebar.component"

export default {
    label: 'Sidebar',
    component: Sidebar
} as ComponentMeta<typeof Sidebar>

const Tamplate: ComponentStory<typeof Sidebar> = args => <Sidebar {...args} />

export const SidebarComponent = Tamplate.bind({});
SidebarComponent.args = {
    user: 'sahil kanjariya',
    position: 'Devloper'
}