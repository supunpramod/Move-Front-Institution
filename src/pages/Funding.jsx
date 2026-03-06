import Section from "../components/Section";
import Card from "../components/Card";

export default function Funding() {
  return (
    <>

    <h1 className="text-3xl md:text-4xl font-bold text-accent text-center  mt-10">
        Archive
      </h1>
<Section title="Collaborations & Projects" className="bg-white">
  <div className="rounded-2xl border border-primary bg-slate-50 p-6">
    <ul className="list-disc pl-5 text-fon text-sm leading-relaxed space-y-3">
      
       <li>
  <strong>UNOPS Projects</strong> – Implemented in collaboration with partners 
  such as VRIDDHI, focusing on strengthening ethnic and inter-religious harmony, 
  peacebuilding, and reconciliation initiatives at community level.
</li>

<li>
  <strong>KIBO Alliance – USA</strong> – Supporting child rights promotion and 
  holistic development of adolescents through education, protection, and 
  leadership-building programs.
</li>

<li>
  <strong>Asian Rural Institute – Japan</strong> – Promoting sustainable and 
  organic agriculture practices while addressing climate change and environmental 
  conservation at grassroots level.
</li>

<li>
  <strong>SAFE Foundation Projects</strong> – Implementing community-based 
  programs on alcohol and drug prevention, child protection, gender equality, 
  and psychosocial and mental health awareness.
</li>

<li>
  <strong>Qatar Charity Projects</strong> – Delivering humanitarian and 
  community development initiatives focused on vulnerable families, education 
  support, and social wellbeing.
</li>

     


    </ul>
  </div>
</Section>




      
      
    </>
  );
}
