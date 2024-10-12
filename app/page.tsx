import CourseworkCard from "@/components/coursework/coursework-card";
import CourseworkForm from "@/components/coursework/coursework-form";
import { dummyCourseworkData, tabData } from "@/lib/constants";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
export default function Home() {
  return (
    <section className="container mx-auto mb-20 w-full px-3 md:max-w-[600px] lg:max-w-[807px] xl:max-w-[900px] 3xl:max-w-[1100px]">
      <div className="mt-[92px] grid grid-cols-12 gap-3 md:mt-[40px] 2xl:mt-[120px] 3xl:mt-[180px]">
        <div className="col-span-12 h-full lg:col-span-7 xl:col-span-8">
          <h1 className="text-2xl font-bold lg:text-[1.75rem] 3xl:text-[2rem]">
            Hey IB Folks! Unsure about the quality of your answers?
            <span className="text-primary"> We get you.</span>
          </h1>
          <CourseworkForm />
        </div>

        <div className="col-span-5 hidden h-full lg:block xl:col-span-4">
          <Image src="/hero1.png" alt="hero-image" width={300} height={300} />
          <Image src="/hero.png" alt="hero-image" width={300} height={300} />
        </div>
      </div>

      <div className="mt-8 flex w-full max-w-[900px] flex-col gap-3">
        <h1 className="text-xl font-bold text-[#5B6170]">Explore Coursework</h1>
        <Tabs
          defaultValue="all"
          className="w-full space-y-10 bg-transparent md:space-y-3"
        >
          <TabsList className="flex flex-wrap items-center justify-start">
            {tabData.map((item) => (
              <TabsTrigger key={item.value} value={item.value}>
                {item.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabData.map((item) => (
            <TabsContent
              key={item.value}
              value={item.value}
              className={`mt-0 grid grid-cols-1 gap-4 md:grid-cols-2`}
            >
              {dummyCourseworkData
                .filter((c1) =>
                  item.value !== "all" ? c1.type === item.value : true,
                )
                .map((c2) => (
                  <CourseworkCard key={c2.id} {...c2} />
                ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
