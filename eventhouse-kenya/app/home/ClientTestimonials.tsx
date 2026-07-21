import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Event House made our wedding day absolutely perfect! The food was incredible and the setup was so elegant.",
    author: "Wairimu & Brian",
  },
  {
    quote: "The decor was just out of this world! Exactly what we envisioned and even better.",
    author: "Mercy, Birthday Event",
  },
  {
    quote: "Professional, reliable and so creative. They handled everything seamlessly. Highly recommend!",
    author: "James, Corporate Event",
  },
];

export default function ClientTestimonials() {
  return (
    <section id="testimonials" className="bg-cream py-4 px-6 md:px-16 lg:px-24">
      <p className="font-sans text-gold font-semibold text-xs md:text-sm tracking-[0.2em] uppercase text-center mb-3">
        What Our Clients Say
      </p>

      <div className="w-16 h-px bg-gold mx-auto mb-12" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.author}
            className="bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] text-center px-6 py-10 [animation:pop-in_9s_ease-in-out_infinite]"
            style={{ animationDelay: `${index * 3}s` }}
          >
            <Quote className="text-gold fill-gold mx-auto mb-4" size={28} />

            <p className="font-sans text-charcoal text-sm md:text-base mb-4 leading-7">
              {testimonial.quote}
            </p>

            <p className="font-sans text-warmgray text-sm font-bold">
              — {testimonial.author}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}