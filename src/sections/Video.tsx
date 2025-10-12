import Image from "next/image";

interface VideoProps {
    link: string;
}

export default async function Video(props: any) {
    return (
        <div className="frame grid grid-cols-5 grid-rows-3 mx-5 my-2.5 p-5 gap-5">
            <div className="col-span-2 row-span-3 frame overflow-clip">
                <Image 
                    src={props.img}
                    alt="file"
                />
            </div>
            <div className="col-span-3 row-span-2 frame overflow-clip">
                <iframe 
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${props.link}`}
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                />
            </div>
            <div className="col-span-3 row-span-1 frame p-5">
                <p>{props.desc}</p>
            </div>
        </div>
    );
}