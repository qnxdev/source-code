import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./dropdown.css";

class DropDownA extends Component {
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
        <span>Academics</span>
        <div className="dropdown-content">
          <p>
            <Link
              to="/academics/courses-offered"
              className="patch1"
            >
              Courses Offered
            </Link>
          </p>
          {/* <p>
            <Link
              to="/academics/calendar"
              className="patch1"              
            >
              {" "}
              Calendar
            </Link>
          </p>*/}
          <p>
            <Link
              to="/academics/syllabusplan"
              className="patch1"
            >
              Syllabus & Curriculum Plan
            </Link>
          </p>
          <p>
            <Link
              to="/academics/syllabus"
              className="patch1"
            >
              Academic Downloads
            </Link>
          </p>
          
          <p>

            <Link
              to="/academics/honours"
              className="patch1"
            >
              Honours
            </Link>
          </p>
        </div>
      </div>
    );
  }
}
export default DropDownA;
