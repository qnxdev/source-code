import React, { Component } from "react";
import FacultyData from "../../Components/FacultyData";
class ITStaff extends Component {
  state = {};
  Cestaff1 = {
    instanceID: "Cestaff1",
    image: "Allstaffphoto/IT/STAF/4.jpg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=ITSTF101" target="_blank" rel="noopener noreferrer">Mrs. Preethy Joseph</a>,
    content: "Computer Programmer"
  };
  Cefaculty2 = {
    instanceID: "Cefaculty2",
    image: "Allstaffphoto/IT/STAF/194.jpg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=ITSTF104" target="_blank" rel="noopener noreferrer">Mr. Shaji A Varghese</a>,
    content: "Trade Instructor"
  };
  Cefaculty11 = {
    instanceID: "Cefaculty11",
    image: "Allstaffphoto/IT/STAF/srcv.jpg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=ITSTF102" target="_blank" rel="noopener noreferrer">Sr. Recy Varghese</a>,
    content: "Computer Programmer"
  };

  render() {
    return (
      <div className="faculty">
        <div className="facultyContent">
          <div>
          <FacultyData data={this.Cestaff1} />
          </div>
          <div>
          <FacultyData data={this.Cefaculty11} />
          </div>          
          <div>
            <FacultyData data={this.Cefaculty2} />
          </div>
        </div>
      </div>
    );
  }
}

export default ITStaff;
