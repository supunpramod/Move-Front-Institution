// import Section from "../components/Section";
// import lif1 from "../assets/lif1.png";
// import lif2 from "../assets/lif2.png";



// export default function WhereWeWork() {
  

//   return (
// <div>
//    <h1 className="text-3xl md:text-4xl font-bold text-[#1c2674] text-center  mt-10">
//         Resources
//       </h1>

//       <Section title="Partners and Networks" >
//               <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
//                 <p className="text-slate-700 text-sm leading-relaxed">
//                 Healthy Lanka Alliance for Development
//                 </p>
//               </div>
//             </Section>
    
//   <Section  >
//           <div className="flex flex-col items-center">
//             <img 
//               src={lif1} 
//               alt="Organization Structure" 
//               className="max-w-full h-auto rounded-lg shadow-md mt-5"
//             />
//             <img 
//               src={lif2} 
//               alt="Organization Structure" 
//               className="max-w-full h-auto rounded-lg shadow-md mt-5"
//             />
//           </div>
//         </Section>
//         </div>
//   );
// }


import { useState } from "react";
import Section from "../components/Section";
import lif1 from "../assets/lif1.png";
import lif2 from "../assets/lif2.png";

export default function WhereWeWork() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-[#1c2674] text-center mt-10">
        Resources
      </h1>

      <Section title="Partners and Networks">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-slate-700 text-sm leading-relaxed">
            Healthy Lanka Alliance for Development
          </p>
        </div>
      </Section>

      {/* Cards Section */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-8">
          
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