import Image from "next/image";
import { ChefHat, Cake, ConciergeBell } from "lucide-react";

const services = [
  {
    image: "/images/service-catering.jpg",
    icon: ChefHat,
    label: "Event Catering",
    description: "Tailored menus for private parties, corporate functions, and celebrations of all kinds.",
  },
  {
    image: "/images/service-cakes.jpg",
    icon: Cake,
    label: "Custom Cakes",
    description: "Beautifully designed cakes for birthdays, weddings, anniversaries and every special moment.",
  },
  {
    image: "/images/hero-bg.jpg",
    icon: ConciergeBell,
    label: "Equipment & Styling",
    description: "From chafing dishes to elegant décor, we provide everything you need to bring your vision to life.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-cream py-24 px-6 md:px-16 lg:px-24">
      {/* py-24, px-6 md:px-16 lg:px-24: your exact spec's spacing
          tokens for section padding and container width, applied
          directly rather than estimated */}

      <div className="text-center mb-16">
        <p className="font-sans text-gold font-semibold text-xs md:text-sm tracking-[0.2em] uppercase mb-3">
          Our Services
        </p>
        <h2 className="font-serif text-charcoal text-3xl md:text-4xl mb-4">
          Everything You Need for a Perfect Event
        </h2>
        <div className="w-16 h-px bg-gold mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div key={service.label} className="bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
              {/* rounded-3xl: your spec's exact card radius token.
                  bg-white: "Secondary Background" per your palette —
                  cards sit on white, distinct from the cream page
                  background behind them. */}

              <div className="relative h-56 w-full">
                <Image
                  src={service.image}
                  alt={service.label}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative px-6 pb-8 pt-0 text-center">
                <div className="w-16 h-16 rounded-full bg-olive flex items-center justify-center mx-auto -mt-8 mb-4 border-4 border-white">
                  {/* -mt-8: NEGATIVE top margin — this is the mechanism
                      that pulls the badge UPWARD by 32px, making it
                      overlap the image above it instead of sitting
                      flush below it. Negative margins are the standard
                      CSS technique for this "straddling" effect.
                      border-4 border-white: a white ring around the
                      badge, which visually separates it from the photo
                      behind it and makes the overlap read cleanly
                      rather than looking like the icon is just floating
                      on top of the image with no separation. */}
                  <Icon className="text-white" size={24} strokeWidth={1.5} />
                </div>

                <h3 className="font-serif text-charcoal text-2xl mb-2">
                  {service.label}
                </h3>

                <p className="font-sans text-warmgray text-sm leading-6">
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}