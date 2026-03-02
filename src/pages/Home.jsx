import HeroSlider from "../components/HeroSlider";
import Homeintro from "../components/homeintro";
import Section from "../components/Section";
import Card from "../components/Card";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Homeintro />

     


      

      <Section title="Our Move Front Programs" subtitle="Media Room">
  <div className="flex justify-center">
    <Link to="/mediaroom">
      <Card title="Media Room">
        Explore our media room for the latest updates, stories, and insights on our programs and impact.
      </Card>
    </Link>
  </div>
</Section>
    </>
  );
}
