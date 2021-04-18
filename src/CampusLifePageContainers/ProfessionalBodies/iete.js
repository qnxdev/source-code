import React, { Component } from "react";
/* import HeadingOne from "../../Components/Texts/HeadingOne"; */
import BodyOneJustified from "../../Components/Texts/BodyOneJustified"

import ImageTwo from "../../Components/Images/imageTwo";
import HeadingThree from "../../Components/Texts/HeadingThree";

import "../../Components/Tables/tableformat.css";
import Header from "../../Components/Header&Footer/Header";
class iete extends Component {
  state = {};
 
  IEEEImage = {
    instanceID: "IEEEImage",
    image: "ProfessionalBodies/iete.jpg",
    width: "15%",    
    
}
GalleryImage = {
  instanceID: "GalleryImage",
  image: "Icons/ImageGallery.gif",
  width: "10%"
}
InchargesHeading = {
  instanceID: "InchargesHeading",
  title: "Office-Bearers"
};
ActivitiesHeading = {
  instanceID: "ActivitiesHeading",
  title: "Student Branch Events"
};
  Features1 = {
    instanceID: "Features1",
    title: "The Institution of Electronics and Telecommunication Engineers (IETE) is India's leading recognized professional society devoted to the advancement of science, technology, electronics, telecommunication and information technology.   IETE Students Forum (ISF) of our college is organizing various programs like workshops, seminars, technical talks and other activities to improve the technical knowledge of students. All IETE members actively participated in different levels of events conducted by our college and other colleges also. "
  };

  render() {
    return (
      <div className="Profile" id="profile">
        
      {/*  <p align="right"><a href="https://vjcet.org/downloads/Gallery/Drishya.html" target="_blank" rel="noopener noreferrer"><ImageTwo data={this.Imagegallerydata} /></a></p> */}
       {/* <HeadingOne data={this.ProfileHeading} />  */}
      {/*  <p align="right"><a href="https://vjcet.org/downloads/Gallery/Drishya.html" target="_blank" rel="noopener noreferrer"><ImageTwo data={this.GalleryImage} /></a></p> */}
      <p align="center"><ImageTwo data={this.IEEEImage} /></p>
        <div className="bodyContainer">
          <p><BodyOneJustified data={this.Features1} /></p>
          <HeadingThree data={this.InchargesHeading} />  
          <table id="tableformat">
                            <tr><th>FACULTY IN CHARGE</th></tr>
                            <tr><td>Mrs. Niji Mathews , AP, ECE</td></tr>
                            <tr><td>Mr. Krishnendu K, AP, ECE</td></tr>
                            
                            </table>
                            <HeadingThree data={this.ActivitiesHeading} /> 
                            <table id="tableformat">
                           
                            <tr><th>#</th><th>Event</th><th>Date</th></tr>
                            <tr><td>1</td><td>Technical talk on ‘Artificial Intelligence’by Mr. Ramesh C R, AP, ECE dept., Vidya Academy of Science & Technology, Trissur</td><td>22/2/2019</td></tr>
                            <tr><td>2</td><td>4 ISF members attended IETE foundation day celebration -2018 </td><td>10/11/18</td></tr>
                            <tr><td>3</td><td>A workshop on’Digital Fabrication – Mini Fab lab</td><td>5/11/18-6/11/18</td></tr>
                            <tr><td>4</td><td>FDP on Digital Fabrication – Fab lab</td><td>18/10/18- 21/10/18</td></tr>
                            <tr><td>5</td><td>A workshop on introduction to ARDUINO Board</td><td>08/09/2018</td></tr>
                           
                            </table>

                            
        </div>
      </div>
    );
  }
}

export default iete;
