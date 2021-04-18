import React, { Component } from "react";
import "./VisionSection.css";
import HeadingOne from "../Components/Texts/HeadingOne";
import HeadingThree from "../Components/Texts/HeadingThree";
import BodyOne from "../Components/Texts/BodyOne";

class VisionSection extends Component {
  VisionSectionATitle = {
    instanceID: "VisionSectionTitle",
    title: "Vision and Mission"
  };

  VisionSectionATitle1 = {
    instanceID: "VisionSectionTitle",
    title: "PROGRAM OUTCOMES (POs)"
  };

  VisionSectionABody = {
    instanceID: "VisionSectionBody",
    title:
      'Viswajyothi is the lamp of God which brings light to the whole world. It aims to convey glow for the whole world and to bring all to radiance from darkness. "Service of GOD through service of Humanity" is the driving motto of the Kothamangalam Diocese. Viswajyothi College of Engineering & Technology is yet another hallmark of the commitment and experience of the Kothamangalam Diocese in the field of education.'
  };

  VisionSectionBTitle = {
    instanceID: "VisionSectionTitle",
    title: "Vision"
  };

  VisionSectionBDescription = {
    instanceID: "VisionSectionDescription",
    title:
      '"Moulding Professionals par Excellence with Integrity, Fairness and Human Values"'
  };

  VisionSectionBBody = {
    instanceID: "VisionSectionBody",
    title:
      "Vision of Viswajyothi College of Engineering and Technology is to mould Engineers for tomorrow for the welfare of mankind and society. We aim to give quality education for students with value added thoughts. Our academic motto includes quality education, Ethical Values and Spiritual deeds and conducts of all in Viswajyothi Family."
  };

  MissionSectionTitle = {
    instanceID: "MissionSectionTitle",
    title: "Mission"
  };

  MissionSectionOne = {
    instanceID: "MissionSectionOne",
    title:
      "We commit to develop the institution into a Center of Excellence   of International Standards."
  };

  MissionSectionTwo = {
    instanceID: "MissionSectionTwo",
    title:
      "We guide and mould our students in the attainment of intellectual and professional competence for successfully coping with the rapid and challenging advancements in technologies and the ever changing world of business, industry and services."
  };

  MissionSectionThree = {
    instanceID: "MissionSectionThree",
    title:
      "We help and support our students in their personal growth shaping them into mature and responsible individuals."
  };

  MissionSectionFour = {
    instanceID: "MissionSectionFour",
    title:
      "We strive to cultivate a sense of social and civic responsibility in our students, empowering them to serve the humanity."
  };

  MissionSectionFive = {
    instanceID: "MissionSectionFive",
    title:
      "We promise to ensure a free environment where quest for the truth is encouraged."
  };

  render() {
    const { instanceID } = this.props.data;

    return (
      <div className="VisionSection" id={instanceID}>
        <div className="VisionSectionA">
          <HeadingOne data={this.VisionSectionATitle} />
          <BodyOne data={this.VisionSectionABody} />
        </div>
        <div className="VisionSectionB">
          <HeadingOne data={this.VisionSectionBTitle} />
          <HeadingThree data={this.VisionSectionBDescription} />
          <BodyOne data={this.VisionSectionBBody} />
        </div>
        <div className="VisionSectionC">
          <HeadingOne data={this.MissionSectionTitle} />
          <BodyOne data={this.MissionSectionOne} />
          <BodyOne data={this.MissionSectionTwo} />
          <BodyOne data={this.MissionSectionThree} />
          <BodyOne data={this.MissionSectionFour} />
          <BodyOne data={this.MissionSectionFive} />
        </div>
        <div className="VisionSectionABottom">
          <HeadingOne data={this.VisionSectionATitle1} />
          {/*<BodyOne data={this.VisionSectionABody} />*/}
          <ul style={{display:"block",textAlign:"justify",listStyle:"none", lineHeight:"30px", fontSize:"18px", listStylePosition:"inside"}}>
              <li><b>1. Engineering knowledge:</b> Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.</li>
              <li><b>2. Problem analysis :</b> Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.</li>
              <li><b>3. Design / development of solutions :</b> Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.</li>
              <li><b>4. Conduct investigations of complex problems :</b> Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.</li>
              <li><b>5. Modern tool usage:</b> Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations. </li>
              <li><b>6. The engineer and society:</b> Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.</li>
              <li><b>7. Environment and sustainability:</b> Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development. </li>
              <li><b>8. Ethics:</b> Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.</li>
              <li><b>9. Individual and team work:</b> Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.</li>
              <li><b>10. Communication:</b> Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.</li>
              <li><b>11. Project management and finance:</b> Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.</li>
              <li><b>12. Life-long learning :</b> Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.</li>
          </ul>
        </div>
      </div> 
    
    );
  }
}

export default VisionSection;
