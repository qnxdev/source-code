import React, { Component } from "react";
/* import HeadingOne from "../../Components/Texts/HeadingOne"; */
import BodyOneJustified from "../../Components/Texts/BodyOneJustified"

import ImageTwo from "../../Components/Images/imageTwo";
import HeadingThree from "../../Components/Texts/HeadingThree";
import "../../Components/Tables/tableformat.css";
import Header from "../../Components/Header&Footer/Header";
class Profile extends Component {
  state = {};
 
  ISTEImage = {
    instanceID: "ISTEImage",
    image: "ProfessionalBodies/ISTE.png",
    width: "15%"
}
InchargesHeading = {
  instanceID: "InchargesHeading",
  title: "Office-Bearers "
};
ActivitiesHeading = {
  instanceID: "ActivitiesHeading",
  title: "Student Branch Events"
};
  Features1 = {
    instanceID: "Features1",
    title: "Viswajyothi College of Engineering and Technology has become the Institutional Member of ISTE  in the year 2008(Institutional Membership No: IM 1541). We have an active student chapter as well as the faculty chapter. The ISTE student chapter was opened in the year 2007(Membership No KE51)."
  };
  Features2 = {
    instanceID: "Features2",
    title: "Our faculty chapter consists of 110 lifetime members and student chapter has consist of 882 student members."
  };
  Features3 = {
    instanceID: "Features3",
    title: "A Student membership campaign was conducted in the first week of August 2018 and 332 students from various departments has joined ISTE students chapter."
  };

  render() {
    return (
      <div className="Profile" id="profile">
            
      {/*  <p align="right"><a href="https://vjcet.org/downloads/Gallery/Drishya.html" target="_blank" rel="noopener noreferrer"><ImageTwo data={this.Imagegallerydata} /></a></p> */}
       {/* <HeadingOne data={this.ProfileHeading} />  */}
       <p align="center"><ImageTwo data={this.ISTEImage} /></p>

        <div className="bodyContainer">
          <p><BodyOneJustified data={this.Features1} /></p>
          <p><BodyOneJustified data={this.Features2} /></p>
          <p><BodyOneJustified data={this.Features3} /></p>
          <HeadingThree data={this.InchargesHeading} /> 
          <table id="tableformat">
                            <tr><th>POST</th><th>NAME</th></tr>
                            <tr><td>Chariman – ISTE Chapter</td><td>Dr. K.K Rajan, Principal</td></tr>
                            <tr><td>Secretary</td><td>Mr. Prince Kurian, AP IT</td></tr>
                            <tr><td>Jn. Secretary</td><td>Mr. Krishnendu K, AP ECE</td></tr>
                            <tr><td>Treasurer &Student Advisor</td><td>Ms. Sabitha Raju, AP, CSE</td></tr>
          </table>
                            <HeadingThree data={this.ActivitiesHeading} /> 
                            <table id="tableformat">                           
                            <tr><th>Sl. No</th><th>Event</th><th>Date</th></tr>
                            <tr><td>1</td><td>FDP on Frontiers of Computer Science</td><td>18/7/2018-22/7/2018</td></tr>
                            <tr><td>2</td><td>One day hands-on workshop  PCB Design</td><td>8/9/2018</td></tr>
                            <tr><td>3</td><td>One day seminar on Machine Learning by Mr.Gopikrishnan, TCS</td><td>8/9/2019</td></tr>
                            <tr><td>4</td><td>One day hands-on workshop Embedded System using Arduino</td><td>15/10/2018</td></tr>
                            <tr><td>5</td><td>One day hands-on workshop Introduction to MATLAB</td><td>17/10/2018</td></tr>
                            <tr><td>6</td><td>Four days handson workshop on Digital Fabrication</td><td>18/10/2018-21/7/2018</td></tr>
                            <tr><td>7</td><td>Five day workshop on  “Embedded System & Data Mining by Dr.Aji Joy,Assoc.Prof,MA College</td><td>10/1/2019-16/1/2019</td></tr>
                            <tr><td>8</td><td>Workshop and an Awareness Program in Advanced Technologies</td><td>7/2/2019&8/2/2019</td></tr>
                            <tr><td>9</td><td>Workshop on BMW by Mr.Mirash Francis,BMW EVM AUTOKRAFT KOCHI</td><td>20/3/2019&21/3/2019</td></tr>
                            <tr><td>10</td><td>Technical Talk in Bug Bounty programme.</td><td>20/3/2019&21/3/2019</td></tr>
                            <tr><td>11</td><td>Coding competition in C,Java  language.</td><td>20/3/2019&21/3/2019</td></tr>
                            <tr><td>12</td><td>Code Master Coding Competition</td><td>29-03-2019</td></tr>
                            
                            </table>

                            
        </div>
      </div>
    );
  }
}

export default Profile;
