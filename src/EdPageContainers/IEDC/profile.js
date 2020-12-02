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
        title: "Innovation and Entrepreneurship Development Centre (IEDC) was established in Viswajyothi College of Engineering and Technology (VJCET) and had been successfully functioning for the last three academic years. The mission of the IEDCs is to develop institutional mechanism to create entrepreneurial culture in academic institutions to foster growth of innovation and entrepreneurship amongst the faculty and students . In VJCET, Mr. Vinoj K Associate Professor, Mechanical Engineering is appointed as the nodal officer for IEDC activities. Mr. Robin Augustine, Assistant Professor, Department of S&H, is the Assistant Nodal Officer. An IEDC Coordination Committee is constituted for the current academic year with the participation of students and faculty members from all the departments. Following are the members of the IEDC Coordination Committee for the year 2020-21. The IEDC of VJCET is recognised by Kerala Start-up Mission(KSU) and all activities are carried out with the guidance and support of them"
    }
    ReserchBody2 = {
        instanceID: "ReserchBody1",
        title: "IIIC is looking for effective interaction between the industry, research organizations and reputed institutes so as to improve the quality of the technical education and enhance the employability of engineering graduates. It also helps to meet the needs of the industry. Industry Institute Interaction would provide an input to better teaching-learning processes, create awareness among the students about the environment of industry, provide real practical knowledge and self confidence to students. IIIC of VJCET has organized many activities in VJCET from its inception. "
    }
    
    InchargesHeading = {
        instanceID: "InchargesHeading",
        title: "IEDC Team"
      };
    
   
    render() {
        return (
            <div className="HomePage">
                
                <p align="left"><HeadingOne data={this.ResearchHeading} /></p>
                {/* <ImageOne data={this.ResearchImg}></ImageOne> */}
                <BodyThree data={this.ReserchBody1} /><br />
               
                
                <HeadingThree data={this.InchargesHeading}></HeadingThree>
                <table id="tableformat">
                            <tr><th>Name</th><th>Dept. Designation </th><th>IEDC Designation</th></tr>
                            <tr><td>Mr. Vinoj K</td><td>Associate Professor, ME</td><td>Nodal officer, IEDC</td></tr>
                            <tr><td>Mr. Robin  Augustine</td><td>Asst. Professor, S & H</td><td>Assistant Nodal officer, IEDC</td></tr>
                            <tr><td>Mrs. Nivya Mary Abraham</td><td>Asst. Professor, CE</td><td>CE Dept. Coordinator, IEDC </td></tr>
                            <tr><td>Mrs. Rini Simon</td><td>Asst. Professor, CSE</td><td>CSE Dept. Coordinator, IEDC </td></tr>
                            <tr><td>Mrs. Femy John</td><td>Asst. Professor, ECE</td><td>ECE Dept. Coordinator,IEDC</td></tr>
                            <tr><td>Mr. Jomu  M George </td><td>Asst. Professor, EEE</td><td>EEE Dept. Coordinator, IEDC</td></tr>
                            <tr><td>Dr. Sheela V K</td><td>Associate Professor, IT</td><td>IT Dept. Coordinator,IEDC</td></tr>
                            <tr><td>Mr. Basil Baby </td><td>Asst. Professor, ME</td><td>ME Dept. Coordinator,IEDC</td></tr>
                            <tr><td>Mr. Nelson Mathew </td><td>Asst. Professor, MBA</td><td>MBA Dept. Coordinator,IEDC</td></tr>
                            <tr><td>Mr. Sanoj Saju</td><td>Placement Exe Officer</td><td>Placement Dept Coordinator,IEDC</td></tr>
                            <tr><td>Mr. Basil Eldhose</td><td>Student S5 EEE</td><td>Chief Executive officer</td></tr>
                            <tr><td>Ms. Gayathri Suresh</td><td>Student S7 ECE B</td><td>Chief Operating officer</td></tr>
                            <tr><td>Ms. Devika Sunil</td><td>Student S7 CE B</td><td>Chief Marketing officer</td></tr>
                            <tr><td>Mr. Allen Peter</td><td>Student S7 IT</td><td>Chief Finance officer</td></tr>
                            <tr><td>Mr. Snobin Mathew </td><td>Student S7 ME A</td><td>Chief Technical officer</td></tr>
                            <tr><td>Mr. Amal Dominic </td><td>Student MBA</td><td>Chief Creative Officer </td></tr>
                            <tr><td>Ms. Kavya R</td><td>Student S5 CSE B</td><td>Chief Social Officer</td></tr>
                </table> 
                             
                
               
                
            </div>
        );
    }
}

export default Profile;