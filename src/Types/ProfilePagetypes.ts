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

export type LocalAddressType = {
  localAddress?: string | null;
  localAddress2?: string | null;
  pincode?: string | null;
  state?: string | null;
  city?: string | null;
};

export type PermanentAddressType = {
  perAddress?: string;
  perAddress2?: string;
  pincode?: string;
  state?: string;
  city?: string;
};

export type ChangePasswordType = {
  oldPassword?: string;
  newPassword?: string;
  confirmPassword?: string;
};
