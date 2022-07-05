import React, { useEffect, useState, useContext } from "react"
import './styles.css';
import Home from "./Home"
import Modal from "./Modal"
import Sidebar from "./Sidebar"
import { appContext } from "./Context";

function App() {
  return (
    <>
      <Home />
      <Modal />
      <Sidebar />
    </>
  );
}

export default App;



