type ApiStatus = "init" | "loading" | "success" | "failure";

export type LoginState = {
  status: ApiStatus;
  payload: SuccessPayload | FailedPayload;
  loggedIn: boolean;
  pager?: {};
};

export type SuccessPayload = {
  token: string;
  data: {
    user: {
      id: number;
      lastLogin: Date | null;
      employee: {
        id: number;
        firstName: string;
        lastName: string;
        designation: string;
        totalAvailableLeave: number;
        totalPaidLeave: number;
        totalUnPaidLeave: number;
      };
    };
  };
};

export type FailedPayload = {
  error: string;
};

export const initialState: LoginState = {
  status: "init",
  loggedIn: false,
  payload: {
    token: "",
    data: {
      user: {
        id: 0,
        lastLogin: null,
        employee: {
          id: 0,
          firstName: "",
          lastName: "",
          designation: "",
          totalAvailableLeave: 0,
          totalPaidLeave: 0,
          totalUnPaidLeave: 0,
        },
      },
    },
  },
};

export type Action =
  | {
      type: "FETCHING";
      loggedIn: false;
    }
  | {
      type: "FETCHED_FAILURE";
      loggedIn: false;
      payload: { error: string };
    }
  | {
      type: "FETCHED_SUCCESS";
      loggedIn: true;
      payload: SuccessPayload;
    }
  | {
      type: "LOGGED_OUT";
      loggedIn: false;
    };

export type Dispatch = (action: Action) => void;

export const LoginReducer = (state: LoginState, action: Action): LoginState => {
  switch (action.type) {
    case "FETCHING": {
      return {
        ...state,
        status: "loading",
        loggedIn: false,
      };
    }
    case "FETCHED_FAILURE": {
      return {
        ...state,
        status: "failure",
        payload: action.payload,
        loggedIn: false,
      };
    }
    case "FETCHED_SUCCESS": {
      return {
        ...state,
        status: "success",
        payload: action.payload,
        loggedIn: true,
      };
    }
    case "LOGGED_OUT": {
      return {
        ...state,
        status: "success",
        loggedIn: false,
      };
    }
    default:
      return state;
  }
};
