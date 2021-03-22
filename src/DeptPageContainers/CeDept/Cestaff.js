import React, { Component } from "react";
import "./faculty.css";
import FacultyData from "../../Components/FacultyData";
class CEStaff extends Component {
  state = {};
  Cestaff1 = {
    instanceID: "Cestaff1",
    image: "Allstaffphoto/CE/STAF/57.jpg",
    width: "50%",
    name: "Mrs. Simi N U",
    content: "Instructor-Grade II"
  };
  Cefaculty2 = {
    instanceID: "Cefaculty2",
    image: "Allstaffphoto/CE/STAF/59.jpg",
    width: "50%",
    name: "Mr. Jobish K Jose",
    content: "Trade Instructor1"
  };
  Cefaculty3 = {
    instanceID: "Cefaculty3",
    image: "Allstaffphoto/CE/STAF/60.jpg",
    width: "50%",
    name: "Mr. Jibi Jose",
    content: "Tradesman"
  };
  Cefaculty4 = {
    instanceID: "Cefaculty4",
    image: "Allstaffphoto/CE/STAF/61.jpg",
    width: "50%",
    name: "Mr. Wilson V George",
    content: "Tradesman"
  };
  Cefaculty5 = {
    instanceID: "Cefaculty5",
    image: "Allstaffphoto/CE/STAF/62.jpg",
    width: "50%",
    name: "Mr. Biju Joseph",
    content: "Tradesman"
  };
  Cefaculty6 = {
    instanceID: "Cefaculty6",
    image: "Allstaffphoto/CE/STAF/63.jpg",
    width: "50%",
    name: "Mr. Shibu Augustine",
    content: "Tradesman"
  };
  Cefaculty7 = {
    instanceID: "Cefaculty7",
    image: "Allstaffphoto/CE/STAF/64.jpg",
    width: "50%",
    name: "Mr. Mahesh Sankar",
    content: "Tradesman"
  };
  Cefaculty8 = {
    instanceID: "Cefaculty8",
    image: "Allstaffphoto/CE/STAF/393.jpg",
    width: "50%",
    name: "Mrs. Doniya Johnson",
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
            <FacultyData data={this.Cefaculty3} />
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
          <div>
            <FacultyData data={this.Cefaculty8} />
          </div>
        </div>
      </div>
    );
  }
}

export default CEStaff;
