import React from "react";
import "./App.css";
import Home from "./component/Home";
import PostList from "./component/PostList";
import { BrowserRouter, Route } from "react-router-dom";
import CommentList from "./component/commentList";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" render={Home}></Route>
        <Route
          exact
          path="/posts/userId=:id"
          render={props => <PostList {...props} />}
        />
        <Route
          exact
          path="/comments/postId=:id"
          render={props => <CommentList {...props} />}
        />
      </BrowserRouter>
    );
  }
}
export default App;
