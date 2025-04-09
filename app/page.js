import Image from "next/image";
import Footer from "@/components/footer";
import Button from "@/components/button";

export default function Home() {
  return (
    <>
      <div className="mt-[30px] mb-[60px]">
        <div className="relative overflow-hidden">
          <div>
            <div className="px-2.5 text-[26px] lg:text-[36px] tracking-tighter">
              "If you’re going to lie, do it extravagantly, in full, with richness. Petty, lousy half-lies lead to
              dementia
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
        <div className="overflow-hidden">
          <div className="mt-8 pl-4 pr-1 text-[26px] lg:text-[36px]">
            Odiosa is built on the mastery of rare specialists—tailors, corsetiers,
            textile alchemists, and artisans who work across different geographies, forming an invisible atelier that
            transcends borders.
            <br /><br />
            The process is both technical and ritualistic, where each garment undergoes meticulous construction and
            transformation:
          </div>
          <div className="mt-8 px-2.5 text-[26px] lg:text-[36px]">
            The dyeing process is overseen by a resident textile artist, ensuring depth of color, oxidation, and organic
            evolution.
          </div>
          <div className="relative w-[511px] h-[580px] overflow-hidden mt-2.5">
            <Image src="/catenatia-spinosa-mobile.png" alt="Catenatia Spinosa" fill className="object-cover" />
          </div>
          <div className="text-xl px-2.5">Nazvanie Pugovici, Pash</div>
        </div>
        <div>
          <div className="mt-10 px-2.5 text-[26px] lg:text-[36px]">
            Artifacts embedded in the material-bone buttons hand-carved by a dedicated ivory craftsman, fossilized
            relics integrated into garment closures, signature metalwork developed in collaboration with OSSA Jewelry, a
            jeweler known for fracturing precious stones to reveal their raw duality.
          </div>
          <div className="relative overflow-hidden min-w-[432px] min-h-[1131px]">
            <div className="mt-[590px] pl-[11px] pr-[7px] text-[26px] lg:text-[36px]">
              The boudoir as a battleground—fetishistic silk corsetry, sculptural lingerie, and pieces that merge
              historical dressmaking with radical contemporary expression.
            </div>
            <div className="absolute top-0 -left-2 w-[432px] min-h-[1131px] overflow-hidden -z-10">
              <div className="relative min-w-[432px] min-h-[1131px] overflow-hidden">
                <Image src="/vincula-eprantium-mobile.png" alt="Vincula Eprantium" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-1 px-2.5 text-[26px] lg:text-[36px]">
            Menswear tailoring redefined—coats, architectural suits, and reimagined tailoring techniques challenge
            traditional boundaries of masculine and feminine form.
          </div>
          {/*<div className="flex justify-center items-center mt-2">*/}
          <div className="relative overflow-hidden min-h-[929px] w-full flex flex-col justify-center items-center mt-2">
            <div className="absolute top-0 h-[929px] w-[374px] overflow-hidden -z-10">
              <div className="mt-2 relative w-[374px] h-[929px] overflow-hidden">
                <Image src="/cryophora-lgnis-mobile.png" alt="Cryophora Lgnis" fill />
              </div>
            </div>
            <div className="mt-[677px] px-2.5 text-[26px] lg:text-[36px]">
              Textile sorcery—fabrics infused with tannins from seasonal chestnut and poppy, harvested in Georgia at
              the precise moment of the collection’s development.
            </div>
            <div className="mt-2.5 px-2.5 text-[26px] lg:text-[36px]">
              The dyeing process is overseen by a resident textile artist, ensuring depth of color, oxidation, and
              organic evolution.
            </div>
          </div>
        </div>
        <div className="mt-2.5">
          <div className="flex justify-center px-2.5">
            <div className="relative w-[412px] h-[162px]">
              <Image src="/pieces.png" alt="Pieces" fill />
            </div>
          </div>
          <div className="mt-8 px-2.5 text-[26px] lg:text-[36px]">
            The garments exist not in isolation but within a rich tapestry
            of literary narratives, visual storytelling, and curated artistic statements.
            <br /><br />
            Every piece is accompanied by an immersive context—text, image, and conceptual layering—designed to evoke a
            universe beyond the garment itself. This synthesis of form and meaning transforms each collection into an
            unfolding dialogue between textile, philosophy, and the body.
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center px-2.5 relative h-[704px]">
            <div className="absolute -z-10">
              <div className="relative w-[372px] h-[704px]">
                <Image src="/watch-collection.png" alt="Watch Collection" fill />
              </div>
            </div>
            <Button text="WATCH COLLECTION" />
          </div>
        </div>
        <div className="mt-5 px-2.5 text-[26px] lg:text-[36px]">
          Odiosa is an artisanal, multidisciplinary phenomenon,
          operating through the lens of performance, documentary,
          and material research.
          <br /><br />
          A dedicated expedition team sources the finest Italian silks, batistes, crepes, modals, chiffons, and natural
          fiber blends, ensuring absolute quality across the brand’s vast production landscape.
        </div>
      </div>
      <Footer />
    </>
  );
}
