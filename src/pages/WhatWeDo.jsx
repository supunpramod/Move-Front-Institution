import Section from "../components/Section";
import Card from "../components/Card";

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

export default function WhatWeDo() {
  return (
    <>
      <Section title="What We Do" subtitle="Core components and areas we work on">
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

      <Section title="Main Objective">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-slate-700 text-sm leading-relaxed">
            To provide a holistic transformation of women, men, child, youth and disadvantaged communities by offering
            training, empowerment, livelihood and exposure to life-changing innovations.
          </p>
        </div>
      </Section>

      <Section title="Sub Objectives" subtitle="What we deliver through our programmes">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <ul className="list-disc ml-5 space-y-2 text-sm text-slate-700">
            {subObjectives.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
