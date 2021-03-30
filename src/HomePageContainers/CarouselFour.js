import React, { Component } from "react";
import "./CarouselFour.css";
import ImageOne from "../Components/Images/ImageOne";
import HeadingTwo from "../Components/Texts/HeadingTwo";
import HeadingFive from "../Components/Texts/HeadingFive";

class CarouselFour extends Component {
  state = { currentPage: 0, sliderSize: 3 };
  componentDidMount() {
    this.setState({ sliderSize: window.innerWidth < 768 ? 1 : 3 });
  }
  rotateLeft = () => {
    console.log("rotateLeft");
    console.log(this.state.currentPage);
    if (this.state.currentPage - 1 < 0) {
      this.setState({
        currentPage: Math.floor(this.slides.length / this.state.sliderSize) - 1,
      });
    } else {
      this.setState({
        currentPage: this.state.currentPage - 1,
      });
    }
  };
  rotateRight = () => {
    console.log("rotateRight");
    console.log(this.state.currentPage);
    if (
      this.state.currentPage + 1 >
      Math.floor(this.slides.length / this.state.sliderSize) - 1
    ) {
      this.setState({
        currentPage: 0,
      });
    } else {
      this.setState({
        currentPage: this.state.currentPage + 1,
      });
    }
  };
  CarouselTitle = {
    instanceID: "CarouselTitle",
    title: "Top Events",
  };
  Events = {
    instanceID: "CarouselFourEvents",
    title: "Top Events",
  };
  Previous = {
    instanceID: "CarouselFourPreviousArrow",
    image: "carousalthreeprevious.png",
    width: "20px",
  };

  Next = {
    instanceID: "CarouselFourNextArrow",
    image: "carousalthreenext.png",
    width: "20px",
  };
  EventOneTitle = {
    instanceID: "EventOneTitle",
    title: "Arts Festival : Drishya 2K19",
  };

  EventOneImage = {
    instanceID: "EventOneImage",
    image: "CarouselFourImages/stock3.png",
    width: "202px",
  };

  EventTwoTitle = {
    instanceID: "EventTwoTitle",
    title: "Magnum 2k19",
  };

  EventTwoImage = {
    instanceID: "EventTwoImage",
    image: "CarouselFourImages/magnum.jpg",
    width: "202px",
  };

  EventThreeTitle = {
    instanceID: "EventThreeTitle",
    title: "Tech Fest : Bodhi 2K19",
  };

  EventThreeImage = {
    instanceID: "EventThreeImage",
    image: "CarouselFourImages/stock3.png",
    width: "202px",
  };
  slides = [
    {
      Title: {
        instanceID: "EventOneTitle",
        title: (
          <a
            href="https://vjcet.org/downloads/gallery/drishya.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <font color="#880d1e">Arts Festival : Drishya 2K19</font>
          </a>
        ),
      },

      Image: {
        instanceID: "EventOneImage",
        image: "CarouselFourImages/drishya.jpg",
        width: "202px",
      },
    },

    {
      Title: {
        instanceID: "EventTwoTitle",
        title: (
          <a
            href="https://vjcet.org/downloads/gallery/magnum.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <font color="#880d1e">Magnum 2K19</font>
          </a>
        ),
      },

      Image: {
        instanceID: "EventTwoImage",
        image: "CarouselFourImages/magnum.jpg",
        width: "202px",
      },
    },
    {
      Title: {
        instanceID: "EventThreeTitle",
        title: (
          <a
            href="https://vjcet.org/downloads/gallery/bodhi.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <font color="#880d1e">Tech Fest : Bodhi 2K19"</font>
          </a>
        ),
      },

      Image: {
        instanceID: "EventThreeImage",
        image: "CarouselFourImages/bodhi.jpg",
        width: "202px",
      },
    },
  ];

  render() {
    const { instanceID } = this.props.data;
    window.addEventListener("resize", () => {
      // console.log(window.innerWidth);
      if (window.innerWidth < 768 && this.state.sliderSize > 1) {
        this.setState({ sliderSize: 1 });
      } else if (window.innerWidth >= 768 && this.state.sliderSize < 3) {
        this.setState({ sliderSize: 3 });
      }
    });

    return (
      <div className="CarouselFour" id={instanceID}>
        <div className="CarouselFourContentWrapper">
          <div className="CarouselFourTop">
            <HeadingTwo data={this.Events} />
            <div className="CarouselFourArrows" id="CarouselFourArrows">
              <ImageOne data={this.Previous} onClickAction={this.rotateLeft} />
              <ImageOne
                className="CarouselFourArrowRight"
                data={this.Next}
                onClickAction={this.rotateRight}
              />
            </div>
          </div>

          <div className="CarouselFourSlider">
            {this.slides.map((item, index, arr) => {
              if (
                index < this.state.sliderSize + this.state.currentPage &&
                index >= this.state.currentPage * this.state.sliderSize
              ) {
                return (
                  <div
                    key={index}
                    className="CarouselFourSlide"
                    id={instanceID + "SlideThree"}
                  >
                    <ImageOne data={item.Image} />
                    <HeadingFive data={item.Title} />
                  </div>
                );
              }
            })}
          </div>
        </div>

        <div className="CarouselFourPaginationContainer">
          <div className="CarouselFourPagination">
            {this.slides.map((item, index, arr) => {
              if (index % this.state.sliderSize === 0)
                return (
                  <div
                  key={index}
                    style={{
                      height: "6px",
                      width: "6px",
                      backgroundColor:
                        index === this.state.currentPage ? "#880D1E" : "#aaa",
                      margin: "5px",
                      borderRadius: "100%",
                    }}
                  />
                );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default CarouselFour;
