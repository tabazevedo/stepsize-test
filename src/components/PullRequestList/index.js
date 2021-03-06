import React from 'react';
import PullRequest from './PullRequest';

import { connect } from 'react-redux';

const PullRequestList = ({ pullRequests }) => {
  return pullRequests.map(pr =>
    <PullRequest
      key={pr.sha}
      title={pr.title}
      body={pr.body}
      tags={pr.tags}
      date={pr.date}
      author={pr.author}
    />
  );
}

export default connect(
  state => ({
    pullRequests: state.pullRequests
  })
)(PullRequestList);
