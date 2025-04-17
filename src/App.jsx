import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/Sidebar";
import MainSection from "./components/mainSection/MainSection";
import Footer from "./components/footer/footer";


function App() {
  return (
    <>
      <div className="mainContainer">
        <Navbar />
        <div className="mainSectionContentContainer">
          <Sidebar />
          <MainSection />
        </div><Footer/>
      </div>
    </>
  );
}

export default App;
