import React, { Component } from "react";
import FacultyData from "../../Components/FacultyData";
class CSStaff extends Component {
  state = {};
  Cefaculty2 = {
    instanceID: "Cefaculty2",
    image: "Allstaffphoto/CS/STAF/94.jpg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=CSSTF102" target="_blank" rel="noopener noreferrer">Mr. Lijo Mathew</a>,
    content: "Systems Engineer"
  };
  Cefaculty3 = {
    instanceID: "Cefaculty3",
    image: "Allstaffphoto/CS/STAF/95.jpg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=CSSTF103" target="_blank" rel="noopener noreferrer">Mr. Sijo Jose</a>,
    content: "Computer Programmer"
  };
  Cefaculty4 = {
    instanceID: "Cefaculty4",
    image: "Allstaffphoto/CS/STAF/96.jpg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=CSSTF104" target="_blank" rel="noopener noreferrer">Mr. Manoj Francis</a>,
    content: "Computer Programmer"
  };
  Cefaculty5 = {
    instanceID: "Cefaculty5",
    image: "Allstaffphoto/CS/STAF/97.PNG",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=CSSTF105" target="_blank" rel="noopener noreferrer">Mrs. Neethu Joseph</a>,
    content: "Computer Programmer"
  };
  Cefaculty7 = {
    instanceID: "Cefaculty7",
    image: "Allstaffphoto/CS/STAF/99.jpg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=CSSTF107" target="_blank" rel="noopener noreferrer">Mrs. K G Sindhu</a>,
    content: "Instructor Grade II"
  };
  Cefaculty8 = {
    instanceID: "Cefaculty8",
    image: "Allstaffphoto/CS/STAF/100.jpg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=CSSTF108" target="_blank" rel="noopener noreferrer">Mrs. Sheepa Cyriac</a>,
    content: "Instructor Grade II"
  };
  Cefaculty9 = {
    instanceID: "Cefaculty9",
    image: "Allstaffphoto/CS/STAF/101.jpg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=CSSTF109" target="_blank" rel="noopener noreferrer">Mr. Sijo Mathew</a>,
    content: "Jr. System Administrator"
  };
  Cefaculty10 = {
    instanceID: "Cefaculty10",
    image: "Allstaffphoto/CS/STAF/102.jpg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=CSSTF110" target="_blank" rel="noopener noreferrer">Mrs. Joicy K Jose</a>,
    content: "Instructor Grade II"
  };
  Cefaculty11 = {
    instanceID: "Cefaculty11",
    image: "Allstaffphoto/CS/STAF/103.jpg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=CSSTF111" target="_blank" rel="noopener noreferrer">Mr. Jose Thomas</a>,
    content: "Hardware Technician"
  };
  Cefaculty12 = {
    instanceID: "Cefaculty12",
    image: "Allstaffphoto/CS/STAF/104.JPG",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=CSSTF112" target="_blank" rel="noopener noreferrer">Mr. Justin Peter</a>,
    content: "Hardware Technician"
  };
  Cefaculty13 = {
    instanceID: "Cefaculty13",
    image: "Allstaffphoto/CS/STAF/CSSTF113.jpg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=CSSTF113" target="_blank" rel="noopener noreferrer">Mr. Eldhose Paul K</a>,
    content: "Hardware Technician"
  };
  
  render() {
    return (
      <div className="faculty">
        <div className="facultyContent">
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
            <FacultyData data={this.Cefaculty7} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty8} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty9} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty10} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty11} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty12} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty13} />
          </div>
         
        </div>
      </div>
    );
  }
}

export default CSStaff;
