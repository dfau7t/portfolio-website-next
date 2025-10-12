import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import Title from "@/sections/Title";
import Video from "@/sections/Video";

import { Showreel } from "@/data/showreel";

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="frame mx-5 my-2.5">
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
      <div className="frame mx-5 my-2.5 px-5 py-2.5">
        bleh
      </div>
      <Title name={"India Gate"}/>
      <div className="frame">
        bleh
      </div>
      <Title name={"Obedience to Authority"}/>
      <div className="frame">
        bleh
      </div>
      <Title name={"Chordsynth"}/>
      <div className="frame">
        bleh
      </div>


    </div>

  );
}
