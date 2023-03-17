import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HeaderHolder, StyledLink, SiteTitle } from "./Header.styles";
import {
    faPaw
  } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {

  const openMenu = () => {
    props.openMenu();
  } 
  
  return (
    <HeaderHolder>
      <div className="header">
        <div className="header-title-holder">
          <div className="header-item">
            <FontAwesomeIcon
              icon={faPaw}
              className="header-brand"
              onClick={() => openMenu()}
            />
          </div>
          <SiteTitle>
            <StyledLink to="/">
              <h1 className="titles">Aby Zebra</h1>
            </StyledLink>
          </SiteTitle>
        </div>
      </div>
    </HeaderHolder>
  );
};

export default Header;