import React, { Component } from "react";
import axios from "axios";
import Comments from "./comments";
export default class CommentList extends Component {
  state = { comments: [], users: [] };
  componentDidMount = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=3`)
      .then(response => {
        console.log(response);
        this.setState({ comments: response.data });
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <div className="Cards">
        {this.state.comments.map((comment, key) => (
          <div>
            <Comments className="Cardes" comment={comment} key={key} />
          </div>
        ))}
      </div>
    );
  }
}
