import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Minter from "./Minter";
import { finalNFT_backend } from "../../../declarations/finalNFT_backend";
import CURRENT_USER_ID from "..";
import Gallery from "./Gallery";

function App() {
  // const NFTID = "qaa6y-5yaaa-aaaaa-aaafa-cai";
  
  return (
    <div className="App">
      <Header />
      {/* <img className="bottom-space" src="https://media.meer.com/attachments/04e145a7766cf886db5a393c78abf389a86d5337/store/fill/1380/776/53c6aae5591e82b99b86f6dc5ca15f4de181a74ef0955cf8d0ddc1880d6b/Consensual-Hallucinations-NFT-artwork-by-Australian-artist-Serwah-Attafuah-Courtesy-the-artist.jpg" /> 
      <Item
      id={NFTID}
    /> */}
        {/* <Minter /> */}
    <Footer />
    </div>
  );
}

export default App;
