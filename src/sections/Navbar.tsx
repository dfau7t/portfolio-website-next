import Link from "next/link";


export const Navbar = () => {
    return (
        <div className="flex items-center gap-5 text-sm font-sw font-semibold uppercase"> 
          <Link href="/about" className="hover:text-foreground">About</Link>
          <div className="w-[20px] h-[2px] bg-secondary align-middle"></div>
          <Link href="https://www.linkedin.com/in/srivatsa-pidaparthi" className="hover:text-foreground">LinkedIn</Link>
          <Link href="https://www.instagram.com/srivatsa_pidaparthi/" className="hover:text-foreground">Instagram</Link>
        </div>

    );
}