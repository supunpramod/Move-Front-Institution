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
            Move Front Institution is a social development organization (registration in process) that facilitates
            community change towards total development. Our main focus is to provide a holistic transformation of women,
            men, children, youth and disadvantaged communities through training, empowerment, livelihood and exposure to
            life-changing innovations.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              to="/about"
              className="px-5 py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold"
            >
              Read More
            </Link>
            <Link
              to="/contact"
              className="px-5 py-3 rounded-2xl border border-slate-300 hover:bg-slate-50 text-sm font-semibold"
            >
              Contact Us
            </Link>
          </div>
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
