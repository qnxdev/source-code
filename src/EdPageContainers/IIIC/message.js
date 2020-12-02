import React, { Component } from "react";
import MenuOverlay from "../../Components/MenuOverlay/MenuOverlay";
import ImageOne from "../../Components/Images/ImageOne";
import HeadingOne from "../../Components/Texts/HeadingOne";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import "./Research.css"
import "../../Components/Tables/tableformat.css";

class message extends Component {
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
        title: "Message from the Principal"
    }
    MessageContent = {
        instanceID: "MessageContent",
        title: "Industry Institute Interaction Cell of VJCET has started functioning formally   since 02.05.2016.    MOUS  were signed with many  industries from different disciplines of Engineering to ensure effective collabration between the industry and the institute in a formal  and syatamatic  manner.  Regular ineratcion with industies  helped in equipping students with the proper skill,  set to become competent industry ready Engineers.  Many activities such as technical talks from industrial experts,  industrial visits,  internships,  training   workshops    etc  were  organized for students regularly at department  level.   The BARC outreach programme organized by IIIC on theme Atomic Energy for Brighter Future” has  attracted  the attention of  students and was well appreciated. An R & D project   costing   rupees 34 lakhs for  developing lead lithium level sensor was  awarded to VJCET  by BRNS and is being completed  successfully.   VJCET management has taken a wise decision to   depute a high level delegation   to visit   research centers & universities abroad   and Hannover Messe.  The   team could visit reputed universities and   research centers   in Europe and  the largest international industrial trade fair in the world.   The experience gained and   exposure obtained to research activities,   modern technologies and manufacturing processes were really   inspiring and encouraging. Creating    opportunities for students and faculty   members to do research, projects, higher studies, internships etc in Germany and other European countries will lead to a paradigm shift to the engineering education at VJCET.  Visiting HANNOVER MESSE was a marvelous engineering experience.   Services   Senoir Experten services    Germany  is being  successfully  utilized for the benefit of institution. The IIIC coordination committee sincerely thank  Manger, Director, Trust members, vice principal, Convenor, head of the  departments  and other  faculty  members of VJCET  for  rendering  all support,  guidance  and  cooperation  for     conducting   various  activities  of IIIC from its inception."
    }
    DeanImagedata = {
        instanceID: "DeanVjcImage",
        image: "Allstaffphoto/EE/FAC/352.jpg",
        width: "15%"
    }
    
    render() {
        return (
            <div className="HomePage">
                
                <HeadingOne data={this.ResearchHeading}></HeadingOne>
                <div>
                <p align="left"><ImageOne data={this.DeanImagedata} /></p>
                <p align="left"><b>Dr. K K Rajan, Principal</b></p>
                </div>                            
                 <BodyOneJustified data={this.MessageContent} />  
                
                
                
               
               
                {this.state.showMenu ? (
                    <MenuOverlay closeMenuFunction={this.closeMenu} />
                ) : (
                        ""
                    )}
            </div>
        );
    }
}

export default message;