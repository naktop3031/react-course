import React from "react";
import {NavLink} from "react-router-dom";
import {PropTypes} from "prop-types";

export default class NavBar extends React.Component {

  render() {
    return (
      <>
        <div style={{display: "flex", justifyContent: "space-around"}}>
          <NavLink
            to={"/popular"}
            className={({isActive}) => "nav-link" + (isActive ? " active" : "")}
          >
            <h3 className="nav-link">Popular</h3>
          </NavLink>
          <NavLink
            to={"/battle"}
            className={({isActive}) => "nav-link" + (isActive ? " active" : "")}
          >
            <h3 className="nav-link">Battle</h3>
          </NavLink>
          <button className="btn" onClick={this.props.toggleTheme}>
            {" "}
            <h2 style={{margin: "0"}}>
              {" "}
              {this.props.theme === "light" ? "🌛" : "🌞"}{" "}
            </h2>
          </button>
        </div>
        <hr />
      </>
    );
  }
}

NavBar.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};
