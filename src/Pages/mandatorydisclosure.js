import React from "react";
//import HeadingThree from "../Components/Texts/HeadingThree";
//import ImageOne from "../Components/Images/ImageOne";
//import BodyOneJustified from "../Components/Texts/BodyOneJustified";

import Header from "../Components/Header&Footer/Header";
import Footer from "../Components/Header&Footer/Footer";
import MenuOverlay from "../Components/MenuOverlay/MenuOverlay";
import HeadingOne from "../Components/Texts/HeadingOne";

class Mandatorydisclosure extends React.Component {
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


    CCCNATitle = {
        instanceID: "CCCTitle",
        title: "MANDATORY DISCLOSURE"
    };
    CCCTitle = {
        instanceID: "CCCTitle",
        title: "APJ Abdul Kalam Technological University"
    };
    
    WifiTitle = {
        instanceID: "CCCTitle",
        title: "AICTE"
    };
    ServerTitle = {
        instanceID: "Servernames",
        title: "PRINCIPAL"
    };
    CCCContent1 = {
        instanceID: "CCCContent1",
        title: "Viswajyothi was established with the aim of imparting quality professional education to aspiring students. It persistently seeks and adopts innovative methods to improve the quality of higher education on a consistent basis. Our Alumni who have been placed at respectable posts in MNCs around the world has done us proud. We have been able to maintain the ties with a number of respectable MNCs which aids our placement.VJCET essentially has excellent infrastructure, ambiance conducive to learning, well equipped laboratories and workshops, comfortable hostels for gents and ladies,state-of-art-library and loads of other facilities.We have been serving the society for the past ten years and with steady steps, we continue our march forward. We look forward to meeting you at VJCET."
    }
    CCCContent2 = {
        instanceID: "CCCContent2",
        title: "The biggest challenge in front of a student is to choose the best. We endeavour to provide the best and to bring out what is best in our students. We strive to combine judiciously use of technology and moral values, employability and equity in the transformation of young minds. Already into the eighteenth year of excellence and continuing its pursuit of betterment Viswajyothi College of Engineering and Technology has earned a niche for itself in the engineering educational sector in the country. An amazing response of students from the very inception, consistent result with university ranks, state of the art infrastructure, quality faculty members, impetus given to research and development, campus recruitment and placement record, mentoring for students, sprawling campus and various student services ensure our credibility over the years."
    }
    CCCContent3 = {
        instanceID: "CCCContent3",
        title: "Viswajyothi College of Engineering & Technology, Vazhakulam can boast of producing competent engineers capable of facing the challenges in the technical field with zeal to social commitment and ethical values. Started only eighteen years back, our institution commands a formidable position amongst the various engineering colleges. This is achieved by excellent infrastructural facilities combined with the team work of enthusiastic management, dedicated faculty members, committed laboratory & workshop staff members, sincere administrative staff members,motivating alumni and dynamic students. Excellent track records in the University examinations and the considerable number of placements reveal the effective co-ordination of all these resources. This is not an end in itself. We are striving hard to make the vision of the institution “Moulding Engineers par Excellence with integrity, fairness and human values” a reality."
    }
    CCCImagedata = {
        instanceID: "CCCVjcImage",
        image: "KeyFunctionaries/manager.jpg",
        width: "50%"
    }
    DImagedata = {
      instanceID: "DImage",
      image: "KeyFunctionaries/director.jpg",
      width: "50%"
    }
    PImagedata = {
      instanceID: "PImage",
      image: "KeyFunctionaries/principal.jpg",
      width: "50%"
    }
    

    render() {
        return (
            <React.Fragment>
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />

                <div className="contain">
                    <HeadingOne data={this.CCCNATitle} className="Heading" />
                    
                    
                    <iframe src="https://vjcet.org/downloads/about/Mandatory2021.pdf" width="100%" height="800" title="Campus Map" align="center"></iframe>
                   <br />
                   
                   

                </div>
                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (<MenuOverlay closeMenuFunction={this.closeMenu} />) : ("")}

            </React.Fragment>
        )
    }

}

export default Mandatorydisclosure;