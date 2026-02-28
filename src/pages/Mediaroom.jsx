import Section from "../components/Section";
import Card from "../components/Card";
import orgImage from "../assets/org.png";

import fb1 from "../assets/fb1.png";
import fb2 from "../assets/fb2.png";
import fb3 from "../assets/fb3.png";

export default function Mediaroom() {
  return (
    <>
    <Section title="Harmony in Diversity – Thai Pongal Peace Initiative">
  <div className="max-w-4xl mx-auto text-center">

    {/* Project Image */}
    <div className="flex justify-center">
      <img 
        src={fb1}   // Thai Pongal event image ekak danna
        alt="Thai Pongal Peace and Reconciliation Event"
        className="max-w-full h-auto rounded-lg shadow-md mt-5"
      />
       <img 
        src={fb2}   // Thai Pongal event image ekak danna
        alt="Thai Pongal Peace and Reconciliation Event"
        className="max-w-full h-auto rounded-lg shadow-md mt-5"
      />
       <img 
        src={fb3}   // Thai Pongal event image ekak danna
        alt="Thai Pongal Peace and Reconciliation Event"
        className="max-w-full h-auto rounded-lg shadow-md mt-5"
      />
    </div>

    {/* Project Description */}
    <p className="mt-6 text-gray-700 leading-relaxed text-lg">
      A peace and reconciliation event was conducted for Thai Pongal Day 
      at the Divisional Secretariat Office, Katana, with the participation 
      of UN representative Ms. Premila Nagulashvaran.
    </p>

    <p className="mt-4 text-gray-700 leading-relaxed text-lg">
      The program focused on bringing together Catholic, Islamic, 
      and Buddhist communities to better understand Hindu religious 
      beliefs and cultural practices associated with Thai Pongal.
    </p>

    <p className="mt-4 text-gray-700 leading-relaxed text-lg">
      The objective of the initiative was to promote peacebuilding, 
      strengthen mutual understanding, and enhance reconciliation 
      among different religious communities.
    </p>

  </div>
</Section>


      
    </>
  );
}
