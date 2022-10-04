import { ComponentMeta, ComponentStory } from "@storybook/react";

import TableComponent from "./Table.component";

export default {
  title: "Table",
  component: TableComponent,
} as ComponentMeta<typeof TableComponent>;

const Template: ComponentStory<typeof TableComponent> = (args) => {
  return <TableComponent {...args} />;
};

export const ApprovedLeaves = Template.bind({});
ApprovedLeaves.args = {
  tableHeader: ["Type", "Reason", "Date", "Applied On", "Action"],
  tableData: [
    {
      type: "Paid",
      reason: "Seek Leave",
      date: "12/01/2018 to 14/01/2018",
      appliedOn: "25/12/2017",
    },
    {
      type: "Paid",
      reason: "Seek Leave",
      date: "10/01/2018",
      appliedOn: "25/12/2017",
    },
  ],
  viewAction: true,
  removeAction: true,
};

export const RejectedLeaves = Template.bind({});
RejectedLeaves.args = {
  tableHeader: ["Type", "Reason", "Date", "Applied On", "Action"],
  tableData: [
    {
      type: "Paid",
      reason: "Seek Leave",
      date: "10/01/2018",
      appliedOn: "25/12/2017",
    },
    {
      type: "UnPaid",
      reason: "Seek Leave",
      date: "10/01/2018",
      appliedOn: "25/12/2017",
    },
  ],
  viewAction: true,
  removeAction: false,
};

export const CancelledLeaves = Template.bind({});
CancelledLeaves.args = {
  tableHeader: ["Type", "Reason", "Date", "Applied On", "Action"],
  tableData: [
    {
      type: "Paid",
      reason: "Seek Leave",
      date: "10/01/2018",
      appliedOn: "25/12/2017",
    },
    {
      type: "UnPaid",
      reason: "Seek Leave",
      date: "10/01/2018",
      appliedOn: "25/12/2017",
    },
  ],
  viewAction: true,
  removeAction: false,
};

export const ManageLeaveRequestLeave = Template.bind({});
ManageLeaveRequestLeave.args = {
  tableHeader: ["Name", "Department", "Date", "Reason", "Action"],
  tableData: [
    {
      name: "John Doe",
      department: "Designing",
      date: "12/12/2017",
      reason: "Seek Leave",
    },
    {
      name: "Darvin Lynn",
      department: "Designing",
      date: "12/12/2017",
      reason: "Seek Leave",
    },
  ],
  viewAction: true,
};

export const PendingLeaves = Template.bind({});
PendingLeaves.args = {
  tableHeader: ["Type", "Reason", "Date", "Applied On", "Action"],
  tableData: [
    {
      type: "Paid",
      reason: "Seek Leave",
      date: "10/01/2018",
      appliedOn: "25/12/2017",
    },
    {
      type: "UnPaid",
      reason: "Seek Leave",
      date: "10/01/2018",
      appliedOn: "25/12/2017",
    },
  ],
  viewAction: true,
  removeAction: true,
};
