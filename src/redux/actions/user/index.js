import createAction from '../../createAction';

// Constants
export const USER_LOGIN = 'user:login';

// Action Creators
export const userLogin = (username, password) => {
  return createAction(USER_LOGIN, { username, password })
};
