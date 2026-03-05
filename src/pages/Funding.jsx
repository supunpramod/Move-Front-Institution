import Section from "../components/Section";
import Card from "../components/Card";

export default function Funding() {
  return (
    <>

    <h1 className="text-3xl md:text-4xl font-bold text-accent text-center  m-10">
        Archive
      </h1>
<Section title="Collaborations & Projects" className="bg-secondary">
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
        <strong>Qatar Charity</strong> – Providing emergency relief support and 
        livelihood development initiatives.
      </li>

    </ul>
  </div>
</Section>




      
      
    </>
  );
}
