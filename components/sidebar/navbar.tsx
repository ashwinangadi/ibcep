import { AlignJustify } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <section className="fixed left-0 right-0 top-0 z-50 flex h-[60px] w-full items-center justify-between bg-white md:hidden">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="logo"
          width={60}
          height={30}
          className="m-3"
        />
      </Link>
      <AlignJustify className="me-3 h-6 w-6" />
    </section>
  );
};

export default Navbar;
