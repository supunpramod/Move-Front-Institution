import Section from "../components/Section";
import Card from "../components/Card";

export default function About() {
  return (
    <>
      <Section title="About Us" subtitle="Move Front Institution (MFI)">
        <div className="grid md:grid-cols-2 gap-4">
          <Card title="Introduction">
            Move Front Institution is a social development organization on process of registration as a non-forfeitable
            organization in Sri Lanka. We facilitate community change towards total development, focusing on holistic
            transformation of women, men, children, youth and disadvantaged communities through training, empowerment,
            livelihood and exposure to life-changing innovations.
          </Card>

          <Card title="How We Work">
            MFI works with community-based organizations (CBOs) and men, women, youth and children groups at community,
            divisional, district and national levels. Programmes, activities and events are designed and implemented with
            CBO participation.
          </Card>
        </div>
      </Section>

      <Section id="vision" title="Vision & Mission">
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

      <Section title="Registration Details">
        <Card title="Companies Act Registration">
          Process to register under the Companies Act, No 7 of 2007, with Registrar General of Companies.
        </Card>
      </Section>
    </>
  );
}
