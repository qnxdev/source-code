import React, { Component } from "react";
import FacultyData from "../../Components/FacultyData";
class ITFaculty extends Component {
  state = {};
  Cefaculty1 = {
    instanceID: "Cefaculty1",
    image: "Allstaffphoto/IT/FAC/itfac001.jpg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=ITFAC102" target="_blank" rel="noopener noreferrer">Mrs. Anju Susan George</a>,
    content: "Associate Professor and Head of Department"
  };
  Cefaculty2 = {
    instanceID: "Cefaculty2",
    image: "Allstaffphoto/IT/FAC/181.jpg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=ITFAC103" target="_blank" rel="noopener noreferrer">Mrs. Jesline Joseph</a>,
    content: "Assistant Professor"
  };
  Cefaculty3 = {
    instanceID: "Cefaculty3",
    image: "Allstaffphoto/IT/FAC/itfac003.jpeg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=ITFAC105" target="_blank" rel="noopener noreferrer">Mrs. Juliet A Murali</a>,
    content: "Assistant Professor"
  };
  Cefaculty4 = {
    instanceID: "Cefaculty4",
    image: "Allstaffphoto/IT/FAC/itfac002.jpg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=ITFAC106" target="_blank" rel="noopener noreferrer">Mrs. Ann Preetha Jose</a>,
    content: "Assistant Professor"
  };
  Cefaculty5 = {
    instanceID: "Cefaculty5",
    image: "Allstaffphoto/IT/FAC/itfac006.jpg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=ITFAC107" target="_blank" rel="noopener noreferrer">Mrs. Tiny Molly V</a>,
    content: "Assistant Professor"
  };
  Cefaculty6 = {
    instanceID: "Cefaculty6",
    image: "Allstaffphoto/IT/FAC/186.jpg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=ITFAC108" target="_blank" rel="noopener noreferrer">Mr. Prince Kurian</a>,
    content: "Assistant Professor"
  };
  Cefaculty7 = {
    instanceID: "Cefaculty7",
    image: "Allstaffphoto/IT/FAC/itfac005.jpg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=ITFAC109" target="_blank" rel="noopener noreferrer">Mrs. Salini Dev P V</a>,
    content: "Assistant Professor"
  };
  Cefaculty8 = {
    instanceID: "Cefaculty8",
    image: "Allstaffphoto/IT/FAC/188.jpg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=ITFAC110" target="_blank" rel="noopener noreferrer">Mr. Santhanu P Mohan</a>,
    content: "Assistant Professor"
  };
  Cefaculty9 = {
    instanceID: "Cefaculty",
    image: "Allstaffphoto/IT/FAC/189.jpg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=ITFAC111" target="_blank" rel="noopener noreferrer">Mrs. Diana Baby</a>,
    content: "Assistant Professor"
  };
  Cefaculty10 = {
    instanceID: "Cefaculty10",
    image: "Allstaffphoto/IT/FAC/354.jpg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=ITFAC113" target="_blank" rel="noopener noreferrer">Dr. Sheela V.K.</a>,
    content: "Associate Professor"
  };
  

  render() {
    return (
      <div className="faculty">
        <div className="facultyContent">
          <div>
            <FacultyData data={this.Cefaculty1} />
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
          <div>
            <FacultyData data={this.Cefaculty9} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty10} />
          </div>
        </div>
      </div>
    );
  }
}

export default ITFaculty;
