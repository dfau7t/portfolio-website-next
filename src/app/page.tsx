import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import Title from "@/sections/Title";
import Video from "@/sections/Video";

import Link from "next/link";

import chemical from "../../public/showreel/chemical.jpg";
import plastic from "../../public/showreel/plastic.jpg";
import lucid from "../../public/showreel/lucid.jpg";
import mela from "../../public/showreel/mela.jpg";
import shringaar from "../../public/showreel/shringaar.jpg";


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
      <Video 
        img={chemical} 
        link={"AouVGmW4uGY"}
        desc={"Chemical Dialogues"}
      />
      <Video 
        img={plastic} 
        link={"m2VhZKgZpxY"}
        desc={"Everywhere - How Plastic are We?"}
      />
      <Video 
        img={lucid} 
        link={"3m2l6vEUAIo"}
        desc={"Lucid Dreams"}
      />
      <Video 
        img={mela} 
        link={"65xLSmgHS3M"}
        desc={"Mela"}
      />
      <Video 
        img={shringaar} 
        link={"EpCCZoaVGHU"}
        desc={"Shringaar"}
      />
      <Title name={"Echo Chamber"}/>
      <div className="frame">
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
