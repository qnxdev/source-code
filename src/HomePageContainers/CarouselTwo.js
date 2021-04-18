import React, { Component } from "react";
import "./CarouselTwo.css";
import CustomOne from "../Components/Texts/CustomOne";

class CarouselTwo extends Component {
  state = { selected: 0 };
  data = [
    {
      instanceID: this.props.data.instanceID + "CustomOne",
      title: <a href="https://vjcet.org/#/newsthree"  rel="noopener noreferrer"><font color="FFFFF" size="4">Wanted Asst. Professor in Department of Management Studies</font></a>
    },
    {
      instanceID: this.props.data.instanceID + "CustomOne",
      title: <a href="https://vjcet.org/#/newsfive"  rel="noopener noreferrer"><font color="FFFFF" size="4">B.Tech Fee Payment</font></a>
    },
    {
      instanceID: this.props.data.instanceID + "CustomOne",
      title: <a href="https://vjcet.org/#/newstwo"  rel="noopener noreferrer"><font color="FFFFF" size="4">Covid 19, Institutional Plan and SOP</font></a>
    },    
    {
      instanceID: this.props.data.instanceID + "CustomOne",
      title: <a href="https://vjcet.org/#/newsone"  rel="noopener noreferrer"><font color="FFFFF" size="4">KTU 2016-2020 Batch Final Semester Results Published</font></a>
    },
    {
      instanceID: this.props.data.instanceID + "CustomOne",
      title: <a href="https://docs.google.com/forms/d/e/1FAIpQLSeBieRfZ4KoIqGB2hDCMFnOnmT9PGQxfb1XNZ-VqkPahmn25w/formResponse"  rel="noopener noreferrer"><font color="FFFFF" size="4">VISWAJYOTHI WELLNESS SURVEY DURING COVID 19</font></a>
    }, 
    {
      instanceID: this.props.data.instanceID + "CustomOne",
      title: <a href="http://117.239.154.84:8001/ktuexam/index.html"  rel="noopener noreferrer"><font color="FFFFF" size="4">KTU B.Tech Examination</font></a>
    },
   
    {
      instanceID: this.props.data.instanceID + "CustomOne",
      title: <a href="https://vjcet.org/#/newsnine"  rel="noopener noreferrer"><font color="FFFFF" size="4">Congratulations to the Placed Students - 2016-2020 Batch</font></a>
    },
    
    {
      instanceID: this.props.data.instanceID + "CustomOne",
      title: <a href="https://vjcet.org/#/newssix"  rel="noopener noreferrer"><font color="FFFFF" size="4">Access to Study Materials- Video Lectures, PPTs & PDFs</font></a>
    },
    
    {
      instanceID: this.props.data.instanceID + "CustomOne",
      title: <a href="https://vjcet.org/#/newsfour"  rel="noopener noreferrer"><font color="FFFFF" size="4">Information Regarding Online Classes</font></a>
    }, 
    
    {
      instanceID: this.props.data.instanceID + "CustomOne",
      title: <font color="FFFFF" size="4">CSI BEST ACCREDITED STUDENT BRANCH AWARD</font>
    },
    {
      instanceID: this.props.data.instanceID + "CustomOne",
      title: <font color="FFFFF" size="4">IEEE of VJCET selected as outstanding students branch</font>
    },        
    {
      instanceID: this.props.data.instanceID + "CustomOne",
      title: <font color="FFFFF" size="4">We have not received any Foreign Contribution  in the last Quarter Year.</font>
    },
  ];
  rotateRight = () => {
    this.setState({
      selected:
        this.state.selected + 1 >= this.data.length
          ? 0
          : this.state.selected + 1
    });
  };
  rotateLeft = () => {
    this.setState({
      selected:
        this.state.selected - 1 < 0
          ? this.data.length - 1
          : this.state.selected - 1
    });
  };
  componentDidMount(){
    this.autoRotate();
    setTimeout(()=>{
      this.setState({
        selected: 0
      });
    });
  }
  autoRotate() {
    setTimeout(()=>{
      this.setState({
        selected:
        this.state.selected + 1 >=this.data.length
        ? 0
        : this.state.selected+1
      });
      
      this.autoRotate();
  }, 4000);
  }
  render() {
    const { instanceID } = this.props.data;

    return (
      <div className="CarouselTwo" id={instanceID}>
        <div className="CarouselTwoSlider">
          <div className="CarouselTwoSlide" id={instanceID} >
            <CustomOne
              data={this.data[this.state.selected]}
              className="CarouselTwoText"
              
            />
          </div>
        </div>
        <div className="CarouselTwoPagination">
          {this.data.map((item, index, arr) => {
            return (
              <div
              key={index}
                onFocus={e => {
                  this.setState({ selected: index });
                }}
                onClick={e => {
                  this.setState({ selected: index });
                }}
              >
                <div
                  style={{
                    height: "6px",
                    width: "6px",
                    borderRadius: "100%",
                    backgroundColor:
                      this.state.selected === index ? "#fff" : "#ffffff77",
                    margin: "0px 2px"
                  }}
                />
              </div>
            );
          })}
        </div>
        <div
          className="CarouselTwoRightArrow"
          onClick={e => {
            this.rotateRight();
          }}
        >
          <img
            src={require("../Assets/carousaltwoarrow.png")}
            style={{ height: "15px", width: "15px" }}
            alt="img"
          />
        </div>

        <div
          className="CarouselTwoLeftArrow"
          onClick={e => {
            this.rotateLeft();
          }}
        >
          {" "}
          <img
            src={require("../Assets/carousaltwoarrow.png")}
            style={{
              height: "15px",
              width: "15px",
              transform: "rotate(180deg)"
            }}
            alt="img"
          />
        </div>
      </div>
    );
  }
}

export default CarouselTwo;
