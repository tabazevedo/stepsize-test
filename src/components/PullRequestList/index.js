import React from 'react';

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

export default PullRequestList;
