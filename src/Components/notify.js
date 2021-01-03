import React from 'react';
import { Link } from 'react-router-dom';
import "./notify.css";

export default function Notify() {
    const [notify, setNotifier] = React.useState(true);
    const toggler = e => {
        setNotifier(false);
    }
    const extln = e => {
        window.open('http://117.239.154.84:8001/ktuexam/index.html','_blank');
        toggler(e);
    }
    const head = "KTU B.Tech Examination";
    const content = "Information regarding Examination"; /*  https://admission.vjcet.ac.in/     http://117.239.154.84:8001/ktuexam/index.html
    
    
        const head = "B.Tech Fee Payment";
    const content = "Information regarding fee payment";
        
       
        const head = "B.Tech Artificial Intelligence (AI)";
    const content = "Viswajyothi is proud to introduce a new B.Tech Programme in Artificial Intelligence";*/ 
    
    if (notify) {
        return (
            <div id="noverlay" >
                <div className="notifier">
                    <h2 id="notifyhead">{head}</h2>
                    <h3 id="notification">{content}</h3>
                    <div id="toggles">
                        {/*<Link to="/newsfive" className="togglenotifier" >
                            <h2 onClick={toggler} style={{ margin: 0 }} >Learn More</h2>
        </Link>*/}
                        <Link to="#" className="togglenotifier" >
                            <h2 onClick={extln} style={{ margin: 0 }} >Learn More</h2>
                        </Link>
                        <div className="togglenotifier" id="extln">
                            <h2 onClick={toggler} style={{ margin: 0 }} >Skip</h2>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
    return "";
}
