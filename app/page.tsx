import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section>
        {/* Intro */}
        <div className="flex">
          <div>
            <h1>Andrew Liu</h1>
            <div>
              Front End Engineer with product management experience, focused on A/B testing and data-driven decision making.
            </div>
          </div>
          <div>
            <Image src="/profile.jpg" width={200} height={200} />
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
      </section>
      <section>
        {/* Education */}
      </section>
      <section>
        {/* Skills */}
      </section>
      <section>
        {/* Projects */}
      </section>
    </main>
  )
}
