import React, { useState } from "react";
import Footer from "../Header&Footer/Footer";
import Header from "../Header&Footer/Header";
import MenuOverlay from "../MenuOverlay/MenuOverlay";

export default function Page({ children }) {
  const [showMenu, setMenu] = useState(false);
  const openMenu = () => setMenu(true);
  const closeMenu = () => setMenu(true);

  const HomePageHeader = {
    instanceID: "HomePageHeader",
  };
  const HomePageFooter = {
    instanceID: "HomePageFooter",
  };
  return (
    <div className="Page">
      <Header data={HomePageHeader} openMenuFunction={openMenu} />

      {children}
      
      <Footer data={HomePageFooter} />
      {showMenu ? <MenuOverlay closeMenuFunction={closeMenu} /> : ""}
    </div>
  );
}
