import React from "react";
import MainNavbar from "../../components/Navbar/MainNavbar";
import "./Home.css";
import MainImage from "../../assets/main.jpg";
import { Image } from "@heroui/react";
import ProductCard from "../../components/ProductCard/ProductCard";
import Testimonial from "../../components/Testimonial/Testimonial";

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
      <div className="flex flex-col pt-10">
        <div className="flex justify-center item-center">
          <h2 class="text-2xl/7 font-bold text-white sm:truncate sm:text-3xl sm:tracking-tight">
            ELEVATE YOUR STYLE WITH OUR LATEST COLLECTION
          </h2>
        </div>
        <div class="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          <div class="p-4">
            <ProductCard />
          </div>
          <div class="p-4">
            <ProductCard />
          </div>
          <div class="p-4">
            <ProductCard />
          </div>
          <div class="p-4">
            <ProductCard />
          </div>
          <div class="p-4">
            <ProductCard />
          </div>
          <div class="p-4">
            <ProductCard />
          </div>
          <div class="p-4">
            <ProductCard />
          </div>
          <div class="p-4">
            <ProductCard />
          </div>
        </div>
      </div>
      <div>
        <Testimonial />
      </div>
    </>
  );
}
