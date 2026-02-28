import Section from "../components/Section";
import fb1 from "../assets/fb1.png";
import fb2 from "../assets/fb2.png";
import fb3 from "../assets/fb3.png";
import fb4 from "../assets/fb4.jpg";
import fb5 from "../assets/fb5.jpg";
import fb6 from "../assets/fb6.jpg";
import fb7 from "../assets/fb7.jpg";
import fb8 from "../assets/fb8.jpg";
import fb9 from "../assets/fb9.jpg";
import fb10 from "../assets/fb10.jpg";
import fb11 from "../assets/fb11.jpg";
import fb12 from "../assets/fb12.jpg";
import fb13 from "../assets/fb13.jpg";
import fb14 from "../assets/fb14.jpg";
import fb15 from "../assets/fb15.jpg";
import fb16 from "../assets/fb16.jpg";
import fb17 from "../assets/fb17.jpg";


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


// section 3

const journalistTrainingImages = [
  { src: fb8, alt: "Peacebuilding Media Workshop - 1" },
  { src: fb9, alt: "Peacebuilding Media Workshop - 2" },
  { src: fb10, alt: "Peacebuilding Media Workshop - 3" },
];

const floodSupportImages = [
  { src: fb11, alt: "Flood-Affected Children Support - 1" },
  { src: fb12, alt: "Flood-Affected Children Support - 2" },
  { src: fb13, alt: "Flood-Affected Children Support - 3" },
  { src: fb14, alt: "Flood-Affected Children Support - 4" },
];

const organicProjectImages = [
 
  { src: fb15, alt: "Student Award Ceremony - 2" },
  { src: fb16, alt: "School Model Organic Garden - 3" },
  { src: fb17, alt: "School Model Organic Garden - 4" },
];

export default function Mediaroom() {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-[#1c2674] text-center mt-10">
        Media Room
      </h1>

      {/* ================= Section 1 ================= */}
      <Section title="Harmony in Diversity – Thai Pongal Peace Initiative">
        <div >

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

          <div className="mt-8 space-y-4 text-gray-700 text-base sm:text-base text-justify">
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
        <div>

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

          <div className="mt-8 space-y-4 text-gray-700 text-base sm:text-base leading-relaxed text-justify">
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

      {/* ================= Section 3 ================= */}
<Section title="Promoting Ethical Media – Peace & Reconciliation Training for Journalists">
  <div >

    {/* Images */}
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {journalistTrainingImages.map((img) => (
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
    <div className="mt-8 space-y-4 text-gray-700 text-base sm:text-base leading-relaxed text-justify">
      <p>
        A peace and reconciliation training workshop was conducted for 
        50 journalists representing television, print media, and social 
        media platforms in the Gampaha District.
      </p>

      <p>
        The workshop focused on responsible and ethical reporting of 
        peacebuilding and reconciliation initiatives. Participants were 
        guided on how to publish news in a manner that promotes ethnic 
        harmony, mutual understanding, and social cohesion among the 
        general public.
      </p>
    </div>

  </div>
</Section>


{/* ================= Section 4 ================= */}
<Section title="Supporting Flood-Affected Children – Education & Reconciliation Initiative">
  <div >

    {/* Images (remove this block if you don't have images) */}
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {floodSupportImages.map((img) => (
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
    <div className="mt-8 space-y-4 text-gray-700 text-base sm:text-base leading-relaxed text-justify">
      <p>
        Move Forward and Healthy Lanka are jointly implementing a programme to
        strengthen ethnic and religious reconciliation in the Katana and Negombo
        Divisional Secretariat areas, within the Gampaha District.
      </p>

      <p>
        This initiative is supported by UNOPS, the VRIDDHI Project, and the Kibo Alliance.
      </p>

      <p>
        As part of the programme, 38 children affected by recent flood-related
        natural disasters in the Dankotuwa area were selected, and 38 school bags
        were distributed to support them in restarting their education immediately.
      </p>

      <p>
        The project aims to help children recover from the impact of the floods
        by strengthening their educational development as soon as possible.
      </p>

      <p>
        In addition, the programme has initiated a model project on strengthening
        ethnic and religious reconciliation in the Katana and Negombo Divisional
        Secretariat areas of the Gampaha District.
      </p>
    </div>

  </div>
</Section>

{/* ================= Section 5 ================= */}
<Section title="Empowering Young Leaders – Organic Home Gardening Development Programme">
  <div >

    {/* Images (Remove if not needed) */}
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {organicProjectImages.map((img) => (
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
    <div className="mt-8 space-y-4 text-gray-700 text-base sm:text-base leading-relaxed text-justify">
      <p>
        Move Front and the Kibo Alliance are jointly implementing an 
        Organic Home Gardening Development Programme aimed at empowering 
        young students through sustainable agricultural practices.
      </p>

      <p>
        Out of 76 participants, three students who demonstrated excellence 
        as outstanding young organic farmers were selected and awarded 
        cash prizes of Rs. 10,000, Rs. 7,500, and Rs. 5,000 respectively 
        to support their educational needs and purchase school supplies.
      </p>

      <p>
        The project seeks to enhance children’s skills in organic farming 
        while also contributing to the prevention of child abuse, improving 
        mental well-being, reducing stress, and fostering happiness, 
        confidence, and leadership qualities.
      </p>

      <p>
        In addition, a model organic gardening project has been initiated 
        within the school to ensure the sustainability and long-term 
        impact of this initiative.
      </p>
    </div>

  </div>
</Section>
    </div>
  );
}