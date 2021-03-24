import React, { Component } from "react";
import "./CarouselFour.css";
import ImageOne from "../Components/Images/ImageOne";
import HeadingTwo from "../Components/Texts/HeadingTwo";
import HeadingFive from "../Components/Texts/HeadingFive";
import Carousel from "react-multi-carousel";

export default function CarouselFour({ data }) {
  const instanceID=data.instanceID;
  const Events = {
    instanceID: "CarouselFourEvents",
    title: "VJCET Chapters",
  };
  const Previous = {
    instanceID: "CarouselFourPreviousArrow",
    image: "carousalthreeprevious.png",
    width: "20px",
  };

  const Next = {
    instanceID: "CarouselFourNextArrow",
    image: "carousalthreenext.png",
    width: "20px",
  };

  const slides = [
    {
      Title: {
        instanceID: "EventOneTitle",
        title:<a href="#/campus-life/professionalbodies/ieee" rel="noopener noreferrer"><font color="maroon">IEEE</font></a>
        
      },

      Image: {
        instanceID: "EventOneImage",
        image: "HomepageActivities/ieee.jpg",
        width: "120px",
      }
    },
    
    {
      Title: {
        instanceID: "EventTwoTitle",
        title:<a href="#/campus-life/professionalbodies/iste" rel="noopener noreferrer"><font color="maroon" >ISTE</font></a>
      },

      Image: {
        instanceID: "EventTwoImage",
        image: "HomepageActivities/ISTE1.png",
        width: "120px"
      }
    },
    {
      Title: {
        instanceID: "EventThreeTitle",
        title: <a href="#/campus-life/professionalbodies/igbc" rel="noopener noreferrer"><font color="maroon">IGBC</font></a>
      },

      Image: {
        instanceID: "EventThreeImage",
        image: "HomepageActivities/IGBC.jpg",
        width: "120px"
      }
    },
    {
      Title: {
        instanceID: "EventFourTitle",
        title: <a href="#/campus-life/professionalbodies/csi" rel="noopener noreferrer"><font color="maroon">CSI</font></a>
      },

      Image: {
        instanceID: "EventFourImage",
        image: "HomepageActivities/CSI.png",
        width: "120px"
      }
    },
    {
      Title: {
        instanceID: "EventFiveTitle",
        title: <a href="#/campus-life/professionalbodies/iete" rel="noopener noreferrer"><font color="maroon">IETE</font></a>
      },

      Image: {
        instanceID: "EventFiveImage",
        image: "HomepageActivities/iete.jpg",
        width: "120px"
      }
    },
    {
      Title: {
        instanceID: "EventSixTitle",
        title: <a href="#/campus-life/professionalbodies/sae" rel="noopener noreferrer"><font color="maroon">SAE INDIA</font></a>
      },

      Image: {
        instanceID: "EventSixImage",
        image: "HomepageActivities/SAEINDIA.jpg",
        width: "150px"
      }
    },
    {
      Title: {
        instanceID: "EventFourTitle",
        title: <a href="#/campus-life/nss"  rel="noopener noreferrer"><font color="maroon">NSS</font></a>
      },

      Image: {
        instanceID: "EventThreeImage",
        image: "HomepageActivities/NSS.png",
        width: "110px"
      }
    },
    
    {
      Title: {
        instanceID: "EventSevenTitle",
        title: <a href="#/campus-life/professionalbodies/ict" rel="noopener noreferrer"><font color="maroon">ICT</font></a>
      },

      Image: {
        instanceID: "EventSevenImage",
        image: "HomepageActivities/ict.png",
        width: "120px"
      }
    }  

  ];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  /* const Image = ({ img, slide }) => (
    <div
      id={slide}
      className="CustomImage"
      onClick={() => {
        if (!isMoving) {
          router.push("/#previewToTop");
          setView(slide);
        }
      }}
      title="View this project"
      draggable={false}
      style={{
        width: "100%",
        minHeight: "250px",
        height: "100%",
        position: "relative",
        background: `url("/images/portfolio/thumbnail/${img}.jpg")`,
      }}
    />
  ); */

  return (
    <div className="CarouselFour" id={instanceID}>
      <div className="CarouselFourContentWrapper">
        <div className="CarouselFourTop">
          <HeadingTwo data={Events} />
          <div className="CarouselFourArrows" id="CarouselFourArrows">
            {/* <ImageOne data={Previous} onClickAction={rotateLeft} />
            <ImageOne
              className="CarouselFourArrowRight"
              data={Next}
              onClickAction={rotateRight}
            /> */}
          </div>
        </div>

        <div className="CarouselFourSlider" style={{display: "block"}}>
          <Carousel
            focusOnSelect
            beforeChange={() => console.log("true moving")}
            afterChange={() => console.log("false moving")}
            responsive={responsive}
            showDots
            infinite
            containerClass="container-with-dots"
            itemClass="image-item"
          >
            {slides.map((item) => (
              <div className="CarouselFourSlide" id={instanceID + "SlideThree"}>
                <ImageOne data={item.Image} />
                <HeadingFive data={item.Title} />
              </div>
            ))}
          </Carousel>
          {/* {slides.map((item, index, arr) => {
            if (
              index < state.sliderSize + state.currentPage &&
              index >= state.currentPage * state.sliderSize
            ) {
              return (
                <div
                  className="CarouselFourSlide"
                  id={instanceID + "SlideThree"}
                >
                  <ImageOne data={item.Image} />
                  <HeadingFive data={item.Title} />
                </div>
              );
            }
          })} */}
        </div>
      </div>

      <div className="CarouselFourPaginationContainer">
        <div className="CarouselFourPagination">
          {/* {slides.map((item, index, arr) => {
            if (index % state.sliderSize === 0)
              return (
                <div
                  style={{
                    height: "6px",
                    width: "6px",
                    backgroundColor:
                      index === state.currentPage ? "#880D1E" : "#aaa",
                    margin: "5px",
                    borderRadius: "100%",
                  }}
                />
              );
          })} */}
        </div>
      </div>
    </div>
  );
}

/* class CarouselFour extends Component {
  state = { currentPage: 0, sliderSize: 3 };
  componentDidMount() {
    setState({ sliderSize: window.innerWidth < 768 ? 1 : 7 });
  }
  rotateLeft = () => {
    console.log("rotateLeft");
    console.log(state.currentPage);
    if (state.currentPage - 1 < 0) {
      setState({
        currentPage: Math.floor(slides.length / state.sliderSize) - 1
      });
    } else {
      setState({
        currentPage: state.currentPage - 1
      });
    }
  };
  rotateRight = () => {
    console.log("rotateRight");
    console.log(state.currentPage);
    if (
      state.currentPage + 1 >
      Math.floor(slides.length / state.sliderSize) - 1
    ) {
      setState({
        currentPage: 0
      });
    } else {
      setState({
        currentPage: state.currentPage + 1
      });
    }
  };
  
  Events = {
    instanceID: "CarouselFourEvents",
    title: "VJCET Chapters"
  };
  Previous = {
    instanceID: "CarouselFourPreviousArrow",
    image: "carousalthreeprevious.png",
    width: "20px"
  };

  Next = {
    instanceID: "CarouselFourNextArrow",
    image: "carousalthreenext.png",
    width: "20px"
  };
 
  slides = [
    {
      Title: {
        instanceID: "EventOneTitle",
        title:<a href="#/campus-life/professionalbodies/ieee" rel="noopener noreferrer"><font color="maroon">IEEE</font></a>
        
      },

      Image: {
        instanceID: "EventOneImage",
        image: "HomepageActivities/ieee.jpg",
        width: "120px",
      }
    },
    
    {
      Title: {
        instanceID: "EventTwoTitle",
        title:<a href="#/campus-life/professionalbodies/iste" rel="noopener noreferrer"><font color="maroon" >ISTE</font></a>
      },

      Image: {
        instanceID: "EventTwoImage",
        image: "HomepageActivities/ISTE1.png",
        width: "120px"
      }
    },
    {
      Title: {
        instanceID: "EventThreeTitle",
        title: <a href="#/campus-life/professionalbodies/igbc" rel="noopener noreferrer"><font color="maroon">IGBC</font></a>
      },

      Image: {
        instanceID: "EventThreeImage",
        image: "HomepageActivities/IGBC.jpg",
        width: "120px"
      }
    },
    {
      Title: {
        instanceID: "EventFourTitle",
        title: <a href="#/campus-life/professionalbodies/csi" rel="noopener noreferrer"><font color="maroon">CSI</font></a>
      },

      Image: {
        instanceID: "EventFourImage",
        image: "HomepageActivities/CSI.png",
        width: "120px"
      }
    },
    {
      Title: {
        instanceID: "EventFiveTitle",
        title: <a href="#/campus-life/professionalbodies/iete" rel="noopener noreferrer"><font color="maroon">IETE</font></a>
      },

      Image: {
        instanceID: "EventFiveImage",
        image: "HomepageActivities/iete.jpg",
        width: "120px"
      }
    },
    {
      Title: {
        instanceID: "EventSixTitle",
        title: <a href="#/campus-life/professionalbodies/sae" rel="noopener noreferrer"><font color="maroon">SAE INDIA</font></a>
      },

      Image: {
        instanceID: "EventSixImage",
        image: "HomepageActivities/SAEINDIA.jpg",
        width: "200px"
      }
    },
    {
      Title: {
        instanceID: "EventFourTitle",
        title: <a href="#/campus-life/nss" rel="noopener noreferrer"><font color="maroon">NSS</font></a>
      },

      Image: {
        instanceID: "EventThreeImage",
        image: "HomepageActivities/NSS.png",
        width: "110px"
      }
    },
    {
      Title: {
        instanceID: "EventFiveTitle",
        title: <a href="#/campus-life/professionalbodies/iete" rel="noopener noreferrer"><font color="maroon">IETE</font></a>
      },

      Image: {
        instanceID: "EventFiveImage",
        image: "HomepageActivities/iete.jpg",
        width: "120px"
      }
    },
    {
      Title: {
        instanceID: "EventSevenTitle",
        title: <a href="#/campus-life/professionalbodies/ict" rel="noopener noreferrer"><font color="maroon">ICT</font></a>
      },

      Image: {
        instanceID: "EventSevenImage",
        image: "HomepageActivities/ict.png",
        width: "200px"
      }
    }  

  ];
  render() {
    const { instanceID } = props.data;
    window.addEventListener("resize", () => {
      // console.log(window.innerWidth);
      if (window.innerWidth < 768 && state.sliderSize > 1) {
        setState({ sliderSize: 1 });
      } else if (window.innerWidth >= 768 && state.sliderSize < 7) {
        setState({ sliderSize: 7 });
      }
    });

    return (
      <div className="CarouselFour" id={instanceID}>
        <div className="CarouselFourContentWrapper">
          <div className="CarouselFourTop">
            <HeadingTwo data={Events} />
            <div className="CarouselFourArrows" id="CarouselFourArrows">
              <ImageOne data={Previous} onClickAction={rotateLeft} />
              <ImageOne
                className="CarouselFourArrowRight"
                data={Next}
                onClickAction={rotateRight}
              />
            </div>
          </div>

          <div className="CarouselFourSlider">
            {slides.map((item, index, arr) => {
              if (
                index < state.sliderSize + state.currentPage &&
                index >= state.currentPage * state.sliderSize
              ) {
                return (
                  <div
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
            {slides.map((item, index, arr) => {
              if (index % state.sliderSize === 0)
                return (
                  <div
                    style={{
                      height: "6px",
                      width: "6px",
                      backgroundColor:
                        index === state.currentPage ? "#880D1E" : "#aaa",
                      margin: "5px",
                      borderRadius: "100%"
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
 */
