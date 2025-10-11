import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import Link from "next/link";



export default function Home() {
  return (
    <div>
      <div className="frame">
        <div className="flex justify-between text-secondary">
          <div className="font-sw font-semibold uppercase">srivatsa pidaparthi</div>
          <Navbar />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div></div>
        <div><Hero /></div>
      </div>
      </div>
      <div className="frame title">showreel</div>
      
    </div>

  );
}
