import createAction from '../../createAction';
import loginRequest from '../../../requests/login';

// Constants
export const USER_LOGIN = 'user:login';

// Action Creators
export const loginAction = (username, password, payload) =>
  createAction(USER_LOGIN, { username, password, payload });

export const login = (username, password) =>
  (dispatch) => {
    loginRequest(username, password)
    .then(payload => {
      dispatch(loginAction(username, password, payload))
    })
}
