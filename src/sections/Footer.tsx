import Link from "next/link";

export const Footer = () => {
    return (
        <div className="frame mx-5 my-2.5 mb-5 px-5 py-2.5 uppercase text-secondary font-semibold text-sm">
            &copy; <Link href={"/"}> Srivatsa Pidaparthi 2025</Link>
        </div>
    );
}