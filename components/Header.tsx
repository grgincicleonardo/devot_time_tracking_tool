"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/assets/logo.svg";

const Header = () => {
  return (
    <header className="w-full bg-dark h-28 rounded-b-[1.38em] flex items-center px-11">
      <nav className="">
        <Image src={logo} alt="" />
      </nav>
    </header>
  );
};

export default Header;
