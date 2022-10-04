import { ComponentMeta, ComponentStory } from '@storybook/react'
import PageTitle from "./PageTitle.component";

export default {
    title: 'Page Title',
    component: PageTitle
} as ComponentMeta<typeof PageTitle>;

const Tamplate: ComponentStory<typeof PageTitle> = args => <PageTitle {...args} />

export const LeavePageTitle = Tamplate.bind({});
LeavePageTitle.args = {
    logindate: '23rd july 2022',
    pagename: 'Leaves',
    innerPageName: 'Leave Request',
    isinnerPage: true,
    isButton: false
}