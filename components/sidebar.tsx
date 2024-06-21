import Logo from "./logo";
import NavItem from "./nav-item";
import React from "react";

const Sidebar = () => (
  <div className="min-w-[230px]">
    <Logo />
    <div className="flex flex-col gap-[30px]">
      <NavItem href="#" icon="/images/home-hashtag.svg" text="Home" active />
      <NavItem href="#" icon="/images/search-normal.svg" text="Explore" />
      <NavItem href="#" icon="/images/notification.svg" text="Notifications" />
      <NavItem href="#" icon="/images/sms.svg" text="Messages" />
      <NavItem href="#" icon="/images/note-add.svg" text="Bookmarks" />
      <NavItem href="#" icon="/images/crown-light.svg" text="Communities" />
      <NavItem href="#" icon="/images/profile-circle.svg" text="Profile" />
      <NavItem href="#" icon="/images/group.svg" text="Sign Out" />
    </div>
  </div>
);

export default Sidebar;
