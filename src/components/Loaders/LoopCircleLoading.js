/* eslint-disable import/no-unresolved */
import React from 'react';
import styled from 'styled-components';
import { LoopCircleLoading } from 'react-loadingg';

const LoadingBackground = styled.div`
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
const PostLoadingBackground = () => (
  <LoadingBackground>
    <LoopCircleLoading />
  </LoadingBackground>
);
export default PostLoadingBackground;
