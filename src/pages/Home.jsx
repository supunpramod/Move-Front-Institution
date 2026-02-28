import HeroSlider from "../components/HeroSlider";
import Homeintro from "../components/homeintro";
import Section from "../components/Section";
import Card from "../components/Card";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Homeintro />

     


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
              className="rounded-2xl border border-slate-200 p-6 hover:shadow-md transition bg-[#ffc121]"
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
