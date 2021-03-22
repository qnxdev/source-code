import React, { Component } from "react";
import FacultyData from "../../Components/FacultyData";
class Faculty extends Component {
  state = {};
  Cefaculty1 = {
    instanceID: "Cefaculty1",
    image: "Allstaffphoto/SH/FAC/242.jpg",
    width: "50%",
    name: <a href=" https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=SHFAC101" target="_blank" rel="noopener noreferrer">Mrs. Ann Neetha Sabu</a>,
    content: "Associate Professor"
  };
  Cefaculty3 = {
    instanceID: "Cefaculty3",
    image: "Allstaffphoto/SH/FAC/SHFAC105.jpg",
    width: "50%",
    name: <a href=" https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=SHFAC105" target="_blank" rel="noopener noreferrer">Mrs. Viji George</a>,
    content: "Asst. Prof. & HOD"
  };
  Cefaculty4 = {
    instanceID: "Cefaculty4",
    image: "Allstaffphoto/SH/FAC/246.jpg",
    width: "50%",
    name: <a href=" https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=SHFAC106" target="_blank" rel="noopener noreferrer">Mrs. Anila Elizabeth John</a>,
    content: "Assistant Professor"
  };
  Cefaculty5 = {
    instanceID: "Cefaculty5",
    image: "Allstaffphoto/SH/FAC/SHFAC107.jpg",
    width: "50%",
    name: <a href=" https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=SHFAC107" target="_blank" rel="noopener noreferrer">Mrs. Rose Mary Baby</a>,
    content: "Assistant Professor"
  };
  
  Cefaculty7 = {
    instanceID: "Cefaculty7",
    image: "Allstaffphoto/SH/FAC/249.jpg",
    width: "50%",
    name: <a href=" https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=SHFAC109" target="_blank" rel="noopener noreferrer">Mrs. Jinta Jose</a>,
    content: "Assistant Professor"
  };
  Cefaculty8 = {
    instanceID: "Cefaculty8",
    image: "Allstaffphoto/SH/FAC/SHFAC110.jpg",
    width: "50%",
    name:  <a href=" https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=SHFAC110" target="_blank" rel="noopener noreferrer">Mrs. Ansu Ann Abraham</a>,
    content: "Assistant Professor"
  };
  Cefaculty9 = {
    instanceID: "Cefaculty",
    image: "Allstaffphoto/SH/FAC/251.jpg",
    width: "50%",
    name:  <a href=" https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=SHFAC111" target="_blank" rel="noopener noreferrer">Mrs. Manu Sebastiann</a>,
    content: "Assistant Professor"
  };
  Cefaculty10 = {
    instanceID: "Cefaculty10",
    image: "Allstaffphoto/SH/FAC/252.jpg",
    width: "50%",
    name:  <a href=" https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=SHFAC112" target="_blank" rel="noopener noreferrer">Mr. Tony Augustine</a>,
    content: "Assistant Professor(on Leave-Ph.D)"
  };
  
  Cefaculty12 = {
    instanceID: "Cefaculty12",
    image: "Allstaffphoto/SH/FAC/SHFAC114.jpg",
    width: "50%",
    name:  <a href=" https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=SHFAC114" target="_blank" rel="noopener noreferrer">Mr. Biju George</a>,
    content: "Assistant Professor"
  };
  Cefaculty14 = {
    instanceID: "Cefaculty14",
    image: "Allstaffphoto/SH/FAC/255.jpg",
    width: "50%",
    name: <a href=" https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=SHFAC115" target="_blank" rel="noopener noreferrer">Mrs. Deenu Baby</a>,
    content: "Assistant Professor"
  };
  
  Cefaculty16 = {
    instanceID: "Cefaculty16",
    image: "Allstaffphoto/SH/FAC/329.jpg",
    width: "50%",
    name: <a href=" https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=SHFAC122" target="_blank" rel="noopener noreferrer">Mrs. Dany Sebatian</a>,
    content: "Assistant Professor"
  };
  Cefaculty17 = {
    instanceID: "Cefaculty17",
    image: "Allstaffphoto/SH/FAC/328.png",
    width: "50%",
    name: <a href=" https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=SHFAC123" target="_blank" rel="noopener noreferrer">Mrs. Ashly Jacob</a>,
    content: "Assistant Professor"
  };
  Cefaculty18 = {
    instanceID: "Cefaculty18",
    image: "Allstaffphoto/SH/FAC/331.jpg",
    width: "50%",
    name: <a href=" https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=SHFAC124" target="_blank" rel="noopener noreferrer">Mr. Robin K. Augustine</a>,
    content: "Assistant Professor"
  };
  Cefaculty19 = {
    instanceID: "Cefaculty19",
    image: "Allstaffphoto/SH/FAC/342.jpg",
    width: "50%",
    name:  <a href=" https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=SHFAC126" target="_blank" rel="noopener noreferrer">Mrs. Anitha Rajan</a>,
    content: "Assistant Professor"
  };
  Cefaculty20 = {
    instanceID: "Cefaculty20",
    image: "Allstaffphoto/SH/FAC/johnodakkal.jpg",
    width: "50%",
    name:  <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=SHSTF101" target="_blank" rel="noopener noreferrer">Mr.	John Odackal</a>,
    content: "Assistant Professor"
  };
  render() {
    return (
      <div className="faculty">
        <div className="facultyContent">
          <div>
            <FacultyData data={this.Cefaculty3} />
          </div>
          {/* <div>
            <FacultyData data={this.Cefaculty2} />
          </div> */}
          <div>
            <FacultyData data={this.Cefaculty1} />
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
            <FacultyData data={this.Cefaculty12} />
          </div>
         
          <div>
            <FacultyData data={this.Cefaculty14} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty18} />
          </div>          
          <div>
            <FacultyData data={this.Cefaculty16} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty17} />
          </div>

          <div>
            <FacultyData data={this.Cefaculty19} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty20} />
          </div>
        </div>
      </div>
    );
  }
}

export default Faculty;
