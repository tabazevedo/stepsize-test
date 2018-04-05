import { USER_LOGIN } from '../../actions/user';
import { format } from 'date-fns';

function mapPullRequestPayload(payload) {
  return Object.keys(payload)
    .map(sha => ({
      ...payload[sha],
      date: format(new Date(payload[sha].timestamp), 'MMM Do YYYY'),
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
