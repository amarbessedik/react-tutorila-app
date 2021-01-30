import React from "react";
import "./Sidebar.css";
import GroupLinks from "./sub-components/GroupLinks";

const groupLinks = [
  {
    title: "PART I",
    url: "/part1",
    links: [
      { name: "Section I", url: "/Course_I" },
      // { name: "Section II", url: "/part1/section2" },
    ],
  },
  {
    title: "PART II",
    url: "/part2",
    links: [
      { name: "Section I", url: "/Course_II" },
      // { name: "Section II", url: "/part2/section2" },
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
