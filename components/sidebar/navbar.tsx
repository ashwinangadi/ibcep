import { AlignJustify } from "lucide-react";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <section className="absolute w-full top-0 left-0 right-0 flex items-center justify-between h-[60px] bg-white md:hidden">
      <Image src="/logo.png" alt="logo" width={60} height={30} className="m-3" />
      <AlignJustify className="w-6 h-6 me-3" />
    </section>
  );
};

export default Navbar;
