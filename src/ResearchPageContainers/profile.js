import React, { Component } from "react";
//import ImageOne from "../Components/Images/ImageOne";
import HeadingOne from "../Components/Texts/HeadingOne";
import BodyThree from "../Components/Texts/BodyThree";
import "./Research.css"
import "../Components/Tables/tableformat.css";
import HeadingThree from "../Components/Texts/HeadingThree";
//import Profile from "./csi";

class Profile extends Component {
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
    HomePageFooter = {
        instanceID: "HomePageFooter"
    };
    HomePageVisionSection = {
        instanceID: "HomePageVisionSection"
    };
    HomePageFacilitiesSection = {
        instanceID: "HomePageFacilitiesSection"
    };
    
    ResearchHeading = {
        instanceID: "ResearchHeading",
        title: "Profile"
    }
    ReserchBody1 = {
        instanceID: "ReserchBody1",
        title: "The Centre for Research & Development was established in 2010 with Prof. Dr. K Babu Joseph formerly Vice Chancellor Cochin University of Science And Technology (CUSAT) as it’s Dean. He has initiated new ideas to kindle the research interest of the staff and students. Dr. K.T. Mathew, Emeritus Professor and former Principal of the college had taken the charge of the Centre in 2014."
    }
    ReserchBody2 = {
        instanceID: "ReserchBody2",
        title: "Presently it’s headed by Dr. Anishin Raj M. M, Dean R&D, Professor, CSE Dept along with the following team of dedicated and hard working personnel."
    }
    InchargesHeading = {
        instanceID: "InchargesHeading",
        title: "Office-Bearers "
      };
    
   
    render() {
        return (
            <div className="HomePage">
                
                <HeadingOne data={this.ResearchHeading}></HeadingOne>
                {/* <ImageOne data={this.ResearchImg}></ImageOne> */}
                <BodyThree data={this.ReserchBody1} /><br />
                <p>
                    <BodyThree data={this.ReserchBody2} />
                </p>
                <HeadingThree data={this.InchargesHeading}></HeadingThree>
                <table id="tableformat">
                            <tr><th>NAME</th><th>POST</th></tr>
                            <tr><td>Dr. Anishin Raj M.M</td><td>Dean R&D, Professor CSE</td></tr>
                            <tr><td>Dr. Anoop C. K.</td><td>Secretary, Professor, CE</td></tr>
                            <tr><td>Dr. Sony Kurian</td><td>Associate Professor, EEE</td></tr>
                            <tr><td>Dr. Tony D</td><td>Associate Professor, ECE</td></tr>
                            <tr><td>Dr. Sheela V. K</td><td>Associate Professor, IT</td></tr>
                            <tr><td>Mrs. Mayadevi PA</td><td>Assistant Professor, CSE</td></tr>
                            <tr><td>Mrs. Rose Mary Baby</td><td>Assistant Professor, S&H </td></tr>
                            <tr><td>Mr. Arun Raphel </td><td>Assistant Professor-ME</td></tr>
                </table>
                             
                
               
                
            </div>
        );
    }
}

export default Profile;