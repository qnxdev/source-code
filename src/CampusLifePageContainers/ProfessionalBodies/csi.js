import React, { Component } from "react";
/* import HeadingOne from "../../Components/Texts/HeadingOne"; */
import BodyOneJustified from "../../Components/Texts/BodyOneJustified"

import ImageTwo from "../../Components/Images/imageTwo";
import HeadingThree from "../../Components/Texts/HeadingThree";
import HeadingFive from "../../Components/Texts/HeadingFive";


import "../../Components/Tables/tableformat.css";
class Profile extends Component {
  state = {};
 
  CSIImage = {
    instanceID: "CSIImage",
    image: "ProfessionalBodies/CSI.png",
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
VisionHeading = {
  instanceID: "VisionHeading",
  title: "Vision"
};
MissionHeading = {
  instanceID: "MissionHeading",
  title: "Mission"
};

  Features1 = {
    instanceID: "Features1",
    title: "One of the vibrant branches of CSI (Computer Society of India) Cochin Chapter initiated by Dr. Sasikumar, Free Software Foundation on 13th February 2009."
  };
  Features2 = {
    instanceID: "Features3",
    title: "Make Software Engineers of global standard who believe in values, creativity and professionalism."
  };
  Features3 = {
    instanceID: "Features3",
    title: "Enable student employability, making stronger, the links between industry and academia through value added courses and out of the box training."
  };
  Features4 = {
    instanceID: "Features4",
    title: "CSI Chapter Organizes knowledge sharing programmes and seminars, new technology oriented talks by experts / allied workshops and HRD courses. Besides, various competitions like website designing, programming, debugging, technical quiz, are also our events that throw open a platform for student participants to measure up to the needs of the time as leaders and organizers."
  };

  render() {
    return (
      <div className="Profile" id="profile">
        
      {/*  <p align="right"><a href="https://vjcet.org/downloads/Gallery/Drishya.html" target="_blank" rel="noopener noreferrer"><ImageTwo data={this.Imagegallerydata} /></a></p> */}
       {/* <HeadingOne data={this.ProfileHeading} />  */}
       <p align="center"><ImageTwo data={this.CSIImage} /></p>

        <div className="bodyContainer">
          <p><BodyOneJustified data={this.Features1} /></p>
          <p><BodyOneJustified data={this.Features4} /></p>
          <HeadingFive data={this.VisionHeading} /> 
          <p><BodyOneJustified data={this.Features2} /></p>
          <HeadingFive data={this.MissionHeading} /> 
          <p><BodyOneJustified data={this.Features3} /></p>
         
          
            <table id="tableformat" >
              <tr><th>Awards</th></tr>
             <tr><td>Longest Continuous SBC Award during 2016-2017</td></tr>
             <tr><td>Best Accredited Student Branch Award during 2016-2017</td></tr>
             <tr><td>Distinguished College Award during 2016-2017 by CSI Mumbai Chapter and IIT Mumbai</td></tr>
             <tr><td>Best Accredited Student Branch Award during 2015-2016 by CSI</td></tr>
             <tr><td>Longest Continuous SBC Award during 2014-2015 by CSI</td></tr>
             <tr><td>Best Active Student Branch Award during 2014-2015 by CSI</td></tr>
             <tr><td>Longest Continuous SBC Award during 2013-2014 by CSI</td></tr>
             <tr><td>Best Accredited Student Branch Award during 2013-2014 by CSI</td></tr>
             
          </table> 
          <HeadingThree data={this.ActivitiesHeading} /> 
                            <table id="tableformat">
                            <tr><th>Sl. No</th><th>Event</th><th>Date</th><th>Resource Person</th></tr>
                            <tr><td>1</td><td>Technical Talk : Software Engineering - Industry Perspective for S7 CSE & S7 IT</td><td>25-09-2018</td><td>Mr. Arun Narayanan, Tata Consultancy Services ,TCS  Centre SEZ Unit,  Infopark PO, Kochi</td></tr>
                            <tr><td>2</td><td>Technical Talk  on Design Thinking for S5 CS & S5 IT</td><td>26-09-2018</td><td>  Mr. Anas K A, Tata Consultancy Services ,TCS  Centre SEZ Unit,  Infopark PO, Kochi</td></tr>
                            <tr><td>3</td><td>Motivating Talk- S7CSE for S3 CS</td><td>4/10/2018</td><td>Ms. Grace Lal, Motivational Speaker and Psychologist</td></tr>
                            <tr><td>4</td><td>Workshop on IoT for S5 CS</td><td>10/10/2018</td><td>Naveen Antony,Pantech</td></tr>
                            <tr><td>5</td><td>Expert Lecture on "Latest Trend in Digital for S7 CS & IT, S5 CS</td><td>26/11/2018</td><td>Sreekumar Ramakrishnan,"Senior Bussiness Consultant, TCS, Cochin</td></tr>
                            <tr><td>6</td><td>International Workshop on Database for CS & IT Faculties</td><td>03-12-2018-10-12-2018</td><td>Mr. Gau, Senior SES Expert, Germany</td></tr>
                            <tr><td>7</td><td>One week FDP on Embedded Systems and Data Mining for CS & IT Faculties</td><td>10-01-2019-16-01-2019</td><td> <li>Dr. Aji Joy (Associate Professor, Dept. ECE, Mar Athanasius College of Engineering, Ernakulam, Kerala)</li> <li>Dr.Anand H S (HOD, Dept. CSE, Muthoot Institute of Technology & Science, Ernakulam Dst, Kerala)</li> <li>Dr.Resmi N G (Assistant Professor, Dept. CSE, Muthoot Institute of Technology & Science, Ernakulam Dst, Kerala)</li> <li>Ms.Sreenu G (Assistant Professor, Dept. CSE, Muthoot Institute of Technology & Science, Ernakulam Dst, Kerala)</li> </td></tr>
                            <tr><td>8</td><td>Workshop on PHP for S4 CS</td><td>28-01-2019-31-01-2019</td><td>Mr Manoj Francis, Programmer CSE</td></tr>
                            <tr><td>9</td><td>Motivational Talk for S8 CS</td><td>1/2/2019</td><td>Rev. Fr. Shinu Sebastian </td></tr>
                            <tr><td>10</td><td>Workshop on IoT for S8 CS</td><td>2/2/2019</td><td>Mr. Naveen Antony, Pantech Solution </td></tr>
                            <tr><td>11</td><td>Motivational talk for S8 & S6 CS</td><td>7/2/2019</td><td>Mr.Baazil Thampy,Research Scholar ,CUSAT</td></tr>
                            <tr><td>12</td><td>Workshop AND Awareness program on Advanced Technologies for S6 CS,IT & EC </td><td>07/02/2019-08/02/2019</td><td>Mr. Mukesh Murali , Data Scientist, Jazeel K., Artificial Intelligence Researcher, Akhil Mohandas, Blockchain Developer from Creopedia Business Intelligence Pvt. Ltd</td></tr>
                            <tr><td>13</td><td>Prayudh'19 Intercollegiate Quiz Competion</td><td>20/02/2019</td><td>NA</td></tr>
                            <tr><td>14</td><td>Workshop AND Awareness program on React Native-Mobile Application Development Framework for S8 CS</td><td>23/02/2019</td><td>Mr. Mr.Georgekutty George, Managing Director, Lookins Soft Pvt Ltd. </td></tr>
<tr><td>15</td><td>CSI STATE LEVEL STUDENT CONVENTION 2019- KEARALA STATE</td><td>12/3/2019</td><td>Prof. (Dr.)  B. Kannan, Chairman of CSI Cochin Chapter </td></tr>
<tr><td>16</td><td>Intercollege Technical Fest on “Bodhi 2K19”</td><td>20/03/2019-21/03/2019</td><td>NA</td></tr>
<tr><td>17</td><td>Hands on session on GIT Vesrion Control System for S4 CS </td><td>3/4/2019</td><td>Mr. Balu M N, Student , S8 CSE</td></tr>
                            </table>

                            
        </div>
      </div>
    );
  }
}

export default Profile;
