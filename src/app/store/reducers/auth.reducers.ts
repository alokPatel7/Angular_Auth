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
        user: {
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
        },
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

    default:
      return state;
  }
}