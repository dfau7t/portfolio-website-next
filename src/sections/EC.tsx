import Title from "@/sections/Title";
import Image from "next/image";
import { ECImage } from "@/data/echochamber";

export const EC = () => {
    return (
        <div>
            <Title name={"Echo Chamber"}/>
            <div className="frame mx-5 my-2.5 px-5 py-2.5">
              <div className="grid grid-cols-4 gap-1 md:gap-5 justify-center items-center align-center">
                {ECImage.map((image) => (
                  <Image key={image.alt} src={image.img} alt={image.alt} 
                  />
                ))}
              </div>
            </div>
            <div className="frame mx-5 my-2.5 px-5 py-2.5 items-center">
                <p className="space-y-5">
                  This project examines how modern digital life, dominated by social media and the unique 
                  pressures of urban living, negatively impacts our mental health. It looks into how 
                  hyper-personalized algorithms trap us in "echo chambers" and how the constant stream of 
                  short-form content leads to 'brainrot'—a state of reduced critical thinking and emotional 
                  detachment. 
                  <br />
            
                  The research also explores how a city-based upbringing, with its digital-first communication 
                  and environmental stress, can make us more anxious and limit the real-world community ties often 
                  found in rural settings. Together, these forces create a constant state of overstimulation that 
                  disconnects us from ourselves.
                  <br />
            
                  "Echo Chamber" is my response: an immersive, interactive installation designed to challenge the 
                  passive way we consume content. The final concept is a geodesic dome that offers a break from this 
                  overstimulation. Inside, you influence a living piece of art and sound, with simple, abstract choices 
                  of a color and a shape. By projecting dynamic visuals that respond to your input, the installation 
                  becomes a contemplative space that mirrors your own internal state, free from the influence of an algorithm. 
                  <br />
            
                  It's a physical and mental escape from the "concrete jungle," created to foster a more mindful connection 
                  with our senses in a quiet, personal space away from our loud, hyper-personalized world.
                </p>
            </div>
        </div>
    );
}