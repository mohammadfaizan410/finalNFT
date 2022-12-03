import { finalNFT_backend } from "../../declarations/finalNFT_backend";
import React from "react";
import ReactDOM from "react-dom";
import "../assets/main.css"
import App from "./components/App"
import { Principal } from "@dfinity/principal";
const CURRENT_USER_ID = Principal.fromText("2vxsx-fae");
export default CURRENT_USER_ID;
ReactDOM.render(<App />, document.getElementById("root"));