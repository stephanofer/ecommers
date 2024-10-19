// import { CarouselPlugin } from "./components/layout/Carousel";
"use client"
import ImageHOla from "./3.webp";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="" >
        <Image
          src={ImageHOla}
          alt="Description of image"
          className="object-cover"
          priority
          onClick={() => console.log("Hola mundo")}
        />
      </div>

      <div>
        <h1 className="text-5xl ">Productos Seleccionados</h1>
      </div>
    </>
  );
}
