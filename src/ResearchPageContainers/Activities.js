import React, { Component } from "react";
// import ImageOne from "../Components/Images/ImageOne";
import HeadingOne from "../Components/Texts/HeadingOne";
import BodyThree from "../Components/Texts/BodyThree";
import BodyOneJustified from "../Components/Texts/BodyOneJustified";
import "./Research.css"

//import Profile from "./csi";

class Profile extends Component {
    state = { showMenu: false };
    openMenu = () => {
        console.log("opening Menu");
        this.setState({ showMenu: true });
    };
    closeMenu = () => {
        this.setState({ showMenu: false });
    };

    HomePageHeader = {
        instanceID: "HomePageHeader"
    };
    HomePageFooter = {
        instanceID: "HomePageFooter"
    };
    HomePageVisionSection = {
        instanceID: "HomePageVisionSection"
    };
    HomePageFacilitiesSection = {
        instanceID: "HomePageFacilitiesSection"
    };
    // ResearchImg = {
    //     instanceID: "ResearchImg",
    //     image: "cover2-1.jpg",
    //     width: "93%"
    // }
    ResearchHeading = {
        instanceID: "ResearchHeading",
        title: "Activities"
    }
    ReserchBody1 = {
        instanceID: "ReserchBody1",
        title: "Some major initiatives taken by Center for Research & development(CRD) are"
    }
    ReserchBody2 = {
        instanceID: "ReserchBody2",
        title: "The project “KISSAN_DHO (Pineapple Planter Machine) by Mr. Sanil Cyriac Mathew, Mr. Sachu Sivaram S, Mr. Jemt K Shaju and Mr. Paoulose Benny Students of S8 ME B selected for a financial support of Rs. 20000/- by KSCSTE TECH FEST INNOVATE 2019. Project Guide: Basil Baby, Assistant professor, MED."
    }
    ReserchBody3 = {
      instanceID: "ReserchBody3",
      title: "The project “Fully Automated Weed Control” by Mr. Aldrin Baby, Mr. Ameer E A, Mr. Kevin G A and Mr. Sagar Vincent, Students of S6 ME A selected for a financial support of Rs. 20000/- by KSCSTE TECH FEST INNOVATE 2019. Project Guide: Mr. Unnikrishnan T.G., Assistant professor, MED."
  }
  ReserchBody4 = {
    instanceID: "ReserchBody4",
    title: "The project “V -REX Fork lifter” by Mr. Albin Paul,  Mr. EldhoseRaju, Mr. Harikrishnan A S and Mr. Jipil P Chettoor, Students of S6 ME B selected for a financial support of Rs. 20000/- by KSCSTE TECH FEST INNOVATE 2019. Project Guide: Mr. EldhoseKurian, Assistant professor, MED."
}
ReserchBody5 = {
  instanceID: "ReserchBody5",
  title: "Dr. K . K Rajan and Dr. B Aruna, “Development of level sensor for Lead-Lithium loop system”, Grant Amount: 33 Lakhs,  Funding Agency: Dept. of Atomic Energy, BRNS:"
}
ReserchBody6 = {
  instanceID: "ReserchBody6",
  title: "Dr   K KRajan, Prof. EEE and Dean III &Shri K Vinoj “Development of Lead - Lithium to Helium Heat Exchanger and Circulation Type Electrical Heater for Heat Exchanger Test Facility”, BRNS  Govt. of India , Grant Amount: 23 Lakhs"
}
ReserchBody7 = {
  instanceID: "ReserchBody7",
  title: "Second National conference titled “National Conference on Emerging Vistas of Engineering and Management” is conducted on March 29 and 30, 2019."
}
ReserchBody8 = {
  instanceID: "ReserchBody8",
  title: "Sanction is accorded by KTU to conduct a sponsored FDP titled “Tools, techniques and models for scientific research”. Coordinators: Dr. Joby George, Dr. Sajan T. John."
}
ReserchBody9 = {
  instanceID: "ReserchBody9",
  title: "An expert Talk on Environmental Problems of Today and How to Tackle? for S1 ME students, 23-10-18, Resource person: Dr. Shaju Thomas, Retired Professor and former HOD of the Postgraduate Dept. of Zoology, Nirmala College."
}
ReserchBody10 = {
  instanceID: "ReserchBody10",
  title: "An expert talks on “Cyber Security” for all mechanical engineering students on 7-11-18. Resource person: Mr. Thalhath PM, Cyber cell officer Aluva."
}
ReserchBody11 = {
  instanceID: "ReserchBody11",
  title: "An alumni talk on “Marine Engineering” for S5 & S7 students on 12th November 2018. Resource person was Mr.Mathaikutty Sunny, 3rd Engineer, Anglo Eastern Ship Management Ltd."
}
ReserchBody12 = {
  instanceID: "ReserchBody12",
  title: "Lecture Meet   on ‘AUTOMOTIVE ELECTRONICS 2020’, Date: 22-11-2018, Resource Person: Mr. KasirajaThangapandian Software Project Manager, Visteon Technical and Services Centre Pvt Ltd, Chennai and Joint Secretary of SAEINDIA Southern Section."
}
ReserchBody13 = {
  instanceID: "ReserchBody13",
  title: "Ist INTERNATIONAL SYMPOSIUM ON INNOVATIVE ENGINEERING PARAGDIMS by SES Department of Mechanical engineering and SES jointly organized international symposium on innovative engineering Paragdims on 3rd – 21st December 2018, Resource Person: Mr. RALPH SCHNEIDER."
}
ReserchBody14 = {
  instanceID: "ReserchBody14",
  title: "An expert talk on “Recent Advances in IC Engines and its Testing”, Date: 01-02-19, Resource Person: Mr. JineshVinayaChandran, HOD, and Department of Automotive Engineering, Little Flower Engineering Institute, Kalamassery."
}
ReserchBody15 = {
  instanceID: "ReserchBody15",
  title: "An expert talk on “Modern trends in Coal – fired Thermal power plants, Date: 13-02-19, Resource Person:   Mr. SushilCherian, Co- Founder and Vice President, Kalki Communication Technologies Pvt Ltd, Kochi."
}
ReserchBody16 = {
  instanceID: "ReserchBody16",
  title: "An invited talk on “Applications of Multimedia in Cinema” was conducted for S5 IT students by Mr. Arun Boss, (Cockroach n’ Cocktail, Chennai) on 15/10/2018 ."
}
ReserchBody17 = {
  instanceID: "ReserchBody17",
  title: "An expert talk on “Introduction to MATLAB” was taken for the students of S7 and S5 IT by Dr. Karthikeyan B., Associate professor, IT Department, VJCET on 16/10/2018"
}
ReserchBody18 = {
  instanceID: "ReserchBody18",
  title: "An expert talk on “  Research challenges in MANETS ”was conducted for the students of S7 IT by Mr. Basil Baby, Assistant professor, CSE Department, VJCET on 23/11/2018 in association with R&D and ISTE"
}
ReserchBody19 = {
  instanceID: "ReserchBody19",
  title: "National Conference: National Conference on Latest Trends in Engineering Computational Methods on March 19th. 11 papers published on this conference. Conference is chaired by Dr. Jubilant. J. Kizhakethottam."
}
ReserchBody20 = {
  instanceID: "ReserchBody20",
  title: "National Seminar: - 2 Day National Seminar on Computer Networking: Scopes and Challenges in Engineering & Technology on 14th and 15th of march 2019."
}
ReserchBody21 = {
  instanceID: "ReserchBody21",
  title: " Conducted a Technical Talk on career guidance and counselling support for S6 CS students by Mr.Baazil Thampi, Rubix Academy on 17th January 2018."
}
ReserchBody22 = {
  instanceID: "ReserchBody22",
  title: "Conducted an FDPon“Frontiers of Computer Applications” by Dr.Resmi N G (Faculty, MITS),Mr.Baazil Thampi,Rubix Academy from 16th July –20th July 2018."
}
ReserchBody23 = {
  instanceID: "ReserchBody23",
  title: "SES- International Symposium on Databaseswas conducted for CSE & IT faculty by Mr. Jurgen Gau from 3-10th DECEMBER, 2018."
}
ReserchBody24 = {
  instanceID: "ReserchBody24",
  title: "FDP on “Embedded Systems and Data Mining” for CSE, IT, ECE faculty by Dr. Aji Joy,MACE,Dr.Resmi N.G,MITS from 7 - 11thJanuary 2019."
}
ReserchBody25 = {
  instanceID: "ReserchBody25",
  title: "Conducted a Motivational Talk on What after B.Tech, for S8 CSE by Mr.Baazil Thampy,Research Scholar,CUSAT on 7th February 2019."
}
ReserchBody26 = {
  instanceID: "ReserchBody26",
  title: "Workshop on “Recent Application Developments and Trends in IT Sector” for S6 CSE by Mr.Fayis, CEO, BITSFORGE Technology, Kochi on 8th February 2019."
}
ReserchBody27 = {
  instanceID: "ReserchBody27",
  title: "React Native: Mobile Application Development Framework for S8 CSE by Mr.Georgekutty George, Managing Director, Lookins Soft Pvt Ltd on 23rd February 2019."
}
ReserchBody28 = {
  instanceID: "ReserchBody28",
  title: "Advanced Engineering Concepts for S6 CSA by Baazil Thampy, Rubix Academy on 13th March 2019."
}
ReserchBody29 = {
  instanceID: "ReserchBody29",
  title: "Latest Trends in Networking and System Administration for S8 CSA by Mr.Dayas Baby, Mind curve Technology Solution was conducted on 14th March 2019."
}
ReserchBody30 = {
  instanceID: "ReserchBody30",
  title: "Server side operations and Linux administrations for S2 CSA & CSB by Mr. TonyTomy, System Engineer TCS was conducted on 18th March 2019."
}
ReserchBody31 = {
  instanceID: "ReserchBody31",
  title: "One day “Project Idea Fest” competition coordinated by department of ECE on 15 November 2018."
}
ReserchBody32 = {
  instanceID: "ReserchBody32",
  title: "One day workshop on “IoT based system design” coordinated by department of ECE on 20 November 2018."
}
ReserchBody33 = {
  instanceID: "ReserchBody33",
  title: "One week faculty development programme on “Computer Architecture & Data Communication” from 17-21 December 2018 organized by department of ECE"
}
ReserchBody34 = {
  instanceID: "ReserchBody34",
  title: "One day workshop on “Robotics & FABLAB” for higher secondary students on 2nd March 2019."
}
ReserchBody35 = {
  instanceID: "ReserchBody35",
  title: "Two day “Android Workshop” conducted for S6 ECEA students during 29-30 March 2019 by Rabbitsquare."
}
ReserchBody36 = {
  instanceID: "ReserchBody36",
  title: "Two day “Android Workshop” conducted for S6 ECEB students during 05-06 April 2019 by Rabbitsquare."
}
ReserchBody37 = {
  instanceID: "ReserchBody37",
  title: "Technical Quiz Competition on October 4th 2018 in association with the R&D and ECE Association.  Aleesha Mariam Chacko and Sreehari S were the Quiz Masters."
}
ReserchBody38 = {
  instanceID: "ReserchBody38",
  title: "Dr. K . K Rajan and Dr. B Aruna, “Development of level sensor for Lead-Lithium loop system”, Grant Amount: 33 Lakhs, Funding Agency: Dept. of Atomic Energy, BRNS: (Project Completed)."
}
ReserchBody39 = {
  instanceID: "ReserchBody39",
  title: "Dr. B Aruna,Dr. K . K Rajan & Shri K Vinoj “Development of Lead - Lithium to Helium Heat Exchanger and Circulation Type Electrical Heater for Heat Exchanger Test Facility”, BRNS Govt. of India , Grant Amount: 29 Lakhs."
}
ReserchBody40 = {
  instanceID: "ReserchBody40",
  title: "Project entitled “AGR-E” by Mr. Firoz S, Mr. Erfan Muhammed CK, Mr. Bilal Shamsudhin, Mr. Sanjay MS Students of S7 ME A project funding of Rs.2,00,000 as Idea grant, Scale up grant and Productisation grant from Kerala Start Up Mission - Project Guide: Mr. Nidheesh K, Assistant professor, MED."
}
ReserchBody41 = {
  instanceID: "ReserchBody41",
  title: "Project entitled “Fully automated Weed Controller” by Mr. Kevin G, Mr. Sagar Vincent, Mr. Aldrin Baby, Mr.Ammer E A of S7 ME A got   project funding of Rs.20,000 under KSCSTE-INNOVATE scheme funded by Kerala State Council for Science Technology and Environment, . Project Guide: Mr. Unnikrishnan T.G, Assistant professors, MED."
}
ReserchBody42 = {
  instanceID: "ReserchBody42",
  title: "Project entitled “Portable Nutmeg Seperator-Nut-X” by Mr. Albin Paul, Mr. Eldhose Raju, Mr.Harikrishnan A S and Mr.Jipil P Chettoor, of S7 ME A got   project funding of Rs.7,000 under Yuva Mastermind  scheme funded by Malayala manorama , Startup Valley -Amaljyothi TBI  . Project Guide: Mr.Eldhose Kurian, Assistant professors, MED."
}
ReserchBody43 = {
  instanceID: "ReserchBody43",
  title: "Project entitled “Portable Nutmeg Seperator-Nut-X” by Mr. Albin Paul,  Mr. Eldhose Raju, Mr.Harikrishnan A S and Mr.Jipil P Chettoor, of S7 ME A got   project funding of Rs.10,000 under Students Project  scheme funded by Kerala State Council for Science Technology and Environment, Project Guide: Mr.Eldhose Kurian, Assistant professors, MED."
}
ReserchBody44 = {
  instanceID: "ReserchBody44",
  title: "Department of Mechanical Engineering received a funding of Rs.18, 43,000 from AICTE under MODERNISATION AND REMOVAL OF OBSOLENSCENCE (MODROBS) scheme for the CNC Milling Machine. Project Coordinator :Dr.Shunmugesh K."
}
ReserchBody45 = {
  instanceID: "ReserchBody45",
  title: "Mrs.Anu C Kunjachan,The Project work, 'ATM Theft Prevention System When Surveillance camera wire is found cut' was sanctioned during the academic year 2019-2020 by Kerala State Council for Science, Technology and Environment (KSCSTE), date of sanction is 16/1/2020 and Amount sanctioned is Rs.10000."
}
ReserchBody46 = {
  instanceID: "ReserchBody46",
  title: "KTU sponsored Faculty Development Programme on ”Geo-Hazards & Disaster Mitigation was organized by Civil Engineering Department in Association with R & D Centre on December 12th-14th2019 and amount sanctioned was Rs.1,50000."
}
ReserchBody47 = {
  instanceID: "ReserchBody47",
  title: "Project entitled “Robotic Assist for Walking Disability” by Mr. Muhammed Salih, Mr. Midhun Babu, Mr. Naveen B, Mr.Anandhu Sabu of S7 ME A got   project funding of Rs.10,000 under Students Project  scheme funded by Kerala State Council for Science Technology and Environment, . Project Guide: Mr.Nibin B, Assistant professors, MED."
}
   
    render() {
        return (
            <div className="HomePage">
                
                <HeadingOne data={this.ResearchHeading}></HeadingOne>
                {/* <ImageOne data={this.ResearchImg}></ImageOne> */}
                <BodyThree data={this.ReserchBody1} /><br />
                
                 <div className="inner-para">
                 <ul>
                        
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody2} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody3} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody4} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody5} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchBody6} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody7} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody8} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody9} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody10} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchBody11} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody12} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody13} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody14} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody15} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchBody16} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody17} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody18} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody19} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody20} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchBody21} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody22} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody23} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody24} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody25} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchBody26} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody27} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody28} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody29} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody30} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody31} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody32} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody33} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody34} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody35} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody36} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody37} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody38} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody39} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody40} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody41} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody42} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody43} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody44} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody45} />
                            </p>
                        </li>
                        <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody46} />
                            </p>
                         </li>
                         <li>
                            <p>
                            <BodyOneJustified data={this.ReserchBody47} />
                            </p>
                        </li>
                                               
                    </ul>
                   </div> 
                   <p align="left" ><b>Recognized Ph.D Guides at Kerala Technology University</b>  
                   <table>
                        <tr><td>Dr. Anishin Raj M.M</td><td>CSE</td></tr>
                        <tr><td>Dr. ShunmugeshK</td><td>ME</td></tr>
                        <tr><td>Dr. Sajan T. John</td><td>ME</td></tr>
                        <tr><td>Dr. Sony Kurian</td><td>EEE</td></tr>                          
                  </table></p>
              </div>
        );
    }
}

export default Profile;