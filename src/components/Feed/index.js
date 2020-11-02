import "./feed.css";
import { useState, useEffect } from "react";

//DATABASE
import db from "../../firebase";

// COMPONENTS
import TweetBox from "../TweetBox";
import Post from "../Post";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // db.collection("posts").onSnapshot((snapshot) =>
    //   setPosts(snapshot.docs.map((doc) => doc.data))
    // );
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      {posts.map((post) => {
        <Post
          key={post.text}
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />;
      })}
    </div>
  );
}
