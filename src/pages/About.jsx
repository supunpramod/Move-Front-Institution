import Section from "../components/Section";
import Card from "../components/Card";
import orgImage from "../assets/org.png";



const subObjectives = [
  "Support ecological agriculture and promote community-level measures to protect the environment such as recycling waste and reducing the carbon foot print",
  "Mobilize resources and establish educational opportunities for vulnerable people especially children, youth, women, differently-abled people",
  "Develop technical capacity of people in advocating for gender equality, child rights, peace building and social cohesion",
  "Ensure women are safe, healthy and protected in all spaces",
  "Ensure livelihood development for vulnerable communities and all ethnic groups",
  "Facilitate access to government extension service by powerless people",
  "Support community-led initiatives with a focus on sustainable development",
  "Build capacities and sensitize women and children on sexual reproductive health, rights and other preventable viral illnesses like HIV and chronic hepatitis",
  "Build CSO capacities and promote collaboration between public and private stakeholders",
  "Initiate, facilitate and strengthen the collective effort of civil society",
];

export default function About() {
  return (
    <div className="bg-white">

    
      <h1 className="text-3xl md:text-4xl font-bold text-accent text-center  pt-10">
        About Us
      </h1>

      <Section id="vision" title="Vision & Mission" className="bg-white">
        <div className="grid md:grid-cols-2 gap-4">
          <Card title="Vision">
            Empowering powerless individuals by making them independent towards fulfilling sustainable change.
          </Card>
          <Card title="Mission">
            To restore hope among powerless women, men, children and youth in deprived communities by establishing an
            equal and just environment and protecting the rights of all.
          </Card>
        </div>
      </Section>


<Section title="Main Objective" className="bg-secondary ">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 ">
          <p className="text-slate-700 text-sm leading-relaxed">
            To provide a holistic transformation of women, men, child, youth and disadvantaged communities by offering
            training, empowerment, livelihood and exposure to life-changing innovations.
          </p>
        </div>
      </Section>

      <Section title="Sub Objectives" subtitle="What we deliver through our programmes" className="bg-secondary">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <ul className="list-disc ml-5 space-y-2 text-sm text-slate-700">
            {subObjectives.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section title="Organization structure " >
        <div className="flex justify-center">
          <img 
            src={orgImage} 
            alt="Organization Structure" 
            className="max-w-full h-auto rounded-lg shadow-md mt-5"
          />
        </div>
      </Section>

      <Section title="Organization" >
              <div className="grid md:grid-flow-row-dense-2 gap-4">
                <Card title=" ">
                 The Organizations Finance and Admin Unit is in charge of handling funds received and the allocation of funding for programmes and other expenses. The preparation of the annual budget is another task in which the Finance and Admin Unit plays a central part. 
                </Card>
      
                <Card title="">
                  Move Front’s programmes are subdivided as community level, divisional, district and national level programmes. At the community level, the organization works directly through men, women, youth, and children in each community. Action groups are formed for each category and empowered to conduct livelihood development and advocacy activities within their communities. At the national level, Move Front institution works in collaboration with government institutions, nongovernmental organizations, and individuals reached through community mobilization. Experts are also consulted in the development of training materials and the planning of activities.
                </Card>
      
                <Card title="">
      Additionally, Move Front institution has its community-based organizations which it established as branch organizations in each of its working locations. These organizations conduct community activities and as and when necessary, livelihood development, fundraising, environment protection projects, ecological agriculture and communications with the mass media women and child rights, Human rights also cover democracy. All of the community-based organizations’ programmes are conducted with guidance from Move Front head office but with funding raised independently by each organization and funding institutions.           </Card>
              </div>
      
      
            </Section>

      

      <Section title="Our Approach" subtitle="Evidence-based, holistic development">
        <div className="grid md:grid-cols-2 gap-4">
          <Card title="Approach Summary">
            We are an evidence-based organization that deals with livelihood development using a holistic approach.
            Awareness creation and knowledge transfer support better living conditions, gap filling and income increase,
            while engaging stakeholders for holistic development.
          </Card>

          <Card title="Geographic Coverage">
            Currently operating in 03 districts and 24 villages: Puttalam, Gampaha and Nuwara Eliya.
            Coordination also in Colombo.
          </Card>
        </div>
      </Section>

      
    </div>
  );
}
