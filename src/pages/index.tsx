import SkillBadge from "../components/SkillBadge";
import SurfaceCard from "../components/SurfaceCard";
import HeroSection from "../components/HeroSection";
import { skills } from "../data/skills";
import AboutMeTileSection from "../components/AboutMeTileSection";
import EducationTileSection from "../components/EducationTileSection";

export default function Home() {
  return (
    <main className="page-shell space-y-16">
      <HeroSection />
      <AboutMeTileSection />
      <EducationTileSection />
      <SurfaceCard className="flex flex-row">
        <div className="flex w-full flex-col pb-8">
          <h2 className="section-title pl-10 pt-10">Top Skills</h2>
          <div className="mt-12 grid grid-cols-3 phone:grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center px-6">
            {skills.map((skill, index) => (
              <SkillBadge
                key={`${skill.label}-${index}`}
                label={skill.label}
                imageUrl={skill.imageUrl}
                width={75}
                height={75}
              />
            ))}
          </div>
        </div>
      </SurfaceCard>
    </main>
  );
}
