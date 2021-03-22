import React from "react";
import HeadingThree from "../Components/Texts/HeadingThree";
import ImageOne from "../Components/Images/ImageOne";
import BodyOneJustified from "../Components/Texts/BodyOneJustified";

import Header from "../Components/Header&Footer/Header";
import Footer from "../Components/Header&Footer/Footer";
import MenuOverlay from "../Components/MenuOverlay/MenuOverlay";
import HeadingOne from "../Components/Texts/HeadingOne";

class keyfunct extends React.Component {
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
        title: "Key Functionaries"
    };
    CCCTitle = {
        instanceID: "CCCTitle",
        title: "MANAGER"
    };
    
    WifiTitle = {
        instanceID: "CCCTitle",
        title: "DIRECTOR"
    };
    ServerTitle = {
        instanceID: "Servernames",
        title: "PRINCIPAL"
    };
    CCCContent1 = {
        instanceID: "CCCContent1",
        title: "Viswajyothi was established with the aim of imparting quality professional education to aspiring students. It persistently seeks and adopts innovative methods to improve the quality of higher education on a consistent basis. Our Alumni who have been placed at respectable posts in MNCs around the world has done us proud. We have been able to maintain the ties with a number of respectable MNCs which aids our placement.VJCET essentially has excellent infrastructure, ambiance conducive to learning, well equipped laboratories and workshops, comfortable hostels for gents and ladies,state-of-art-library and loads of other facilities.We have been serving the society for the past twenty years and with steady steps, we continue our march forward. We look forward to meeting you at VJCET."
    }
    CCCContent2 = {
        instanceID: "CCCContent2",
        title: "The biggest challenge in front of a student is to choose the best. We endeavour to provide the best and to bring out what is best in our students. We strive to combine judiciously use of technology and moral values, employability and equity in the transformation of young minds. Already into the eighteenth year of excellence and continuing its pursuit of betterment Viswajyothi College of Engineering and Technology has earned a niche for itself in the engineering educational sector in the country. An amazing response of students from the very inception, consistent result with university ranks, state of the art infrastructure, quality faculty members, impetus given to research and development, campus recruitment and placement record, mentoring for students, sprawling campus and various student services ensure our credibility over the years."
    }
    CCCContent3 = {
        instanceID: "CCCContent3",
        title: "VJCET commands a formidable position amongst the various engineering colleges in the state. This is achieved by excellent infrastructural facilities combined with the team work of enthusiastic management, dedicated faculty members, committed laboratory & workshop staff members, sincere administrative staff members, motivating alumni and dynamic students. Excellent track records in the University examinations and the considerable number of placements reveal the effective co-ordination of all these resources.   We are striving hard to make the vision of the institution “Moulding  Professionals par Excellence with integrity, fairness and human values” a reality.  Our six Engineering  Branches are  NBA accredited  and we are in the process of assessment  for NAAC accreditation. To effectively address the difficulties faced   in the post   Covid-19 scenario   VJCET has come up  with online education system.  The  software  Microsoft team was  installed and made available for all faculty members and  students. Online education along with contact classes are  successfully being carried out for all the  courses now. Focus of the institution currently  is on achieving   academic excellence  and 100%  placement."
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
      image: "KeyFunctionaries/principal.JPG",
      width: "50%"
    }
    

    render() {
        return (
            <React.Fragment>
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />

                <div className="contain">
                    <HeadingOne data={this.CCCNATitle} className="Heading" />
                    <HeadingThree data={this.CCCTitle} className="Heading" />
                   <p align="center"> <ImageOne data={this.CCCImagedata} /></p>
                   <p align="center"><b> Msgr. Dr. Cherian Kanjirakombil [<a href="https://vjcet.org/downloads/keyfunctionaries/RevFrCherianK.pdf" target="_blank" rel="noopener noreferrer">Profile</a>]</b></p> 
                   <BodyOneJustified data={this.CCCContent1} />
                   <br />
                   <HeadingThree data={this.WifiTitle} className="Heading" />
                   <p align="center"> <ImageOne data={this.DImagedata} /></p>
                   <p align="center"><b> Rev. Fr. Paul Nedumpurath [<a href="https://vjcet.org/downloads/keyfunctionaries/RevFrPaulN.pdf" target="_blank" rel="noopener noreferrer">Profile</a>]</b></p> 
                   <BodyOneJustified data={this.CCCContent2} />
                   <br />
                   <HeadingThree data={this.ServerTitle} className="Heading" />
                   <p align="center"> <ImageOne data={this.PImagedata} /></p>
                   <p align="center"><b> Dr. K.K Rajan [<a href=" https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=EEFAC129" target="_blank" rel="noopener noreferrer">Profile</a>]</b></p> 
                   <BodyOneJustified data={this.CCCContent3} />

                </div>
                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (<MenuOverlay closeMenuFunction={this.closeMenu} />) : ("")}

            </React.Fragment>
        )
    }

}

export default keyfunct;