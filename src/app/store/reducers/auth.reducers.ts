import { User } from '../../models/user.models';
import { userActions, UserActionType } from '../actions/auth.actions';

export interface State {
  isAuthenticated: boolean;
  user: User;
  error: null;
  loading: boolean;
}

export const initialState: State = {
  isAuthenticated: false,
  user: null,
  error: null,
  loading: false,
};

export function AuthReducer(state = initialState, action: userActions): State {
  switch (action.type) {
    case UserActionType.signup: {
      return {
        ...state,
        loading: true,
      };
    }
    case UserActionType.signupSuccess: {
      return {
        ...state,
        isAuthenticated: true,
        user: null,
        error: null,
        loading: false,
      };
    }

    case UserActionType.signupFailure: {
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        error: action.error.error,
        loading: false,
      };
    }

    case UserActionType.loginRequest: {
      return {
        ...state,
        isAuthenticated: false,
        loading: true,
      };
    }

    case UserActionType.loginSuccess: {
      return {
        ...state,
        isAuthenticated: true,
        user: {
          userName: action.payload.userName,
          userId: action.payload.userId,
        },
        error: null,
        loading: false,
      };
    }

    case UserActionType.loginFailure: {
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: action.error.error,
        loading: false,
      };
    }

    case UserActionType.logoutRequest: {
      return {
        ...state,
        isAuthenticated: false,
        loading: true,
      };
    }

    case UserActionType.logoutSuccess: {
      return {
        ...state,
        isAuthenticated: false,
        user: {
          userName: '',
          userId: '',
        },
        error: null,
        loading: false,
      };
    }

    case UserActionType.profileRequest: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case UserActionType.profileReqSuccess: {
      return {
        ...state,
        loading: false,
        error: null,
      };
    }
    case UserActionType.profileReqFail: {
      return {
        ...state,
        user: {
          userName: '',
          userId: '',
        },
        loading: false,
        error: action.error.error,
      };
    }

    default:
      return state;
  }
}
