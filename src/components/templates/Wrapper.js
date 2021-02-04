/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import styled from 'styled-components';
import {
  MEDIA_QUERY_MOBILE_M,
  MEDIA_QUERY_TABLET,
} from '../../constants/breakpoint';

const Wrapper = styled.div`
  background: white;
  min-height: 100vh;
  opacity: 0.8;
  width: 100%;
  border-radius: 10px;
  padding: 20px;
  ${MEDIA_QUERY_MOBILE_M} {
    margin: 20px;
  }
  ${MEDIA_QUERY_TABLET} {
    margin-left: 250px;
  }
`;

export default Wrapper;
