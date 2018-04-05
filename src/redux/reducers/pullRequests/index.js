import { USER_LOGIN } from '../../actions/user';

function mapPullRequestPayload(payload) {
  return Object.keys(payload)
    .map(sha => ({
      ...payload[sha],
      sha: sha
    }));
}

export default (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case USER_LOGIN:
      return mapPullRequestPayload(action.payload);
    default:
      return state;
  }
}
