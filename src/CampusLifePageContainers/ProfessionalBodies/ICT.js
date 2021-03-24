import React, { Component } from "react";
import HeadingOne from "../../Components/Texts/HeadingOne";
import BodyThree from "../../Components/Texts/BodyThree";
import "../../Pages/Research.css";
import "../../Components/Tables/tableformat.css";
import HeadingThree from "../../Components/Texts/HeadingThree";
import Header from "../../Components/Header&Footer/Header";
import Footer from "../../Components/Header&Footer/Footer";
import ImageOne from "../../Components/Images/ImageOne";
import MenuOverlay from "../../Components/MenuOverlay/MenuOverlay";

class Ict extends Component {
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
    IedcHeading = {
        instanceID: "IedcHeading",
        title: "Information and Communication Technology Academy"
    }
   
    LogoImagedata = {
        instanceID: "LogoImage",
        image: "ED/ict.png",
        width: "15%"
    }
    IedcBody1 = {
        instanceID: "IedcBody1",
        title: "The Information and Communication Technology Academy of Kerala (ICTAK) is a Social Enterprise created in a Public Private Partnership model (PPP) for imparting ICT skills to the youths of Kerala and improve their employability opportunities in the Industry. It provides training to faculty and students to evolve themselves into next generation teachers and industry ready students. ICTAK do research and offers training programs on diverse streams, ranging from emerging technologies to life skills. VJCET has signed MoU with Information and Communication Technology Academy of Kerala (ICTAK) to help students' improve their technical competency and soft skills, and thereby improve employability quotient in them.  VJCET is a premium member of ICTAK from August 1st 2020. VJCET is also a member of Oracle Academy through ICTAK."
    }
    InchargesHeading = {
        instanceID: "InchargesHeading",
        title: "ICT Team"
      };
      InchargesHeading1 = {
        instanceID: "InchargesHeading",
        title: "Event Details"
      };   
           
    render() {
        return (
            <div className="HomePage">
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />
                <HeadingOne data={this.IedcHeading} />
                <p align="center"><ImageOne data={this.LogoImagedata} /></p>
                {/* <ImageOne data={this.ResearchImg}></ImageOne> */}
                <BodyThree data={this.IedcBody1} /><br />
                <HeadingThree data={this.InchargesHeading} /> 
                
                <div className="inner-para">
                <table id="tableformat">
                            <tr><th>Name</th><th>ICT Designation</th></tr>
                            <tr><td>Mrs. Neenu Daniel (Assistant Professor, CSE)</td><td>Coordinator</td></tr>
                            <tr><td>Mrs. Neethu Joseph (Computer Programmer, CSE)</td><td>Member</td></tr>
                                                        
                </table> 


                </div>
                <HeadingThree data={this.InchargesHeading1} /> 
                
                <div className="inner-para">
                <table id="tableformat">
                            <tr><th width="40px">Sl. No</th><th  width="250px">Event</th><th  width="100px">Date</th><th>Details</th></tr>
                            <tr><td>1</td><td>5 Days XR Boot camp on 2D game development</td><td>20.07.2020-25.07.2020</td><td>XR Bootcamp on 2D game development is a Live Online Training for Students interested in creating gaming applications. ALBERT MANUEL BABY(S4 CS A ) and RIYA JOHN(S4 CS A)  successfully completed the  program.</td></tr>
                            <tr><td>2</td><td>FDP on Salesforce: Become Job ready for developer</td><td>27/07/2020-31/07/2020</td><td>Ms. Preethy Joseph (IT) and  Ms. Neethu Joseph of  (CS)  successfully completed and achieved  prestigious  superbadges in the program.</td></tr> 
                            <tr><td>3</td><td>Salesforce  "Become Job ready for Developer</td><td>15.08.2020-5.12.2020</td><td>Salesforce Developer course is a technology training program facilitated by ICT Academy of Kerala in association with Salesforce inc., that will be of high industry relevance in the present and coming years. 46 Students participated from  IT and  CS</td></tr>
                            <tr><td>4</td><td>AI- ML internship </td><td>3.09.2020-12.09.2020</td><td>10 days Virtual internship on ML AI for graduating students. ICTAK Virtual Internship introduces several fundamental concepts and methods for Machine Learning and Artificial Intelligence.  Students of  IT and CS  participated and were given certificates.</td></tr>
                            <tr><td>5</td><td>Build your Bot</td><td>Launched  on 7.09.2020</td><td> It’s a short term course (Build your Bot) for the student community in process Automation techniques.  Alen Belji(S3 CS ) ,Albin Thomas (S3  CS )  successfully completed the course</td></tr> 
                            <tr><td>6</td><td>FDP on Database Programming with SQL</td><td>15.12.2020-19.12.2020</td><td>This course engages participants to analyze complex business scenarios and create a data model—a conceptual representation of an organization’s information. Mr. Sivadas T Nair ,AP ,CSED has succesfully completed the program</td></tr>
                            <tr><td>7</td><td>LEARN PYTHON BY DEVELOPING A WEBSITE</td><td>5.12.2020-17.12.2020</td><td>Learn Python by Developing a Website is an instructor led Virtual training program offered by ICT Academy of Kerala for Engineering / Science graduating students in Kerala. This program is specially designed for students who are new to the programming world and would like to build their career in Information technology. 7 students  of  CS attended the  10 days program.</td></tr>
                            <tr><td>8</td><td>AI class room series</td><td>14.12.20-19.12.2020</td><td>Microsoft has joined forces with NASSCOM FutureSkills® to deliver Microsoft's AI, machine learning and data science expertise to students through a simulive learning series including demos and live Q A*. First Year AI students attended this program and obtained certificates.</td></tr>
                            <tr><td>9</td><td>Webinar on Introduction to Oracle Academy Primavera P6 Teaching Resources</td><td>25.02.2021</td><td>Jerin Jose,AP, CE  and Appu John,AP ,CE  attended the  Webinar  on Introduction to Oracle Academy Primavera P6 Teaching Resources</td></tr>
                            <tr><td>10</td><td>FDP on Modern Web Application Developmentwith MEAN Stack</td><td>22.02.2021-26.02.21</td><td>This course is packed with practical exercises that are based on real-time requirements which are useful to create MEAN applications. Mrs. Neenu Daniel and Mrs. Ritty Jacob   attended the FDP.</td></tr> 
                </table>


                </div>
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

export default Ict;