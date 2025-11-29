'use client';

import { getCldVideoUrl } from "next-cloudinary";
import { MotionDesign } from "@/data/motiondesign";

interface VideoGridProps {
    items: MotionDesign[];
}

export function VideoGrid({ items }: VideoGridProps) {
    return (
        <div className="mx-5 grid grid-cols-1 md:grid-cols-4 auto-rows-min gap-2.5">
            {items.map((item) => {
                const videoUrl = getCldVideoUrl({
                    src: item.public_id,
                    width: 540,
                    format: "auto",
                    quality: "auto",
                });

                const posterUrl = getCldVideoUrl({
                    src: item.public_id,
                    width: 540,
                    format: "jpg",
                    quality: "auto",
                });

                return (
                    <div key={item.id} className="frame w-full overflow-clip">
                        <video className="w-full h-full object cover" playsInline loop muted autoPlay poster={posterUrl}>
                            <source src={videoUrl} />
                        </video>
                    </div>
                );
            })}
        </div>
    );                
}