import { ComponentMeta, ComponentStory } from "@storybook/react";
import DataTable from "./Table.component";

export default {
  title: "MuiTable",
  component: DataTable,
} as ComponentMeta<typeof DataTable>;

const Template: ComponentStory<typeof DataTable> = (args) => {
  return <DataTable {...args} />;
};

export const ApprovedLeaves = Template.bind({});
ApprovedLeaves.args = {
  columns: [
    { field: "type", headerName: "Type", flex: 1 },
    { field: "reason", headerName: "Reason", flex: 1 },
    { field: "date", headerName: "Date", flex: 1 },
    { field: "appliedOn", headerName: "Applied On", flex: 1 },
    {
      field: "actions",
      headerName: "Action",
      sortable: false,
      renderCell: (params) => {
        return (
          <div>
            <span
              onClick={() => {
                console.log("eye");
              }}
              style={{ cursor: "pointer" }}
            >
              E
            </span>
            <span
              onClick={() => {
                console.log("remove");
              }}
              style={{ cursor: "pointer" }}
            >
              R
            </span>
          </div>
        );
      },
      flex: 1,
    },
  ],

  rows: [
    {
      id: "1",
      type: "Paid",
      reason: "Seek Leave",
      date: "12/01/2018 to 14/01/2018",
      appliedOn: "25/12/2017",
    },
    {
      id: "2",
      type: "Paid",
      reason: "Seek Leave",
      date: "10/01/2018",
      appliedOn: "25/12/2017",
    },
  ],

  width: "100%",
  height: 500,
};

export const RejectedLeaves = Template.bind({});
RejectedLeaves.args = {
  columns: [
    { field: "type", headerName: "Type", flex: 1 },
    { field: "reason", headerName: "Reason", flex: 1 },
    { field: "date", headerName: "Date", flex: 1 },
    { field: "appliedOn", headerName: "Applied On", flex: 1 },
    {
      field: "actions",
      headerName: "Action",
      sortable: false,
      renderCell: (params) => {
        return (
          <div>
            <span
              onClick={() => {
                console.log("eye");
              }}
              style={{ cursor: "pointer" }}
            >
              E
            </span>
          </div>
        );
      },
      flex: 1,
    },
  ],

  rows: [
    {
      id: "1",
      type: "Paid",
      reason: "Seek Leave",
      date: "12/01/2018 to 14/01/2018",
      appliedOn: "25/12/2017",
    },
    {
      id: "2",
      type: "Paid",
      reason: "Seek Leave",
      date: "10/01/2018",
      appliedOn: "25/12/2017",
    },
  ],

  width: "100%",
  height: 500,
};

export const CancelledLeaves = Template.bind({});
CancelledLeaves.args = {
  columns: [
    { field: "type", headerName: "Type", flex: 1 },
    { field: "reason", headerName: "Reason", flex: 1 },
    { field: "date", headerName: "Date", flex: 1 },
    { field: "appliedOn", headerName: "Applied On", flex: 1 },
    {
      field: "actions",
      headerName: "Action",
      sortable: false,
      renderCell: (params) => {
        return (
          <div>
            <span
              onClick={() => {
                console.log("eye");
              }}
              style={{ cursor: "pointer" }}
            >
              E
            </span>
          </div>
        );
      },
      flex: 1,
    },
  ],

  rows: [
    {
      id: "1",
      type: "Paid",
      reason: "Seek Leave",
      date: "10/01/2018",
      appliedOn: "25/12/2017",
    },
    {
      id: "2",
      type: "UnPaid",
      reason: "Seek Leave",
      date: "10/01/2018",
      appliedOn: "25/12/2017",
    },
  ],
  width: "100%",
  height: 500,
};

export const ManageLeaveRequestLeave = Template.bind({});
ManageLeaveRequestLeave.args = {
  columns: [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "department", headerName: "Department", flex: 1 },
    { field: "date", headerName: "Date", flex: 1 },
    { field: "reason", headerName: "Reason", flex: 1 },
    {
      field: "actions",
      headerName: "Action",
      sortable: false,
      renderCell: (params) => {
        return (
          <div>
            <span
              onClick={() => {
                console.log("eye");
              }}
              style={{ cursor: "pointer" }}
            >
              E
            </span>
          </div>
        );
      },
      flex: 1,
    },
  ],

  rows: [
    {
      id: "1",
      name: "John Doe",
      department: "Designing",
      date: "12/12/2017",
      reason: "Seek Leave",
    },
    {
      id: "2",
      name: "Darvin Lynn",
      department: "Designing",
      date: "12/12/2017",
      reason: "Seek Leave",
    },
  ],

  width: "100%",
  height: 500,
};

export const PendingLeaves = Template.bind({});
PendingLeaves.args = {
  columns: [
    { field: "type", headerName: "Type", flex: 1 },
    { field: "reason", headerName: "Reason", flex: 1 },
    { field: "date", headerName: "Date", flex: 1 },
    { field: "appliedOn", headerName: "Applied On", flex: 1 },
    {
      field: "actions",
      headerName: "Action",
      sortable: false,
      renderCell: (params) => {
        return (
          <div>
            <span
              onClick={() => {
                console.log("eye");
              }}
              style={{ cursor: "pointer" }}
            >
              E
            </span>
            <span
              onClick={() => {
                console.log("remove");
              }}
              style={{ cursor: "pointer" }}
            >
              R
            </span>
          </div>
        );
      },
      flex: 1,
    },
  ],

  rows: [
    {
      id: "1",
      type: "Paid",
      reason: "Seek Leave",
      date: "12/01/2018 to 14/01/2018",
      appliedOn: "25/12/2017",
    },
    {
      id: "2",
      type: "UnPaid",
      reason: "Seek Leave",
      date: "10/01/2018",
      appliedOn: "25/12/2017",
    },
  ],

  width: "100%",
  height: 500,
};
