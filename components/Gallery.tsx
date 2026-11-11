import Image from "next/image";
import { gallery } from "@/lib/site";
import { Reveal, Unveil } from "./Motion";

// One lead photograph with two stacked beside it.
const frames = [
  { photo: gallery[1], box: "col-span-2 aspect-[16/10] sm:col-span-3 sm:row-span-2 sm:aspect-auto", pos: "object-[45%_85%]", sizes: "(min-width: 1024px) 40vw, 100vw" },
  { photo: gallery[0], box: "aspect-[4/3] sm:col-span-2 sm:aspect-[16/9]", pos: "object-[50%_88%]", sizes: "(min-width: 1024px) 26vw, 50vw" },
  { photo: gallery[3], box: "aspect-[4/3] sm:col-span-2 sm:aspect-[16/9]", pos: "object-[50%_80%]", sizes: "(min-width: 1024px) 26vw, 50vw" },
];

export function Gallery() {
  return (
    <section id="gaming" aria-labelledby="gallery-title" className="band !pt-[clamp(3.5rem,6vw,5.5rem)]">
      <div className="shell grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-4">
          <p className="eyebrow">Our Venue</p>
          <h2 id="gallery-title" className="h2 mt-5">
            Discover Star Casino
          </h2>
          <p className="lede mt-5">
            Step inside a comfortable, welcoming gaming environment featuring modern machines, popular games and a great
            atmosphere.
          </p>
        </Reveal>

        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-5 lg:col-span-8">
          {frames.map(({ photo, box, pos, sizes }, i) => (
            <li key={photo.src} className={box}>
              <Unveil delay={i * 0.1} className="h-full rounded-[0.875rem]">
                <figure className="group relative h-full w-full overflow-hidden rounded-[0.875rem] bg-surface">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes={sizes}
                    className={`grade object-cover ${pos} transition-[transform,filter] duration-[1.6s] ease-[var(--ease-lux)] group-hover:scale-[1.05] group-hover:brightness-[0.95]`}
                  />
                  <span className="absolute inset-0 rounded-[0.875rem] ring-1 ring-inset ring-paper/10" />
                </figure>
              </Unveil>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
