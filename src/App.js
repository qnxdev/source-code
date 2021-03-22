import React, { Component } from "react";
import HomePage from "./Pages/HomePage";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import Department from "./Pages/Departments/department";
import CampusLifePage from "./Pages/CampusLifePage";
import collegecounsil from "./CampusLifePageContainers/collegecouncil";
import committees from "./CampusLifePageContainers/committees";

import artsfest from "./CampusLifePageContainers/artsfest";
import sportsfest from "./CampusLifePageContainers/sportsfest";
import techfest from "./CampusLifePageContainers/techfest";
import nss from "./CampusLifePageContainers/nss";
import campusmap from "./CampusLifePageContainers/campusmap";
import Publications from "./CampusLifePageContainers/publications";
import professionalbodies from "./CampusLifePageContainers/ProfessionalBodies/csdepartment";
import ieee from "./CampusLifePageContainers/ProfessionalBodies/ieee";
import iste from "./CampusLifePageContainers/ProfessionalBodies/iste";
import csi from "./CampusLifePageContainers/ProfessionalBodies/csi";
import iete from "./CampusLifePageContainers/ProfessionalBodies/iete";
import igbc from "./DeptPageContainers/CeDept/Profbodies";
import sea from "./CampusLifePageContainers/ProfessionalBodies/saeindia";
import CsDepartment from "./Pages/Departments/csdepartment";
import EeeDepartment from "./Pages/Departments/eeedepartment";
import EcDepartment from "./Pages/Departments/ecdepartment";
import ItDepartment from "./Pages/Departments/itdepartment";
import MeDepartment from "./Pages/Departments/medepartment";
import SHDepartment from "./Pages/Departments/s&hdepartment";
import Admin from "./Pages/Departments/admin";
import honoursPage from "./Pages/HonoursPage";
import PlacementPage from "./Pages/placementpage";
import FacilitiesPage from "./Pages/FacilitiesPage";
import CCC from "./FacilitiesPageContainers/ComputingTechnology/computing";
import building from "./FacilitiesPageContainers/BuildingArea/building";
import powerandbackup from "./FacilitiesPageContainers/PowerandBackup/powerandbackup";
import Library from "./FacilitiesPageContainers/Library/index";
import Hostel from "./FacilitiesPageContainers/Hostel/index";
import Healthandfitness from "./FacilitiesPageContainers/Healthandfitness/index";
import campusamenities from "./Pages/CoreFacilities";
import transportation from "./FacilitiesPageContainers/Transportation/transportation";
import NBA from "./Pages/NBA";
import KeyFunc from "./Pages/KeyFunc";
import ContactUs from "./ContactUsContainers/ContactUs";
import Academics from "./Pages/Academics";
import VisionPage from "./Pages/VisionPage";
import Affliations from "./Pages/Affliations";
import Mandatorydisclosure from "./Pages/mandatorydisclosure";
import SyllabusPage from "./Pages/SyllabusPage";
import Research from "./ResearchPageContainers/csdepartment";
import Mtech from "./Pages/Mtech"
import Phd from "./Pages/Phd"
import Syllabusplan from "./Pages/Syllabusplan";
import Blockchain from "./Pages/Blockchain";
import Newsone from "./Pages/NewsContainers/Newsone";
import Newstwo from "./Pages/NewsContainers/Newstwo";
import Newsthree from "./Pages/NewsContainers/Newsthree";
import Newsfour from "./Pages/NewsContainers/Newsfour";
import Newsfive from "./Pages/NewsContainers/Newsfive";
import Newssix from "./Pages/NewsContainers/Newssix";
import Newsseven from "./Pages/NewsContainers/Newsseven";
import newseight from "./Pages/NewsContainers/Newseight";
import newsnine from "./Pages/NewsContainers/Newsnine";
import Newsten from "./Pages/NewsContainers/Newsten";
import Newsfee from "./Pages/NewsContainers/Feenews";
import Iedc from "./EdPageContainers/IEDC/csdepartment";
import Vbic from "./EdPageContainers/Vbic";
import Iiic from "./EdPageContainers/IIIC/csdepartment";
import Unai from "./EdPageContainers/Unai";
import iqac from "./iqac/profile";
import Notify from "./Components/notify";
import NotiPage from './Pages/Notifications';
import NISP from "./Pages/NISP";

class App extends Component {

  ceProps = {
    HeadingSectionTitle: {
      instanceID: "Headingtext",
      title: "CIVIL ENGINEERING"
    },
    HeadingSectionDescription: {
      instanceID: "HeadingSectionDescription",
      title: "Building future on foundations of excellence"
    },
    CseImg: {
      instanceID: "CseImg",
      image: "DepBannerImages/ce.jpg",
      width: "100%"
    },
    SideNavData: {
      profile: {
        ProfileDescriptionOne: {
          instanceID: "ProfileDescriptionOne",
          title:
            "Consistently ranked as one of the top performers among the colleges affiliated to APJ Abdul KalamTechnological University, the Department maintains academic alliances with several industries and training institutes which help them evolve as socially committed Engineers. We seek to promote the overall growth of every student by way of academic mentoring as well as through provision of avenues for career development and career growth."
        },
        Ceheading: {
          instanceID: "Ceheading",
          title: "Salient Features:"
        },
        Features: [
          {
            instanceID: "Features1",
            title: "•	Well-equipped Laboratories which offer external consultancy services and students’ involvement in the same",
            list: [{
              instanceID: "Features1list1",
              title: "o	Concrete Mix Design"
            },
            {
              instanceID: "Features1list2",
              title: "o	BM&BC Mix Design",
            },
            {
              instanceID: "Features1list3",
              title: "o	Building Material Testing Services"
            },
            {
              instanceID: "Features1list4",
              title: "o	Water Quality Analysis"
            }]
          },
          {
            instanceID: "Features2",
            title: "•	Industry-oriented real-time student projects",
            list: []
          },
          {
            instanceID: "Features3",
            title: "•	Hands-on training sessions on BIM software and allied emerging technologies",
            list: []
          },
          {
            instanceID: "Features4",
            title: "•	Industry internships and interface  vide  III ( Industry-Institute-Interaction ) Cell , MoU  undertaken with industries of prominence in construction sector",
            list: []
          },
          {
            instanceID: "Features5",
            title: "•	Active student professional bodies such as:",
            list: [{
              instanceID: "Feature5list1",
              title: "o	IGBC ( Indian green Building Council)"
            },
            {
              instanceID: "Feature5list2",
              title: "o	IMS ( Indian Meteorological Society) "
            },
            {
              instanceID: "Feature5list3",
              title: "o	IGS (Indian Geotechnical Society) "
            },
            {
              instanceID: "Feature5list4",
              title: "o	UNAI   ( United Nations Academic Impact- ASPIRE)"
            }]
          },
          {
            instanceID: "Features6",
            title: "•	Student internship opportunities at IITs, KILA and other premier institutes ",
            list: []
          },
          {
            instanceID: "Features7",
            title: "•	Involvement with construction projects in the campus through SeC ( Structural Engineering Club) and FABLAB",
            list: []
          },
          {
            instanceID: "Features8",
            title: "•	Avenues for social outreach and inculcation of civic sense ; the department being a TPTA ( Third Party Technical Agency) for PMAY (G)",
            list: []
          },
          {
            instanceID: "Features9",
            title: "•	Student involvement in research initiatives through R&D Cell",
            list: []
          }
        ]
      },
      vision: {
        VisionDescription: {
          instanceID: "VisionDescription",
          title:
            "Building Professionally Competent and Motivated Engineers in the Arena of Civil Engineering with High Professional Ethics"
        },
        Missions: [
          {
            instanceID: "MissionListOne",
            title:
              "1.	To promote a better teaching learning process through academically proficient faculty, full fledged laboratories and excellent infrastructure facilities. "
          },
          {
            instanceID: "MissionListTwo",
            title:
              "2.	To equip the graduates with knowledge, research and practical skills in modern construction practices and techniques."
          },
          {
            instanceID: "MissionListThree",
            title:
              "3.	To inculcate knowledge of sustainability in various domains of Civil Engineering."
          },
          {
            instanceID: "MissionListFour",
            title:
              "4.	To nurture Civil Engineers into ethically strong and responsible leaders to address global challenges through quality education."
          }
        ]
      },
      peo: {
        peo: [
          {
            instanceID: "peoListOne",
            title: "Our Graduates "
          },
          {
            instanceID: "peoListTwo",
            title:
              "1.	Shall tackle the multiple responsibilities of analysis, design and construction of traditional and modern systems in compliance with various codes of practices and to meet the current technical challenges."
          },
          {
            instanceID: "peoListThree",
            title:
              "2.	Shall be proficient in the use of relevant software packages for planning, designing, scheduling, executing and controlling of Civil Engineering projects, with an urge for life-long learning."
          },
          {
            instanceID: "peoListFour",
            title:
              "3.	Shall function effectively with individual capabilities as well as with a collective strength as a professional team with good communication skills."
          }
        ],
        pso: [
          {
            instanceID: "psoListOne",
            title: "Our Graduates shall have"
          },
          {
            instanceID: "psoListTwo",
            title:
              "1.	Ability to utilize Civil Engineering principles and software that are appropriate to solve technical problems; prepare design and construction documents ; create structural systems; produce drawings, reports and quantity estimates related to the Civil Engineering domain."
          },
          {
            instanceID: "psoListThree",
            title:
              "2.	Ability to utilize modern surveying methods for land measurement and/or construction layout and to conduct standardized field /laboratory tests related to Civil Engineering."
          }
        ]
      },
      program: [
        {
          instanceID: "ProgramDescriptionOne",
          title:
            "The Department offers undergraduate program in Civil Engineering with an annual intake of 60 students."
        },
        {
          instanceID: "ProgramDescriptionTwo",
          title:
            "The program was accredited by NBA in 2018."
        },
        {
          instanceID: "ProgramDescriptionThree",
          title: "Civil Engineers are in a privileged and hugely influential position to innovate, design and build a sustainable future."
        },
        {
          instanceID: "ProgramDescriptionFour",
          title: "Civil Engineering Department strives to:"
        },
        {
          instanceID: "List1",
          title: "•	put forth best- rated undergraduate education."
        },
        {
          instanceID: "List2",
          title: "•	offer high-end professional consultancy,excellent work culture and campus atmosphere."
        },
        {
          instanceID: "List3",
          title: "•	inculcate academic integrity and accountability among our faculty as well as students. "
        },
        {
          instanceID: "List4",
          title: "•	cultivate a sense of civic and social responsibility among our students by way of various Forums and Clubs."
        },
        {
          instanceID: "List5",
          title: "•	continue the process of building strong links with the building and construction industry."
        }
      ],
      faculty: {
        faculty: [
          {
            instanceID: "Cefaculty1",
            image: "Allstaffphoto/CE/FAC/cefacultyimg1.JPG",
            width: "50%",
            name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=CEFAC101" target="_blank" rel="noopener noreferrer">Mrs. Shine George</a>,
            content: "Asso. Prof. & HOD"
          },
          {
            instanceID: "Cefaculty2",
            image: "Allstaffphoto/CE/FAC/347.jpg",
            width: "50%",
            name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=CEFAC132" target="_blank" rel="noopener noreferrer">Dr. Anoop C.K.</a>,
            content: "Professor & Asst. HOD"
          },
          {
            instanceID: "Cefaculty24",
            image: "Allstaffphoto/CE/FAC/fac24.jpg", 
            width: "65%", 
            name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=CEFAC144" target="_blank" rel="noopener noreferrer">Dr. Grasius  M. G</a>,
            content: "Professor"
          },
          {
            instanceID: "Cefaculty24",
            image: "Allstaffphoto/CE/FAC/RAVINDRANATH.jpg", 
            width: "65%", 
            name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=CEFAC145" target="_blank" rel="noopener noreferrer">Dr. E. Ravindranath</a>,
            content: "Professor"
          },         
          {
            instanceID: "Cefaculty3",
            image: "Allstaffphoto/CE/FAC/37.JPG",
            width: "50%",
            name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=CEFAC102" target="_blank" rel="noopener noreferrer">Mrs. Tina Jose</a>,
            content: "Assistant Professor",

          },
          {
            instanceID: "Cefaculty4",
            image: "Allstaffphoto/CE/FAC/38.jpg",
            width: "50%",
            name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=CEFAC103" target="_blank" rel="noopener noreferrer">Mrs. Bijimol Joseph</a>,
            content: "Assistant Professor"
          },
          {
            instanceID: "Cefaculty5",
            image: "Allstaffphoto/CE/FAC/39.jpg",
            width: "50%",
            name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=CEFAC104" target="_blank" rel="noopener noreferrer">Mrs. Neena M Joseph</a>,
            content: "Assistant Professor"
          },
          {
            instanceID: "Cefaculty6",
            image: "Allstaffphoto/CE/FAC/40.jpg",
            width: "50%",
            name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=CEFAC105" target="_blank" rel="noopener noreferrer">Mrs. Minu C Joy</a>,
            content: "Assistant Professor"
          },
          {
            instanceID: "Cefaculty7",
            image: "Allstaffphoto/CE/FAC/42.jpg",
            width: "50%",
            name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=CEFAC107" target="_blank" rel="noopener noreferrer">Mrs. Amrutha S</a>,
            content: "Assistant Professor"
          },
          {
            instanceID: "Cefaculty8",
            image: "Allstaffphoto/CE/FAC/45.jpg",
            width: "50%",
            name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=CEFAC110" target="_blank" rel="noopener noreferrer">Mrs. Devina Vipinan</a>,
            content: "Assistant Professor"
          },
          {
            instanceID: "Cefaculty",
            image: "Allstaffphoto/CE/FAC/46.jpg",
            width: "50%",
            name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=CEFAC111" target="_blank" rel="noopener noreferrer">Mr. Appu John</a>,
            content: "Assistant Professor"
          },
          {
            instanceID: "Cefaculty10",
            image: "Allstaffphoto/CE/FAC/47.jpg",
            width: "50%",
            name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=CEFAC112" target="_blank" rel="noopener noreferrer">Mr. Lins Paul Kuriakose</a>,
            content: "Assistant Professor"
          },
          {
            instanceID: "Cefaculty11",
            image: "Allstaffphoto/CE/FAC/49.jpg",
            width: "50%",
            name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=CEFAC114" target="_blank" rel="noopener noreferrer">Mrs. Tintu Shine A L</a>,
            content: "Assistant Professor"
          },
          {
            instanceID: "Cefaculty12",
            image: "Allstaffphoto/CE/FAC/50.jpg",
            width: "50%",
            name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=CEFAC115" target="_blank" rel="noopener noreferrer">Mrs. Jerin Jose</a>,
            content: "Assistant Professor"
          },
          {
            instanceID: "Cefaculty14",
            image: "Allstaffphoto/CE/FAC/283.jpg",
            width: "50%",
            name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=CEFAC118" target="_blank" rel="noopener noreferrer">Mrs. Nivya Mary Abraham</a>,
            content: "Assistant Professor(on Leave-Ph.D)"
          },
          {
            instanceID: "Cefaculty15",
            image: "Allstaffphoto/CE/FAC/296.jpg",
            width: "50%",
            name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=CEFAC122" target="_blank" rel="noopener noreferrer">Mrs. Anu Paul</a>,
            content: "Assistant Professor"
          },
          {
            instanceID: "Cefaculty17",
            image: "Allstaffphoto/CE/FAC/311.JPG",
            width: "50%",
            name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=CEFAC125" target="_blank" rel="noopener noreferrer">Mrs. Soumya Rani P. Thomas</a>,
            content: "Assistant Professor"
          },
          {
            instanceID: "Cefaculty18",
            image: "Allstaffphoto/CE/FAC/312.jpg",
            width: "50%",
            name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=CEFAC126" target="_blank" rel="noopener noreferrer">Ms. Rose Mary Xavier</a>,
            content: "Assistant Professor"
          },
          {
            instanceID: "Cefaculty21",
            image: "Allstaffphoto/CE/FAC/366.jpg",
            width: "50%",
            name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=CEFAC134" target="_blank" rel="noopener noreferrer">Mr. Vishnu Krishnan</a>,
          content: "Assistant Professor(on Leave-Ph.D)"
          },
          {
            instanceID: "Cefaculty22",
            image: "Allstaffphoto/CE/FAC/384.jpg",
            width: "50%",
            name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=CEFAC136" target="_blank" rel="noopener noreferrer">Mr. Basil Baby</a>,
            content: "Assistant Professor(on Leave-Ph.D)"
          },
          {
            instanceID: "Cefaculty22",
            image: "Allstaffphoto/CE/FAC/385.jpg",
            width: "50%",
            name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=CEFAC137" target="_blank" rel="noopener noreferrer">Mrs. Nisa Ann Mathew</a>,
            content: "Assistant Professor"
          },
          {
            instanceID: "Cefaculty22",
            image: "Allstaffphoto/CE/FAC/389.jpg",
            width: "50%",
            name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=CEFAC138" target="_blank" rel="noopener noreferrer">Mrs. Finu John</a>,
            content: "Assistant Professor"
          },
          {
            instanceID: "Cefaculty23",
            image: "Allstaffphoto/CE/FAC/394.jpg",
            width: "50%",
            name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=CEFAC139" target="_blank" rel="noopener noreferrer">Mrs. Ancy Genu C.George</a>,
            content: "Assistant Professor"
          }
        ],
        staff: [
          {
            instanceID: "Cestaff1",
            image: "Allstaffphoto/CE/STAF/57.jpg",
            width: "50%",
            name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=CESTF101" target="_blank" rel="noopener noreferrer">Mrs. Simi N U</a>,
            content: "Instructor-Grade II"
          },
          {
            instanceID: "Cefaculty2",
            image: "Allstaffphoto/CE/STAF/59.jpg",
            width: "50%",
            name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=CESTF103" target="_blank" rel="noopener noreferrer">Mr. Jobish K Jose</a>,
            content: "Trade Instructor"
          },
          {
            instanceID: "Cefaculty3",
            image: "Allstaffphoto/CE/STAF/60.jpg",
            width: "50%",
            name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=CESTF110" target="_blank" rel="noopener noreferrer">Mr. Jibi Jose</a>,
            content: "Tradesman"
          },
          {
            instanceID: "Cefaculty4",
            image: "Allstaffphoto/CE/STAF/61.jpg",
            width: "50%",
            name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=CESTF111" target="_blank" rel="noopener noreferrer">Mr. Wilson V George</a>,
            content: "Tradesman"
          },
          {
            instanceID: "Cefaculty5",
            image: "Allstaffphoto/CE/STAF/62.jpg",
            width: "50%",
            name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=CESTF113" target="_blank" rel="noopener noreferrer">Mr. Biju Joseph</a>,
            content: "Tradesman"
          },
          {
            instanceID: "Cefaculty6",
            image: "Allstaffphoto/CE/STAF/63.jpg",
            width: "50%",
            name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=CESTF114" target="_blank" rel="noopener noreferrer">Mr. Shibu Augustine</a>,
            content: "Tradesman"
          },
          {
            instanceID: "Cefaculty7",
            image: "Allstaffphoto/CE/STAF/64.jpg",
            width: "50%",
            name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=CESTF108" target="_blank" rel="noopener noreferrer">Mr. Mahesh Sankar</a>,
            content: "Tradesman"
          },
          {
            instanceID: "Cefaculty8",
            image: "Allstaffphoto/CE/STAF/393.jpg",
            width: "50%",
            name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=CESTF109" target="_blank" rel="noopener noreferrer">Mrs. Doniya Johnson</a>,
            content: "Tradesman"
          }
        ]
      },
      library: {
        DeptLibDescriptionOne: {
          instanceID: "DeptLibDescriptionOne",
          title:
            "In addition to the Central Library, a dedicated Department Library is functioning for the benefit of staff members and students. The library is solely intended for referral purposes. No issue of books is done. Students or faculty members can access the books and refer them within the library. The e-library facility of the central library is also made accessible in the Department Library. The library functions from 8:45 am to 4:30 pm."
        }
      },
      assosn: {
        desc: [
          {
            instanceID: "DeptAssociationDescriptionOne",
            title:
              "The Civil Engineering Students’ Association “CIVISTA” plays a pivotal role in the development of students as engineers by various out-of-curriculum and extra-curricular activities. "
          },
          {
            instanceID: "DeptAssociationDescriptionTwo",
            title:
              "It aims to inculcate among its members an awareness and appreciation of the various disciplines of not just Civil Engineering but also other relevant fields. Various academic activities and technical talks are being organized on behalf of Civil Engineering Association. "
          },
          {
            instanceID: "DeptAssociationDescriptionThree",
            title: "CIVISTA has 26 Faculty members, 8 Technical staff and 443 students on its roll. "
          },
          {
            instanceID: "DeptAssociationDescriptionFour",
            title:
              "CIVISTA involves in various Curriculum Enrichment Programs and Social Outreach Programs:"
          }],
        list: [
          {
            instanceID: "List1",
            title: "•	EXTERNAL CONSULTANCY SERVICES"
          },
          {
            instanceID: "List2",
            title: "•	SEC ∞"
          },
          {
            instanceID: "List3",
            title: "•	MINDSPARK "
          },
          {
            instanceID: "List4",
            title: "•	ROOPAREKHA"
          },
          {
            instanceID: "List5",
            title: "•	SOCIAL OUT REACH PROGRAMS"
          }
        ]
      },
      result: {
        heading: {
          instanceID: "CehonoursHeading",
          title: "honours of Civil Engineering"
        },
        honours: [
          {
            instanceID: "cshonours1",
            image: "honours/cehonour1.jpg",
            width: "30%",
            name: "Mariamol Mathew",
            content:
              "Secured Tenth Rank in B.Tech Civil Engineering May 2018"
          }
        ]
      },
      outreach: {
        list: [
          {
            instanceID: "List1Title",
            title: "EXTERNAL CONSULTANCY SERVICES",
            list: [{
              instanceID: "List1Content",
              title: "To provide an interface for students with the industry, we offer external consultancy services through our well-equipped Laboratories with students’ involvement in the same."
            },
            {
              instanceID: "List1Content1",
              title: "o	Concrete Mix Design"
            },
            {
              instanceID: "List1Content2",
              title: "o	BM & BC Mix Design"
            },
            {
              instanceID: "List1Content3",
              title: "o	Building material testing services"
            }, {
              instanceID: "List1Content4",
              title: "o	Water Quality Analysis"
            },
            ]
          },
          {
            instanceID: "List2Title",
            title: "SEC ∞",
            list: [{
              instanceID: "List2Content",
              title: "Structural Engineering Club of the Department aims to bridge the gap between academics and real time practices in the industry. The objective is to expose students to the prevalent techniques and practices in the domain of Structural Engineering. The club activities include Design projects, technical talks, group discussion and site visits."
            }]
          },
          {
            instanceID: "List3Title",
            title: "MINDSPARK",
            list: [
              {
                instanceID: "List3Content",
                title: "‘Mindspark’ is a curriculum enrichment program where the final year students deliver lectures for junior students addressing the innovative techniques and challenges in the contemporary Civil Engineering arena. The outcomes of the discussion are also meant to prompt the students with innovative ideas to replace the inept practices and complex methodologies adopted in construction industry."
              }

            ]
          },
          {
            instanceID: "List4Title",
            title: "INDUSTRY INSTITUTE INTERACTION CELL",
            list: [{
              instanceID: "List4Content",
              title: "Better interaction between Technical institutions and industry is the need of the hour. This will have great bearing on the Engineering Curriculum and provides exposure to industrial atmosphere for engineering students and subsequent placement of young graduating engineers in industries across the country. III Cell has organised several events to nurture the industry institute interaction at VJCET in association with institute and department level entities. "
            }]
          },
          {
            instanceID: "List5Title",
            title: "ROOPAREKHA",
            list: [{
              instanceID: "List5Content",
              title: "‘Rooparekha’ is an initiative from the Department to assist in preparation of plans, submission of drawings and estimates to cater to the Economically Weaker Sections (EWS) and Low Income Groups (LIG) beneficiaries of the neighbouring panchayaths."
            }]
          },
          {
            instanceID: "List6Title",
            title: "SOCIAL OUT REACH PROGRAMS",
            list: [{
              instanceID: "List6Content",
              title: "The Department is chosen as TPTA (Third Party Technical Agency) and Nodal centre for PMAY-G (Pradhan MantriAwasYojna-Gramin). Students can partake in projects and programs initiated under PMAY-G."
            }]
          }
        ]
      },
      profbody: [
        {
          title: {
            instanceID: "List1Title",
            title: "IGBC"
          },
          content: {
            instanceID: "List1Content",
            title: "The student chapter of Indian Green Building Council at VJCET is a part of the Confederation of Indian Industry. The individual members would work along with the esteemed community of green building professionals who facilitate the nation to be one among the global leaders in sustainable built environment. "
          }
        },
        {
          title: {
            instanceID: "List2Title",
            title: "IGS"
          }, content: {
            instanceID: "List2Content",
            title: "The Indian Geotechnical Society student chapter aims at promoting co-operation for the advancement and dissemination of knowledge in the fields of Soil Mechanics, Foundation Engineering, Soil Dynamics, Engineering Geology, and allied fields and their practical applications."
          }
        },
        {
          title:
          {
            instanceID: "List3Title",
            title: "IMS"
          },
          content: {
            instanceID: "List3Content",
            title: "Indian Meterological Society student chapter is constituted for the dissemination of knowledge on meteorological and allied sciences   It aims for the promotion of application of these to various constructive human activities such as agriculture and land uses, irrigation and power development, navigation of sea and air, engineering and technology and public health."
          }
        },
        {
          title: {
            instanceID: "List4Title",
            title: "UNAI-ASPIRE (Action by Students to Promote Innovation and Reform through Education)"
          },
          content: {
            instanceID: "List5Content",
            title: "-The United Nations Academic Impact (UNAI) is a global initiative that aligns institutions of higher education with the United Nations in furthering the realization of the purposes and mandate of the Organization through activities and research in a shared culture of intellectual social responsibility. ASPIRE is a student-driven initiative and actively embodies UNAI’s principles within student communities around the world. Operating locally within their communities, the activities of each ASPIRE group contributes to UNAI’s overall message of unity and action to address global challenges."
          }
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <Notify />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/about/accreditation" component={NBA} />
              <Route exact path="/about/keyfunctionaries" component={KeyFunc} />
              <Route exact path="/about/vision" component={VisionPage} />
              <Route exact path="/about/affliations" component={Affliations} />
              <Route exact path="/about/mandatorydisclosure" component={Mandatorydisclosure} />
              <Route exact path="/academics/courses-offered" component={Academics} />
              <Route exact path="/academics/syllabus" component={SyllabusPage} />
              <Route exact path="/academics/honours" component={honoursPage} />
              <Route exact path="/facilities" component={FacilitiesPage} />
              <Route exact path="/campus-life" component={CampusLifePage} />
              <Route exact path="/campus-life/collegecouncil" component={collegecounsil} />
              <Route exact path="/campus-life/committees" component={committees} />
              <Route exact path="/campus-life/artsfest" component={artsfest} />
              <Route exact path="/campus-life/sportsfest" component={sportsfest} />
              <Route exact path="/campus-life/techfest" component={techfest} />
              <Route exact path="/campus-life/nss" component={nss} />
              <Route exact path="/campus-life/campusmap" component={campusmap} />
              <Route exact path="/campus-life/publications" component={Publications} />
              <Route exact path="/campus-life/professionalbodies" component={professionalbodies} />
              <Route exact path="/campus-life/professionalbodies/ieee" component={ieee} />
              <Route exact path="/campus-life/professionalbodies/iste" component={iste} />
              <Route exact path="/campus-life/professionalbodies/csi" component={csi} />
              <Route exact path="/campus-life/professionalbodies/igbc" component={igbc} />
              <Route exact path="/campus-life/professionalbodies/sae" component={sea} />
              <Route exact path="/campus-life/professionalbodies/iete" component={iete} />
              <Route exact path="/notifications" component={NotiPage} />



              <Route exact path="/departments/cse" component={CsDepartment} />
              <Route exact path="/departments/ce" ><Department data={this.ceProps} /></Route>
              <Route exact path="/departments/admin" component={Admin} />
              <Route exact path="/departments/eee" component={EeeDepartment} />
              <Route exact path="/departments/ece" component={EcDepartment} />
              <Route exact path="/departments/it" component={ItDepartment} />
              <Route exact path="/departments/me" component={MeDepartment} />
              <Route exact path="/departments/s&h" component={SHDepartment} />
              <Route exact path="/placement" component={PlacementPage} />
              <Route exact path="/facilities/core-facilities" component={FacilitiesPage} />
              <Route exact path="/facilities/ccc" component={CCC} />
              <Route exact path="/facilities/building" component={building} />
              <Route exact path="/facilities/library" component={Library} />
              <Route exact path="/facilities/powerandbackup" component={powerandbackup} />
              <Route exact path="/facilities/hostel" component={Hostel} />
              <Route exact path="/facilities/healthandfitness" component={Healthandfitness} />
              <Route exact path="/facilities/campusamenities" component={campusamenities} />
              <Route exact path="/facilities/transportation" component={transportation} />
              <Route exact path="/contact" component={ContactUs} />
              <Route exact path="/r&d" component={Research} />
              <Route exact path="/admission/mtech" component={Mtech} />
              <Route exact path="/admission/phd" component={Phd} />
              <Route exact path="/academics/Syllabusplan" component={Syllabusplan} />
              <Route exact path="/KBAIC_125" component={Blockchain} />
              <Route exact path="/newsone" component={Newsone} />
              <Route exact path="/newstwo" component={Newstwo} />
              <Route exact path="/newsthree" component={Newsthree} />
              <Route exact path="/newsfour" component={Newsfour} />
              <Route exact path="/newsfive" component={Newsfive} />
              <Route exact path="/newssix" component={Newssix} />
              <Route exact path="/newsseven" component={Newsseven} />
              <Route exact path="/newseight" component={newseight} />
              <Route exact path="/newsnine" component={newsnine} />
              <Route exact path="/newsten" component={Newsten} />
              <Route exact path="/newsfee" component={Newsfee} />

              <Route exact path="/ed/iedc" component={Iedc} />
              <Route exact path="/ed/v-bic" component={Vbic} />
              <Route exact path="/ed/iiic" component={Iiic} />
              <Route exact path="/ed/unai" component={Unai} />
              <Route exact path="/iqac" component={iqac} />
              <Route exact path="/nisp" component={NISP} />
            </Switch>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;

/*csProps = {
    HeadingSectionTitle: {
      instanceID: "Headingtext",
      title: "COMPUTER SCIENCE ENGINEERING"
    },
    HeadingSectionDescription: {
      instanceID: "HeadingSectionDescription",
      title: "Debugging the possibilities through intelligence"
    },
    CseImg: {
      instanceID: "CseImg",
      image: "DepBannerImages/cs.jpg",
      width: "100%"
    },
    SideNavData:
    {
      profile:
      {
        ProfileDescription: {
          instanceID: "ProfileDescription",
          title:
            "The Department of Computer Science is envisioned to prepare competent, creative and innovative Computer Scientists who would be capable of meeting the challenges posed by these burgeoning knowledge disciplines.The Department of Computer Science and Engineering (CSE) was founded in 2001. B.Tech Computer Science Engineering program is accredited by NBA on June 2018 for three years.The annual intake of the B. Tech. program is 120 students and that of the M. Tech. is 24."
        },
        Ceheading: {
          instanceID: "Ceheading",
          title: "Salient Features:"
        },
        Features: [
          {
            instanceID: "Features1",
            title: "•	Started in the year 2001, the Department of Computer Science & Engineering offers both undergraduate (B. Tech.) and postgraduate (M. Tech.) programs."
          },

          {
            instanceID: "Features2",
            title: "•	B.Tech Computer Science Engineering program is accredited by NBA on July 2018 for three years."
          },
          {
            instanceID: "Features3",
            title: "•	Good Academic result and appreciable placements at MNCs like Google, Microsoft, Infosys, TCS.."
          },
          {
            instanceID: "Features4",
            title: "•	Smart class rooms, well equipped labs, R&D centre and well stocked Library."
          },
          {
            instanceID: "Features5",
            title: "•	Well qualified, skilled and dedicated teachers who are keen in academic research. (Apart from the existing PhD holders 11 faculty members are doing the same course)."
          },
          {
            instanceID: "Features6",
            title: "•	Steady effort to promote student initiatives like entrepreneurship, startups."
          },
          {
            instanceID: "Features7",
            title: "•	Technical and softskill training, activities and fests with the support of Professional bodies – CSI, ISTE, IEEE and industrialists"
          },
          {
            instanceID: "Features8",
            title: "•	Computer Society of India (CSI) student branch won the ‘Best Accredited Student Branch’ for the last four consecutive years."
          },
          {
            instanceID: "Features9",
            title: "•	Collaborated with Senior Experten Service (SES) Germany for knowledge sharing in an international interdisciplinary platform."
          },
        ],
      },
      vision:
      {
        VisionDescription:
        {
          instanceID: "VisionDescription",
          title:
            "Moulding socially responsible and professionally competent Computer Engineers to adapt to the dynamic technological landscape"
        },
        Missions:[
          {
            instanceID: "MissionListOne",
            title:
              "1.	Foster the principles and practices of computer science to empower life-long learning and   build careers in software and hardware development."
          },{
            instanceID: "MissionListTwo",
            title:
              "2.  Impart value education to elevate students to be successful, ethical and effective problem-solvers to serve the needs of the industry, government, society and the scientific community."
          },{
            instanceID: "MissionListThree",
            title:
              "3.  Promote industry interaction to pursue new technologies in Computer Science and provide excellent infrastructure to engage faculty and students in scholarly research activities."
          },
        ],
      },
      peo:
      {
        peoListOne:
        {
          instanceID: "peoListOne",
          title: "Our Graduates "
        },
        peoListTwo:
        {
          instanceID: "peoListTwo",
          title:
            "1.	Shall have creative and critical reasoning skills to solve technical problems ethically and responsibly to serve the society."
        },
        peoListThree:
        {
          instanceID: "peoListThree",
          title:
            "2.	Shall have competency to collaborate as a team member and team leader to address social, technical and engineering challenges."
        },
        peoListFour:
        {
          instanceID: "peoListFour",
          title:
            "3.	Shall have ability to contribute to the development of the next generation of information technology either through innovative research or through practice in a corporate setting."
        },
        peoListFive:
        {
          instanceID: "peoListFive",
          title:
            "4.	Shall have potential to build start-up companies with the foundations, knowledge and experience they acquired from undergraduate education."
        },
      },
      program:
      {
        ProgramDescriptionOne:
        {
          instanceID: "ProgramDescriptionOne",
          title:
            "Department of Computer Science and Engineering is offering both Under graduate and Post graduate courses in Computer Science and Engineering. The total intake in Undergraduate course is 120 per batch and for Post graduation 18 per batch."
        },
        ProgramDescriptionTwo:
        {
          instanceID: "ProgramDescriptionTwo",
          title:
            "The Under Graduate program started in the year 2001 with an intake of 60 students per batch. Later in July 2007 the intake is amplified to 120 students per batch. In the year 2010 Postgraduate program in Computer Science and Engineering with an intake of 18 students per batch has started. The Department is accredited by National Board of Accreditation (NBA) of AICTE in June 2010. Also the Department applied for NBA accreditation in 2017 and is accredited by NBA on July 2018 for three years."
        },
      },
      faculty:
      {
        OnClickFac: () => {
          this.setState
            ({
              showfaculty: true,
              showstaff: false
            });
        },
        OnClickStaff = () => {
          this.setState
            ({
              showfaculty: false,
              showstaff: true
            });
        },
        render() {
          return (
            <div class="facultyNav">
              <input
                type="button"
                value="Faculty"
                class="buttongraph"
                onClick={this.OnClickFac}
              />
              <input
                type="button"
                value="Technical Staff"
                class="buttongraph"
                onClick={this.OnClickStaff}
              />
              <div class="FacultyNavContent">
                {this.state.showfaculty ? <CSFaculty /> : null}
                {this.state.showstaff ? <CSStaff /> : null}
              </div>
            </div>
          );
        },
      },
      library:
      {
        AdvdatabaseLabHeading:
        {
          instanceID: "AdvdatabaseLabHeading",
          title: "Advanced Operating System & Database Lab"
        },
        AdvdatabaseLabImagedata:
        {
          instanceID: "AdvdatabaseLabImage",
          image: "DepartmentImages/CS/LABS/DBMSLAB.JPG",
          width: "80%"
        },
        PGProjLabHeading:
        {
          instanceID: "PGProjLabHeading",
          title: "PG Project Lab"
        },
        PGProjLabImagedata:
        {
          instanceID: "PGProjLabImage",
          image: "DepartmentImages/CS/LABS/PGPROJLAB.JPG",
          width: "80%"
        },
        ProjectLabHeading:
        {
          instanceID: "ProjectLabHeading",
          title: "Project Lab(UG)"
        },
        ProjLabImagedata:
        {
          instanceID: "ProjLabImage",
          image: "DepartmentImages/CS/LABS/PROJECTLAB.JPG",
          width: "80%"
        },
        NWLabHeading:
        {
          instanceID: "NWLabHeading",
          title: "Network Systems Lab"
        },
        NWImagedata:
        {
          instanceID: "NWLabImage",
          image: "DepartmentImages/CS/LABS/NWLAB.JPG",
          width: "80%"
        },
        MMLabHeading:
        {
          instanceID: "MMLabHeading",
          title: "Multimedia Lab"
        },
        MMImagedata:
        {
          instanceID: "MMLabImage",
          image: "DepartmentImages/CS/LABS/MMLAB.JPG",
          width: "80%"
        },
        HWLabHeading:
        {
          instanceID: "HWLabHeading",
          title: "Hardware Lab"
        },
        HWImagedata:
        {
          instanceID: "HWLabImage",
          image: "DepartmentImages/CS/LABS/HWLAB.JPG",
          width: "80%"
        },
        MPLabHeading:
        {
          instanceID: "MPLabHeading",
          title: "Microprocessor Lab"
        },
        MPImagedata:
        {
          instanceID: "MPLabImage",
          image: "DepartmentImages/CS/LABS/MPLAB.JPG",
          width: "80%"
        },
        DeptLibDescriptionOne:
        {
          instanceID: "DeptLibDescriptionOne",
          title:
            "The Department of Computer Science and Engineering maintains a books enriched library where its primary aim is to support the student of the institution for education.  The Library was established in 2006.  The library has a collection of more than 600 books. Besides books the Library possesses B.Tech project and seminar reports, Monographs, Lab Manuals, Question papers, CD-ROMs, Internet facility. The departmental library serve the academic disciplines bearing their names. "
        },
        DeptLibDescriptionTwo:
        {
          instanceID: "DeptLibDescriptionTwo",
          title:
            "The collection is strong in all aspects with special strengths in C programming, Software Engineering, Automata Theory, System Programming, Computer Architecture and Organization, Data Structures, Microprocessors, Database Management System and also books on  Digital Electronics, Humanities, Management."
        },
        DeptLibDescriptionThree:
        {
          instanceID: "DeptLibDescriptionThree",
          title:
            "It has a carpet area of about 500 square feet. The library opens from 8.45 a.m. to 4.30 p.m. except Saturdays and Sundays. The library collection is arranged subject-wise. The library is maintaining records of all Purchased/Donated books, CDS, Seminar Reports/Project Reports/Magazines/Monographs/Lab Manual/Previous Year Question Papers. Members can search and view the status (Available/Not Available) of each searched item through the software.  The library is also maintaining all Issue/Deposit/Fine reports and it will be periodically updates at the end of each semesters."
        },

      },
      assosn:
      {
        DeptAssociationDescriptionOne:
        {
          instanceID: "DeptAssociationDescriptionOne",
          title:
            " VOICE is the association of the Computer Science & Engineering department. VOICE plays its vital role of giving opportunities and exposure for the young minds of the department to the tech world through different events like Technical Quiz, Technical Talks, Group Discussions, Workshops etc. VOICE is run by the student coordinators under the guidance of faculty members from the department. "
        },
        DeptAssociationHeadingTwo:
        {
          instanceID: "DeptAssociationHeadingTwo",
          title: "2018-19"
        },
        DeptAssociationDescriptionTwo:
        {
          instanceID: "DeptAssociationDescriptionTwo",
          title:
            "The association activities for the year was inaugurated by Dr. Vineesh K P ,Faculty, NIT Calicut on 3rd October, 2018, and a technical talk on Machine Learning was conducted. The newsletter was also released on the same venue."
        },
      },
      result:
      {

      },
    }
  }*/
