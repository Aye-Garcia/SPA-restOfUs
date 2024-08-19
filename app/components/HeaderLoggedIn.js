import React from "react";
import { Link } from "react-router-dom";

function HeaderLoggedIn(props) {
  const avatarUrl = `https://api.dicebear.com/9.x/pixel-art/svg`;

  function handleLoggedOut() {
    props.setLoggedIn(false);
    localStorage.removeItem("complexAppToken");
    localStorage.removeItem("complexAppUsername");
    localStorage.removeItem("complexAppAvatar");
  }

  return (
    <div className="flex-row my-3 my-md-0">
      <Link to="#" className="text-white mr-2 header-search-icon">
        <i className="fas fa-search"></i>
      </Link>
      <span className="mr-2 header-chat-icon text-white">
        <i className="fas fa-comment"></i>
        <span className="chat-count-badge text-white"> </span>
      </span>
      <Link to="#" className="mr-2">
        <img className="small-header-avatar" src={avatarUrl} alt="avatar" />
      </Link>
      <Link className="btn btn-sm btn-success mr-2" to="/create-post">
        Create Post
      </Link>
      <button onClick={handleLoggedOut} className="btn btn-sm btn-secondary">
        Sign Out
      </button>
    </div>
  );
}

export default HeaderLoggedIn;
