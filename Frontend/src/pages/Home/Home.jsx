import React from "react";
import MainNavbar from "../../components/Navbar/MainNavbar";
import "./Home.css";
import MainImage from "../../assets/main.jpg";
import { Image } from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <MainNavbar />
      <div className="flex justify-center item-center">
        <Image
          width="80%"
          alt="Main Image"
          src={MainImage}
          classNames={{ wrapper: "flex justify-center" }}
        />
      </div>
    </>
  );
}
