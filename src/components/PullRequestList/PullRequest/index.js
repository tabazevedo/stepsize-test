import React from 'react';

const PullRequest = ({ author, body, tags, timestamp, title }) => (
  <li>
    <header>
      <img src={author.avatarUrl} />
      <div>
        <div>
          <h2>
            {title}
          </h2>
          <ul>
            {tags.map(tag => <li>{tag}</li>)}
          </ul>
        </div>
        <p>
          Created on {timestamp} by {author.username}
        </p>
      </div>
    </header>
    <p>
      {body}
    </p>
  </li>
);

export default PullRequest;
