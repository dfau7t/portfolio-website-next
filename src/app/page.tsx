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

import chordsynth from "../../public/chordsynth/Digital Twin-1.png";
import chordsynth2 from "../../public/chordsynth/Digital Twin.png";



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
            <div className="grid grid-cols-1 md:grid-cols-5 gap-2.5 mx-2.5 my-2.5">
                {Showreel.map((video) => (
                <EFE key={video.link} img={video.img} link={video.link} desc={video.desc} />
                ))}
            </div> 
            
        </div>

        <EC />

        <IndiaGate />

        <OTA />

        <Title name={"Chordsynth"}/>
        <div className="mx-5 my-2.5 grid md:grid-cols-2 gap-2.5">
            <Link href="https://www.behance.net/gallery/241200097/Chordsynth" className="md:col-span-2">
            <Image
                src={chordsynth}
                alt="Chordsynth Render"
                className="outerframe overflow-clip md:col-span-2"
            /></Link>

            <div className="px-5 py-2.5 outerframe md:col-span-2">
                <p>
                    Chordsynth is a MIDI controller designed to bridge the gap between 
                    music theory and play-like composition. By mapping the Circle of Fifths 
                    onto a tactile interface, the device enables musicians to explore 
                    complex harmonic progressions through spatial intuition rather than rote memory.
                    The core solution lies in remapping the traditional linear piano layout into a Chord-centric layout. 
                    By placing notes that are the “Perfect Fifth and Fourth” in direct proximity, the interface 
                    simplifies music theory into simple geometric shapes.
                </p>
            </div>

            <Image
                src={chordsynth2}
                alt="Chordsynth Render"
                className="outerframe overflow-clip md:col-span-2"
            />

        </div>

        <Title name={"Motion Design"}/>
        <VideoGrid items={ThirtyDays} />

        <div className="outerframe mx-5 my-2.5 px-5 py-2.5 bg-secondary">
            <p className="text-background">This portfolio is my web development project.</p>
        </div>
    </main>
  );
}
