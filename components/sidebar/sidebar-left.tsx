import Image from "next/image";
import Link from "next/link";
import React from "react";

const SidebarLeft = () => {
  return (
    <div className="fixed left-0 top-0 hidden md:flex flex-col border rounded-2xl justify-between bg-[#F8FAFC] h-[calc(100vh-1rem)] m-2 w-[52px]">
      <div className="pt-2 flex flex-col gap-5 items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={50} height={50} />
        </Link>
        <span className="flex items-center justify-center bg-primary rounded-full w-9 h-9">
          <Image src="/icons/dashboard.svg" alt="dash" width={24} height={24} />
        </span>
        <Image src="/icons/book.svg" alt="book" width={24} height={24} />
        <Image src="/icons/file_copy.svg" alt="file" width={24} height={24} />
        <Image src="/icons/quiz.svg" alt="quiz" width={24} height={24} />
      </div>
      <Image
        src="/icons/teenset.png"
        alt="teen"
        width={36}
        height={36}
        className="mx-auto border rounded-full mb-2"
      />
    </div>
  );
};

export default SidebarLeft;
