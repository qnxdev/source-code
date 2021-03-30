import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./dropdown.css";

class DropDownC extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
  }


  render() {
    return (
      <div className="dropdown">
        <span>Campus Life</span>
        <div className="dropdown-content">
          <p>
            <Link
              to="/campus-life"
              className="patch1"
            >
              Campus
            </Link>
          </p>
          <p>
            <Link
              to="/campus-life/collegecouncil"
              className="patch1"
            >
              Student Council
            </Link>
          </p>
          <p>
            <Link
              to="/campus-life/committees"
              className="patch1"
            >
              Committees
            </Link>
          </p>
          <p>
            <Link
              to="/campus-life/artsfest"
              className="patch1"
            >
              Drishya- Arts Fest
            </Link>
          </p>
          <p>
            <Link
              to="/campus-life/sportsfest"
              className="patch1"
            >
              Drona- Sports Fest
            </Link>
          </p>
          <p>
            <Link
              to="/campus-life/techfest"
              className="patch1"
            >
              Bodhi- Tech Fest
            </Link>
          </p> 
          <p>
            <Link
              to="/campus-life/publications"
              className="patch1"
            >
              Publication
            </Link>
          </p> 
          
           <p>
            <Link
              to="/campus-life/professionalbodies"
              className="patch1"
            >
              Professional Bodies
            </Link>
          </p>
          <p>
            <Link
              to="/campus-life/nss"
              className="patch1"
            >
              National Service Scheme
            </Link>
          </p>
          <p>
            <Link
              to="/campus-life/campusmap"
              className="patch1"
            >
              Campus Map
            </Link>
          </p>
        </div>
      </div>
    );
  }
}
export default DropDownC;
