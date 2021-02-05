/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Alert, Spinner } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  MEDIA_QUERY_MOBILE_M,
  MEDIA_QUERY_MOBILE_L,
  MEDIA_QUERY_TABLET,
} from '../../constants/breakpoint';
import {
  setErrorMessage,
  selectErrorMessage,
} from '../../redux/reducers/errorMessageReducer';
import {
  setUserData,
  selectUserData,
  selectIsGettingUserData,
} from '../../redux/reducers/userReducer';
import { setAuthToken } from '../../utils';

const HeaderContainer = styled.div`
  position: sticky;
  z-index: 1;
  top: 0;
`;
const NavBarContainer = styled.div`
  text-align: center;
  background: floralwhite;
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 5px;
  ${MEDIA_QUERY_MOBILE_M} {
    flex-direction: column;
  }
  ${MEDIA_QUERY_MOBILE_L} {
    flex-direction: row;
  }
`;
const Brand = styled.div`
  font-weight: bold;
  margin: auto 5px;
  ${MEDIA_QUERY_MOBILE_M} {
    font-size: 20px;
  }
  ${MEDIA_QUERY_MOBILE_L} {
    width: 200px;
  }
  ${MEDIA_QUERY_TABLET} {
    width: 350px;
    font-size: 30px;
  }
`;
const NavbarListContainer = styled.div`
  font-weight: bold;
  ${MEDIA_QUERY_MOBILE_M} {
    width: 100%;
    font-size: 14px;
    & + & {
      margin-top: 6px;
    }
  }
  ${MEDIA_QUERY_MOBILE_L} {
    font-size: 18px;
    margin: auto 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;
const NavbarList = styled.div`
  display: flex;
  ${MEDIA_QUERY_MOBILE_M} {
    flex-direction: column;
    align-items: center;
    & + & {
      margin-top: 6px;
    }
  }
  ${MEDIA_QUERY_MOBILE_L} {
    flex-direction: row;
    & + & {
      margin-top: 0px;
    }
  }
`;
const Nav = styled(Link)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  color: black;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    color: black;
    text-decoration: none;
  }
  ${(props) =>
    props.$active &&
    `
    background: rgba(0, 0, 0, 0.1);
  `}
  ${MEDIA_QUERY_MOBILE_M} {
    width: 100%;
    & + & {
      margin-top: 6px;
    }
  }
  ${MEDIA_QUERY_MOBILE_L} {
    padding: 5px 10px;
    width: auto;
    & + & {
      margin-top: 0px;
      margin-left: 6px;
    }
  }
`;
const WelcomeMessage = styled.div`
  background-color: cadetblue;
  text-align: center;
  font-size: 18px;
  color: white;
  padding: 3px;
`;

export default function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = useLocation();
  // 取得當下 user 的狀態(未登入:null, 已登入：帳號資料物件)
  const userData = useSelector(selectUserData);
  const errorMessage = useSelector(selectErrorMessage);
  const isGettingUserData = useSelector(selectIsGettingUserData);

  //  當路徑改變時先將錯誤訊息清空
  useEffect(
    () =>
      history.listen(() => {
        dispatch(setErrorMessage(null));
      }),
    [dispatch, history]
  );

  const handleLogout = () => {
    // 登出清空 Token 及 user
    setAuthToken('');
    dispatch(setUserData(null));
  };
  return (
    <>
      <HeaderContainer>
        <NavBarContainer>
          <Brand>Redux Blog</Brand>
          <NavbarListContainer>
            <NavbarList>
              <Nav $active={pathname === '/'} to="/">
                首頁
              </Nav>
              <Nav $active={pathname === '/About'} to="/About">
                關於我
              </Nav>
              <Nav
                $active={pathname.includes('/pagination')}
                to="/pagination/1"
              >
                文章分頁
              </Nav>
            </NavbarList>
            <NavbarList>
              {/* 初始化時因為 userData 初始值為 null，需等待確認完身分後再顯示 */}
              {isGettingUserData && (
                <Spinner animation="border" variant="primary" />
              )}
              {!userData && isGettingUserData === false && (
                <>
                  <Nav $active={pathname === '/register'} to="/register">
                    註冊
                  </Nav>
                  <Nav $active={pathname === '/login'} to="/login">
                    登入
                  </Nav>
                </>
              )}
              {userData && isGettingUserData === false && (
                <>
                  <Nav $active={pathname === '/new-post'} to="/new-post">
                    發布文章
                  </Nav>
                  <Nav onClick={handleLogout} to="/">
                    登出
                  </Nav>
                </>
              )}
            </NavbarList>
          </NavbarListContainer>
        </NavBarContainer>

        {userData && (
          <WelcomeMessage>Hello! {userData.nickname}</WelcomeMessage>
        )}
        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
      </HeaderContainer>
    </>
  );
}
