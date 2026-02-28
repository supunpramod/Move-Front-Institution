import Section from "../components/Section";
import fb1 from "../assets/fb1.png";
import fb2 from "../assets/fb2.png";
import fb3 from "../assets/fb3.png";

const images = [
  { src: fb1, alt: "Thai Pongal Peace and Reconciliation Event - 1" },
  { src: fb2, alt: "Thai Pongal Peace and Reconciliation Event - 2" },
  { src: fb3, alt: "Thai Pongal Peace and Reconciliation Event - 3" },
];

export default function Mediaroom() {
  return (

    <div>

      <h1 className="text-3xl md:text-4xl font-bold text-[#1c2674] text-center  mt-10">
        Media Room
      </h1>
    <Section title="Harmony in Diversity – Thai Pongal Peace Initiative">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Images */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img) => (
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

        {/* Description */}
        

        <div className="mt-8 space-y-4 text-gray-700 text-base sm:text-lg text-justify">
  <p>
    A peace and reconciliation event was conducted for Thai Pongal Day at the divisional secretariat office Katana with the participation of UN representative Ms Premila Nagulashvaran.
    This event especially focused - Catholic, Islamic, and Buddhist people to understand Hindu religious beliefs and cultural practices.
    The objective was to promote peacebuilding, mutual understanding, and strengthen reconciliation among different religious communities.
  </p>
</div>
      </div>
    </Section>


    <Section title="Strengthening Community Ties – Reconciliation Dialogue">
  <div className="max-w-4xl mx-auto px-4 text-center">

    {/* Images */}
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((img) => (
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

    {/* Description */}
    <div className="mt-8 space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
      <p>
        The Peacebuilding Committees of Puttalam and Negombo recently 
        convened for a reconciliation dialogue aimed at strengthening 
        community relationships and fostering mutual understanding.
      </p>

      <p>
        This initiative was supported by the VRIDDHI organization in 
        collaboration with UNOPS, highlighting a shared commitment 
        to sustainable peace and community development.
      </p>
    </div>

  </div>
</Section>
    </div>
  );
}