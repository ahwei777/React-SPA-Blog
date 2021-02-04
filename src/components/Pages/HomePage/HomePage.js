/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  getPost,
  setAllPostData,
  selectIsGettingPost,
  selectAllPostData,
} from '../../../redux/reducers/postReducer';
import SideBar from '../../SideBar';
import Wrapper from '../../templates/Wrapper';
import Post from '../../templates/Post';
import PostLoadingBackground from '../../Loaders/LoopCircleLoading';

const Layout = styled.div`
  display: flex;
`;

function HomePage() {
  const dispatch = useDispatch();
  const isGettingPost = useSelector(selectIsGettingPost);
  const allPostData = useSelector(selectAllPostData);

  // component mount 時執行(初始化)
  useEffect(() => {
    dispatch(getPost('all'));
    // unmount 時先 clean up 避免下次回來時因為仍有舊資料而短暫顯示
    return () => {
      dispatch(setAllPostData(null));
    };
  }, [dispatch]);

  return (
    <>
      {isGettingPost && <PostLoadingBackground />}
      <Layout>
        <SideBar />
        <Wrapper>
          {allPostData && allPostData.length > 0 && (
            <>
              {allPostData.map((post) => (
                <Post key={post.id} post={post} />
              ))}
            </>
          )}
        </Wrapper>
      </Layout>
    </>
  );
}

export default memo(HomePage);
