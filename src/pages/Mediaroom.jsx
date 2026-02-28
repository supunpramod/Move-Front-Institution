import Section from "../components/Section";
import fb1 from "../assets/fb1.png";
import fb2 from "../assets/fb2.png";
import fb3 from "../assets/fb3.png";
import fb4 from "../assets/fb4.jpg";
import fb5 from "../assets/fb5.jpg";
import fb6 from "../assets/fb6.jpg";
import fb7 from "../assets/fb7.jpg";

/* Section 1 Images */
const pongalImages = [
  { src: fb1, alt: "Thai Pongal Event - 1" },
  { src: fb2, alt: "Thai Pongal Event - 2" },
  { src: fb3, alt: "Thai Pongal Event - 3" },
];

/* Section 2 Images */
const reconciliationImages = [
  { src: fb4, alt: "Reconciliation Dialogue - 1" },
  { src: fb5, alt: "Reconciliation Dialogue - 2" },
  { src: fb6, alt: "Reconciliation Dialogue - 3" },
  { src: fb7, alt: "Reconciliation Dialogue - 4" },
];

export default function Mediaroom() {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-[#1c2674] text-center mt-10">
        Media Room
      </h1>

      {/* ================= Section 1 ================= */}
      <Section title="Harmony in Diversity – Thai Pongal Peace Initiative">
        <div className="max-w-4xl mx-auto px-4 text-center">

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pongalImages.map((img) => (
              <div key={img.src} className="overflow-hidden rounded-lg shadow-md">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-4 text-gray-700 text-base sm:text-lg text-justify">
            <p>
              A peace and reconciliation event was conducted for Thai Pongal Day
              at the divisional secretariat office Katana with the participation
              of UN representative Ms Premila Nagulashvaran.
              This event focused on Catholic, Islamic, and Buddhist communities
              to understand Hindu religious beliefs and cultural practices.
            </p>
          </div>
        </div>
      </Section>

      {/* ================= Section 2 ================= */}
      <Section title="Strengthening Community Ties – Reconciliation Dialogue">
        <div className="max-w-4xl mx-auto px-4 text-center">

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {reconciliationImages.map((img) => (
              <div key={img.src} className="overflow-hidden rounded-lg shadow-md">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
            <p>
              The Peacebuilding Committees of Puttalam and Negombo convened
              for a reconciliation dialogue aimed at strengthening community
              relationships and fostering mutual understanding.
            </p>

            <p>
              This initiative was supported by VRIDDHI organization in
              collaboration with UNOPS, highlighting a shared commitment
              to sustainable peace and community development.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}