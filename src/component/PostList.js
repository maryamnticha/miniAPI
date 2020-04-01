import React, { Component } from "react";
import axios from "axios";
import PostCard from "./PostCard";
export default class PostList extends Component {
  state = { posts: [], users: [] };
  componentDidMount = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/`)
      .then(response => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <div className="Cards">
        {this.state.posts
          //   .filter(el => el.id === this.props.match.params.id)
          .map((post, key) => (
            <div>
              <PostCard className="Cardes" post={post} key={key} />
            </div>
          ))}
      </div>
    );
  }
}
