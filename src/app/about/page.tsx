import Link from "next/link";
import { Navbar } from "@/sections/Navbar";
import { ChevronLeft } from "react-feather";


export default function About() {
  return (
    <div className="m-5 px-5 py-2.5 flex flex-col gap-5 rounded-2xl border-2 border-foreground">
      <div className="flex justify-between align-middle items-center font-semibold uppercase text-secondary">
        <Link href="/"><ChevronLeft size={20} strokeWidth={3} className="text-secondary align-middle" /></Link>
        <Navbar />
      </div>
    </div>
  );
}
