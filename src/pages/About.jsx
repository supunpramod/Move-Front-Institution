import Section from "../components/Section";
import Card from "../components/Card";
import orgImage from "../assets/org2.png";
import kawyaImage from "../assets/Kawya parami.jpeg";
import NilushiniImage from "../assets/Nilushini Karunadasa.jpeg";
import HeshanImage from "../assets/Heshan pieris.jpeg";
import RanjalaImage from "../assets/Ranjala Fernando.jpeg";
import SudarshanieImage from "../assets/Sudarshani Dissanayake.jpeg";


const subObjectives = [
  "Support ecological agriculture and promote community-level measures to protect the environment such as recycling waste and reducing the carbon foot print",
  "Mobilize resources and establish educational opportunities for vulnerable people especially children, youth, women, differently-abled people",
  "Develop technical capacity of people in advocating for gender equality, child rights, peace building and social cohesion",
  "Ensure women are safe, healthy and protected in all spaces",
  "Ensure livelihood development for vulnerable communities and all ethnic groups",
  "Facilitate access to government extension service by powerless people",
  "Support community-led initiatives with a focus on sustainable development",
  "Build capacities and sensitize women and children on sexual reproductive health, rights and other preventable viral illnesses like HIV and chronic hepatitis",
  "Build CSO capacities and promote collaboration between public and private stakeholders",
  "Initiate, facilitate and strengthen the collective effort of civil society",
];


const boardMembers = [
  {
    name: "Kawya Parami",
    position: "Secaretary",
    image: kawyaImage,
    qualifications: [
      
      "A dedicated and motivated professional with a strong interest in administration, communication, and community development. She is committed to continuous learning and professional growth while contributing effectively to organizational goals through teamwork, responsibility, and strong interpersonal skills.",

    "She has successfully completed a Computer Course (2024), a Diploma in English from SITC Campus, and a Diploma in Sociology from SITC Campus. These qualifications have enhanced her technical, communication, and social development skills.",

    "With a proactive attitude and a passion for personal and professional development, she strives to apply her knowledge and skills in practical environments, supporting organizational success while making a positive contribution to society."
    ],
  },
  {
    name: "Nilushini Karunadasa",
    position: "Director",
    image: NilushiniImage,
    qualifications: [
      "A dedicated development professional with experience in community development, rural leadership, and sustainable agriculture. She is passionate about empowering communities, promoting human rights, and supporting inclusive and sustainable development initiatives.",

    "She is currently pursuing a Human Rights Diploma at the University of Peradeniya (2025–Present). She also holds a Degree in Rural Leadership and Sustainable Agriculture from the Asian Rural Institute, Japan (2010), a Diploma in Participatory Housing and Community Development from the University of Peradeniya (2007–2009), a Computer Course (MS Office) from ATFA (2006–2007), and a Video/Photography Course from the FORUT Media Unit (2008).",

    "With a strong background in community engagement and leadership, she is committed to applying her knowledge and practical experience to promote sustainable development, social inclusion, and community empowerment."
  
      
    ],
  },
  {
    name: "Heshan Pieris",
    position: "Director",
    image: HeshanImage,
    qualifications: [
      
      "A creative and detail-oriented professional with expertise in graphic design, interior architecture, and administration. He combines technical knowledge with strong organizational and communication skills to deliver effective and innovative solutions.",

    "He has completed a Graphic Design Certificate Course and gained five years of professional experience as an AutoCAD Interior Architecture Designer at FPL Outsource. He is currently serving in the Administration Department at TNR Enterprises.",

    "His diverse experience in design and administration enables him to contribute effectively to organizational development through creativity, efficiency, and professional excellence."
    ],
  },
  {
    name: "Ranjala Fernando",
    position: "Director",
    image: RanjalaImage,
    qualifications: [
      "A compassionate and experienced professional with a strong background in counseling, substance abuse prevention, and community development. She is dedicated to improving individual and community well-being through education, support, and advocacy.",

    "She holds a Diploma in Counseling and a Diploma in Drug Abuse Management. She has over 10 years of experience working with SIDA and served as a Program Officer at Healthy Lanka from 2018 to 2022, contributing to community-based health and social development initiatives.",

    "With extensive experience in counseling and program implementation, she is committed to promoting mental health, social inclusion, and sustainable community development through effective leadership and service."
    ],
  },
  {
    name: "Sudarshanie Dissanayake",
    position: "Director",
    image: SudarshanieImage,
    qualifications: [
     "A dedicated social work and mental health professional with expertise in counseling, psychology, and community well-being. She is committed to supporting individuals through evidence-based counseling approaches and promoting positive mental health outcomes.",

    "She is currently following a Diploma in Drama Therapy for Active Personal Counselling at the Research Institute of Drama Therapy. She holds a Bachelor of Social Work (English Medium) from the National Institute of Social Development, Seeduwa (2015–2019), a Diploma in Psychology from the University of Kelaniya (2016–2017), and a Diploma in Counseling from the National Institute of Social Development, Seeduwa (2015–2017). She also gained practical experience as a Counsellor at the Psychiatric Unit of Government Hospital Wathupitiwala in 2017.",

    "Her academic background and professional experience have equipped her with the skills to provide compassionate counseling, support community mental health initiatives, and contribute effectively to social development programs."
    ],
  },
{
  name: "Jayanika Kalamulla",
  position: "Consultant",
  image: SudarshanieImage,
  qualifications: [
    " Holding a Bachelor’s Degree in International Relations, a Master of Business Administration (MBA), and a PMP® certification, she brings a robust blend of strategic insight, analytical acumen, and disciplined project management expertise. Her academic background and professional credentials provide a strong foundation for navigating complex organizational challenges and delivering results-driven solutions.",

   "As a Project and Program Management professional with more than seven years of experience, she has supported and contributed to a diverse portfolio of projects and programs across the nonprofit, international development, and corporate sectors. Her experience encompasses program coordination, stakeholder engagement, donor-funded project management, performance reporting, and cross-functional collaboration, enabling her to effectively support initiatives from conception through implementation and delivery.",

    "She has successfully collaborated with multidisciplinary and multicultural teams, managed competing priorities in dynamic environments, and facilitated the execution of projects with a focus on quality, efficiency, and accountability. Recognized for her proactive and solutions-oriented approach, she is committed to delivering high-impact work that creates lasting value. Through strong organizational, communication, and problem-solving capabilities, she helps organizations transform strategic objectives into measurable outcomes while fostering sustainable growth and operational excellence.",
  ]
},

{
  name: "Rishanthy Renganathan",
  position: "Consultant",
  image: SudarshanieImage,
  qualifications: [
    "A multidisciplinary development professional with extensive experience in program management, international development, human rights, gender, peacebuilding, and stakeholder engagement. She holds an MSc in Energy for Circular Economy (Reading), an MA in Gender and Peacebuilding from the United Nations University for Peace, an MA in Political Science and Global Affairs from Ateneo de Manila University, an MA in International Studies from Stella Maris College, a BA in English Literature from Ethiraj College for Women, and an Advanced Diploma in Transitional Justice from the Bandaranaike Centre for International Studies.",

    "With a career spanning international organizations, diplomatic missions, civil society, and private-sector initiatives, she has developed expertise in program management, grant administration, fundraising, communications, research, monitoring and evaluation, and partnership development. Her professional experience includes serving as a Program Management Specialist with Global Communities, Consultant to the Embassy of Japan in Sri Lanka, Program Support Officer (UNV) with the Office of the United Nations High Commissioner for Human Rights, Senior Executive – Fundraising & Communications at Embark, Program Coordinator at the Women's Chamber of Industry and Commerce, and Research and Information Officer at Organisation for Elangai Refugees Rehabilitation.",

    "She is recognized for her ability to manage complex programs, engage diverse stakeholders, and deliver impactful results across multicultural and interdisciplinary environments. Her work is driven by a commitment to sustainable development, social inclusion, evidence-based decision-making, and creating meaningful change through strategic partnerships and effective program implementation."
  ],
},
];
export default function About() {
  return (
    <div className="bg-white">

    
      <h1 className="text-3xl md:text-4xl font-bold text-accent text-center  pt-10">
        About Us
      </h1>

      <Section id="vision" title="Vision & Mission" className="bg-white">
        <div className="grid md:grid-cols-2 gap-4">
          <Card title="Vision">
            Empowering powerless individuals by making them independent towards fulfilling sustainable change.
          </Card>
          <Card title="Mission">
            To restore hope among powerless women, men, children and youth in deprived communities by establishing an
            equal and just environment and protecting the rights of all.
          </Card>
        </div>
      </Section>


<Section title="Main Objective" className="bg-secondary ">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 ">
          <p className="text-slate-700 text-sm leading-relaxed">
            To provide a holistic transformation of women, men, child, youth and disadvantaged communities by offering
            training, empowerment, livelihood and exposure to life-changing innovations.
          </p>
        </div>
      </Section>

      <Section title="Sub Objectives" subtitle="What we deliver through our programmes" className="bg-secondary">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <ul className="list-disc ml-5 space-y-2 text-sm text-slate-700">
            {subObjectives.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section title="Organization structure " >
        <div className="flex justify-center">
          <img 
            src={orgImage} 
            alt="Organization Structure" 
            className="max-w-full h-auto rounded-lg shadow-md mt-5"
          />
        </div>
      </Section>
<section title = "Board of Directors"
      id="organization"
      className="bg-gray-50 py-20"
    >
      <div className="max-w-6xl   mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          

          <h2 className="mt-4 text-2xl  md:text-3xl  font-bold text-primary ">
            Qualifications about the board members of Move Front
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-gray-600 text-base leading-relaxed">
            Move Front is guided by a dedicated team of professionals with
            expertise in social development, community leadership, counseling,
            education, administration, and sustainable development.
          </p>
        </div>

        {/* Directors Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {boardMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              {/* Photo */}
              <div className="h-80 bg-gray-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-base font-semibold bg-blue-50 text-primary rounded-full mb-3">
                  {member.position}
                </span>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {member.name}
                </h3>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Professional Profile
                  </h4>

                  <ul className="space-y-2">
                    {member.qualifications.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm text-gray-600"
                      >
                        <span className="text-secondary mr-2   ">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


      <Section title="Organization" >
              <div className="grid md:grid-flow-row-dense-2 gap-4">
                <Card title=" ">
                 The Organizations Finance and Admin Unit is in charge of handling funds received and the allocation of funding for programmes and other expenses. The preparation of the annual budget is another task in which the Finance and Admin Unit plays a central part. 
                </Card>
      
                <Card title="">
                  Move Front’s programmes are subdivided as community level, divisional, district and national level programmes. At the community level, the organization works directly through men, women, youth, and children in each community. Action groups are formed for each category and empowered to conduct livelihood development and advocacy activities within their communities. At the national level, Move Front institution works in collaboration with government institutions, nongovernmental organizations, and individuals reached through community mobilization. Experts are also consulted in the development of training materials and the planning of activities.
                </Card>
      
                <Card title="">
      Additionally, Move Front institution has its community-based organizations which it established as branch organizations in each of its working locations. These organizations conduct community activities and as and when necessary, livelihood development, fundraising, environment protection projects, ecological agriculture and communications with the mass media women and child rights, Human rights also cover democracy. All of the community-based organizations’ programmes are conducted with guidance from Move Front head office but with funding raised independently by each organization and funding institutions.           </Card>
              </div>
      
      
            </Section>

      

      <Section title="Our Approach" subtitle="Evidence-based, holistic development">
        <div className="grid md:grid-cols-2 gap-4">
          <Card title="Approach Summary">
            We are an evidence-based organization that deals with livelihood development using a holistic approach.
            Awareness creation and knowledge transfer support better living conditions, gap filling and income increase,
            while engaging stakeholders for holistic development.
          </Card>

          <Card title="Geographic Coverage">
            Currently operating in 03 districts and 24 villages: Puttalam, Gampaha and Nuwara Eliya.
            Coordination also in Colombo.
          </Card>
        </div>
      </Section>


      

      
    </div>
  );
}
