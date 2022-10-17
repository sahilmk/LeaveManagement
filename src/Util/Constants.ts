export const sidebarTabData = [
    { icon: 'home', label: 'Home', isExpandable: false, isOpen: false, route: '/home' },
    { icon: 'local-florist', label: 'Holidays', isExpandable: false, isOpen: false, route: '/holidays' },
    {
        icon: 'blur', label: 'Leaves', isExpandable: true, isOpen: false, route: '/leaverequest', innerSidebar: [
            { label: 'Leave Request', route: '/leaverequest' },
            { label: 'Approved Leaves', route: '/approvedleaves' },
            { label: 'Pending Leaves', route: '/pendingleaves' },
            { label: 'Rejected Leaves', route: '/rejectedleaves' },
            { label: 'Cancelled Leaves', route: '/cancelledleaves' }]
    },
    { icon: 'chart', label: 'Manage Leave Request', isExpandable: false, isOpen: false, route: '/manageleaverequest' },
    { icon: 'accounts', label: 'Employee List', isExpandable: false, isOpen: false, route: '/employeelist' },
    { icon: 'blur-linear', label: 'Employee Leaves List', isExpandable: false, isOpen: false, route: '/employeeleaveslist' },
    { icon: 'format-quote', label: 'Leave Reason', isExpandable: false, isOpen: false, route: '/leavereason' },
    { icon: 'device-hub', label: 'Leave Type', isExpandable: false, isOpen: false, route: '/leavetype' },
    { icon: 'gamepad', label: 'Department', isExpandable: false, isOpen: false, route: '/department' }
];

export const homePath = "/home";

export const holidayPath = "/holidays";

export const manageleaverequestPath = "/manageleaverequest";

export const employeelistPath = "/employeelist";

export const employeeleaveslistPath = "/employeeleaveslist";

export const leavetypePath = "/leavetype";

export const departmentPath = "/department";

export const leaverequestPath = "/leaverequest";
