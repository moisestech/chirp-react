import "./widgets.css";

// import {
//   TwitterTimelineEmbed,
//   TwitterShareButton,
//   TwitterTweetEmbed,
// } from "react-twitter-embed";

import SearchIcon from "@material-ui/icons/Search";

export default function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets-input">
        <SearchIcon className="widgets-search-icon" />
        <input placeholder="Search Chirp" type="text" />
      </div>

      <div className="widgets-widget-container">
        <h2>What's happening</h2>

        {/* <TwitterTweetEmbed tweetId={"858551177860055040"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="moisesdsanabria"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://facebook.com/"}
          options={{ text: "I study destiny #reactjs", via: "moisesdsanabria" }}
        /> */}
      </div>
    </div>
  );
}
