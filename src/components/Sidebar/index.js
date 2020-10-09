import * as React from "react";
import PropTypes from "prop-types";

// COMPONENTS
import Logo from "../Logo";
import SidebarOption from "../SidebarOption";

// MATERIAL UI
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Logo />

      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption active Icon={SearchIcon} text="Explore" />
      <SidebarOption active Icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarOption active Icon={MailOutlineIcon} text="Messages" />
      <SidebarOption active Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarOption active Icon={ListAltIcon} text="Lists" />
      <SidebarOption active Icon={PermIdentityIcon} text="Profile" />
      <SidebarOption active Icon={MoreHorizIcon} text="More" />

      {/* Button -> Tweets */}
      <Button variant="outlined" className="sidebar-tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

Sidebar.propType = {};
