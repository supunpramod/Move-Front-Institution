import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Empowering Communities",
    description:
      "Holistic transformation of women, men, youth and disadvantaged communities.",
    image:
      "https://images.unsplash.com/photo-1520975958225-401b921f061c?auto=format&fit=crop&w=1600&q=60",
  },
  {
    title: "Promoting Gender Equality",
    description:
      "Advocating for equal rights, safe spaces and women empowerment.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=60",
  },
  {
    title: "Sustainable Livelihood Development",
    description:
      "Building skills, income opportunities and community resilience.",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1600&q=60",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative h-[550px] w-full overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${slide.image})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-4 text-white">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
            {slide.title}
          </h1>

          <p className="mt-4 max-w-2xl text-white/90 text-sm md:text-base">
            {slide.description}
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              to="/about"
              className="px-6 py-3 bg-brand-600 hover:bg-brand-700 rounded-2xl text-sm font-semibold"
            >
              Learn More
            </Link>

            <Link
              to="/contact"
              className="px-6 py-3 border border-white rounded-2xl text-sm font-semibold hover:bg-white hover:text-black transition"
            >
              Contact Us
            </Link>
          </div>

          {/* Dots */}
          <div className="flex gap-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-3 rounded-full transition-all ${
                  index === current
                    ? "w-10 bg-white"
                    : "w-3 bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
