import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import Title from "@/sections/Title";
import Video from "@/sections/Video";
import { IndiaGate } from "@/sections/IndiaGate";

import { Showreel } from "@/data/showreel";
import { ECImage } from "@/data/echochamber";

import ig from "../../public/indiagate.jpg";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-background">
      <div className="frame mx-5 my-2.5 mt-5">
        <div className="flex justify-between text-secondary px-5 py-2.5">
          <div className="font-sw font-semibold uppercase">
            <Link href="/">Srivatsa Pidaparthi</Link>
          </div>
          <Navbar />
      </div>
      <div className="grid grid-cols-2">
        <div></div>
        <div><Hero /></div>
      </div>
      </div>

      <Title name={"Showreel"}/>
      {Showreel.map((video) => (
        <Video key={video.link} img={video.img} link={video.link} desc={video.desc} />
      ))}

      <Title name={"Echo Chamber"}/>
      <div className="frame mx-5 my-2.5 px-5 py-2.5 items-center">
        <div className="grid grid-cols-4 gap-5 justify-center items-center align-center">
          {ECImage.map((image) => (
            <Image key={image.alt} src={image.img} alt={image.alt} />
          ))}
        </div>
      </div>
      <div className="frame mx-5 my-2.5 px-5 py-2.5 items-center">
          bleh
      </div>

      <IndiaGate />

      <Title name={"Obedience to Authority"}/>
      <div className="frame mx-5 my-2.5 px-5 py-2.5">
        bleh
      </div>

      <Title name={"Chordsynth"}/>
      <div className="frame mx-5 my-2.5 px-5 py-2.5">
        bleh
      </div>

      <Title name={"Motion Design"}/>
      <div className="frame mx-5 my-2.5 px-5 py-2.5">
        bleh
      </div>

    </main>

  );
}
