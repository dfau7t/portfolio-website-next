import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import Title from "@/sections/Title";
import Video from "@/sections/Video";
import { EC } from "@/sections/EC";
import { IndiaGate } from "@/sections/IndiaGate";
import { OTA } from "@/sections/OTA";

import { Showreel } from "@/data/showreel";

import Link from "next/link";
import Image from "next/image";

import chordsynth from "../../public/chordsynth/cs_render_t2.png";
import chordsynth2 from "../../public/chordsynth/cs_render_t3.png";
import chordsynth3 from "../../public/chordsynth/cs_render_t4.png";

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
      <div className="grid grid-cols-2 mx-5 my-2.5">
        {/* <div></div> */}
        <div><Hero /></div>
      </div>
      </div>

      <Title name={"Showreel"}/>
      {Showreel.map((video) => (
        <Video key={video.link} img={video.img} link={video.link} desc={video.desc} />
      ))}

      <EC />

      <IndiaGate />

      <OTA />

      <Title name={"Chordsynth"}/>
      <div className="mx-5 my-2.5 grid md:grid-cols-2 gap-2.5">
        <Image 
            src={chordsynth}
            alt="Chordsynth Render"
            className="frame overflow-clip md:col-span-1"
        />
        <Image
            src={chordsynth3}
            alt="Chordsynth Render"
            className="frame overflow-clip md:col-span-1"
        />
        <Image
            src={chordsynth2}
            alt="Chordsynth Render"
            className="frame overflow-clip md:col-span-2"
        />

      </div>

      <Title name={"Motion Design"}/>
      <div className="frame mx-5 my-2.5 px-5 py-2.5">
        bleh
      </div>

    </main>

  );
}
