import React from "react"
import './SideNavBar.css'
    ;

export default function SideNavBar({ selector, selectorList, handleSelect, children }) {
    const setSelect = (e) => {
        handleSelect(e.target.id);
    }
    return (
        <div className="SideNavBar">
            <div className="SideNavBarSelector">
                {selectorList.map(i =>
                    <div className={`SideNavBarSelectorItem${selector == i.id ? ' NavSelected' : ""}`} onClick={setSelect} id={i.id} key={selectorList.indexOf(i)}>
                        <h4 id={i.id}>{i.title}</h4>
                    </div>
                )}
            </div>
            <div className="SideNavBarContent">
                {children}
            </div>
        </div>
    )
}