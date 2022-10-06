export type LoginModel = {
  status: 200 | 422;
  message: string;
  payload: {
    token?: string;
    data?: {
      user: {
        id: number;
        roleId: number;
        employeeId: number;
        lastLogin: Date;
        employee: {
          id: number;
          firstName: string;
          lastName: string;
          email: string;
          gender: string;
          designation: string;
          landlineNo: string | null;
          mobileNo: string;
          localAddress: string | null;
          permanentAddress: string | null;
          localPincode: string | null;
          permanentPincode: string | null;
          image: string;
          roleId: number;
          departmentId: number;
          dob: Date;
          salary: number;
          remainingPaidLeaves: number;
          remainingUnpaidLeaves: number;
          leavePoints: number;
          createdBy: number;
          updatedBy: number;
          isEnable: number;
          created_at: Date;
          updated_at: Date;
          localAddress2: string | null;
          permanentAddress2: string | null;
          localCountry: string | null;
          localState: string | null;
          localCity: string | null;
          permanentCountry: string | null;
          permanentState: string | null;
          permanentCity: string | null;
          remainingTotalLeaves: number;
          departmentName: string;
          totalSandwichDays: number;
          totalPaidLeave: number;
          totalUnPaidLeave: number;
          totalAvailableLeave: number;
          totalLeaveUsed: number;
          totalRemainingLeave: number;
        };
      };
      role: {
        id: number;
        name: string;
        isEnable: 1;
      };
    };
    error?: string;
  };
  pager: {};
};
