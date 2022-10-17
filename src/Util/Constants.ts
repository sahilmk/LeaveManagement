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

export const leaveRequestPath = "/leaverequest";

export const approvedLeavesPath = "/approvedleaves";

export const pendingLeavesPath = "/pendingleaves";

export const rejectedLeavesPath = "/rejectedleaves";

export const cancelledLeavesPath = "/cancelledleaves";

export const manageLeaverequestPath = "/manageleaverequest";

export const employeeListPath = "/employeelist";

export const employeeLeavesListPath = "/employeeleaveslist";

export const leaveReasonPath = "/leavereason";

export const leaveTypePath = "/leavetype";

export const departmentPath = "/department";

export const forgotPasswordPath = "/forgotpassword";

export const otpPath = "/otp";

export const resetPasswordPath = "/resetpassword";

export const dashboardPath = "/dashboard";

export const profilePath = "/profile";

export const dummyData = [
    {
        id: "1",
        type: "Paid",
        reason: "Seek Leave",
        date: "12/01/2018 to 14/01/2018",
        appliedOn: "25/12/2017",
        name: 'John Doe',
        department: 'Front-End'
    },
    {
        id: "2",
        type: "Paid",
        reason: "Seek Leave",
        date: "10/01/2018",
        appliedOn: "25/12/2017",
        name: 'Mical filips',
        department: 'HRD'
    }
]