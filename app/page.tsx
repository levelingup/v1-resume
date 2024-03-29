import Info from "@/components/Info";
import Image from "next/image";
import { RESUME_DATA } from "@/data/resume-data";
import { Badge } from "@/components/ui/badge";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail } from 'lucide-react';

export default function Home() {
  return (
    <main className="container max-w-[800px] grid gap-y-8 p-4 md:p-16">
      <section>
        {/* Intro */}
        <div className="flex items-center gap-x-6">
          <div>
            <h1 className="text-2xl">{RESUME_DATA.name}</h1>
            <div className="font-mono text-sm text-muted-foreground">{RESUME_DATA.description}</div>
            <div className="mt-2 flex gap-2">
              <Button
                variant="outline"
                size="icon"
                className="text-muted-foreground"
              >
                <Link href={`mailto:${RESUME_DATA.contact.email}`}>
                  <Mail className="w-5 h-5" />
                </Link>
              </Button>
              {RESUME_DATA.contact.social.map((val, i) => {
                return (
                  <Button
                    key={i}
                    variant="outline"
                    size="icon"
                    className="text-muted-foreground"
                  >
                    <Link href={val.link}>
                      <val.icon className="w-5 h-5" />
                    </Link>
                  </Button>
                )
              })}
            </div>
          </div>
          <div className="h-28 w-28 shrink-0 rounded-xl overflow-auto">
            <Image src="/frontend-engineer.jpeg" width={200} height={200} alt="" />
          </div>
        </div>
      </section>
      <section>
        {/* About */}
        <h2>About</h2>
        <div className="font-mono text-sm text-muted-foreground">{RESUME_DATA.about}</div>
      </section>
      <section>
        {/* Work Experience */}
        <h2 className="mb-4">Work Experience</h2>
        <div className="grid gap-y-4">
          {RESUME_DATA.experience.map((val, i) => {
            const year = val.end === null ? `${val.start} - Present` : `${val.start} - ${val.end}`
            return (
              <Info
                key={i}
                url={val.url}
                title={val.company}
                subtitle={val.title}
                description={val.description}
                year={year} />
            )
          })}
        </div>
      </section>
      <section>
        {/* Education */}
        <h2>Education</h2>
        {RESUME_DATA.education.map((val, i) => {
          return (
            <Info
              key={i}
              url={null}
              title={val.name}
              subtitle={null}
              description={val.description}
              year={val.end} />
          )
        })}
      </section>
      <section>
        {/* Skills */}
        <h2>Skills</h2>
        <div className="flex gap-2 flex-wrap">
          {RESUME_DATA.skills.map((val, i) => {
            return (
              <Badge key={i}>{val.name}</Badge>
            )
          })}
        </div>
      </section>
      <section>
        {/* Projects */}
        <h2>Projects</h2>
        <div className="grid gap-3 md:grid-cols-2 md:gap-4">
          {RESUME_DATA.projects.map((val, i) => {
            return (
              <ProjectCard
                key={i}
                url={val.url}
                title={val.name}
                description={val.description}
                skills={val.skills}
              />
            )
          })}
        </div>
      </section>
    </main>
  )
}
