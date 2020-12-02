import React, { Component } from "react";
// import ImageOne from "../Components/Images/ImageOne";
import HeadingOne from "../../Components/Texts/HeadingOne";
import BodyThree from "../../Components/Texts/BodyThree";
import "./Research.css"
import "../../Components/Tables/tableformat.css";
import HeadingThree from "../../Components/Texts/HeadingThree";
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
    // ResearchImg = {
    //     instanceID: "ResearchImg",
    //     image: "cover2-1.jpg",
    //     width: "93%"
    // }
    ResearchHeading = {
        instanceID: "ResearchHeading",
        title: "Profile"
    }
    ReserchBody1 = {
        instanceID: "ReserchBody1",
        title: "Better interaction between Technical Institutions and Industry is the need of the hour. Realizing the relevance and importance of this, Industry Institute Interaction Cell(IIIC)  was formed in VJCET and had intensified its activities. Mr. Vinoj K was appointed as Convener, Industry Institute Interaction Cell with effect from 01.07.2020. He had served as Head of the Department, Department of Mechanical Engineering from 01.02.2011 to 30.11.2019. Now holding the charges of Nodal Officer, IEDC and Coordinator, NISP."
    }
    ReserchBody2 = {
        instanceID: "ReserchBody1",
        title: "IIIC is looking for effective interaction between the industry, research organizations and reputed institutes so as to improve the quality of the technical education and enhance the employability of engineering graduates. It also helps to meet the needs of the industry. Industry Institute Interaction would provide an input to better teaching-learning processes, create awareness among the students about the environment of industry, provide real practical knowledge and self confidence to students. IIIC of VJCET has organized many activities in VJCET from its inception. "
    }
    
    InchargesHeading = {
        instanceID: "InchargesHeading",
        title: "Industry Institute Interaction Team  "
      };
    
   
    render() {
        return (
            <div className="HomePage">
                
                <p align="left"><HeadingOne data={this.ResearchHeading} /></p>
                {/* <ImageOne data={this.ResearchImg}></ImageOne> */}
                <BodyThree data={this.ReserchBody1} /><br />
                <BodyThree data={this.ReserchBody2} /><br />
                
                <HeadingThree data={this.InchargesHeading}></HeadingThree>
                <table id="tableformat">
                            <tr><th>NAME</th><th>DEP DESIGNATION</th><th>IIIC DESIGNATION</th></tr>
                            <tr><td>Mr Vinoj K</td><td>Convener, IIIC</td><td>Convener,  IIIC Coordination Committee</td></tr>
                            <tr><td>Mr Jiby Peter D’Cruz</td><td>Assistant Professor,ECE</td><td>Member, IIIC Coordination Committee</td></tr>
                            <tr><td>Ms  Remya  Paul </td><td>Assistant Professor, CSE</td><td>Member, IIIC Coordination Committee</td></tr>
                            <tr><td>Mr Nibin B </td><td>Assistant Professor-ME</td><td>Member, IIIC Coordination Committee</td></tr>
                            <tr><td>Mrs Tintu Shine A L</td><td>Assistant Professor, CE</td><td>Member, IIIC Coordination Committee</td></tr>
                            <tr><td>Mr Aneesh Kurian  </td><td>Assistant Professor, EEE</td><td>Member, IIIC Coordination Committee</td></tr>
                            <tr><td>Mrs. Diana Baby </td><td>Assistant Professor, IT</td><td>Member, IIIC Coordination Committee</td></tr>
                            <tr><td>Mr Nelson Mathew</td><td>Assistant Professor, MBA</td><td>Member, IIIC Coordination Committee</td></tr>
                            <tr><td>Mr Sanoj Saju</td><td>Placement  Exe.Officer</td><td>Member, IIIC Coordination Committee</td></tr>
                </table>
                             
                
               
                
            </div>
        );
    }
}

export default Profile;