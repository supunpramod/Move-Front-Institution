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
  Promoting sustainable livelihood opportunities through community awareness, 
  vocational skill development, entrepreneurship support, and stakeholder engagement 
  to improve income security and resilience.
</Card>

<Card title="Ecological Agriculture">
  Promoting environmentally friendly and climate-resilient farming practices 
  that protect natural resources, improve soil health, and ensure long-term 
  food security for rural communities.
</Card>

<Card title="Women Empowerment & Development">
  Empowering women and girls through education, leadership training, 
  health awareness, economic opportunities, and advocacy for equal rights 
  and gender justice.
</Card>

<Card title="Climate Change Awareness/Actions">
  Raising awareness on climate change impacts and supporting community-based 
  adaptation and mitigation initiatives to build climate-resilient communities.
</Card>

<Card title="Social Mobilization">
  Strengthening community participation and collective action by building 
  grassroots leadership, fostering unity, and encouraging active civic engagement.
</Card>

<Card title="Peace and Reconciliation">
  Promoting social harmony, conflict resolution, and inclusive dialogue 
  to build peaceful and cohesive communities.
</Card>

<Card title="Environmental Protection">
  Conserving biodiversity and natural ecosystems through community education, 
  sustainable practices, and environmental advocacy initiatives.
</Card>

<Card title="Human Rights">
  Advocating for the protection and promotion of fundamental human rights, 
  equality, and social justice for all individuals regardless of background.
</Card>

<Card title="Humanitarian Assistance">
  Providing timely emergency relief, essential services, and recovery support 
  to vulnerable communities affected by disasters and crises.
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
        <strong>Safe Foundation Projects</strong> – 
        Programs on alcohol and drug prevention, child rights, gender equality, 
        and mental health development.
      </li>

      <li>
        <strong>Quatar Charity Projects</strong> – 
        Programs on alcohol and drug prevention, child rights, gender equality, 
        and mental health development.
      </li>

    </ul>
  </div>
</Section>

      
    </>
  );
}
