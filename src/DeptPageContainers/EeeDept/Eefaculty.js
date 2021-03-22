import React, { Component } from "react";
import FacultyData from "../../Components/FacultyData";
class EEFaculty extends Component {
  state = {};
  Cefaculty1 = {
    instanceID: "Cefaculty1",
    image: "Allstaffphoto/EE/FAC/353.jpg",
    width: "50%",
    name: <a href=" https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=EEFAC130" target="_blank" rel="noopener noreferrer">Dr. B.Aruna</a>,
    content: "Professor & HOD"
  };
  /*Cefaculty2 = {
    instanceID: "Cefaculty2",
    image: "Allstaffphoto/EE/FAC/352.jpg",
    width: "50%",
    name: <a href=" https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=EEFAC104" target="_blank" rel="noopener noreferrer">Dr. K.K. Rajan</a>,
    content: "Professor"
  };*/
  Cefaculty3 = {
    instanceID: "Cefaculty3",
    image: "Allstaffphoto/EE/FAC/108.jpg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=EEFAC102" target="_blank" rel="noopener noreferrer">Dr. Sony Kurian</a>,
    content: "Asso. Prof. & Asst. HOD"
  };
  Cefaculty4 = {
    instanceID: "Cefaculty4",
    image: "Allstaffphoto/EE/FAC/109.jpg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=EEFAC103" target="_blank" rel="noopener noreferrer">Ms. Cini K</a>,
    content: "Assistant Professor"
  };
  Cefaculty5 = {
    instanceID: "Cefaculty5",
    image: "Allstaffphoto/EE/FAC/110.jpg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=EEFAC104" target="_blank" rel="noopener noreferrer">Ms. Seethamma George</a>,
    content: "Assistant Professor"
  };
  Cefaculty6 = {
    instanceID: "Cefaculty6",
    image: "Allstaffphoto/EE/FAC/EEFAC107.jpg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=EEFAC107" target="_blank" rel="noopener noreferrer">Ms. Smitha Jacob</a>,
    content: "Assistant Professor"
  };
  Cefaculty7 = {
    instanceID: "Cefaculty7",
    image: "Allstaffphoto/EE/FAC/EEFAC108.jpg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=EEFAC108" target="_blank" rel="noopener noreferrer">Ms. Mereya Baby</a>,
    content: "Assistant Professor"
  };
  Cefaculty8 = {
    instanceID: "Cefaculty8",
    image: "Allstaffphoto/EE/FAC/115.jpg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=EEFAC109" target="_blank" rel="noopener noreferrer">Mr. Dileepkumar P</a>,
    content: "Assistant Professor"
  };
  Cefaculty9 = {
    instanceID: "Cefaculty",
    image: "Allstaffphoto/EE/FAC/117.jpg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=EEFAC111" target="_blank" rel="noopener noreferrer">Mr. Babu T Chacko</a>,
    content: "Assistant Professor"
  };
  Cefaculty10 = {
    instanceID: "Cefaculty10",
    image: "Allstaffphoto/EE/FAC/EEFAC112.jpg",
    width: "50%",
    name: <a href=" https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=EEFAC112" target="_blank" rel="noopener noreferrer">Mr. Sharone Varghese</a>,
    content: "Assistant Professor"
  };
  Cefaculty11 = {
    instanceID: "Cefaculty11",
    image: "Allstaffphoto/EE/FAC/120.jpg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=EEFAC114" target="_blank" rel="noopener noreferrer">Ms. Jis Jose</a>,
    content: "Assistant Professor"
  };
  Cefaculty12 = {
    instanceID: "Cefaculty12",
    image: "Allstaffphoto/EE/FAC/EEFAC115.jpg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=EEFAC115" target="_blank" rel="noopener noreferrer">Ms. Neena Skaria</a>,
    content: "Assistant Professor"
  };
  Cefaculty13 = {
    instanceID: "Cefaculty13",
    image: "Allstaffphoto/EE/FAC/122.jpg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=EEFAC116" target="_blank" rel="noopener noreferrer">Ms. Breeza Paulose</a>,
    content: "Assistant Professor"
  };
  Cefaculty14 = {
    instanceID: "Cefaculty14",
    image: "Allstaffphoto/EE/FAC/123.jpg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=EEFAC117" target="_blank" rel="noopener noreferrer">Ms. Jane Maria S</a>,
    content: "Assistant Professor"
  };
  Cefaculty15 = {
    instanceID: "Cefaculty15",
    image: "Allstaffphoto/EE/FAC/124.jpg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=EEFAC118" target="_blank" rel="noopener noreferrer">Mr. Jomu M George</a>,
    content: "Assistant Professor"
  };
  Cefaculty16 = {
    instanceID: "Cefaculty16",
    image: "Allstaffphoto/EE/FAC/294.jpg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=EEFAC119" target="_blank" rel="noopener noreferrer">Ms. Neena Alex</a>,
    content: "Assistant Professor(On Leave)"
  };
  Cefaculty17 = {
    instanceID: "Cefaculty17",
    image: "Allstaffphoto/EE/FAC/293.jpg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=EEFAC120" target="_blank" rel="noopener noreferrer">Ms. Seena Paul</a>,
    content: "Assistant Professor"
  };
  
  Cefaculty19 = {
    instanceID: "Cefaculty19",
    image: "Allstaffphoto/EE/FAC/112.jpg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=EEFAC106" target="_blank" rel="noopener noreferrer">Mr. Aneesh Kurian</a>,
    content: "Assistant Professor"
  };

  render() {
    return (
      <div className="faculty">
        <div className="facultyContent">
          <div>
            <FacultyData data={this.Cefaculty1} />
          </div>
          {/*<div>
            <FacultyData data={this.Cefaculty2} />
          </div>*/}
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
            <FacultyData data={this.Cefaculty19} />
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
          <div>
            <FacultyData data={this.Cefaculty11} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty12} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty13} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty14} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty15} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty16} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty17} />
          </div>
  
          
        </div>
      </div>
    );
  }
}

export default EEFaculty;
