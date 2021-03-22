import React from "react";

import "../Components/Tables/tableformat.css";

import BodyOneJustified from "../Components/Texts/BodyOneJustified";
import Header from "../Components/Header&Footer/Header";
import Footer from "../Components/Header&Footer/Footer";
import MenuOverlay from "../Components/MenuOverlay/MenuOverlay";
import HeadingTwo from "../Components/Texts/HeadingTwo";
//import HeadingFour from "../Components/Texts/HeadingFour";
import HeadingThree from "../Components/Texts/HeadingThree";
import "../Components/Images/gallery.css";


class nss extends React.Component {
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
    NsslogoImage = {
        instanceID: "NsslogoImage",
        image: "ProfessionalBodies/NSS.png",
        width: "50%"
      }

   NssTitle = {
        instanceID: "NssTitle",
        title: "Internal Quality Audit Cell  (IQAC) "
    };
    
    AboutNssContent = {
        instanceID: "AboutNssContent",
        title: "Our IQAC team consists of members representing the  faculty, representatives from the management, alumni, Students, local community and collaborating organizations. External experts are also invited by the IQAC to contribute to the effective functioning of the college."
    }
    AboutNssvjcContent = {
        instanceID: "AboutNssvjcContent",
        title: "An Aided unit of National Service Scheme (Technical Cell) Unit-197 is started in the College in 12-02-2008 with Mr. Mable Varghese (Asst. Professor, Dept. of Information Technology) as the Program Officer, with 100 Volunteers. In July 2009, Mr. Naveen Jacob (Asst. Professor, Dept. of Electronics and Communication) took charge as the Program officer in 2009. Since the number of students enrolling to NSS has increased, an additional  self-financed unit is sanctioned in the year 2016, Unit-587."
    }
    aboutiqaccontent1={
        title: "The Internal Quality Audit Cell gives advice and guidelines to the administration to maintain high quality work in academics and administration. The cell monitors the quality aspects of all the academic and non-academic activities of the institution. The cell works on various accreditation aspects. The IQAC in the Institute is composed of 15 Criterias."
    }
    criteria1heading={
        title:"1.STUDENTS ASSESSMENT RECORD MONITORING COMMITTEE"
    }
    criteria2heading={
        title:"2.TEST AND RETEST MONITORING COMMITTEE"
    }
    criteria3heading={
        title:"3.ATTENDANCE MONITORING COMMITTEE"
    }
    criteria4heading={
        title:"4.COURSE FILE AND LAB MANUAL MONITORING COMMITTEE"
    }
    criteria5heading={
        title:"5.STUDENT DISCIPLINARY COMMITTEE"
    }
    criteria6heading={
        title:"6.PROJECT MONITORING COMMITTEE"
    }
    criteria7heading={
        title:"7.NPTEL, SPOKEN TUTORIAL & GUEST LECTURE MONITORING COMMITTEE"
    }
    criteria8heading={
        title:"8.FEEDBACK COMMITTEE"
    }
    criteria9heading={
        title:"9.IIIC & IEDC"
    }
    criteria10heading={
        title:"10.EXAM CELL"
    }
    criteria11heading={
        title:"11.ACADEMIC ADVISORY COMMITTEE"
    }
    criteria12heading={
        title:"12.RESEARCH & FACULTY DEVELOPMENT"
    }
    criteria13heading={
        title:"13.LIBRARY COMMITTEE"
    }
    criteria14heading={
        title:"14.STUDENTS GRIEVANCES AND ETHICS COMMITTEE"
    }
    criteria15heading={
        title:"15.PLACEMENT COMMITTEE"
    }
    
    
    
   

    render() {
        return (
            <React.Fragment>
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />
             {/*    <p align="right"><a href="https://vjcet.org/downloads/gallery/nss.html" target="_blank" rel="noopener noreferrer"><ImageTwo data={this.GalleryImage} /></a></p>  */}
             <div class="absolute">
             
             
             </div>
             <div >
             <p id="blankspace" align="right"></p>
             
             </div>
               
                <div className="contain">
                
                    <HeadingTwo data={this.NssTitle} className="Heading" />
                    
                    <BodyOneJustified data={this.AboutNssContent} />
                    <br />
                    <table id="tableformat">
                    <tr><td>1</td><td> Rev. Msgr. Dr. Cherian Kanjirakombil</td><td>Manager</td></tr>        
                   <tr><td>2</td><td> Rev. Fr Paul Nedumpurath</td><td>Director</td></tr>                   
                    <tr><td>3</td><td> Dr. K.K Rajan</td><td>Principal </td></tr>
                    <tr><td>4</td><td> Sri. Somy P Mathew	</td><td> Vice Principal</td></tr>
                    <tr><td>5</td><td> Dr. Anoop C K</td><td>Professor & IQAC Coordinator</td></tr>
                    <tr><td>6</td><td> Dr. Cyriac Joseph Vempala</td><td> Professor & Dean</td></tr>			    
                    <tr><td>7</td><td> Dr. Anishin Raj M M</td><td>Professor & Dean R&D</td></tr>
                     <tr><td>8</td><td> Smt. Shine George</td><td> HOD ( CE)</td></tr>
                     <tr><td>9</td><td> Dr. Shunmugesh K</td><td> HOD (ME)</td></tr>
			        <tr><td>10</td><td> Dr. Aruna B</td><td> HOD (EEE)</td></tr>
                     <tr><td>11</td><td> Smt. Smitha Cyriac</td><td> HOD (ECE)</td></tr>
                     <tr><td>12</td><td> Sri.Amel Austine</td><td> HOD ( CSE)</td></tr>
			        <tr><td>13</td><td> Smt. Anju Susan George</td><td> HOD (IT)</td></tr>
                    <tr><td>14</td><td> Smt. Viji George </td><td> HOD (S& H)</td></tr>
                    <tr><td>15</td><td> Dr. Geo Baby	</td><td>HOD ( MBA) </td></tr>
                    <tr><td>16</td><td> Adv. K. Francis George</td><td> Secretary, DTET</td></tr>
                    <tr><td>17</td><td> Rev. Dr. George Thanathuparambil</td><td>Member, Board of Trustees,DTET </td></tr>
                    <tr><td>18</td><td> Sri. Sunny Jacob</td><td> Administrative Officer</td></tr> 
                    <tr><td>19</td><td> Sri. Baby George</td><td> Representative, Industrialist  </td></tr>
                    <tr><td>20</td><td> Sri. Issac Joseph Kottukapilly</td><td> Representative, Industrialist</td></tr>
                    <tr><td>21</td><td> Sri Noble Mathew </td><td>Representative, Local Community </td></tr>
                    <tr><td>22</td><td> Sri. Sean Santosh Joseph</td><td> Student representative</td></tr>
                    <tr><td>23</td><td> Sri. Mridul George</td><td> Alumni Representative</td></tr>
		                          
 </table> 
            <BodyOneJustified data={this.aboutiqaccontent1} />
            <br/>
            <HeadingThree data={this.criteria1heading} className="Heading" />    
            <p><b>Coordinator:Mrs. Shine George</b>, HOD CE</p>
            <p><b>Responsibilities of the Committee</b></p>
            
            <ol>
  <li>Verification of Faculty Dairy for the following:
    <ol>
      <li>Attendance Entry,</li>
      <li>Class and Series Test Marks,</li>
      <li>Syllabus Coverage,</li>
      <li>Identification of Slow Learners and above average performers</li>
      <li>HOD Authentication</li>
    </ol>
  </li>
  <li>Verification of Assessment &amp; Tutorial Sheets</li>
  <li>Checking Course plan and delivery</li>
  <li>Submission of report to the IQAC in the prescribed format</li>
</ol>
           
             <br/>
            <HeadingThree data={this.criteria2heading} className="Heading" />    
            <p><b>Coordinator:Mrs Ann Nitha Sabu, S &H</b></p>
            <p><b>Responsibilities of the Committee</b></p>
            <ol>
  <li>Verification of Invigilator Availability in the Examination Hall</li>
  <li>Collecting Absenteeism Report  and record actions taken </li>
  <li>Monitoring Retest as per Schedule and Timings.</li>
  <li>Assessment of Question Paper Format and Syllabus Coverage.</li>
  <li>Submission of report to the Academic Coordinator in the prescribed format.</li>
  <li>Documenting invigilators list, schedule and timetable</li>
  <li>Consolidated marks statements</li>
  <li>list of failures along with the actions taken</li>
  <li>Submission of report to the IQAC in the prescribed format.</li>
</ol>
             <br/>
            <HeadingThree data={this.criteria3heading} className="Heading" />            
               <p><b>Coordinator:Mrs. Anju susan George, </b>HOD IT</p>
            <p><b>Responsibilities of the Committee</b></p>
            <ol>
  <li>Verification of Master Attendance in Automation once in month.</li>
  <li>Collecting Long Absenteeism List.</li>
  <li>Verification of Shortage of Attendance and Issue of Warning Letters.</li>
  <li>Collecting Monthly Cumulative Attendance Report.</li>
  <li>Review of Shortage of Attendance with HoD &amp; Principal.</li>
  <li>Submission of report to the IQAC in the prescribed format.</li>
</ol>
                         
             <br/>
            <HeadingThree data={this.criteria4heading} className="Heading" />            
            <p><b>Coordinator:Sri Amel Austine,</b> HOD CSE</p>
            <p><b>Responsibilities of the Committee</b></p>
                      
            <ol>
  <li>Verification of Course files as per NBA Format</li>
  <li>Verification of Lab Manuals with Additional Experiments.(open ended, advanced etc)</li>
  <li>Submission of report to the IQAC in the prescribed format.</li>
</ol>     
             <br/>
            <HeadingThree data={this.criteria5heading} className="Heading" />            
            <p><b>Coordinator:Dr. Shanmugesh K, </b>HOD ME</p>
            <p><b>Responsibilities of the Committee</b></p>
            <ol>
  <li>Ensuring maintenance of good student discipline and provide proper amenities for student wellbeing on the campus</li>
  <li>Department wise disciple report</li>
  <li>event wise discipline report</li>
  <li>Proper conduction of discipline committee meeting and recording minutes.</li>
  <li>Conducting various college and department level enquires for disciplinary issues and preparing reports.</li>
  <li>Proper functioning of anti ragging cell</li>
  <li>Create awareness among students about the negative effects / disciplinary actions of ragging in the campus</li>
  <li>Submission of report to the IQAC in the prescribed format.</li>
</ol>      
                         
             <br/>
            <HeadingThree data={this.criteria6heading} className="Heading" />            
            <p><b>Coordinator:Dr. Sreenish Ramaswamy, Associate professor, MBA</b></p>
            <p><b>Responsibilities of the Committee</b></p>
            <ol>
  <li>ents.</li>
  <li>Verification of all External Projects and their company, progress report</li>
  <li>Monitoring Student- Guide Contact hours.</li>
  <li>Submission of report to the Academic Coordinator in the prescribed format.</li>
  <li>Encourage and help students to convert their project into quality technical articles</li>
  <li>Compile and catalogue students research articles.</li>
  <li>Submission of report to the IQAC in the prescribed format.</li>
</ol>         
                         
             <br/>
            <HeadingThree data={this.criteria7heading} className="Heading" />            
            <p><b>Coordinator:Smt. Smitha Jacob, AP EEE</b></p>
            <p><b>Responsibilities of the Committee</b></p>
            <ol>
  <li>Ensure that maximum NPTEL/ Spoken Tutorial resources and included in the programme curriculum</li>
  <li>Keep track of all NPTEL/ Spoken Tutorial activities.</li>
  <li>Record (Audio/video) and document of all the guest/visiting/Expert lectures conducted in department and arrange required lectures for students as per gaps identified</li>
  <li>Submission of report to the IQAC in the prescribed format.</li>
</ol>            
                         
             <br/>
            <HeadingThree data={this.criteria8heading} className="Heading" />            
            <p><b>Coordinator:Smt. Smitha Cyriac,  </b>HoD, ECE</p>
            <p><b>Responsibilities of the Committee</b></p>
            <ol>
  <li>Should take online faculty feedback and facilities feedback at the beginning and at the end of the semester from the students.</li>
  <li>Should take employer, alumni feedback and exit surveys whenever necessary.</li>
  <li>Feedbacks  are reviewed with the concerned Heads and Principal to council the faculty in strengthening their performance.</li>
  <li>Preparation for consolidate department wise report.</li>
  <li>Submission of report to the IQAC in the prescribed format.</li>
</ol>          
                         
             <br/>
            <HeadingThree data={this.criteria9heading} className="Heading" />            
            <p><b>Coordinator:Dr. K. K. Rajan, Dean- Industry Institute Interaction</b></p>
            <p><b>Responsibilities of the Committee</b></p>
            <ol>
  <li>Organizing Effective Youth Entrepreneurship programes</li>
  <li>Identification of training and development needs of students.</li>
  <li>Documenting policies and guidelines regarding In plant training/ Internship for pre-final year students</li>
  <li>Documenting policies and guidelines regarding Industrial/ Professional Tour</li>
  <li>Guidance for Higher Studies in India or Abroad</li>
  <li>Organizing workshops/ seminars on Emotional Intelligence, soft skills etc</li>
  <li>Prepare consolidated reports</li>
  <li>Submission of report to the IQAC in the prescribed format.</li>
</ol>        
                         
             <br/>
            <HeadingThree data={this.criteria10heading} className="Heading" />            
            <p><b>Coordinator:Mr. Vinoj K, Associate Professor, ME</b></p>
            <p><b>Responsibilities of the Committee</b></p>
            <ol>
  <li>Document the following and submit to the IQAC coordinator
    <ol>
      <li>Examination notices received from University</li>
      <li>Circulars for students regarding Exam Fee Collection, the last date of fee Collection, modalities of payments of fine</li>
      <li>Examination Time table, Invigilation duty chart, seating plans for the students</li>
      <li>Result analysis</li>
      <li>Disciplinary issues and corrective actions</li>
    </ol>
  </li>
  <li>Examination Cell keeps all records pertaining to examinations.</li>
  <li>Examination Cell staff addresses grievances of administration, faculty, staff and students on all examination related issues.</li>
  <li>Report any issues and suggestions to IQAC in the prescribed format.</li>
</ol>         
                         
             <br/>
            <HeadingThree data={this.criteria11heading} className="Heading" />            
            <p><b>Coordinator:Dr. Anoop C K. , IQAC Coordinator</b></p>
            <p><b>Responsibilities of the Committee</b></p>
            <ol>
  <li>identifying and checking the major student learning outcomes, identifying appropriate assessment methods/strategies to measure learning outcomes at the program level</li>
  <li>Monitoring and documenting opportunities provided for students to actively demonstrate their knowledge, skills/abilities, values and development at the program level</li>
  <li>Supervising program level assessment data collection, analysis and interpretation relative to students ability to achieve the learning objectives</li>
  <li>Evaluating major student learning outcomes assessment and making recommendation for strengthening major student learning outcomes assessment</li>
  <li>Devising strategies for using assessment results to improve student learning, courses, programs, and services</li>
  <li>Ensuring that feedback from program level assessments is provided to students and other stakeholders</li>
  <li>Ensure that department wise PAC and DAC meetings are scheduled and conducted as per schedule.</li>
  <li>Monitor department wise CO-PO-PSO mappings and Justification</li>
  <li>Monitor activities with respect to NBA C2, C3, C7 and C8 attainment, target fixation and gap identification.</li>
</ol>
       
                         
             <br/>
            <HeadingThree data={this.criteria12heading} className="Heading" />            
            <p><b>Coordinator:Dr.  Anishin Raj M M, Dean R&D</b></p>
            <p><b>Responsibilities of the Committee</b></p>
            <ol>
  <li>The Research and Development Committee shall encourage faculty and students to pursue their research plans by submitting research proposal to various agencies and scientific laboratories.</li>
  <li>Allocating funds budgeted by the College for support of research and professional development, shall determine equitable priorities among applications for this support, and shall assure proper accountability in the use of grants.</li>
  <li>Ensure timely and proper publishing of the biannual research journal- Technology and future</li>
  <li>Establishment and proper functioning of FAB Lab, Project labs etc</li>
</ol>       
                
             <br/>
            <HeadingThree data={this.criteria13heading} className="Heading" />            
            <p><b>Coordinator:Smt. Brighty Jose, Librarian</b></p>
            <p><b>Responsibilities of the Committee</b></p>
            <ol>
  <li>Recommends instructional hardware and software for library.</li>
  <li>Recommends any furniture, assistive devices, or other materials that would enhance the quality of the library.</li>
  <li>Recommends guidelines on materials in all formats for publications, such as bibliographies and instructional materials, tutorials, journals and new materials to HODs for Purchasing.</li>
  <li>Prepares monthly report on library usage (total and department wise.</li>
  <li>Reviews budget proposals for books, journals, materials and equipment needed to further the library's educational endeavours.</li>
  <li>Update the books inventory, damaged books inventory and lost books inventory file.</li>
  <li>Submission of report to the IQAC in the prescribed format.</li>
</ol>
     
             <br/>
            <HeadingThree data={this.criteria14heading} className="Heading" />            
            <p><b>Coordinator:Dr. Geo  Baby, Ho D-MBA</b></p>
            <p><b>Responsibilities of the Committee</b></p>
            <ol>
  <li>Provide a platform for students to address their grievances</li>
  <li>Ensure transparency of the system</li>
  <li>compile and process the grievances and forward it to the principal</li>
  <li>Convey the decision from the principal to the concerned students.</li>
  <li>Collect report form department mentoring in-charges and report for anomalies</li>
  <li>Conduct classes on professional and academic/ student ethics per semester</li>
  <li>Ensuring proper students grievances for student wellbeing on the campus</li>
  <li>Submission of report to the IQAC in the prescribed format.</li>
</ol>      
             <br/>
            <HeadingThree data={this.criteria15heading} className="Heading" />            
            <p><b>Coordinator:Mr. Mavin C, placement officer.</b></p>
            <p><b>Responsibilities of the Committee</b></p>
            <ol>
  <li>Updating student placement record file.</li>
  <li>Ensure steps to conduct mock interview and personality tests for the final year students.</li>
  <li>Conducting various Career Fair</li>
  <li>Detailed Campus placements activity report for the current academic year.</li>
  <li>SWOT analysis of your students and taking corrective actions.</li>
  <li>Conducting various soft skills , aptitude skills and language training sessions</li>
  <li>Submission of report to the IQAC in the prescribed format.</li>
</ol>     
<p>The cell convenes regular meetings of the 15 Criteria’s during the academic year for ensuring proper running of the systems and procedures developed for quality sustenance. Annual planning and review meetings, discussions  are organized by the IQAC for effectively aligning the activities of the institution to its vision and mission.</p>    
<p>Contact</p>
<p><b>Dr. Anoop C K</b></p>
<p>IQAC COORDINATOR</p>
<p>Viswajyothi College of Engineering and Technology</p>
<p>anoop4281@gmail.com</p>
<p>9497189607</p>
                </div>
                
                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (<MenuOverlay closeMenuFunction={this.closeMenu} />) : ("")}

            </React.Fragment>
        )
    }

}

export default nss;