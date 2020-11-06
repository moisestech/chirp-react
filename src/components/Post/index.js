import { forwardRef } from "react";
import PropTypes from "prop-types";

// ICONS
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

// why create const to use forwardRef?
// https://reactjs.org/docs/forwarding-refs.html
const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post-avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post-body">
          <div className="post-header">
            <h3>
              {displayName}{" "}
              <span className="post-header-text">
                {verified && <VerifiedUserIcon className="post-badge" />} @
                {username}
              </span>
            </h3>
            <div className="post-header-description">
              <p>{text}</p>
            </div>
          </div>

          <img src={image} alt="" />
          <div className="post-footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

Post.propTypes = {
  displayName: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  verified: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default Post;
