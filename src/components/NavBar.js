import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const navList = links.map(link => <a key={link} href={`#${link}`}>{link}</a> ) 

  return <nav>{navList}</nav>;
}

export default NavBar;
