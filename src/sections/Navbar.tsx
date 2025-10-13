"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "react-feather";


export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = (
      <>
        <Link href="/about" className="hover:text-foreground" onClick={() => setIsOpen(false)}>About</Link>
        <div className="w-[20px] h-[2px] bg-secondary align-middle hidden md:block"></div>
        <a href="https://www.linkedin.com/in/srivatsa-pidaparthi" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">LinkedIn</a>
        <a href="https://www.instagram.com/srivatsa_pidaparthi/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">Instagram</a>
        <Link href="/PidaparthiCV.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-foreground" download>CV</Link>
        {/* <a href="https://drive.google.com/file/d/1Rupp6ii_Oaxuk3JFvMBjGU7wozwnDa7z/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">CV</a> */}
      </>
    );

    return (
        <nav>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-5 text-sm font-sw font-semibold uppercase">
                {navLinks}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-secondary hover:text-foreground">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-15 right-10 z-10 frame bg-background px-5 py-2.5 md:hidden">
                    <div className="flex flex-col items-end gap-2.5 text-sm font-sw font-semibold uppercase">
                        {navLinks}
                    </div>
                </div>
            )}
        </nav>
    );
}