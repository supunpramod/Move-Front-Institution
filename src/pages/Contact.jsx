import { useState } from "react";
import Section from "../components/Section";
import Card from "../components/Card";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function onChange(e) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    alert("Submitted (demo). Later connect Email/Backend.");
  }

  return (
    <div>
<h1 className="text-3xl md:text-4xl font-bold text-accent text-center  mt-10">
        Contact Us
      </h1>

    <Section title="Contact" subtitle="Get in touch with us">
      <div className="grid md:grid-cols-2 gap-4">
        <Card title="Main Contact">
          <div className="space-y-2 text-sm text-[#475569]">
            <p><span className="font-semibold">Address:</span> No 310 Oruwella Road Katuneriya Sri Lanka</p>
            <p><span className="font-semibold">Telephone:</span> 031 2252610, 0777559177, 0712007295</p>
            <p><span className="font-semibold">Fax:</span> Not yet</p>
            <p><span className="font-semibold">Email:</span> chamika1969@gmail.com</p>
          </div>
        </Card>

        <Card title="Send a Message">
          <form onSubmit={onSubmit} className="space-y-3">
            <input
              className="w-full border border-slate-300 rounded-xl px-3 py-2"
              placeholder="Your Name"
              name="name"
              value={form.name}
              onChange={onChange}
              required
            />
            <input
              className="w-full border border-slate-300 rounded-xl px-3 py-2"
              placeholder="Your Email"
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              required
            />
            <textarea
              className="w-full border border-slate-300 rounded-xl px-3 py-2 min-h-[120px]"
              placeholder="Message"
              name="message"
              value={form.message}
              onChange={onChange}
              required
            />
            <button className="w-full bg-brand-600 text-white rounded-xl py-2 hover:bg-brand-700 font-semibold">
              Submit
            </button>
          </form>
        </Card>
      </div>

      <div className="mt-6 grid md:grid-cols-3 gap-4">
        <Card title="Executive Manager">
          Jayasinghe Arachchige Chamika<br />
          
          chamika1969@gmail.com<br />
         
        </Card>

        <Card title="Chairperson">
          Medahenegedara Nilushini Karunadasa<br />
          
          nilushimovefront@gmail.com
        </Card>

        <Card title="Secretary">
          Ranjala Fernando<br />
          
          ranjalafernando@outlook.com
        </Card>


       
      </div>
    </Section>

    </div>
  );
}
