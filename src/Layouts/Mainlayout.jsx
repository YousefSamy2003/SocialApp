import React from "react";
import { Outlet } from "react-router-dom";
import NavbarComponent from "../Components/Layout/Navbar";
import Footer from "../Components/Layout/Footer";


export default function Mainlayout() {
  return (
    <>
      <NavbarComponent></NavbarComponent>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}
