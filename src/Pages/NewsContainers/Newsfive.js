import React from "react";
import HeadingTwo from "../../Components/Texts/HeadingTwo";
//import ImageOne from "../../Components/Images/ImageOne";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import "../../FacilitiesPageContainers/styles.css";
import "../../Components/News/gallery.css";
import Header from "../../Components/Header&Footer/Header";
import Footer from "../../Components/Header&Footer/Footer";
import MenuOverlay from "../../Components/MenuOverlay/MenuOverlay";
import HeadingOne from "../../Components/Texts/HeadingOne";
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

class Newsfive extends React.Component {
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
        title: "B.Tech Fee Payment"
    };
    NewsTitle1 = {
        instanceID: "NewsTitle1",
        title: "NOTICE"
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
                   
                   <HeadingOne data={this.NewsTitle} />
                   <BodyOneJustified data={this.Newscontent}/> 
                    
                   <p>For payment through <span className="text_red">NEFT</span>, Bank Account Details,</p>

                   <p>Name of the Account Holder : <b>PRINCIPAL</b></p>
                    <p>Name of the Bank - <b>South Indian Bank</b></p>
                    <p>Name of the Branch - <b>Vazhakulam - IFSC Code : SIBL0000335</b></p>
                    <p>Account Number : <b>0335073000000155</b></p>
                    <p><span className="text_red">Very Important : Please mention Admission Number of the student in remarks.</span></p><br></br>
                    <p><span className="text_red">SIB Online Fee Payment </span> <a href="https://southindianbank.in/feepayment/" target="_blank">Click Here </a></p>
                    <p><span className="text_red">To download Bank Challan </span><a href="https://vjcet.org/downloads/news/SIBChallan.pdf" target="_blank"> Click Here </a></p>
                    
                 <HeadingOne data={this.NewsTitle1} /> 
                
                  <iframe src="https://vjcet.org/downloads/news/Notice.pdf" width="100%" height="600" title="Campus Map" align="center"></iframe>     
                   
                </div>


                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (<MenuOverlay closeMenuFunction={this.closeMenu} />) : ("")}

            </React.Fragment>
        )
    }

}

export default Newsfive;
