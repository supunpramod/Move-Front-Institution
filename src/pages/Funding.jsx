import Section from "../components/Section";
import Card from "../components/Card";

export default function Funding() {
  return (
    <>
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

      <Section title="Downloads">
        <div className="grid md:grid-cols-3 gap-4">
          <Card title="Annual Report">Add PDF link later</Card>
          <Card title="Project Briefs">Add PDF link later</Card>
          <Card title="Financial Statements">Add PDF link later</Card>
        </div>
      </Section>
    </>
  );
}
