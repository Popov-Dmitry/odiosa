import Image from "next/image";
import Footer from "@/components/footer";
import Button from "@/components/button";

export default function Home() {
  return (
    <>
      <div className="pt-[110px] lg:pt-[126px] pb-[60px]">
        <div className="lg:hidden overflow-hidden">
          <div className="relative overflow-hidden">
            <div>
              <div className="px-2.5 text-[26px] tracking-tighter">
                "If you’re going to lie, do it extravagantly, in full, with richness. Petty, lousy half-lies lead to
                dementia and early senility."
              </div>
              <div className="mt-[329px] px-2.5 text-[26px]">
                Odiosa is a fracture in space, subterranean streams of emotion bursting through dreams.
              </div>
              <div className="mt-[409px] pl-[13px] pr-[7px] text-[39px]">
                The Alchemy of Design:<br />
                A Tactile & Conceptual Exploration
              </div>
            </div>
            <div className="absolute top-[94px] left-2.5 w-[638px] h-[1000px] overflow-hidden -z-10">
              <div className="relative w-[638px] h-[1000px] overflow-hidden">
                <Image
                  src="/catocala-kotshubeji-mobile.png"
                  alt="Catocala Kotshubeji"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="mt-8 pl-4 pr-1 text-[26px]">
              Odiosa is built on the mastery of rare specialists—tailors, corsetiers,
              textile alchemists, and artisans who work across different geographies, forming an invisible atelier that
              transcends borders.
              <br /><br />
              The process is both technical and ritualistic, where each garment undergoes meticulous construction and
              transformation:
            </div>
            <div className="mt-8 px-2.5 text-[26px]">
              The dyeing process is overseen by a resident textile artist, ensuring depth of color, oxidation, and
              organic
              evolution.
            </div>
            <div className="relative w-[511px] h-[580px] overflow-hidden mt-2.5">
              <Image
                src="/catenatia-spinosa-mobile.png"
                alt="Catenatia Spinosa"
                fill
                className="object-cover"
                quality={100}
              />
            </div>
            <div className="text-xl px-2.5">Nazvanie Pugovici, Pash</div>
          </div>
          <div>
            <div className="mt-10 px-2.5 text-[26px]">
              Artifacts embedded in the material-bone buttons hand-carved by a dedicated ivory craftsman, fossilized
              relics integrated into garment closures, signature metalwork developed in collaboration with OSSA Jewelry,
              a
              jeweler known for fracturing precious stones to reveal their raw duality.
            </div>
            <div className="relative overflow-hidden min-w-[432px] min-h-[1131px]">
              <div className="mt-[590px] pl-[11px] pr-[7px] text-[26px]">
                The boudoir as a battleground—fetishistic silk corsetry, sculptural lingerie, and pieces that merge
                historical dressmaking with radical contemporary expression.
              </div>
              <div className="absolute top-0 -left-2 w-[432px] min-h-[1131px] overflow-hidden -z-10">
                <div className="relative min-w-[432px] min-h-[1131px] overflow-hidden">
                  <Image
                    src="/vincula-eprantium-mobile.png"
                    alt="Vincula Eprantium"
                    fill
                    className="object-cover"
                    quality={100}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mt-1 px-2.5 text-[26px]">
              Menswear tailoring redefined—coats, architectural suits, and reimagined tailoring techniques challenge
              traditional boundaries of masculine and feminine form.
            </div>
            <div
              className="relative overflow-hidden min-h-[929px] w-full flex flex-col justify-center items-center mt-2">
              <div className="absolute top-0 h-[929px] w-[374px] overflow-hidden -z-10">
                <div className="mt-2 relative w-[374px] h-[929px] overflow-hidden">
                  <Image
                    src="/cryophora-lgnis-mobile.png"
                    alt="Cryophora Lgnis"
                    fill
                    quality={100}
                  />
                </div>
              </div>
              <div className="mt-[677px] px-2.5 text-[26px]">
                Textile sorcery—fabrics infused with tannins from seasonal chestnut and poppy, harvested in Georgia at
                the precise moment of the collection’s development.
              </div>
              <div className="mt-2.5 px-2.5 text-[26px]">
                The dyeing process is overseen by a resident textile artist, ensuring depth of color, oxidation, and
                organic evolution.
              </div>
            </div>
          </div>
          <div className="mt-2.5">
            <div className="flex justify-center px-2.5">
              <div className="relative w-[412px] h-[162px]">
                <Image
                  src="/pieces.png"
                  alt="Pieces"
                  fill
                  quality={100}
                />
              </div>
            </div>
            <div className="mt-8 px-2.5 text-[26px]">
              The garments exist not in isolation but within a rich tapestry
              of literary narratives, visual storytelling, and curated artistic statements.
              <br /><br />
              Every piece is accompanied by an immersive context—text, image, and conceptual layering—designed to evoke
              a
              universe beyond the garment itself. This synthesis of form and meaning transforms each collection into an
              unfolding dialogue between textile, philosophy, and the body.
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center px-2.5 relative h-[704px]">
              <div className="absolute -z-10">
                <div className="relative w-[372px] h-[704px]">
                  <Image
                    src="/watch-collection.png"
                    alt="Watch Collection"
                    fill
                    quality={100}
                  />
                </div>
              </div>
              <Button text="WATCH COLLECTION" />
            </div>
          </div>
          <div className="mt-5 px-2.5 text-[26px]">
            Odiosa is an artisanal, multidisciplinary phenomenon,
            operating through the lens of performance, documentary,
            and material research.
            <br /><br />
            A dedicated expedition team sources the finest Italian silks, batistes, crepes, modals, chiffons, and
            natural
            fiber blends, ensuring absolute quality across the brand’s vast production landscape.
          </div>
        </div>

        <div className="hidden lg:block overflow-hidden text-[30px] 2xl:text-[36px]">
          <div className="relative aspect-[1843/2888] flex flex-col pb-24 2xl:pb-[210px]">
            <div className="pt-[412px] mx-[26px] ml-auto w-[600px]">
              "If you’re going to lie, do it extravagantly, in full, with richness. Petty, lousy half-lies lead to
              dementia and early senility."
            </div>
            <div className="grid grid-cols-2">
              <div />
              <div className="mt-[474px] max-w-[710px]">
                Odiosa is a fracture in space, subterranean streams of emotion bursting through dreams.
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5 px-[38px] mt-auto">
              <div>
                The Alchemy of Design:<br />
                A Tactile & Conceptual Exploration
              </div>
              <div className="col-span-2">
                Odiosa is built on the mastery of rare specialists—tailors, corsetiers,
                textile alchemists, and artisans who work across different geographies, forming an invisible atelier
                that transcends borders.
                <br /><br />
                The process is both technical and ritualistic, where each garment undergoes meticulous construction and
                transformation:
              </div>
            </div>
            <div className="absolute left-0 top-0 w-full overflow-hidden -z-10 px-9">
              <div className="relative w-full aspect-[1843/2888] overflow-hidden">
                <Image src="/catocala-kotshubeji.png" alt="Catocala Kotshubeji" fill className="object-cover" />
              </div>
            </div>
          </div>
          <div className="pl-[38px] relative lg:h-[1800px] xl:h-[2000px] 2xl:h-[2264px] overflow-hidden flex flex-col">
            <div className="w-1/2 ml-auto mr-20">
              The dyeing process is overseen by a resident textile artist, ensuring depth of color, oxidation, and
              organic evolution.
            </div>
            <div className="mt-auto mb-[260px] 2xl:mb-[68px]">
              <div>Nazvanie Pugovici, Pash</div>
              <div className="w-1/2 mt-[90px]">
                Artifacts embedded in the material-bone buttons hand-carved by a dedicated ivory craftsman, fossilized
                relics integrated into garment closures, signature metalwork developed in collaboration with OSSA
                Jewelry, a jeweler known for fracturing precious stones to reveal their raw duality.
              </div>
            </div>
            <div className="absolute left-0 top-0 w-full overflow-hidden -z-10 ml-5">
              <div className="relative overflow-hidden">
                <img src="/catenatia-spinosa.png" alt="Catenatia Spinosa"  className="object-contain" />
              </div>
            </div>
          </div>
          <div className="relative w-full lg:h-[2900px] xl:h-[3100px] 2xl:h-[4420px] overflow-hidden flex flex-col">
            <div className="w-[755px] mx-10 ml-auto mt-24 2xl:mt-[457px]">
              The boudoir as a battleground—fetishistic silk corsetry, sculptural lingerie, and pieces that merge
              historical dressmaking with radical contemporary expression.
            </div>
            <div className="w-[759px] ml-[159px] mt-[1190px]">
              Menswear tailoring redefined—coats, architectural suits, and reimagined tailoring techniques challenge
              traditional boundaries of masculine and feminine form.
            </div>
            <div className="w-[885px] ml-[662px] mt-[253px]">
              Textile sorcery—fabrics infused with tannins from seasonal chestnut and poppy, harvested in Georgia at the
              precise moment of the collection’s development.
            </div>
            <div className="w-[888px] ml-[662px] mt-[47px]">
              The dyeing process is overseen by a resident textile artist, ensuring depth of color, oxidation, and
              organic evolution.
            </div>
            <div className="w-[840px] mt-auto ml-10">
              The garments exist not in isolation but within a rich tapestry
              of literary narratives, visual storytelling, and curated artistic statements.
              <br /><br />
              Every piece is accompanied by an immersive context—text, image, and conceptual layering—designed to evoke
              a universe beyond the garment itself. This synthesis of form and meaning transforms each collection into
              an unfolding dialogue between textile, philosophy, and the body.
            </div>
            <div className="absolute left-0 top-0 w-full overflow-hidden -z-10 px-9">
              <div className="relative w-full overflow-hidden">
                <img src="/vincula-eprantium.png" alt="Vincula Eprantium" className="object-contain" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 items-center gap-8 px-10">
            <div className="relative max-h-[370px] max-w-full aspect-[940/370]">
              <Image src="/pieces.png" alt="Pieces" fill quality={100} />
            </div>
            <Button text="WATCH COLLECTION" />
          </div>
          <div className="relative w-full h-[2900px] flex flex-col">
            <div className="w-[793px] mx-10">
              Odiosa is an artisanal, multidisciplinary phenomenon,
              operating through the lens of performance, documentary,
              and material research.
              <br /><br />
              A dedicated expedition team sources the finest Italian silks, batistes, crepes, modals, chiffons, and
              natural fiber blends, ensuring absolute quality across the brand’s vast production landscape.
            </div>
            <div className="w-[910px] mt-auto mb-16 ml-auto mr-10">
              Each piece is meticulously documented through an ongoing film project, offering an intimate, voyeuristic
              insight into the ateliers, capturing the raw process of creation as a living, breathing entity.
            </div>
            <div className="absolute left-0 -top-[420px] w-full h-[3927px] overflow-hidden -z-10">
              <div className="relative w-full h-[3927px] overflow-hidden">
                <Image
                  src="/malum-arsum.png"
                  alt="Malum Arsum.png"
                  fill
                  className="object-cover"
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
