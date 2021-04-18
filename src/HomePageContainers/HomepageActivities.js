import React, { Component } from "react";
import "./DepartmentSection.css";
import HeadingOne from "../Components/Texts/HeadingOne";
import BodyOne from "../Components/Texts/BodyOne";
import DepartmentList from "./LocalContainers/DepartmentList";
import { Link } from "react-router-dom";
class DepartmentSection extends Component {
  DepartmentSectionTitle = {
    instanceID: "DepartmentSectionTitle",
    title: "Professional Body Activities"
  };

  DepartmentSectionSubTitle = {
    instanceID: "DepartmentSectionSubTitle",
    title:
      ""
  };

  DepartmentListOne = {
    instanceID: "DepartmentListOne",
    title: "IEEE",
    description:
      ""
  };

  DepartmentListTwo = {
    instanceID: "DepartmentListTwo",
    title: "ISTE",
    description:
      ""
  };

  DepartmentListThree = {
    instanceID: "DepartmentListThree",
    title: "CSI",
    description:
      ""
  };

  DepartmentListFour = {
    instanceID: "DepartmentListFour",
    title: "SAEINDIA",
    description:
      ""
  };

  DepartmentListFive = {
    instanceID: "DepartmentListFive",
    title: "ISHRAE",
    description:
      ""
  };

  DepartmentListSix = {
    instanceID: "DepartmentListSix",
    title: "IGBC",
    description:
      ""
  };

  DepartmentListSeven = {
    instanceID: "DepartmentListSeven",
    title: "IGS",
    description:
      ""
  };

  DepartmentListEight = {
    instanceID: "DepartmentListEight",
    title: "IMS-UNAI-ASPIRE",
    description:
      ""
  };

  render() {
    const { instanceID } = this.props.data;

    return (
      <div className="DepartmentSection" id={instanceID}>
        <HeadingOne data={this.DepartmentSectionTitle} />
       <BodyOne data={this.DepartmentSectionSubTitle} />
        <Link to="/departments/ce" style={{ textDecoration: "none" }}>
          <DepartmentList data={this.DepartmentListOne} />
        </Link>
        <Link to="/departments/cse" style={{ textDecoration: "none" }}>
          <DepartmentList data={this.DepartmentListTwo} />
        </Link>
        <Link to="/departments/ece" style={{ textDecoration: "none" }}>
          <DepartmentList data={this.DepartmentListThree} />
        </Link>
        <Link to="departments/eee" style={{ textDecoration: "none" }}>
          <DepartmentList data={this.DepartmentListFour} />
        </Link>
        <Link to="departments/it" style={{ textDecoration: "none" }}>
          <DepartmentList data={this.DepartmentListFive} />
        </Link>
        <Link to="departments/me" style={{ textDecoration: "none" }}>
          <DepartmentList data={this.DepartmentListSix} />
        </Link>
        <a href="http://www.vjcetmba.in/" style={{ textDecoration: "none" }}>
          <DepartmentList data={this.DepartmentListSeven} />
        </a>
        <Link to="departments/s&h" style={{ textDecoration: "none" }}>
          <DepartmentList data={this.DepartmentListEight} />
    </Link>
      </div>
    );
  }
}

export default DepartmentSection;
