/* eslint-disable import/no-unresolved */
import React from 'react';
import styled from 'styled-components';
import avatar from '../../img/avatar.jpg';
import { GoMarkGithub } from 'react-icons/go';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import {
  MEDIA_QUERY_MOBILE_M,
  MEDIA_QUERY_TABLET,
} from '../../constants/breakpoint';

const SideBarWrapper = styled.div`
  ${MEDIA_QUERY_MOBILE_M} {
    display: none;
  }
  ${MEDIA_QUERY_TABLET} {
    display: block;
    width: 200px;
    top: 135px;
    position: fixed;
    background: white;
    opacity: 0.9;
    left: 20px;
    border-radius: 5px;
    padding: 15px;
  }
`;
const StyledImg = styled.img`
  width: 100%;
  border-radius: 5px;
`;

const About = styled.div`
  margin-top: 10px;
  color: grey;
`;
const Title = styled.div`
margin-top: 20px;
  font-size: 24px;
`;
const Content = styled.div`
  font-size: 16px;
  margin: 10px auto;
`;
const IconWrapper = styled.div`
  margin-top: 60px;
  text-align: right;
  & > a {
    color: black;
  }
  & > svg:hover,
  & > a:hover {
    cursor: pointer;
    color: grey;
  }
`;

const SideBarContent = styled.div``;

const SideBar = () => (
  <SideBarWrapper>
    <SideBarContent>
      <StyledImg src={avatar} alt="img" />
      <About>About Me</About>
      <Title>Ahwei777</Title>
      <Content>
        在這一不小心就忘掉什麼的人生旅途中，試著拼湊出一點生活的記憶
      </Content>
      <IconWrapper>
        <a href="https://github.com/ahwei777">
          <GoMarkGithub size={'2em'} />
        </a>
        <FaFacebook size={'2em'} />
        <FaTwitter size={'2em'} />
      </IconWrapper>
    </SideBarContent>
  </SideBarWrapper>
);

export default SideBar;
