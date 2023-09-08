import { Link } from "react-router-dom";
import { LogoutLink } from "./LogOutLink";
import axios from "axios";
import { useState, useEffect } from "react";

export function Header() {
  const [user, setUser] = useState({});
  const getUserData = () => {
    axios.get("http://localhost:3000/users/current.json").then((response) => {
      console.log(response.data);
      setUser(response.data);
    });
  };

  useEffect(getUserData, []);

  let validationLinks;

  if (localStorage.jwt === undefined) {
    validationLinks = (
      <>
        <li className="nav-item">
          <Link className="nav-link" to="/signup">
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </>
    );
  } else {
    validationLinks = (
      <>
        <li className="nav-item">
          <LogoutLink />
        </li>
      </>
    );
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Hello {user.name}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/posts">
                All Posts
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/post/new">
                New Post
              </Link>
            </li>
            {validationLinks}
          </ul>
        </div>
      </div>
    </nav>
  );
}
