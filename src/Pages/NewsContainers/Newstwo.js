import React from "react";
import HeadingTwo from "../../Components/Texts/HeadingTwo";
import ImageOne from "../../Components/Images/ImageOne";
//import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import "../../FacilitiesPageContainers/styles.css";
import "../../Components/News/gallery.css";
import Header from "../../Components/Header&Footer/Header";
import Footer from "../../Components/Header&Footer/Footer";
import MenuOverlay from "../../Components/MenuOverlay/MenuOverlay";
import HeadingOne from "../../Components/Texts/HeadingOne";
import "../../Components/Tables/tableformat.css";
//import ImageTwo from "../../Components/Images/imageTwo";
import "../../Components/tooltip.css";

/* import HeadingTwo from "../../Components/Texts/HeadingTwo";
import ImageOne from "../../Components/Images/ImageOne";

import "../styles.css"

import Header from "../../Components/Header&Footer/Header";
import Footer from "../../Components/Header&Footer/Footer";
import MenuOverlay from "../../Components/MenuOverlay/MenuOverlay";
import HeadingOne from "../../Components/Texts/HeadingOne";
 */
class Newstwo extends React.Component {
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


    NewsTitle = {
        instanceID: "NewsTitle",
        title: " CIRCULAR"
    };
    NewsTitle1 = {
        instanceID: "NewsTitle1",
        title: "Covid 19, Institutional Plan and SOP"
    };
    
    NewsContent1={
        instanceID:"NewsContent1",
        title:" In view of the earnest efforts of the Government of Kerala to control the spread of CORONA Virus, it was directed to close down all educational Institutions of our state till 31 st March 2020. In line with the directions of our Government, the University has issued a circular to this effect. As a result, our students are losing three weeks of academic working days. Since many of our final year students are already campus placed, they are expected to report in the selected organizations before the end of August 2020. In view of these persisting emergency situation and considering the best academic interest of our students, the University would like to propose the following:"
    }
    NewsContent2={
        instanceID:"NewsContent2",
        title:" The University is trying to publish the final year B.Tech results before 20 th July 2020. In view ofthis tight schedule, all stakeholders are requested to fully cooperate with the University to tideover this situation."
    }
    NewsImagedata1 = {
        instanceID: "NewsImagedata1",
        image: "NewsImages/download.png",
        width: "5%"
    }
    NewsImagedata2 = {
        instanceID: "NewsImagedata2",
        image: "NewsImages/ME_fdp_back.jpg",
        width: "80%"
    }
    NewsImagedata3 = {
        instanceID: "NewsImagedata3",
        image: "NewsImages/Registernow.jpg",
        width: "20%"
    }
    

    render() {
        return (
            <React.Fragment>
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />

                <div className="contain">
                   
                    <div class="absolute">
                         
             </div>
               
                   
                    
                    
                    <HeadingOne data={this.NewsTitle1} className="Heading" />
                    <p><h4>Institutional Plan</h4></p>
                     <iframe src="https://vjcet.org/downloads/news/InstPlan.pdf" width="90%" height="700" title="Institutional Plan" align="center"></iframe> 
                     <br></br>
                     <p><h4>Standard Operating Procedures</h4></p>
                     <iframe src="https://vjcet.org/downloads/news/SOP.pdf" width="90%" height="700" title="Standard Operating Procedures" align="center"></iframe> 
                   {/*  <a href="https://vjcet.org/downloads/news/CEFDP.pdf"><ImageOne data={this.NewsImagedata3}></ImageOne></a> */}
                 
                   
                    
                </div>
                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (<MenuOverlay closeMenuFunction={this.closeMenu} />) : ("")}

            </React.Fragment>
        )
    }

}

export default Newstwo;