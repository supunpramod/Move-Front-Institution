import Section from "../components/Section";
import Card from "../components/Card";
import orgImage from "../assets/org.png";

export default function Organization() {
  return (
    <>
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

      <Section title="Organization structure " >
  <div className="flex justify-center">
    <img 
      src={orgImage} 
      alt="Organization Structure" 
      className="max-w-full h-auto rounded-lg shadow-md mt-5"
    />
  </div>
</Section>


      
    </>
  );
}
