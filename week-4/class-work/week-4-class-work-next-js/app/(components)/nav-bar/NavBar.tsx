import "./navBar.css";

import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="nav-bar-wrap">
      <Link href="/" className="nav-bar-link">
        Home
      </Link>
      <Link href="/mars-rover" className="nav-bar-link">
        Mars Rover Photos
      </Link>
      <Link href="/epic-images" className="nav-bar-link">
        EPIC Camera Images
      </Link>
      <Link href="/blog" className="nav-bar-link">
        Blogs
      </Link>
    </nav>
  );
};
