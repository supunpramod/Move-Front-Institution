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

import fb18 from "../assets/fb18.jpg";
import fb19 from "../assets/fb19.jpg";
import fb20 from "../assets/fb20.jpg";

import fb21 from "../assets/fb21.jpg";
import fb22 from "../assets/fb22.jpg";
import fb23 from "../assets/fb23.jpg";
import fb24 from "../assets/fb24.jpg";

import fb25 from "../assets/fb25.jpg";
import fb26 from "../assets/fb26.jpg";
import fb27 from "../assets/fb27.jpg";
import fb28 from "../assets/fb28.jpg";
import fb29 from "../assets/fb29.jpg";
import fb30 from "../assets/fb30.jpg";

import fb31 from "../assets/fb31.jpg";
import fb32 from "../assets/fb32.jpg";
import fb33 from "../assets/fb33.jpg";


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


const childDevelopmentImages = [
  { src: fb18, alt: "Child Development Programme 1" },
  { src: fb19, alt: "School Uniform Distribution 1" },
  { src: fb20, alt: "Selananda School Programme" },
];

const childRightsImages = [
  { src: fb21, alt: "Child Rights Monitoring Visit 1" },
  { src: fb22, alt: "St Anne School Project Monitoring" },
  { src: fb23, alt: "Rooftop Organic Farming Project" },
  { src: fb24, alt: "Student Engagement in Organic Farming" },
];

const soilTrainingImages = [
  { src: fb25, alt: "Vermi Compost Training Session" },
  { src: fb26, alt: "Fish Tonic and Fruit Tonic Preparation" },
  { src: fb27, alt: "Rice Husk Charcoal & Compost Making Activity" },
];


const leadershipProgrammeImages = [
  { src: fb28, alt: "Leadership Training Session" },
  { src: fb29, alt: "Child Rights Awareness Programme" },
  { src: fb30, alt: "Organic Farming Promotion Activity" },
];


const safeMigrationImages = [
  { src: fb31, alt: "Safe Migration Awareness Session" },
  { src: fb32, alt: "Community Discussion on Human Trafficking Prevention" },
  { src: fb33, alt: "Distribution of Awareness Materials" },
];
export default function Mediaroom() {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-accent text-center mt-10">
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

          <div className="mt-8 space-y-4 text-fon text-base sm:text-base text-justify">
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

          <div className="mt-8 space-y-4 text-fon text-base sm:text-base leading-relaxed text-justify">
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
    <div className="mt-8 space-y-4 text-fon text-base sm:text-base leading-relaxed text-justify">
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
    <div className="mt-8 space-y-4 text-fon text-base sm:text-base leading-relaxed text-justify">
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
    <div className="mt-8 space-y-4 text-fon text-base sm:text-base leading-relaxed text-justify">
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


{/* ================= Section 6 ================= */}
<Section title="Supporting Education & Child Development – Selananda School Initiative">
  <div>

    {/* Images */}
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {childDevelopmentImages.map((img) => (
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
    <div className="mt-8 space-y-4 text-fon text-base sm:text-base leading-relaxed text-justify">
      <p>
        A Child Development Programme was successfully conducted at 
        Selananda School, Kirimatiyana, Wennappuwa with the objective 
        of supporting children’s educational and personal growth.
      </p>

      <p>
        As part of this initiative, school uniforms were distributed 
        among selected students to ensure they are well-prepared and 
        confident in continuing their academic journey.
      </p>

      <p>
        The programme focused on enhancing children’s self-esteem, 
        motivation, discipline, and overall development while 
        promoting equal opportunities in education.
      </p>

      <p>
        This initiative reflects the commitment to strengthening 
        child welfare, supporting vulnerable families, and creating 
        a positive learning environment within the community.
      </p>
    </div>

  </div>
</Section>

{/* ================= Section 7 ================= */}
<Section title="Child Rights Protection & Rooftop Organic Farming – Project Monitoring Initiative">
  <div>

    {/* Images */}
    <div className="  mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {childRightsImages.map((img) => (
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
    <div className="mt-8 space-y-4 text-fon text-base sm:text-base leading-relaxed text-justify">
      <p>
        Move Front conducted a project monitoring visit at St. Anne School 
        as part of the Child Rights Protection Programme, ensuring that 
        activities implemented under the initiative continue to support 
        the safety, well-being, and holistic development of children.
      </p>

      <p>
        The monitoring process focused on evaluating progress, identifying 
        challenges, and strengthening child protection mechanisms within 
        the school environment.
      </p>

      <p>
        In addition, special attention was given to the Rooftop Organic 
        Farming Project implemented at the school, which promotes 
        sustainable agriculture, environmental awareness, and practical 
        learning opportunities for students.
      </p>

      <p>
        This initiative reflects Move Front’s commitment to integrating 
        child protection with environmental sustainability and skill 
        development, fostering responsible and empowered young leaders.
      </p>
    </div>

  </div>
</Section>


{/* ================= Section 8 ================= */}
<Section title="Soil Conservation & Ecological Agriculture Training – Kurana St. Anne School">
  <div>

    {/* Images */}
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {soilTrainingImages.map((img) => (
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
    <div className="mt-8 space-y-4 text-fon text-base sm:text-base leading-relaxed text-justify">
      <p>
        A comprehensive training programme on soil conservation was conducted 
        for the children of Kurana St. Anne School, aiming to promote ecological 
        agriculture and climate change reduction practices.
      </p>

      <p>
        The programme included practical demonstrations and hands-on activities 
        such as vermi compost production, preparation of fish tonic and fruit tonic, 
        kitchen garbage composting, and rice husk charcoal making.
      </p>

      <p>
        Through these activities, students were encouraged to develop a positive 
        attitude toward sustainable farming methods and environmentally friendly 
        agricultural practices.
      </p>

      <p>
        This initiative strengthens environmental awareness among children while 
        empowering them with practical knowledge to contribute to soil conservation 
        and long-term ecological sustainability.
      </p>
    </div>

  </div>
</Section>


{/* ================= Section 9 ================= */}
<Section title="Leadership & Child Rights Awareness Programme – Mudukatuwa Village">
  <div>

    {/* Images */}
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {leadershipProgrammeImages.map((img) => (
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
    <div className="mt-8 space-y-4 text-fon text-base sm:text-base leading-relaxed text-justify">
      <p>
        A comprehensive training programme on leadership development and 
        the promotion of organic farming was conducted in Mudukatuwa village 
        under the Nattandiya Divisional Secretariat Division.
      </p>

      <p>
        The programme also focused on protecting children's rights and 
        enhancing awareness among children within the child society, 
        empowering them to actively participate in community development.
      </p>

      <p>
        Through interactive sessions and practical guidance, children 
        were encouraged to build leadership qualities, strengthen teamwork, 
        and develop responsible attitudes toward sustainable agriculture.
      </p>

      <p>
        This initiative contributes to nurturing confident young leaders 
        while promoting child protection, social responsibility, and 
        environmentally friendly practices at the community level.
      </p>
    </div>

  </div>
</Section>


{/* ================= Section 10 ================= */}
<Section title="Safe Migration & Anti-Human Trafficking Public Awareness Campaign">
  <div>

    {/* Images */}
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {safeMigrationImages.map((img) => (
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
    <div className="mt-8 space-y-4 text-fon text-base sm:text-base leading-relaxed text-justify">
      <p>
        A public awareness campaign was conducted to promote safe migration 
        practices and reduce the risks associated with human trafficking 
        within vulnerable communities.
      </p>

      <p>
        The campaign focused on educating individuals about legal migration 
        procedures, identifying potential trafficking threats, and understanding 
        their rights and responsibilities when seeking employment abroad.
      </p>

      <p>
        Awareness sessions, community discussions, and informational materials 
        were used to strengthen knowledge and encourage informed decision-making 
        among youth and families.
      </p>

      <p>
        This initiative contributes to protecting vulnerable populations, 
        preventing exploitation, and fostering safer migration pathways 
        through increased public awareness and community engagement.
      </p>
    </div>

  </div>
</Section>
    </div>
  );
}