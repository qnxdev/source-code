import React, { Component } from "react";
import "./csdepartment.css";

import Header from "../../Components/Header&Footer/Header";
import Footer from "../../Components/Header&Footer/Footer";
import MenuOverlay from "../../Components/MenuOverlay/MenuOverlay";
import HeadingOne from "../../Components/Texts/HeadingOne";
import BodyOne from "../../Components/Texts/BodyOne";
import ImageOne from "../../Components/Images/ImageOne";
import SideNav from "../../DeptPageContainers/MeDept/SideNav";

class MeDepartment extends Component {
  state = { showMenu: false };

  openMenu = () => {
    console.log("opening Menu");
    this.setState({ showMenu: true });
  };
  closeMenu = () => {
    this.setState({ showMenu: false });
  };
  HomePageHeader = {
    instanceID: "HomePageHeader"
  };

  HomePageCarouselOne = {
    instanceID: "HomePageCarouselOne"
  };

  HomePageCarouselTwo = {
    instanceID: "HomePageCarouselTwo"
  };

  HomePageCarouselThree = {
    instanceID: "HomePageCarouselThree"
  };

  HomePageDepartmentSection = {
    instanceID: "HomePageDepartmentSection"
  };

  HomePageFacilitiesSection = {
    instanceID: "HomePageFacilitiesSection"
  };

  HomePageVisionSection = {
    instanceID: "HomePageVisionSection"
  };

  HomePageCarouselFour = {
    instanceID: "HomePageCarouselFour"
  };

  HomePageFooter = {
    instanceID: "HomePageFooter"
  };
  HeadingSectionTitle = {
    instanceID: "Headingtext",
    title: "MECHANICAL ENGINEERING"
  };

  HeadingSectionDescription = {
    instanceID: "HeadingSectionDescription",
    title: "Fabricating machines with precision."
  };
  CseImg = {
    instanceID: "CseImg",
    image: "me.png",
    width: "100%"
  };

  render() {
    return (
      <div className="HomePage">
        <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />
        <HeadingOne data={this.HeadingSectionTitle} />
        <BodyOne data={this.HeadingSectionDescription} />
        <ImageOne data={this.CseImg} />
        <SideNav />
        <Footer data={this.HomePageFooter} />
        {this.state.showMenu ? (
          <MenuOverlay closeMenuFunction={this.closeMenu} />
        ) : (
            ""
          )}
      </div>
    );
  }
}

export default MeDepartment;
