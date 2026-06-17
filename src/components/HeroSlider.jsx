import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


import fb2 from "../assets/fb2.jpeg";
import pic2 from "../assets/pic2.jpeg";
import fb24 from "../assets/fb24.jpg";
import pic4 from "../assets/pic4.jpeg";
import pic5 from "../assets/pic5.png";
import pic6 from "../assets/pic6.png";
import slider1 from "../assets/slider1.jpeg";
import slider2 from "../assets/slider2.jpeg";
import slider3 from "../assets/slider3.jpeg";
import slider4 from "../assets/slider4.jpeg";
import slider5 from "../assets/slider5.jpeg";
import slider6 from "../assets/slider6.jpeg";
import slider7 from "../assets/slider7.jpeg";
import slider8 from "../assets/slider8.jpeg";

const slides = [
 {
    title: "Livelihood Development",
    description:
      "Supporting vulnerable communities to build sustainable livelihoods through vocational training, entrepreneurship opportunities, and income-generating activities.",
    image: slider1,
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
    image: slider5,
  },
  {
    title: "Peace & Reconciliation",
    description:
      "Promoting social harmony, dialogue, and mutual understanding among diverse communities to build peaceful and inclusive societies.",
    image: slider7,
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
    image: slider6,
  },



   {
    title: "Human Trafficking and Safe Migration Programmes",
    description:
      "We raise awareness on the risks of human trafficking and promote safe migration practices. Our programmes educate communities, provide guidance to vulnerable individuals, and support victims to rebuild their lives safely.",
    image: slider2,
  },

  {
    title: "Child Sponsorship Programmes",
    description:
      "We support children from vulnerable backgrounds by providing access to education, healthcare, and basic needs. Through sponsorship, we help children grow in a safe environment and build a better future.",
    image: slider3,
  },

   {
    title: "Therapeutical counciling and Psychosocial Support Programmes",
    description:
      "We offer professional counseling and emotional support services to individuals facing trauma, stress, or difficult life situations. Our goal is to improve mental well-being and promote healing.",
    image: slider4,
  },

    {
    title: "Capacity Building Programmes",
    description:
      "We empower individuals and communities by enhancing their skills, knowledge, and confidence. These programmes focus on training, leadership development, and creating sustainable opportunities for growth.",
    image: slider8,
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
