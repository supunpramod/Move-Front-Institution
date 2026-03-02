import Section from "../components/Section";
import Card from "../components/Card";

export default function Funding() {
  return (
    <>

    <h1 className="text-3xl md:text-4xl font-bold text-accent text-center  mt-10">
        Archive
      </h1>
<Section title="Collaborations & Projects">
  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
    <ul className="list-disc pl-5 text-slate-700 text-sm leading-relaxed space-y-3">
      
      <li>
        <strong>USAID Projects</strong> – In collaboration with Safe Foundation, 
        focusing on human trafficking prevention and safe migration.
      </li>

      <li>
        <strong>UNOPS Projects</strong> – In collaboration with VRIDDHI, 
        strengthening ethnic and religious peace and reconciliation.
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

      <li>
        <strong>Cater Charity</strong> – Providing emergency relief support and 
        livelihood development initiatives.
      </li>

    </ul>
  </div>
</Section>




      <Section title="Funding & Reports" subtitle="Sources of funds, capacity and auditors">
        <div className="grid md:grid-cols-2 gap-4">
          <Card title="Source of Funds (2021)">
            Healthy Lanka Alliance for Development
            <div className="mt-2 text-slate-600">
              Funding capacity (2021): <span className="font-semibold">1,292,215.00</span>
            </div>
          </Card>

          <Card title="Auditor (2021)">
            Asanka Nayomi Wiggin (BMS/MAAT)
            <div className="mt-2 text-slate-600">
              No 40/6, Bodigala Rd, Sirimalwattha, Gunnapana, Kandy, Sri Lanka<br />
              0711699022<br />
              asankawiggin@gmail.com
            </div>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 gap-4">
          <Card title="Source of Funds (2022)">
            Healthy Lanka Alliance for Development and SAFE Foundation
            <div className="mt-2 text-slate-600">
              Funding capacity (2022): <span className="font-semibold">1,274,088.62</span>
            </div>
          </Card>

          <Card title="Auditor (2022)">
            Ruwan de Silva and cooperation (Chartered Accountant)
            <div className="mt-2 text-slate-600">
              25, Stephens Mawatha, Rajagiriya<br />
              Tel/Fax: 0112885635
            </div>
          </Card>
        </div>
      </Section>

      
    </>
  );
}
