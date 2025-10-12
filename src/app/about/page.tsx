import Link from "next/link";
import { Navbar } from "@/sections/Navbar";
import { ChevronLeft } from "react-feather";


export default function About() {
  return (
    <div className="frame h-[88vh] flex flex-col gap-5">
      <div className="flex justify-between align-middle items-center font-semibold uppercase text-secondary">
        <Link href="/"><ChevronLeft size={20} strokeWidth={3} className="text-secondary align-middle" /></Link>
        <Navbar />
      </div>
      <div className="uppercase font-semibold">
        creating<br /> play<br /> with immersive design
      </div>
      <div className="w-[45vw] font-semibold text-sm space-y-5">
        <p>
          Hello, I'm Srivatsa Pidaparthi. <br />

          I'm a designer, technologist, and artist who loves to get my hands dirty. 
          My core passion is exploring new forms of interaction and expression, 
          whether that's through a user interface, an immersive VR world, a piece of music, 
          or a physical object. I don't like to be boxed in by a single medium; I prefer to let the challenge define the tools. <br />

          My background is a blend of the analytical and the artistic. I approach every project with a goal-oriented, 
          perfectionist mindset. The same focus I use to understand the mechanics of an engine, I apply to user research, 
          3D modeling, or developing a game mechanic. It's all about understanding a system and making it better. <br />

          I'm fluent in the languages of both design and development, and my toolkit reflects that. 
          On any given day, you might find me: <br />
        </p>
        <ul>
          <li>Building virtual environments in Unreal Engine or Unity.</li>
          <li>Modeling intricate objects in Blender or Rhinoceros.</li>
          <li>Creating interactive visuals with TouchDesigner.</li>
          <li>Editing sequences in DaVinci Resolve.</li>
          <li>Making music in VCV Rack.</li>
          <li>Designing interfaces in Figma.</li>
        </ul>
        <p>
          I'm driven by curiosity and a love for making things that feel right. 
          If you have an interesting problem to solve or an ambitious idea to build, I'd love to connect. <br />
        </p>
      </div>
    </div>
  );
}
