import React, { Component } from "react";
import axios from "axios";
import UserCard from "./UserCard";
import { Link } from "react-router-dom";
export default class UserList extends Component {
  state = { users: [], posts: [] };
  componentDidMount = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then(response => {
        console.log(response);
        this.setState({ users: response.data });
      })
      .catch(error => {
        console.error(error);
      });
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
      <div class="card-group">
        {this.state.users.map((user, key) => (
          <div>
            <UserCard user={user} />
            <Link to={`/postofusernumber/${user.id}`}>show posts</Link>
          </div>
        ))}
      </div>
    );
  }
}
