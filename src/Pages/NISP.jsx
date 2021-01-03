import React, { Component } from "react";
import Header from "../Components/Header&Footer/Header";
import Footer from "../Components/Header&Footer/Footer";
import MenuOverlay from "../Components/MenuOverlay/MenuOverlay";
import HeadingOne from "../Components/Texts/HeadingOne";
import BodyThree from "../Components/Texts/BodyThree";
import BodyOneJustified from "../Components/Texts/BodyOneJustified";
import "../Pages/Research.css";
import "../Components/Tables/tableformat.css";
import HeadingThree from "../Components/Texts/HeadingThree";
import a1 from "../Assets/NISP/a1.png";

class NISP extends Component {
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

    NispHeading = {
        instanceID: "NispHeading",
        title: "National Innovation and Startup Policy Cell (NISP)"
    }

    ProfileHeading = {
        instanceID: "ProfileHeading",
        title: "Profile"
    };
    CompanyHeading = {
        instanceID: "IedcHeading",
        title: "Activities"
    }
    IedcBody1 = {
        instanceID: "IedcBody1",
        title: "The  All India Council of Technical Education (AICTE)  have initiated various measures to inculcate innovations and entrepreneurial culture in higher education institutions (HEIs). As Government of India and Government of Kerala is fiercely pursuing the goal of creating an enterprising India, in VJCET we have formed a National Innovation and Startup Policy Cell. The main objective of  VJCET NISP cell  is to raise entrepreneurship awareness among  students,  lay a solid foundation of knowledge on Entrepreneurship and to improve their entrepreneurial skills and abilities. VJCET also have Innovation and Entrepreneurship Development Centre (IEDC)  and Viswajyothi   Business Incubation Centre (V-BIC)  functioning together with NISP to implement the startup policy laid done by the institution. Following are the members of the NISP Coordination Committee for the year 2020-21. "
    }
    InchargesHeading = {
        instanceID: "InchargesHeading",
        title: "NISP Team"
    };
    ObjectiveHeading = {
        instanceID: "ObjectiveHeading",
        title: "Objectives"
    };
    FunctionHeading = {
        instanceID: "FunctionHeading",
        title: "Startup Policy"
    };

    TableData = [
        {
            name: "Shri. Vinoj K",
            dep: "Associate  Professor, ME",
            desig: "Convener"
        }, {
            name: "Shri. Nelson Mathew",
            dep: "Assistant Professor, MBA",
            desig: "Co-Convenor"
        }, {
            name: "Shri. Tijo Jose",
            dep: "Assistant Professor, ME",
            desig: "Member"
        }, {
            name: "Smt. Lakshmi M S ",
            dep: "Assistant Professor, ECE",
            desig: "Member"
        }, {
            name: "Smt. Jinta Jose ",
            dep: "Assistant Professor, S&H",
            desig: "Member"
        }, {
            name: "Smt. Neena Skaria ",
            dep: "Assistant Professor, EEE",
            desig: "Member"
        }, {
            name: "Smt. Ann Preetha Jose",
            dep: "Assistant Professor, IT",
            desig: "Member"
        }, {
            name: "Shri. Appu John",
            dep: "Assistant Professor, CE",
            desig: "Member"
        }, {
            name: "Smt. Remya Paul",
            dep: "Assistant Professor, CSE",
            desig: "Member"
        }
    ]

    ObjectiveData = [{
        instanceID: "ObjectiveItem",
        title: "To act as an institutional mechanism for providing various services including information on all aspects of enterprise building to budding S&T entrepreneurs. "
    },
    {
        instanceID: "ObjectiveItem",
        title: "To create Entrepreneurial culture in the Parent Institution and other institutions in the region and to promote the objectives of NSTEDB, including programmes related to women and weaker sections of the society."
    },
    {
        instanceID: "ObjectiveItem",
        title: "To inculcate a culture of innovation driven entrepreneurship through student projects."
    },
    {
        instanceID: "ObjectiveItem",
        title: "To catalyze and promote development of S&T knowledge-based enterprises and promote employment opportunities in the innovative areas. "
    },
    {
        instanceID: "ObjectiveItem",
        title: "To respond effectively to the emerging challenges and opportunities both at national and international level relating to SMEs and micro enterprises"
    }
    ]
    ActivitiesData = [
        {
            instanceID: "NispActivitiesItem",
            title: "NISP had organized a webinar on “HOW TO FRAME A STARTUP POLICY”. The webinar was on 21st NOVEMBER 2020. The resource person was Mr Gautham, Founder and Director Pupilfirst.",
            img: a1
        },
    ]

    render() {
        return (
            <div className="HomePage NispPage">
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />
                <HeadingOne data={this.NispHeading} />
                <HeadingThree data={this.ProfileHeading} />
                <BodyThree data={this.IedcBody1} /><br />
                <HeadingThree data={this.InchargesHeading} />

                <div className="inner-para">
                    <table id="tableformat">
                        <tr><th>Name</th><th>DEP DESIGNATION</th><th>DESIGNATION</th></tr>
                        {this.TableData.map(i =>

                            <tr key={this.TableData.indexOf(i)}>
                                <td>{i.name}</td>
                                <td>{i.dep}</td>
                                <td>{i.desig}</td>
                            </tr>
                        )}

                    </table>
                    <div className="NispObjectiveHeading">
                        <HeadingThree data={this.ObjectiveHeading} />
                    </div>
                    <ul>
                        {this.ObjectiveData.map(i =>
                            <li key={this.ObjectiveData.indexOf(i)}>
                                <p>
                                    <BodyOneJustified data={i} />
                                </p>
                            </li>
                        )}
                    </ul>
                    <div className="NispObjectiveHeading">
                        <HeadingThree data={this.FunctionHeading} />
                    </div>
                    <div className="NispStartUp">
                        <h4>View Startup Policy: </h4>
                        <a href="https://drive.google.com/file/d/1bUK8EJeCr2TTjDPX-0ho1ch-_saHT4Gl/view?usp=sharing" className="NispButton" target="_blank">
                            <h4>Open Policy</h4>
                        </a>
                    </div>
                    <div className="NispObjectiveHeading">
                        <HeadingThree data={this.CompanyHeading} />

                    </div>
                    <ul className="NispActivitiesList">
                        {this.ActivitiesData.map(i =>
                            <div key={this.ObjectiveData.indexOf(i)} className="NispActivities">
                                <li>
                                    <p>
                                        <BodyOneJustified data={i} />
                                    </p>
                                    {i.img && <div className="NispActivitiesImg">
                                        <img src={i.img} alt="" />
                                    </div>}
                                </li>
                            </div>
                        )}
                    </ul>
                </div>


                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (
                    <MenuOverlay closeMenuFunction={this.closeMenu} />
                ) : (
                        ""
                    )}
            </div>
        );
    }
}

export default NISP;