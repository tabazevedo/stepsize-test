import React from 'react';
import PullRequest from './PullRequest';

import { connect } from 'react-redux';

const PullRequestList = ({ pullRequests }) => {
  return pullRequests.map(pr =>
    <PullRequest
      title={pr.title}
      body={pr.body}
      tags={pr.tags}
      timestamp={pr.timestamp}
      author={pr.author}
    />
  );
}

export default connect(
  state => ({
    pullRequests: state.pullRequests
  })
)(PullRequestList);
