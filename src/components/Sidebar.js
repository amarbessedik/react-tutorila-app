import React from "react";
import "./Sidebar.css";
import GroupLinks from "./sub-components/GroupLinks";

const groupLinks = [
  {
    title: "PART I",
    url: "/part1",
    links: [
      { name: "Section I", url: "/part1/section1" },
      { name: "Section II", url: "/part1/section2" },
      { name: "Section III", url: "/part1/section3" },
    ],
  },
  {
    title: "PART II",
    url: "/part2",
    links: [
      { name: "Section I", url: "/part2/section1" },
      { name: "Section II", url: "/part2/section2" },
      { name: "Section III", url: "/part2/section3" },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      {groupLinks.map((groupLink, index) => (
        <GroupLinks key={index} groupLink={groupLink} />
      ))}
    </div>
  );
};

export default Sidebar;
