import { StaticImageData } from "next/image";

import sad from "../../public/echo-chamber/sad.png";
import happy from "../../public/echo-chamber/happy.png";
import fear from "../../public/echo-chamber/fear.png";
import disgust from "../../public/echo-chamber/disgust.png";

interface EchochamberImage {
  img: StaticImageData;
  alt: string;
}

export const ECImage: EchochamberImage[] = [
  {
    img: sad,
    alt: "Sadness",
  },
  {
    img: happy,
    alt: "Happiness",
  },
  {
    img: fear,
    alt: "Fear",
  },
  {
    img: disgust,
    alt: "Disgust",
  },
];