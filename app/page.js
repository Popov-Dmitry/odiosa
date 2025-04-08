import Image from "next/image";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <div className="mt-[30px] mb-[60px]">
        <div className="relative overflow-hidden">
          <div>
            <div className="px-2.5 text-[26px] lg:text-[36px] tracking-tighter">
              "If you’re going to lie, do it extravagantly, in full, with richness. Petty, lousy half-lies lead to dementia
              and early senility."
            </div>
            <div className="mt-[329px] px-2.5 text-[26px] lg:text-[36px]">
              Odiosa is a fracture in space, subterranean streams of emotion bursting through dreams.
            </div>
            <div className="mt-[409px] pl-[13px] pr-[7px] text-[39px] lg:text-[36px]">
              The Alchemy of Design:<br />
              A Tactile & Conceptual Exploration
            </div>
          </div>
          <div className="absolute top-[94px] left-2.5 w-[638px] h-[1000px] overflow-hidden -z-10">
            <div className="relative w-[638px] h-[1000px] overflow-hidden">
              <Image src="/catocala-kotshubeji.png" alt="Catocala Kotshubeji" fill className="object-cover" />
            </div>
          </div>
        </div>
        <div className="mt-8 pl-4 pr-1 text-[26px] lg:text-[36px]">
          Odiosa is built on the mastery of rare specialists—tailors, corsetiers,
          textile alchemists, and artisans who work across different geographies, forming an invisible atelier that transcends borders.
          <br /><br />
          The process is both technical and ritualistic, where each garment undergoes meticulous construction and transformation:
        </div>
        <div className="mt-8 px-2.5 text-[26px] lg:text-[36px]">
          Odiosa is a fracture in space, subterranean streams of emotion bursting through dreams.
        </div>
      </div>
      <Footer />
    </>
  );
}
