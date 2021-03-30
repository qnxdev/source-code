import React from "react";
import HeadingTwo from "../../Components/Texts/HeadingTwo";
//import ImageOne from "../../Components/Images/ImageOne";
//import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import "../../FacilitiesPageContainers/styles.css";
import "../../Components/News/gallery.css";
import Header from "../../Components/Header&Footer/Header";
import Footer from "../../Components/Header&Footer/Footer";
import MenuOverlay from "../../Components/MenuOverlay/MenuOverlay";
//import HeadingOne from "../../Components/Texts/HeadingOne";
//import ImageOne from "../../Components/Images/ImageOne";
//import ImageTwo from "../../Components/Images/imageTwo";

/* import HeadingTwo from "../../Components/Texts/HeadingTwo";
import ImageOne from "../../Components/Images/ImageOne";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import "../styles.css"

import Header from "../../Components/Header&Footer/Header";
import Footer from "../../Components/Header&Footer/Footer";
import MenuOverlay from "../../Components/MenuOverlay/MenuOverlay"; 
import HeadingOne from "../../Components/Texts/HeadingOne";*/

class Newsseven extends React.Component {
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
        title: "title"
    };
    NewsTitle1 = {
        instanceID: "NewsTitle1",
        title: "ONE WEEK AICTE SPONSORED STTP ON “IoT BASED MANUFACTURING AND DESIGN - CHALLENGES AND OPPORTUNITY"
    };

    Newscontent = {
        instanceID: "Newscontent",
        title: ""
    };
    
    NewsImagedata1 = {
        instanceID: "NewsImagedata1",
        image: "NewsImages/csi.jpg",
        width: "80%"
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
                   
                <HeadingTwo data={this.NewsTitle1} />
                    <p><h4><a href="https://vjcet.org/downloads/news/STTPbro.pdf" target="_blank" rel="noopener noreferrer">Program Bochure</a></h4></p>
                    <p><h4><a href="https://forms.gle/qvtyuKCdvg3bePgV9" target="_blank" rel="noopener noreferrer">Registration Link</a></h4></p>          
                    <p><h4><a href="https://vjcet.org/downloads/news/sttpbr.jpeg" target="_blank" rel="noopener noreferrer">Program Schedule</a></h4></p>
                  
                  {/*  <table>
                        <tr><td>
                        Details of Donor
                            </td>
                            <td>
                            Diocese of Rottenburg - Stugart
                            </td>
                        </tr>
                        <tr><td>
                        Amount Received 
                            </td>
                            <td>
                            19,49,495/-( 24,970/-Euro)
                            </td>
                        </tr>
                        <tr><td>
                        Date of Receipt  
                            </td>
                            <td>
                            29-01-2020
                            </td>
                        </tr>
                  </table>*/}
                    
                </div>
                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (<MenuOverlay closeMenuFunction={this.closeMenu} />) : ("")}

            </React.Fragment>
        )
    }

}

export default Newsseven;