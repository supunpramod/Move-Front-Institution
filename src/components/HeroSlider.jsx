import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


import fb2 from "../assets/fb2.png";
import pic2 from "../assets/pic2.png";
import fb24 from "../assets/fb24.jpg";
import pic4 from "../assets/pic4.png";
import pic5 from "../assets/pic5.png";
import pic6 from "../assets/pic6.png";

const slides = [
 {
    title: "Livelihood Development",
    description:
      "Supporting vulnerable communities to build sustainable livelihoods through vocational training, entrepreneurship opportunities, and income-generating activities.",
    image: fb2,
  },
  {
    title: "Ecological Agriculture",
    description:
      "Promoting environmentally friendly farming practices that protect natural resources, improve soil health, and ensure long-term food security.",
    image: pic2,
  },
  {
    title: "Women Empowerment & Development",
    description:
      "Empowering women and girls through education, leadership development, health awareness, and economic opportunities to strengthen their role in society.",
    image: fb24,
  },
  {
    title: "Climate Change Awareness/Actions",
    description:
      "Raising awareness about climate change and supporting community-based initiatives that build resilience and promote sustainable environmental practices.",
    image: pic4,
  },
  {
    title: "Social Mobilization",
    description:
      "Encouraging active community participation and collective action by strengthening grassroots leadership and social engagement.",
    image: pic5,
  },
  {
    title: "Peace & Reconciliation",
    description:
      "Promoting social harmony, dialogue, and mutual understanding among diverse communities to build peaceful and inclusive societies.",
    image: pic6,
  },
  {
    title: "Environmental Protection",
    description:
      "Protecting ecosystems and biodiversity through environmental awareness programs, sustainable practices, and community participation.",
    image: fb2,
  },
  {
    title: "Human Rights",
    description:
      "Advocating for the protection of fundamental human rights, equality, dignity, and social justice for all individuals.",
    image: pic2,
  },
  {
    title: "Humanitarian Assistance",
    description:
      "Providing emergency relief, essential services, and recovery support for communities affected by disasters and crises.",
    image: fb24,
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
        <div className="max-w-6xl mx-auto px-4 text-primary">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
            {slide.title}
          </h1>

          <p className="mt-4 max-w-2xl text-white/90 text-sm md:text-base">
            {slide.description}
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              to="/about"
              className="px-6 py-3 bg-brand-600 hover:bg-brand-700  text-sm font-semibold text-white hover:text-secondary "
            >
              Learn More
            </Link>

            <Link
              to="/contact"
              className="px-6 py-3  text-white  rounded-md text-sm font-semibold bg-secondary hover:bg-transparent hover:text-white transition"
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
                    ? "w-10 bg-secondary"
                    : "w-3 bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
