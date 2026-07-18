import { Component } from "react";
import Post from "./Post";

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      posts: [],
    };
  }
  loadPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data);

        this.setState({ posts: data });
      })
      .catch((error) => console.error("error in fetching the data", error));
  };

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error) {
    this.setState({ hasError: true });
    alert("An error occurred in the component: " + error.toString());
  }

  render() {
    if (this.state.hasError) {
      return <h2>Error could not fetch the posts from the url</h2>;
    }

    return (
      <div>
        <h1> Blog Posts </h1>
        {this.state.posts.map((post) => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
