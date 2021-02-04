import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import SinglePostPage from '../pages/SinglePostPage';
import AddPostPage from '../pages/AddPostPage';
import AboutPage from '../pages/AboutPage';
import PaginationPage from '../pages/PaginationPage';
import UpdatePostPage from '../pages/UpdatePostPage';

export default function MainRoutes() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/about">
        <AboutPage />
      </Route>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <Route exact path="/register">
        <RegisterPage />
      </Route>
      <Route exact path="/pagination/:page">
        <PaginationPage />
      </Route>
      <Route exact path="/posts/:id">
        <SinglePostPage />
      </Route>
      <Route exact path="/new-post">
        <AddPostPage />
      </Route>
      <Route exact path="/update-post/:id">
        <UpdatePostPage />
      </Route>
      {/* 沒被上面攔截的其他網址都導至首頁 */}
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  );
}
