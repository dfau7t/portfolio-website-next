import Image from "next/image";

export default async function Video(props: any) {
    return (
        <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-3 md:grid-rows-3 mx-5 my-2.5 gap-2.5 md:h-[95vh]">
            <div className="col-span-1 row-span-2 md:col-span-1 md:row-span-2 frame overflow-clip">
                <Image 
                    src={props.img}
                    alt="file"
                />
            </div>
            <div className="col-span-1 row-span-1  md:col-span-2 md:row-span-2 frame overflow-clip">
                <iframe 
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${props.link}`}
                    title={props.title} 
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                />
            </div>
            <div className="col-span-1 row-span-1  md:col-span-3 md:row-span-1 frame p-5">
                <p>{props.desc}</p>
            </div>
        </div>
    );
}