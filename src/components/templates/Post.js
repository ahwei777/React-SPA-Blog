/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React, { memo } from 'react';
import { Card, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonWrapper = styled.div`
  text-align: right;
`;

const Body = styled.div`
  margin: 1.5em auto;
  overflow-wrap: break-word;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

function Post({ post }) {
  return (
    <Card className="mb-4" border="secondary">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <h3> {post.title} </h3>
          <footer className="blockquote-footer" style={{ textAlign: 'right', marginTop: '20px' }}>
            {new Date(post.createdAt).toLocaleString()}
          </footer>
        </blockquote>
        <Body>{post.body}</Body>
        <ButtonWrapper>
          <Link to={`/posts/${post.id}`}>
            <Button variant="outline-secondary">Read More...</Button>
          </Link>
        </ButtonWrapper>
      </Card.Body>
    </Card>
  );
}

export default memo(Post);
