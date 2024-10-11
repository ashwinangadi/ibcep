import CourseworkCard from "@/components/coursework/coursework-card";
import CourseworkForm from "@/components/coursework/coursework-form";
import Image from "next/image";

export default function Home() {
  return (
    <section className="container mx-auto w-full md:max-w-[600px] lg:max-w-[807px] xl:max-w-[900px] 3xl:max-w-[1100px] px-3">
      <div className="grid grid-cols-12 gap-3 mt-[92px] md:mt-[40px] 2xl:mt-[120px] 3xl:mt-[180px]">
        <div className="col-span-12 lg:col-span-7 xl:col-span-8 h-full ">
          <h1 className=" text-2xl lg:text-[1.75rem] 3xl:text-[2rem] font-bold">
            Hey IB Folks! Unsure about the quality of your answers?
            <span className="text-primary"> We get you.</span>
          </h1>
          <CourseworkForm />
        </div>

        <div className="col-span-5 xl:col-span-4 h-full hidden lg:block">
          <Image src="/hero1.png" alt="hero-image" width={300} height={300} />
          <Image src="/hero.png" alt="hero-image" width={300} height={300} />
        </div>
      </div>

      <div className="mt-8 w-full max-w-[900px]">
        <h1 className="text-xl font-bold text-[#5B6170]">My Coursework</h1>
        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
          <CourseworkCard />
          <CourseworkCard />
        </div>
      </div>
    </section>
  );
}
