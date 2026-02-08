import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Layout/Navbar";
import Footer from "../Components/Layout/Footer";

export default function Mainlayout() {
  return (
    <>
   <Navbar></Navbar>
   <Outlet></Outlet>
   <Footer></Footer>
    </>
  );
}
