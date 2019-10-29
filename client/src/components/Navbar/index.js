import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Google Books
      </a>
      <a className="navbar-item" href="/search">
        Search
      </a>
      <a className="navbar-item" href="/save">
        Save
      </a>
    </nav>
  );
}

export default Nav;