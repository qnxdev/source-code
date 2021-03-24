import React, { Component } from "react";
import "./ResourcesGroup.css";
import ResourcesList from "./LocalContainers/ResourcesList";
import HeadingOne from "../../Components/Texts/HeadingOne";

class ResourcesGroup extends Component {
  ResourcesGroupTitle = {
    instanceID: "ResourcesGroupTitle",
    title: "Academic Downloads"
  };

  ResourceListTwo = {
    instanceID: "ResourceListTwo",
    listID: "One",
    title: "Rules & Regulations",
    icon: "Icons/icon1.svg",
    filePath: "https://vjcetwebadmin.github.io/downloads/Rules.pdf"
  };

  ResourceListThree = {
    instanceID: "ResourceListThree",
    listID: "Two",
    title: "Staff Manual",
    icon: "Icons/icon2.svg",
    filePath: "https://vjcetwebadmin.github.io/downloads/staffmanual2017.pdf"

  };

  ResourceListFour = {
    instanceID: "ResourceListFour",
    listID: "Three",
    title: "AICTE Documents",
    icon: "Icons/icon3.svg",
    filePath: "https://vjcetwebadmin.github.io/downloads/AICTE.pdf"

  };

  ResourceListSix = {
    instanceID: "ResourceListSix",
    listID: "Four",
    title: "Audited Financial Statements",
    icon: "Icons/icon4.svg",
    filePath: "https://vjcetwebadmin.github.io/downloads/Financialstatements.zip"
  };

  ResourceListFive = {
    instanceID: "ResourceListFive",
    listID: "Five",
    title: "IQAC",
    icon: "Icons/icon5.svg",
    filePath: "https://vjcetwebadmin.github.io/downloads/IQAC.pdf"
  };

  ResourceListOne = {
    instanceID: "ResourceListOne",
    listID: "Five",
    title: "Academic Schema",
    icon: "Icons/icon6.svg",
    filePath: "https://vjcetwebadmin.github.io/downloads/AcedemicSchema.pdf"

  };

  render() {
    return (
      <div className="ResourcesGroup">
        <HeadingOne data={this.ResourcesGroupTitle} />
        <div className="ResourcesContainer" id="AboutPageResourcesContainer">
          <ResourcesList data={this.ResourceListOne} />
          <ResourcesList data={this.ResourceListTwo} />
          <ResourcesList data={this.ResourceListThree} />
          <ResourcesList data={this.ResourceListFour} />
          <ResourcesList data={this.ResourceListFive} />
          <ResourcesList data={this.ResourceListSix} />
        </div>
      </div>
    );
  }
}

export default ResourcesGroup;
