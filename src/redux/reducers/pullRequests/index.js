import { USER_LOGIN } from '../../actions/user';

export default (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case USER_LOGIN:
      return action.payload;
    default:
      return state;
  }
}
