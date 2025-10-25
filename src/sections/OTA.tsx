import Image from "next/image";
import Title from "@/sections/Title";

import ota1 from "../../public/OtA/PSX.png";
import recorder from "../../public/OtA/recorder.png";
import machine from "../../public/OtA/machine.png";
import poster from "../../public/OtA/poster.png";

export const OTA = () => {
    return (
        <div>
            <Title name={"Obedience to Authority"}/>
            <div className="mx-5 my-2.5 grid md:grid-rows-4 md:grid-cols-2 gap-2.5">   
                <div className="frame overflow-clip md:col-span-1 md:row-span-2 content-center">
                    <Image 
                        src={poster}
                        alt="poster"
                        className="h-full object-cover"
                    />
                </div>

                <Image 
                    src={ota1}
                    alt="PSX"
                    className="frame overflow-clip md:col-span-1 md:row-span-1"
                />

                <Image 
                    src={recorder}
                    alt="Unity"
                    className="frame overflow-clip md:col-span-1 md:row-span-1"
                />

                <div className="frame px-5 py-2.5 md:col-span-2 md:row-span-1 overflow-scroll content-center">
                    <p className="space-y-5">
                        This project examines the unsettling pwer of authority through an experience 
                        that simulates the historic Milgram Experiment. It seeks to understand why 
                        individuals might follow instructions that conflict with their personal 
                        conscience.
                        <br /> 
                        
                        The experience places you in a small, claustrophobic room, surrounded 
                        by cold, mechanical controls. Detached instructions are given from overhead 
                        speakers, positioning you as a particiant in a scientific study. On the other side 
                        of a two-sided mirror sits a test subject, and you are faced with a simple, yet 
                        profound, dilemma; will you obey orders, even if it means harming someone else? 
                        <br />

                        "Obedience to Authority" explores this question with a powerful twist. 
                        As the experiment unflods and the demands become more intense, you are free to disobey 
                        any command. However, if you refuse to follow an instruction, you are punished 
                        directly along with the test subject. This mechanic forces a deeper, more personal 
                        conflict, weighing your own instinct for self-preservation against the empathy you 
                        feel for the person before you.
                        <br />

                        It transforms a famous psychological question into a tangible, unnerving experience, 
                        making you question the veru nature of defiance when your own comfort is on the line.
                        <br />
                    </p>
                </div>

                <Image 
                    src={machine}
                    alt="Unity"
                    className="frame overflow-clip md:col-span-1 md:row-span-1"
                />

                <Image 
                    src={ota1}
                    alt="Unity"
                    className="frame overflow-clip md:col-span-1 md:row-span-1"
                />
                
            </div>                      
        </div>
    );
}