import React from 'react';
import { styled } from 'styletron-react';

const Avatar = styled('img', {
  borderRadius: '50px',
  display: 'inline-block',
  height: '50px',
  marginRight: '10px',
  width: '50px',
});

const Container = styled('li', {
  backgroundColor: 'white',
  borderRadius: '.2em',
  color: '#444',
  padding: '20px',
  margin: '20px 20px 0 20px',
  listStyleType: 'none'
});

const TitleContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row'
});

const Title = styled('h2', {
  fontSize: '20px',
  marginBottom: '5px',
  display: 'inline'
});

const Dated = styled('p', {
  fontSize: '12px'
});

const Tags = styled('ul', {
  listStyleType: 'none',
  display: 'inline'
});

const Tag = styled('li', {
  borderRadius: '.2em',
  backgroundColor: 'rgb(217, 47, 133)',
  display: 'inline-block',
  fontSize: '14px',
  padding: '.2em .4em',
  marginLeft: '.4em',
  color: 'white'
});

const PullRequest = ({ author, body, tags, date, title }) => (
  <Container>
    <header>
      <TitleContainer>
        <Avatar src={author.avatarUrl} />
        <div>
          <Title>
            {title}
          </Title>
          <Tags>
            {tags.map(tag => <Tag key={tag}><span>{tag}</span></Tag>)}
          </Tags>
          <Dated>
            Created on {date} by {author.username}
          </Dated>
        </div>
      </TitleContainer>
    </header>
    <hr />
    <p>
      {body}
    </p>
  </Container>
);

export default PullRequest;
