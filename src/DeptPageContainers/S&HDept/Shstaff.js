import React, { Component } from "react";
import FacultyData from "../../Components/FacultyData";
class Faculty extends Component {
  state = {};
  Cestaff1 = {
    instanceID: "Cestaff1",
    image: "Allstaffphoto/SH/SH/335.jpg",
    width: "70%",
    name:  <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=SHSTF103" target="_blank" rel="noopener noreferrer">Mrs. Anju Eldhose</a>,
    content: "Demonstrator"
  };
  Cefaculty2 = {
    instanceID: "Cefaculty2",
    image: "Allstaffphoto/SH/SH/336.jpg",
    width: "70%",
    name:  <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=SHSTF104" target="_blank" rel="noopener noreferrer">Mr. Jils Jolly</a>,
    content: "Demonstrator"
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
        </div>
      </div>
    );
  }
}

export default Faculty;
