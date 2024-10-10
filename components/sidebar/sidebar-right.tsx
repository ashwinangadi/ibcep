import Image from "next/image";
import React from "react";

const SidebarRight = () => {
  return (
    <div className="absolute right-0 top-0 hidden md:flex flex-col items-end gap-2 h-[calc(100vh-1rem)] m-2 w-[52px]">
      {/* <div className="pt-2 flex flex-col gap-2 items-center"> */}
      <span className="w-16">
        <Image
          src="/icons/zu129.png"
          alt="zu"
          width={100}
          height={100}
          className="w-full"
        />
      </span>
      <Image src="/icons/fire24.png" alt="fire" width={51} height={28} />
      <Image src="/icons/calender.png" alt="file" width={44} height={44} />
      <Image src="/icons/paper.png" alt="quiz" width={44} height={44} />
    </div>
  );
};

export default SidebarRight;
