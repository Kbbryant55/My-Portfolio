import styles from "@/styles/Home.module.scss";
import SkillBadge from "../components/SkillBadge";
import { skills } from "../data/skills";
import AboutMeTileSection from "../components/AboutMeTileSection";
import EducationTileSection from "../components/EducationTileSection";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <AboutMeTileSection />
        <EducationTileSection />
        <div className="container mt-16 pr-4 flex flex-row bg-secondary rounded-3xl h-1/2">
          <div className="flex w-full flex-col">
            <h1 className="text-left pl-10">Top Skills</h1>
            <div className="flex flex-row flex-wrap	mt-[4rem] h-3/4 justify-center">
              {skills.map((skill, index) => {
                return (
                  <SkillBadge
                    key={`${skill.label}-${index}`}
                    label={skill.label}
                    imageUrl={skill.imageUrl}
                    width={75}
                    height={75}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
