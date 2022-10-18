export type UserInfo = {
  token: string;
  data: {
    user: {
      employee: {
        designation?: string;
        firstName?: string;
        id: number;
        lastName?: string;
        totalAvailableLeave: number;
        totalPaidLeave: number;
        totalUnPaidLeave: number;
      };
      id: number;
      lastLogin: string;
    };
  };
};

export type ProfileDetailType = {
  firstName: string;
  lastName: string;
  email: string;
  mobileNo?: string;
  landlineNo?: string | null;
  gender: "M" | "F";
  department?: string;
  designation?: string;
  dateOfBirth?: string;
  localCity: string | null;
  localState: string | null;
};

export type AddressType = {
  firstName?: string;
  lastName?: string;
  localCity?: string;
  localState?: string;
  localAddress?: string;
  localAddress2?: string;
  localPincode?: string;
  permanentAddress?: string;
  permanentAddress2?: string;
  permanentCity?: string;
  permanentState?: string;
  permanentPincode?: string;
};

export type ChangePasswordType = {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
};
