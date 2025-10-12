import { StaticImageData } from "next/image";

import chemical from "../../public/showreel/chemical.jpg";
import plastic from "../../public/showreel/plastic.jpg";
import lucid from "../../public/showreel/lucid.jpg";
import mela from "../../public/showreel/mela.jpg";
import shringaar from "../../public/showreel/shringaar.jpg";

interface ShowreelVideo {
  img: StaticImageData;
  title: string;
  link: string;
  desc: string;
}

export const Showreel: ShowreelVideo[] = [
  {
    img: chemical,
    title: "Chemical Dialogues",
    link: "AouVGmW4uGY",
    desc: "Chemical Dialogues",
  },
  {
    img: plastic,
    title: "Everywhere - How Plastic are We?",
    link: "m2VhZKgZpxY",
    desc: "Everywhere - How Plastic are We?",
  },
  {
    img: lucid,
    title: "Lucid Dreams",
    link: "3m2l6vEUAIo",
    desc: "Lucid Dreams",
  },
  { 
    img: mela, 
    title: "Mela", 
    link: "65xLSmgHS3M", 
    desc: "Mela" },
  {
    img: shringaar,
    title: "Shringaar",
    link: "EpCCZoaVGHU",
    desc: "Shringaar",
  },
];