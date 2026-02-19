import HeroSlider from "../components/HeroSlider";
import Section from "../components/Section";
import Card from "../components/Card";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <HeroSlider />

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 -mt-10 relative z-10">
          <div className="grid md:grid-cols-4 gap-4">
            <Card title="Vision">
              Empowering powerless individuals by making them independent towards fulfilling sustainable change.
            </Card>

            <Card title="Mission">
              To restore hope among powerless women, men, children and youth in deprived communities by establishing an
              equal and just environment and protecting the rights of all.
            </Card>

            <Card title="Where We Work">
              Puttalam • Gampaha • Nuwara Eliya • Colombo
            </Card>

            <Card title="Established">
              01/06/2021 • Registration in process under Companies Act No. 7 of 2007.
            </Card>
          </div>
        </div>
      </section>

      <Section title="Introduction" subtitle="Move Front Institution (MFI)">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-slate-700 text-sm leading-relaxed">
            Move Front institution is a social development organization on process of registration as a non-forfeitable organization in Sri Lanka.  We facilitate community change towards a total development. Our main focus is on the To provide a holistic transformation of Women, Men, child, youth and disadvantaged communities by offering training, empowerment, livelihood and exposure to life-changing innovations in
Holistic approach. We endeavors to create an environment that allows the fulfillment of the rights of every individual, family, and society. Currently Move Front institution operating in community intervention in 03 district and 24 villages, Puttlam, Gampaha and Nuwaraeliya. We strive to reduce the impact of inequality of gender, and gender base violence towards creating a peaceful, happy, and healthy environment within the community. 



          </p>
       <br/>

            <p className="text-slate-700 text-sm leading-relaxed">
            As an organization that works to empower the people to be their own facilitators for change, Move Front institution treats the mobilization of community members and the civil society with utmost importance. While supporting existing community-based organizations, at the community, district, and national level, one of the key steps in our programme involves setting up our own community-based organizations in our selected programme locations. These organizations are made up of individuals who actively participate in transforming their communities, bringing about a healthy environment conducive to social development. All programmes, activities and events are designed and implemented with the participation of community-based organizations (CBOs). 
          </p><br>
          </br>
             <p className="text-slate-700 text-sm leading-relaxed">
     MFI components namely, livelihood development, gender equality, women empowerment and development, Strengthening Community based organizations through right base approach full fill the needs of major areas capacity building, human trafficking, Pace building, environment reconciliation.  Move Front institution work involves working in coordination with Community based Organizations and women, children, and youth groups and individuals in each divisional secretariat and district, as well as with various government and nongovernmental organizations and agencies in advocating for and contributing to the local government implementation activities and policies.
          </p>
       <br/>

       <p className="text-slate-700 text-sm leading-relaxed">
            As an organization that works to empower the people to be their own facilitators for change, Move Front institution treats the mobilization of community members and the civil society with utmost importance. While supporting existing community-based organizations, at the community, district, and national level, one of the key steps in our programme involves setting up our own community-based organizations in our selected programme locations. These organizations are made up of individuals who actively participate in transforming their communities, bringing about a healthy environment conducive to social development. All programmes, activities and events are designed and implemented with the participation of community-based organizations (CBOs). 
          </p><br>
          </br>
             <p className="text-slate-700 text-sm leading-relaxed">
Move Front institutions at the forefront of one of the latest ventures of the government and non-governmental networks which is the establishment of divisional and district alliances of Community based organizations. These are collectives of Community based organizations that allow for proper coordination of Community based activities in the relevant areas in order to optimize the services provided to the people.          </p>
       <br/>

       <p className="text-slate-700 text-sm leading-relaxed">
Move Front also work in coordination with various government and nongovernmental organizations and agencies and various network’s supporting them to advocate for, and contribute, to the local government implementation of policies gender equality and gender base violence reduction. The government and nongovernmental organizations currently involved divisional, district and nationally.  Ministry of women and child affairs, Ministry of Health and Sri Lanka alcohol policy alliance (SLPA) We Effect, Healthy Lanka alliance for development, Safe foundation US aid project Etc.          </p>       <br/>


<p className="text-slate-700 text-sm leading-relaxed">
Additionally, we recognize environment and ecological agriculture major crosscutting issues related understand that tackling issues is thus necessary in reducing poverty and its related problems. Our programmes therefore include as key areas of interest, the empowerment of women & man and children & youths and the protection and promotion of their rights. We hope that our efforts would greatly assist the government and nongovernmental institutions and organizations in alleviating poverty and social development. We also hope that our community level interventions would be instrumental in helping the people of Sri Lanka develop as healthy, productive, and valuable citizens of the country.</p>

       

       


          

          

          {/* <div className="mt-5 flex flex-wrap gap-3">
            <Link
              to="/about"
              className="px-5 py-3 rounded-2xl border bg-brand-600 hover:bg-brand-700 text-black text-sm font-semibold"
            >
              Read More
            </Link>
            <Link
              to="/contact"
              className="px-5 py-3 rounded-2xl border border-slate-300 hover:bg-slate-50 text-sm font-semibold text-black"
            >
              Contact Us
            </Link>
          </div> */}
        </div>
      </Section>

      <Section title="Main Objective" subtitle="What we aim to achieve">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-slate-700 text-sm leading-relaxed">
            To provide a holistic transformation of women, men, child, youth and disadvantaged communities by offering
            training, empowerment, livelihood and exposure to life-changing innovations.
          </p>
        </div>
      </Section>

      <Section title="Our Focus Areas" subtitle="Core components">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            "Livelihood development",
            "Gender equality",
            "Women empowerment & development",
            "Strengthening Community Based Organizations (CBOs) through a rights-based approach",
          ].map((t) => (
            <div
              key={t}
              className="rounded-2xl border border-slate-200 p-6 hover:shadow-md transition bg-white"
            >
              <h3 className="font-semibold">{t}</h3>
              <p className="text-sm text-slate-600 mt-2">
                Community-led programmes designed and implemented with CBO participation.
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
