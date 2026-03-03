import Section from "../components/Section";
import Card from "../components/Card";

 const places = [
    { name: "Puttalam", note: "Community interventions (villages included in programme locations)." },
    { name: "Gampaha", note: "Community interventions (villages included in programme locations)." },
    { name: "Nuwara Eliya", note: "Community interventions (villages included in programme locations)." },
    { name: "Colombo", note: "Coordination / networking and national-level collaboration." },
  ];

export default function WhatWeDo() {
  return (
    <>


<h1 className="text-3xl md:text-4xl font-bold text-accent text-center  mt-10">
        What We Do
      </h1>


      <Section title="Core components and areas we work on" subtitle=" ">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card title="Livelihood Development">
            Holistic livelihood development with awareness, skill building and stakeholder engagement.
          </Card>
          <Card title="Gender Equality">
            Advocacy and community action for equality and reduction of gender-based violence.
          </Card>
          <Card title="Women Empowerment & Development">
            Empowering women through safety, health, leadership and economic opportunities.
          </Card>
          <Card title="Strengthening CBOs">
            Rights-based approach to strengthen community organizations and alliances.
          </Card>
        </div>
      </Section>

      <Section title="Where We Work" subtitle="Geographic coverage" className="bg-secondary">
  <div className="grid md:grid-cols-2 gap-4">
    {places.map((p) => (
      <Card
        key={p.name}
        title={p.name}
        className="border-0 ring-0 shadow-sm"   // ✅ border remove (this section only)
      >
        {p.note}
      </Card>
    ))}
  </div>

  <div className="mt-6 rounded-2xl border border-slate-200 p-6 bg-slate-50">
    <p className="text-slate-700 text-sm">
      Current operations: 03 districts and 24 villages (Puttalam, Gampaha, Nuwara Eliya).
      Coordination in Colombo.
    </p>
  </div>
</Section>


      

      

      <Section title="Ongoing Projects">
  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
    <ul className="list-disc pl-5 text-slate-700 text-sm leading-relaxed space-y-3">
      
      <li>
        <strong>UNOPS Projects</strong> – In collaboration with VRIDDHI, 
        focusing on strengthening ethnic and religious peace and reconciliation.
      </li>

      <li>
        <strong>KIBO Alliance – America</strong> – Promoting child rights and 
        child development for adolescent children.
      </li>

      <li>
        <strong>Asian Rural Institute – Japan</strong> – Working on organic 
        agriculture and reduction of global warming.
      </li>

      <li>
        <strong>Healthy Lanka Alliance for Development – Norway</strong> – 
        Programs on alcohol and drug prevention, child rights, gender equality, 
        and mental health development.
      </li>

    </ul>
  </div>
</Section>

      
    </>
  );
}
