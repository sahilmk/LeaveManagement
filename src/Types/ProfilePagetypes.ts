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
  firstName?: string;
  lastName?: string;
  email?: string;
  mobileNo?: string;
  landlineNo?: string | null;
  gender?: "M" | "F";
  department?: string;
  designation?: string;
  dateOfBirth?: string;
};

export type AddressType = {
  Address?: string;
  Address2?: string;
  pincode?: string;
  state?: string;
  city?: string;
};

export type ChangePasswordType = {
  oldPassword?: string;
  newPassword?: string;
  confirmPassword?: string;
};
