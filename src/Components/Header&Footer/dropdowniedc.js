import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./dropdown.css";

class DropDownAb extends Component {
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
        <span>III&ED</span>
        <div className="dropdown-content">
          <p>
            <Link
              to="/ed/iedc"
              className="patch1"
            >
              IEDC
            </Link>
          </p>
          <p>
            <Link
              to="/ed/v-bic"
              className="patch1"
            >
              V-BIC
            </Link>
          </p>
          <p>
            <Link
              to="/ed/iiic"
              className="patch1"
            >
              IIIC
            </Link>
          </p>
          <p>
            <Link
              to="/nisp"
              className="patch1"
            >
              NISP
            </Link>
          </p>          
          <p>
            <Link
              to="/ed/unai"
              className="patch1"
            >
              UNAI-Aspire
            </Link>
          </p>
        </div>
      </div>
    );
  }
}
export default DropDownAb;
