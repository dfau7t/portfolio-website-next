import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import Title from "@/sections/Title";
import EFE from "@/sections/EFE";
import { EC } from "@/sections/EC";
import { IndiaGate } from "@/sections/IndiaGate";
import { OTA } from "@/sections/OTA";
import { VideoGrid } from "@/sections/MotionDesign";

import { Showreel } from "@/data/showreel";
import { ThirtyDays } from "@/data/motiondesign";

import Link from "next/link";
import Image from "next/image";

import chordsynth from "../../public/chordsynth/cs_render_t2.png";
import chordsynth2 from "../../public/chordsynth/cs_render_t3.png";
import chordsynth3 from "../../public/chordsynth/cs_render_t4.png";


export default function Home() {
  return (
    <main className="bg-background">
        <div className="outerframe mx-5 my-2.5 mt-5">
            <div className="flex justify-between text-secondary px-5 py-2.5 items-center">
                <div className=" title font-title uppercase">
                    <Link href="/">Srivatsa Pidaparthi</Link>
                </div>
                <Navbar />
            </div>
            <div className="mx-5 my-2.5">
                <div><Hero /></div>
            </div>
        </div>

        <Title name={"Showreel"}/>
        <div className="outerframe mx-5 my-2.5">
            <div className="frame m-2.5 px-5 py-2.5">
                <p>
                  Exploring Fashion Expression - A set of short films that explore deep philosophical ideas, stories, and poems, through fashion.
                </p>
            </div>
            {Showreel.map((video) => (
                <EFE key={video.link} img={video.img} link={video.link} desc={video.desc} />
            ))}
        </div>

        <EC />

        <IndiaGate />

        <OTA />

        <Title name={"Chordsynth"}/>
        <div className="mx-5 my-2.5 grid md:grid-cols-2 gap-2.5">
            <Image 
                src={chordsynth}
                alt="Chordsynth Render"
                className="outerframe overflow-clip md:col-span-1"
            />
            <Image
                src={chordsynth3}
                alt="Chordsynth Render"
                className="outerframe overflow-clip md:col-span-1"
            />
            <Image
                src={chordsynth2}
                alt="Chordsynth Render"
                className="outerframe overflow-clip md:col-span-2"
            />
        </div>

        <Title name={"Motion Design"}/>
        <VideoGrid items={ThirtyDays} />
    </main>
  );
}
