import React, { Component } from "react";
import FacultyData from "../../Components/FacultyData";
class CSFaculty extends Component {
  state = {};
  Cefaculty1 = {
    instanceID: "Cefaculty1",
    image: "Allstaffphoto/EE/FAC/352.jpg",
    width: "50%",
    name: <a href=" https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=EEFAC129" target="_blank" rel="noopener noreferrer">Dr. K.K Rajan</a>,
    content: "Principal"
  };
  Cefaculty2 = {
    instanceID: "Cefaculty2",
    image: "Allstaffphoto/EC/FAC/Somypmathew.JPEG",
    width: "50%",
    name: <a href=" https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=ECFAC107" target="_blank" rel="noopener noreferrer">Mr. Somy P Mathew</a>,
    content: "Vice-Principal"
  };
  Cefaculty3 = {
    instanceID: "Cefaculty3",
    image: "Allstaffphoto/ADM/ADM/sunnyjacob.jpg",
    width: "50%",
    name: "Mr. Sunny Jacob",
    content: "Administrative Officer (HG)"
  };
  Cefaculty4 = {
    instanceID: "Cefaculty4",
    image: "Allstaffphoto/ADM/ADM/reenaemmanuel.jpeg",
    width: "50%",
    name: "Mrs. Reena Emmanuel",
    content: "Head Clerk"
  };
  Cefaculty5 = {
    instanceID: "Cefaculty5",
    image: "Allstaffphoto/ADM/ADM/sijumonfrancis.JPEG",
    width: "50%",
    name: "Mr. Sijumon Francis",
    content: "Public Relation Officer"
  };
  Cefaculty6 = {
    instanceID: "Cefaculty6",
    image: "Allstaffphoto/ADM/ADM/rajeshgeorge.JPEG",
    width: "50%",
    name: "Mr. Rajesh George",
    content: "Jr. Superintendent"
  };
  Cefaculty7 = {
    instanceID: "Cefaculty7",
    image: "Allstaffphoto/ADM/ADM/jismygeorge.JPEG",
    width: "50%",
    name: "Mrs. Jismy George",
    content: "Jr. Superintendent"
  };
  Cefaculty8 = {
    instanceID: "Cefaculty8",
    image: "Allstaffphoto/ADM/ADM/jerrinskjoy.JPEG",
    width: "50%",
    name: "Mr. Jerrins K.Joy ",
    content: "Finance Officer"
  };
  Cefaculty9 = {
    instanceID: "Cefaculty",
    image: "Allstaffphoto/ADM/ADM/anithamathew.JPEG",
    width: "50%",
    name: "Mrs. Anitha Mathew",
    content: "UDC (HG)"
  };
  Cefaculty10 = {
    instanceID: "Cefaculty10",
    image: "Allstaffphoto/ADM/ADM/shijajose.JPEG",
    width: "50%",
    name: "Mrs. Shija Jose",
    content: "UDC"
  };
  Cefaculty11 = {
    instanceID: "Cefaculty11",
    image: "Allstaffphoto/ADM/ADM/arunbobyt.JPEG",
    width: "50%",
    name: "Mr. Arun Bobby T",
    content: "UDC"
  };
  Cefaculty12 = {
    instanceID: "Cefaculty12",
    image: "Allstaffphoto/ADM/ADM/jillsvinu.jpeg",
    width: "50%",
    name: "Mrs. Jills Vinu",
    content: "UDC"
  };
  Cefaculty13 = {
    instanceID: "Cefaculty13",
    image: "Allstaffphoto/ADM/ADM/nobymathew.jpeg",
    width: "50%",
    name: "Mr. Noby Mathew",
    content: "Confidential Asst. Grade I"
  };
  Cefaculty14 = {
    instanceID: "Cefaculty14",
    image: "Allstaffphoto/ADM/ADM/EDOuseph.jpg",
    width: "50%",
    name: "Mr. E D Ouseph",
    content: "Work Supervisor"
  };
  Cefaculty15 = {
    instanceID: "Cefaculty15",
    image: "Allstaffphoto/ADM/ADM/JainPVarghese.jpg",
    width: "50%",
    name: "Mr. Jain P Varghese",
    content: "DTP Operator"
  };
  Cefaculty16 = {
    instanceID: "Cefaculty16",
    image: "Allstaffphoto/ADM/ADM/bijuvarghese.jpeg",
    width: "50%",
    name: "Mr. Biju Varghese ",
    content: "Office Asst."
  };
  Cefaculty17 = {
    instanceID: "Cefaculty17",
    image: "Allstaffphoto/ADM/ADM/mdjose.jpeg",
    width: "50%",
    name: "Mr. M D Jose",
    content: "Office Asst."
  };
  Cefaculty18 = {
    instanceID: "Cefaculty18",
    image: "Allstaffphoto/ADM/ADM/jorbinbaby.JPEG",
    width: "50%",
    name: "Mr. Jorbin Baby",
    content: "Office Asst."
  };
  Cefaculty21 = {
    instanceID: "Cefaculty21",
    image: "Allstaffphoto/ADM/ADM/allijohn.jpeg",
    width: "50%",
    name: "Ms. Alli John",
    content: "Class IV"
  };
  
  Cefaculty22 = {
    instanceID: "Cefaculty22",
    image: "Allstaffphoto/ADM/ADM/lisyjose.jpeg",
    width: "50%",
    name: "Mrs. Lisy Jose",
    content: "Class IV"
  };
  Cefaculty23 = {
    instanceID: "Cefaculty23",
    image: "Allstaffphoto/ADM/ADM/ranisabu.jpeg",
    width: "50%",
    name: "Mrs. Rani Sabu",
    content: "Class IV"
  };
  Cefaculty24 = {
    instanceID: "Cefaculty24",
    image: "Allstaffphoto/ADM/ADM/geethadomini.jpeg",
    width: "50%",
    name: "Mrs. Geetha Domini",
    content: "Class IV"
  };
  Cefaculty25 = {
    instanceID: "Cefaculty25",
    image: "Allstaffphoto/ADM/ADM/elsyjoseph.jpeg",
    width: "50%",
    name: "Ms. Elsy Joseph",
    content: "Class IV"
  };
  Cefaculty26 = {
    instanceID: "Cefaculty26",
    image: "Allstaffphoto/ADM/ADM/minithomas.jpeg",
    width: "50%",
    name: "Mrs. Mini Thomas",
    content: "Class IV"
  };
  Cefaculty27 = {
    instanceID: "Cefaculty27",
    image: "Allstaffphoto/ADM/ADM/rosilyjordy.jpeg",
    width: "50%",
    name: "Mrs. Rosily Jordy",
    content: "Class IV"
  };
  Cefaculty28 = {
    instanceID: "Cefaculty28",
    image: "Allstaffphoto/ADM/ADM/alphonsajoy.jpg",
    width: "50%",
    name: "Mrs. Alphonsa Joy",
    content: "Class IV"
  };
  Cefaculty29 = {
    instanceID: "Cefaculty29",
    image: "Allstaffphoto/ADM/ADM/lissysunny.JPG",
    width: "50%",
    name: "Mrs. Lissy Sunny",
    content: "Class IV"
  };
  Cefaculty30 = {
    instanceID: "Cefaculty30",
    image: "Allstaffphoto/ADM/ADM/minibinu.JPG",
    width: "50%",
    name: "Mrs. Mini Binu",
    content: "Class IV"
  };
  Cefaculty31 = {
    instanceID: "Cefaculty31",
    image: "Allstaffphoto/ADM/ADM/ValsaMathew.jpg",
    width: "50%",
    name: "Mrs. Valsa Mathew",
    content: "Class IV"
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
          <div>
            <FacultyData data={this.Cefaculty18} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty21} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty22} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty23} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty24} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty25} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty26} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty27} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty28} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty29} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty30} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty31} />
          </div>
        </div>
      </div>
    );
  }
}

export default CSFaculty;
