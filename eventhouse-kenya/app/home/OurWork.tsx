import Image from "next/image";
import { LayoutGrid } from "lucide-react";
import Button from "@/app/components/ui/Button";

const galleryImages = [
  { src: "/images/gallery-balloons.jpg", alt: "Pink balloon arch birthday setup", tall: true },
  { src: "/images/gallery-sign.jpg", alt: "Better Together neon sign at reception" },
{ src: "/images/gallery-reception.jpg", alt: "Reception hall with floral centerpieces", tall: true },
  { src: "/images/outdoor-event.jpg", alt: "Three-tier wedding cake with roses", tall: true },
    { src: "/images/gallery-cake.jpg", alt: "Elegant table setting with florals" },

];
// `tall` flags which images span the full 2-row height vs. which
// ones are half-height (stacked). This lets the array itself describe
// the layout shape, rather than hardcoding grid positions in JSX.

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-cream py-4 px-6 md:px-16 lg:px-24">
      <div className="text-center mb-16">
        <p className="font-sans text-gold font-bold text-base md:text-sm tracking-[0.2em] uppercase mb-3">
          Our Work
        </p>
        <h2 className="font-serif text-charcoal text-3xl md:text-4xl">
          Moments We&apos;ve Made Special
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[500px] md:h-[420px] mb-12">
        {/* grid-rows-2: explicitly declares 2 rows exist, so row-span-2
            items can correctly span BOTH of them, and single-row items
            know to occupy exactly half that height.
            h-[500px] md:h-[420px]: the grid needs an explicit total
            height for row-span math to resolve into actual pixel
            values — without a set height, "span 2 rows" has nothing
            concrete to divide. */}

        {galleryImages.map((image, index) => (
          <div
            key={image.src}
            className={`relative rounded-2xl overflow-hidden ${
              image.tall ? "row-span-2" : "row-span-1"
            } ${index === 0 ? "col-span-1" : ""}`}
            // rounded-2xl: your spec's exact "Images" border-radius token.
            // row-span-2 on tall images makes them occupy both grid rows
            // (full height); row-span-1 (the default anyway, but explicit
            // here for clarity) on the stacked pair.
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Button variant="secondary" icon={<LayoutGrid size={16} />}>
          View More Gallery
        </Button>
      </div>
    </section>
  );
}