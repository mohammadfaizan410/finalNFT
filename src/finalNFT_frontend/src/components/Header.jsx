import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import { finalNFT_backend } from "../../../declarations/finalNFT_backend";
import CURRENT_USER_ID from "..";
import Gallery from "./Gallery";
import Minter from "./Minter";
import "../../assets/main.css";
function Header() {

  const [userOwnedGallery, setOwnedGallery] = useState();
  const [listingGallery, setListingGallery] = useState();
  async function getNFTs() {
    const userNFTIds = await finalNFT_backend.getOwnedNFTs(CURRENT_USER_ID);
    console.log(userNFTIds);
    setOwnedGallery(
      <Gallery title="My NFTs" ids={userNFTIds} role="collection" />
    );

    const listedNFTIds = await finalNFT_backend.getListedNFTs();
    console.log(listedNFTIds);
    setListingGallery(
      <Gallery title="Discover" ids={listedNFTIds} role="discover" />
    );
  }

  useEffect(() => {
    getNFTs();
  }, []);


  return (
    <BrowserRouter>
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
      <Routes>
        <Route exact path="/"
          element={<img className="bottom-space" src="https://media.meer.com/attachments/04e145a7766cf886db5a393c78abf389a86d5337/store/fill/1380/776/53c6aae5591e82b99b86f6dc5ca15f4de181a74ef0955cf8d0ddc1880d6b/Consensual-Hallucinations-NFT-artwork-by-Australian-artist-Serwah-Attafuah-Courtesy-the-artist.jpg" />}
        />
        <Route path="/discover" element={listingGallery}/>
        <Route path="/minter" element={<Minter />}/>
        <Route path="/collection" element={userOwnedGallery}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Header;
