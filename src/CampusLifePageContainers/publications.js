import React from "react";
import Header from "../Components/Header&Footer/Header";
import Footer from "../Components/Header&Footer/Footer";
import HeadingOne from "../Components/Texts/HeadingOne";
import MenuOverlay from "../Components/MenuOverlay/MenuOverlay";
import "../Components/Images/gallery.css";


class Publications extends React.Component {
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


    CampustTitle = {
        instanceID: "CampustTitle",
        title: "College Magazine"
    };
    
    
    
   

    render() {
        return (
            <React.Fragment>
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />

                <div className="Profile" id="profile">
                <HeadingOne data={this.CampustTitle} />
                <div className="bodyContainer">
                    
                    <iframe src="https://vjcet.org/downloads/Magazine2020.pdf" width="90%" height="800" title="Campus Map" align="center"></iframe>
                </div>
            </div>      
               
                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (<MenuOverlay closeMenuFunction={this.closeMenu} />) : ("")}

            </React.Fragment>
        )
    }

}

export default Publications;