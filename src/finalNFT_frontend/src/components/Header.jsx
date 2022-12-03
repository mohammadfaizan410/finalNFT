import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import { finalNFT_backend } from "../../../declarations/finalNFT_backend";
import CURRENT_USER_ID from "..";
import Gallery from "./Gallery";
import Minter from "./Minter";
import "../../assets/main.css";
function Header() {




  return (
      <div className="app-root-1">
        <header className="Paper-root AppBar-root AppBar-positionStatic AppBar-colorPrimary Paper-elevation4">
          <div className="Toolbar-root Toolbar-regular header-appBar-13 Toolbar-gutters">
            <div className="header-left-4"></div>
            <div className="header-vertical-9"></div>
            <Link to="/">
              <h5 className="Typography-root header-logo-text">Skeleton</h5>
            </Link>
            <div className="header-empty-6"></div>
            <div className="header-space-8"></div>
            <button className="ButtonBase-root Button-root Button-text header-navButtons-3">
              <Link to="/discover">Discover</Link>
            </button>
            <button className="ButtonBase-root Button-root Button-text header-navButtons-3">
              <Link to="/minter">Minter</Link>
            </button>
            <button className="ButtonBase-root Button-root Button-text header-navButtons-3">
              <Link to="/collection">My NFTs</Link>
            </button>
          </div>
        </header>
      </div>
  );
}

export default Header;
