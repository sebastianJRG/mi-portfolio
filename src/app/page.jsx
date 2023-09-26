import SkillCard from "@/components/SkillCard"
import jsLogo from "@/assets/logos/jsLogo.png"
import reactLogo from "@/assets/logos/reactLogo.png"
import expressLogo from "@/assets/logos/expressLogo.png"
import nextLogo from "@/assets/logos/nextLogo.svg"
import postgresqlLogo from "@/assets/logos/postgresqlLogo.png"

export default function Home() {
  return (
    <main className="max-w-screen-xl mx-auto p-4">
  <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center">Sebastián Rodrigo</h1>
  <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-center mt-2">Desarrollador web Full Stack</h2>

  <section className="mt-6">
    <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-center">Skills</h1>
    <ul className="flex flex-wrap justify-center">
      <li className="mb-2 w-full md:w-auto">
        <SkillCard title="JavaScript" img={jsLogo} />
      </li>
      <li className="mb-2 w-full md:w-auto">
        <SkillCard title="Express JS" img={expressLogo} />
      </li>
      <li className="mb-2 w-full md:w-auto">
        <SkillCard title="React JS" img={reactLogo} />
      </li>
      <li className="mb-2 w-full md:w-auto">
        <SkillCard title="Next JS" img={nextLogo} />
      </li>
      <li className="mb-2 w-full md:w-auto">
        <SkillCard title="PostgreSQL" img={postgresqlLogo} />
      </li>
    </ul>
  </section>
</main>

  )
}
