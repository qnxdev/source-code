import React, { Component } from "react";
import FacultyData from "../../Components/FacultyData";
class Faculty extends Component {
  state = {};
  Cestaff1 = {
    instanceID: "Cestaff1",
    image: "Allstaffphoto/EC/STAF/171.jpg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=ECSTF101" target="_blank" rel="noopener noreferrer">Mr. Thankachan P J</a>,
    content: "Instructor Grade II"
  };
  Cefaculty2 = {
    instanceID: "Cefaculty2",
    image: "Allstaffphoto/EC/STAF/172.jpg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=ECSTF102" target="_blank" rel="noopener noreferrer">Mr. Ginu Jose</a>,
    content: "Instructor Grade I"
  };
  Cefaculty4 = {
    instanceID: "Cefaculty4",
    image: "Allstaffphoto/EC/STAF/174.JPG",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=ECSTF104" target="_blank" rel="noopener noreferrer">Mr. Renji Issac</a>,
    content: "Trade Instructor"
  };
  Cefaculty5 = {
    instanceID: "Cefaculty5",
    image: "Allstaffphoto/EC/STAF/175.jpg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=ECSTF105" target="_blank" rel="noopener noreferrer">Mr. Shiju Jose</a>,
    content: "Trade Instructor"
  };
  Cefaculty6 = {
    instanceID: "Cefaculty6",
    image: "Allstaffphoto/EC/STAF/176.jpg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=ECSTF112" target="_blank" rel="noopener noreferrer">Mr. Jekson George</a>,
    content: "Tradesman"
  };
  Cefaculty7 = {
    instanceID: "Cefaculty7",
    image: "Allstaffphoto/EC/STAF/177.jpg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=ECSTF113" target="_blank" rel="noopener noreferrer">Mr. Thomas Mathew</a>,
    content: "Tradesman"
  };
  Cefaculty8 = {
    instanceID: "Cefaculty8",
    image: "Allstaffphoto/EC/STAF/178.jpg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=ECSTF109" target="_blank" rel="noopener noreferrer">Mr. Anish George</a>,
    content: "Tradesman"
  };
  
  render() {
    return (
      <div className="faculty">
        <div className="facultyContent">
          <div>
            <FacultyData data={this.Cestaff1} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty2} />
          </div>
           <div>
            <FacultyData data={this.Cefaculty4} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty5} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty6} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty7} />
          </div>
          {/*<div>
            <FacultyData data={this.Cefaculty8} />
          </div>*/}
        </div>
      </div>
    );
  }
}

export default Faculty;
