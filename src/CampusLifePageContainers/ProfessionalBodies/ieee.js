import React, { Component } from "react";
/* import HeadingOne from "../../Components/Texts/HeadingOne"; */
import BodyOneJustified from "../../Components/Texts/BodyOneJustified"

import ImageTwo from "../../Components/Images/imageTwo";
import HeadingThree from "../../Components/Texts/HeadingThree";

import "../../Components/Tables/tableformat.css";
import Header from "../../Components/Header&Footer/Header";
class Profile extends Component {
  state = {};
 
  IEEEImage = {
    instanceID: "IEEEImage",
    image: "ProfessionalBodies/IEEE.png",
    width: "25%",    
    
}
GalleryImage = {
  instanceID: "GalleryImage",
  image: "Icons/ImageGallery.gif",
  width: "10%"
}
InchargesHeading = {
  instanceID: "InchargesHeading",
  title: "Office-Bearers"
};
ActivitiesHeading = {
  instanceID: "ActivitiesHeading",
  title: "Student Branch Events"
};
  Features1 = {
    instanceID: "Features1",
    title: "IEEE Student Branches provide an opportunity that will help students to develop their professional identity in IEEE’s designated fields of interest: sciences, technology, engineering, and mathematics. An active IEEE Student Branch can be one of the most positive elements of academic career, offering programs, activities, and professional networking opportunities that build critical skills outside of the classroom."
  };

  render() {
    return (
      <div className="Program" id="program">
       {/* <p align="right"><a href="https://vjcet.org/downloads/Gallery/Drishya.html" target="_blank" rel="noopener noreferrer"><ImageTwo data={this.Imagegallerydata} /></a></p> */}
       {/* <HeadingOne data={this.ProfileHeading} />  */}
      {/*  <p align="right"><a href="https://vjcet.org/downloads/Gallery/Drishya.html" target="_blank" rel="noopener noreferrer"><ImageTwo data={this.GalleryImage} /></a></p> */}
      <p align="center"><ImageTwo data={this.IEEEImage} /></p>
        <div className="bodyContainer">
          <p><BodyOneJustified data={this.Features1} /></p>
          <HeadingThree data={this.InchargesHeading} />  
          <table id="tableformat">
                            <tr><th>POST</th><th>NAME</th></tr>
                            <tr><td>Branch Counsellor & IEEE SIGHT Counsellor</td><td>Mr. Anish M Jose, AP ECE</td></tr>
                            <tr><td>Computer Society Counsellor</td><td>Mr. Sivadas T Nair, AP CSE</td></tr>
                            <tr><td>Power & Energy Society Counsellor</td><td>Mr. Babu T Chacko, AP EEE</td></tr>
                            <tr><td>Branch Chairperson</td><td>Mr. Jetson Joseph, S7 CS B</td></tr>
                            <tr><td>Computer Society Chairman</td><td>Mr. Allen P Biju, S7 CS B</td></tr>
                            <tr><td>Power & Energy Society Chairperson</td><td>Ms. Uthara Pradeep</td></tr>
                            <tr><td>IEEE SIGHT Chairman</td><td>Mr. Ananthakrishnan S Nath</td></tr>
                            </table>
                            <HeadingThree data={this.ActivitiesHeading} /> 
                            <table id="tableformat">
                           
                            <tr><th>Sl. No</th><th>Event</th><th>Date</th><th>Details</th></tr>
                            <tr><td>1</td><td>Annual General Meeting</td><td>15-02-2019</td><td>New execom members officially took up their charge in respective roles. Our seniors gave us necessary instructions to be followed. Branch Counsellor Mr. Anish M Jose ,CS counsellor Mr.Sivadas T Nair, and PES counsellor Mr.Babu T Chacko facilitated the occasion. Previous execom members were rewarded with a certificate for their excellent volunteering.</td></tr>
                            <tr><td>2</td><td>IEEE Orientation Programme</td><td>23-02-2019</td><td>First years from all branches were given orientation on importance of joining IEEE. Membership benefits were clearly explained by two experienced membership development volunteers from kochi hub Mr Feni Roy from Mar Athanasius College of Engineering and Technology and Mr.Sreehari A S from Model Engineering College. We had a vibrant audience responding to all their comments.</td></tr>
                            <tr><td>3</td><td>Science week quiz on Space-X</td><td>28-02-2019</td><td>As a part of science week, our SB conducted a quiz on “Space-X”. There were a total of 25 participants.Out of the 25 participants, Miss Anusree R won the first prize and Mr Basil Eldhose won the second prize.</td></tr>
                            <tr><td>4</td><td>Ripples</td><td>07-03-2019</td><td>This was our women’s day celebration(since we didn’t get a slot on march 8th ,we conducted it on march 7). IEEE computer society and IEEE WIE branch of our college conducted this talk on “startup pitching for women”. The speaker for this event was Miss Mufeeda C K , from Model engineering College who is an active volunteer of Pehia Foundation.</td></tr>
                            <tr><td>5</td><td>WHAT IS?</td><td>25-02-2019 & 01-04-2019</td><td>It is a peer-to-peer learning session conducted for enhancing the knowledge of all the members of IEEE. For now we conducted it as one class per month and we are planning to make it once in a week.The topics covered till this date are Git and Github.</td></tr>
                            <tr><td>6</td><td>Code Zing</td><td>10-03-2019</td><td>Our SB in collaboration with “Coding Ninjas” conducted an online coding event on march 10,2019. The winner of the event was awarded with a cash prize of Rs.1000 along with swags from coding ninjas.</td></tr>
                            <tr><td>7</td><td>Arduino Challenge</td><td>15-03-2019 & 18-03-2019</td><td>As a part of Aurdino Day ,PES chapter of our SB conducted an “Arduino Challenge”. First level was a Quiz Competition followed by the 2nd round Programming. The final level was of Project Making. The winner team was awarded with a cash prize of Rs 3000 and the runner up team was awarded with a cash prize of Rs 2000.</td></tr>
                            <tr><td>8</td><td>Minerva 4.0</td><td>15-03-2019</td><td>IEEE Kochi Hub conducted minerva 4.0 as a part of Womens week in our SB. We had participants from various colleges. It was a full day event. The forenoon session was covered by Miss Anjana Krishnan, Ruby on Rails Developer. The afternoon session had 2 workshops . Participants had to choose any one among “Linux bash Workshop” and “Git and Github”.</td></tr>
                            <tr><td>9</td><td>Balance for Better</td><td>15-03-2019</td><td>As a part of women’s day, our SB in association with women cell of our college conducted a talk on “balance for better”-a woman engineer’s perspective. The talk was given by a faculty member of NIT calicut, Prof.Dr.Pournami P N. We were able to conduct this talk with the help of IEEE SDLP facility.</td></tr>
                            <tr><td>10</td><td>Vortex</td><td>20-03-2019</td><td>The CS chapter pf our SB conducted this event as a part of our techfest “bodhi 2k19”.the event was completely based on computer skills. There were 4 levels- quiz,code puzzle,pc assembly and coding. The winner was awarded a cash prize of Rs 5000 and the runner up was awarded with a cash prize of Rs.3000. All the participants were given certificates.</td></tr>
                            <tr><td>11</td><td>Megamind</td><td>23-02-2019</td><td>“Megamind” is an event conducted for finding the best among first years.The first level of megamind was conducted on 23-02-2019 along with the IEEE orientation program in the presence of link representatives.</td></tr>
                            <tr><td>12</td><td>Poster Designing</td><td>29-03-2019</td><td>A poster designing competition was conducted by IEEE SIGHT on 29th march. 116 students from various branches participated and the event was very successful.</td></tr>
                            <tr><td>13</td><td>KSEB 10th Seminar Series</td><td>29-03-2019</td><td>IEEE PES chapter of our SB hosted the 10th seminar series of KSEB . it was the final round of seminar series and student across kerala participated in the event. All the participants and volunteers were awarded with certificates.</td></tr>
                            </table>

                            
        </div>
      </div>
    );
  }
}

export default Profile;
