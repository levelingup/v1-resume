import Info from "@/components/Info";
import Image from "next/image";
import { RESUME_DATA } from "@/data/resume-data";

export default function Home() {
  return (
    <main className="container max-w-[800px] gap-y-4 flex flex-col p-4 md:p-16">
      <section>
        {/* Intro */}
        <div className="flex items-center gap-x-6">
          <div>
            <h1>{RESUME_DATA.name}</h1>
            <div>
              Front End Engineer with product management experience, focused on A/B testing and data-driven decision making.
            </div>
          </div>
          <div className="h-28 w-28">
            <Image src="/profile.jpg" width={200} height={200} alt="" />
          </div>
        </div>
      </section>
      <section>
        {/* About */}
        <h2>About</h2>
      </section>
      <section>
        {/* Work Experience */}
        <h2>Work Experience</h2>
        {RESUME_DATA.experience.map((val, i) => {
          const year = val.end === null ? `${val.start} - Present` : `${val.start} - ${val.end}`
          return (
            <Info key={i} title={val.company} subtitle={val.title} description={val.description} year={year} />
          )
        })}
      </section>
      <section>
        {/* Education */}
        <h2>Education</h2>
        {RESUME_DATA.education.map((val, i) => {
          const year = val.end === null ? `${val.start} - Present` : `${val.start} - ${val.end}`
          return (
            <Info key={i} title={val.name} subtitle={null} description={val.description} year={year} />
          )
        })}
      </section>
      <section>
        {/* Skills */}
      </section>
      <section>
        {/* Projects */}
        <h2>Projects</h2>

      </section>
    </main>
  )
}
