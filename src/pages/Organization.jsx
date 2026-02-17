import Section from "../components/Section";
import Card from "../components/Card";

export default function Organization() {
  return (
    <>
      <Section title="Organization" subtitle="Structure and operations">
        <div className="grid md:grid-cols-2 gap-4">
          <Card title="Finance & Admin Unit">
            The Finance and Admin Unit handles funds received, allocation for programmes and expenses,
            and supports annual budget preparation.
          </Card>

          <Card title="Programme Structure">
            Programmes are subdivided into community, divisional, district and national level programmes.
            At community level, action groups for men, women, youth and children are empowered to conduct
            livelihood development and advocacy activities.
          </Card>
        </div>
      </Section>

      <Section title="Community-Based Organizations (CBOs)">
        <Card title="CBO Branch Organizations">
          MFI establishes community-based organizations as branch organizations in working locations.
          These organizations conduct community activities, livelihood development, fundraising, environmental
          protection projects, ecological agriculture, media communications, women and child rights, human rights,
          and democracy-related work—guided by head office, with independent fundraising and donor support.
        </Card>
      </Section>

      <Section title="Staff Details">
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-50">
              <tr className="text-left">
                <th className="p-3">Staff Type</th>
                <th className="p-3">Male</th>
                <th className="p-3">Female</th>
                <th className="p-3">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-3">Permanent</td>
                <td className="p-3">03</td>
                <td className="p-3">04</td>
                <td className="p-3">07</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Temporary</td>
                <td className="p-3">03</td>
                <td className="p-3">04</td>
                <td className="p-3">07</td>
              </tr>
              <tr className="border-t font-semibold">
                <td className="p-3">Grand Total</td>
                <td className="p-3">06</td>
                <td className="p-3">08</td>
                <td className="p-3">14</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>
    </>
  );
}
