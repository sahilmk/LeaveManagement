import { ComponentMeta, ComponentStory } from '@storybook/react'
import Input from "./Input.component"

export default {
    title: 'Input',
    component: Input
} as ComponentMeta<typeof Input>;

const Tamplate: ComponentStory<typeof Input> = args => <Input {...args} />

export const Primary = Tamplate.bind({});

Primary.args = {
    type: 'email',
    placeholder: 'Enter Email',
    padding: '0px 0px 0px 40px',
    inputtype: 'authinput',
    width: 450
}