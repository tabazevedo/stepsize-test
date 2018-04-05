import { USER_LOGIN } from '../../actions/user';

function mapPullRequestPayload(payload) {
  return Object.keys(payload)
    .map(sha => ({
      ...payload[sha],
      sha: sha
    }))
    .sort((a, b) => b.relevancy - a.relevancy)
}

export default (state = [], action) => {
  switch (action.type) {
    case USER_LOGIN:
      return mapPullRequestPayload(action.payload);
    default:
      return state;
  }
}
