


import { useState } from "react";
import Section from "../components/Section";
import lif1 from "../assets/lif1.png";
import lif2 from "../assets/lif2.png";

export default function WhereWeWork() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-accent text-center m-10">
        Resources
      </h1>

      <Section title="Partners and Networks" className="bg-secondary">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <ul className="list-disc pl-5 text-slate-700 text-sm leading-relaxed space-y-3">
            
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

<li>
  <strong>Corporate Social Responsibility (CSR) Projects</strong> – Partnering 
  with private sector organizations to implement community development programs 
  in health, education, livelihood support, and environmental sustainability.
</li>

<li>
  <strong>Government of Sri Lanka Recognized Projects</strong> – Officially 
  registered and recognized initiatives aligned with national development 
  priorities, including social protection, youth empowerment, and community 
  welfare programs.
</li>
      
          </ul>
        </div>
      </Section>
      

      {/* Cards Section */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-4 ">
          
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#1c2674] mb-3">
                Resource Document 01
              </h3>
              <img
                src={lif1}
                alt="Resource 1"
                onClick={() => setSelectedImage(lif1)}
                className="w-full h-64 object-cover rounded-lg cursor-pointer hover:scale-105 transition duration-300"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#1c2674] mb-3">
                Resource Document 02
              </h3>
              <img
                src={lif2}
                alt="Resource 2"
                onClick={() => setSelectedImage(lif2)}
                className="w-full h-64 object-cover rounded-lg cursor-pointer hover:scale-105 transition duration-300"
              />
            </div>
          </div>

        </div>
      </Section>

      {/* Modal Popup */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-[90%]">
            <img
              src={selectedImage}
              alt="Preview"
              className="w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}