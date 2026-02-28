import Section from "../components/Section";
import lif1 from "../assets/lif1.png";
import lif2 from "../assets/lif2.png";



export default function WhereWeWork() {
  

  return (
<div>
   <h1 className="text-3xl md:text-4xl font-bold text-[#1c2674] text-center  mt-10">
        Resources
      </h1>

      <Section title="Partners and Networks" >
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-slate-700 text-sm leading-relaxed">
                Healthy Lanka Alliance for Development
                </p>
              </div>
            </Section>
    
  <Section  >
          <div className="flex flex-col items-center">
            <img 
              src={lif1} 
              alt="Organization Structure" 
              className="max-w-full h-auto rounded-lg shadow-md mt-5"
            />
            <img 
              src={lif2} 
              alt="Organization Structure" 
              className="max-w-full h-auto rounded-lg shadow-md mt-5"
            />
          </div>
        </Section>
        </div>
  );
}
