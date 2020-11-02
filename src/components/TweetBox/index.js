import { useState } from "react";
import "./tweet-box.css";
import { Avatar, Button } from "@material-ui/core";
import db from "../../firebase";

export default function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    // db.collection("posts").add({
    //   displayName: "Adrien Schmitz",
    //   username: "adrien.schmitz",
    //   verified: true,
    //   text: tweetMessage,
    //   image: tweetImage,
    //   avatar:
    //     "https://media.fstatic.com/FZ3Cw5Q8woP6X4yAapR6BvE_-gs=/130x130/smart/media/accounts/avatar/2020/10/04/me-1281125402.jpg",
    // });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweet-box">
      <form>
        <div className="tweet-box-input">
          <Avatar src="https://media.fstatic.com/FZ3Cw5Q8woP6X4yAapR6BvE_-gs=/130x130/smart/media/accounts/avatar/2020/10/04/me-1281125402.jpg" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Opcional: URL image"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweet-box-tweet-button"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}
