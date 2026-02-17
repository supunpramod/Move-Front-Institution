import Section from "../components/Section";
import Card from "../components/Card";

export default function WhereWeWork() {
  const places = [
    { name: "Puttalam", note: "Community interventions (villages included in programme locations)." },
    { name: "Gampaha", note: "Community interventions (villages included in programme locations)." },
    { name: "Nuwara Eliya", note: "Community interventions (villages included in programme locations)." },
    { name: "Colombo", note: "Coordination / networking and national-level collaboration." },
  ];

  return (
    <Section title="Where We Work" subtitle="Geographic coverage">
      <div className="grid md:grid-cols-2 gap-4">
        {places.map((p) => (
          <Card key={p.name} title={p.name}>
            {p.note}
          </Card>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-slate-200 p-6 bg-slate-50">
        <p className="text-slate-700 text-sm">
          Current operations: 03 districts and 24 villages (Puttalam, Gampaha, Nuwara Eliya). Coordination in Colombo.
        </p>
      </div>
    </Section>
  );
}
