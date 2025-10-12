import Image from "next/image";
import ig from "../../public/indiagate.jpg";
import Title from "@/sections/Title";

export const IndiaGate = () => {
    return (
        <div>
            <Title name={"India Gate"}/>
            <div className="mx-5 grid grid-cols-3 gap-2.5">
              <div className="col-span-1 frame overflow-clip">
                <Image 
                  className="w-full h-full"
                  src={ig} 
                  alt="India Gate" />
              </div>
              <div className="col-span-2">
                <div className="grid grid-rows-3 gap-2.5">
                  <iframe 
                    className="w-full h-full row-span-2 frame overflow-clip aspect-video"
                    src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7292573457404375042?compact=1" 
                    title="India Gate" 
                    allowFullScreen
                  />
                  <div className="frame row-span-1 px-5 py-2.5 space-y-5">
                    <p>
                      This project, undertaken during my internship at a media studio, was a large-scale public art installation 
                      for the Election Commission of India. The challenge was to create a powerful visual narrative promoting 
                      voter participation for the Delhi elections, using one of the nation's most iconic monuments, India Gate, 
                      as our canvas. We aimed to transform this historic symbol of sacrifice and memory into a dynamic beacon for modern democracy. 
                      The project was an exercise in responsibility, blending artistic vision with a crucial civic message on a monumental 
                      scale for all of the capital to see.
                    </p>
                    <p>
                      Our team was tasked with designing vibrant, narrative-driven visuals that would bring the facade of India Gate to life.
                    </p>
                    <p>
                      The creative goal was to celebrate the spirit of Indian democracy—highlighting the importance of every single vote, the diversity 
                      of the electorate, and the collective power of civic duty. The projection wasn't just an announcement; it was a captivating 
                      spectacle of light and motion designed to inspire a sense of pride and encourage citizens to take part in the democratic process. 
                      It was a unique opportunity to use cutting-edge technology to create a moment of shared public experience, turning a civic responsibility 
                      into an unforgettable work of art.
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    );
}