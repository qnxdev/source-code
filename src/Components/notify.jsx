import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./notify.css";

export default function Notify() {
  const [notify, setNotifier] = useState(true);
  const toggler = (e) => {
    setNotifier(false);
    if (document) document.cookie = "notify=true; max-age=3600";
  };
  const extln = (e) => {
    window.open("http://117.239.154.84:8001/ktuexam/index.html", "_blank");
    toggler(e);
  };
  const head = "KTU B.Tech Examination";
  const content = "Information regarding Examination";
  const extraInfo = {
    link: "/newsfive", //change this
    content: "Quick Access | B.Tech fee payment", //change this
  };

  /*  https://admission.vjcet.ac.in/     http://117.239.154.84:8001/ktuexam/index.html*/

  useEffect(() => {
    if (
      document.cookie
        .split("; ")
        .find((cookie) => cookie.startsWith("notify=")) &&
      document.cookie
        .split("; ")
        .find((cookie) => cookie.startsWith("notify="))
        .split("=")[1] == "true"
    ) {
      setNotifier(false);
    }
  });

  if (notify) {
    return (
      <div id="noverlay">
        <div className="notifier">
          <h2 id="notifyhead">{head}</h2>
          <h3 id="notification">{content}</h3>
          <div id="toggles">
            {/*<Link to="/newsfive" className="togglenotifier" >
                            <h2 onClick={toggler} style={{ margin: 0 }} >Learn More</h2>
        </Link>*/}
            <Link to="#" className="togglenotifier">
              <h2 onClick={extln} style={{ margin: 0 }}>
                Learn More
              </h2>
            </Link>
            <div className="togglenotifier" id="extln">
              <h2 onClick={toggler} style={{ margin: 0 }}>
                Skip
              </h2>
            </div>
          </div>
          <div className="extranotify" onClick={toggler}>
            <Link to={extraInfo.link}>
              <h4>{extraInfo.content}</h4>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return "";
}
