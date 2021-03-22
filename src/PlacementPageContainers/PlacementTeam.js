import React, { Component } from "react";
import FacultyData from "../Components/FacultyData";
class Faculty extends Component {
  state = {};
  
  Cefaculty2 = {
    instanceID: "Cefaculty2",
    image: "Allstaffphoto/PTC/C Mavin.JPG",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=SHFAC119" target="_blank" rel="noopener noreferrer">Mr. C. Mavin</a>,
    content: "Assistant Professor & Placement Officer"
  };
  Cefaculty4 = {
    instanceID: "Cefaculty4",
    image: "Allstaffphoto/PTC/SIBY BABY.jpg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=SHSTF102" target="_blank" rel="noopener noreferrer">Mr. Siby Baby</a>,
    content: "Assistant Placement Officer"
  };
  Cefaculty5 = {
    instanceID: "Cefaculty5",
    image: "Allstaffphoto/PTC/IMG_7641.jpg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=SHSTF105" target="_blank" rel="noopener noreferrer">Mr. Sanoj Saju</a>,
    content: "Assistant Placement Officer"
  };
  Cefaculty6 = {
    instanceID: "Cefaculty6",
    image: "Allstaffphoto/SH/FAC/342.jpg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=SHFAC126" target="_blank" rel="noopener noreferrer">Mrs. Anitha Rajan</a>,
    content: "IQAC Placement Co-ordinator"
  };
  render() {
    return (
      <div className="faculty">
        <div className="facultyContent">
          
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
        </div>
      </div>
    );
  }
}

export default Faculty;
