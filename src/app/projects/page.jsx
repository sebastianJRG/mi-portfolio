import ProjectCard from "@/components/ProjectCard"
import portadaComplex from "@/assets/portadaComplex.png"

const ProjectsPage = () => {
    return (
        <div className="max-w-screen-xl mx-auto p-4">
            <h1 className="text-3xl font-semibold text-center mb-4">Proyectos</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* ProjectCard 1 */}
                <div className="col-span-1 md:col-span-2 lg:col-span-1">
                    <ProjectCard
                        title="Complex App"
                        description="Una app para un gimnasio argentino que nos solicitó una página para poder organizar sus datos y publicitarse"
                        github="https://github.com/complexgym/PF-Complex-Gym-JS"
                        image={portadaComplex}
                        link="https://pf-complex-gym-henry.vercel.app"
                        technologies={["javascript", "nodejs", "express", "postgresql", "react"]}
                    />
                </div>
                {/* Agrega más tarjetas de proyectos aquí */}
            </div>
        </div>

    );
}

export default ProjectsPage;

/*
<div className="max-w-screen-xl mx-auto p-4">
            <h1 className="text-3xl font-semibold text-center mb-4">Proyectos</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <ProjectCard
                    title="Complex App"
                    description="Una app para un gimnasio argentino que nos solicito una página para poder organizar sus datos y publicitarse"
                    github="https://github.com/complexgym/PF-Complex-Gym-JS"
                    image={portadaComplex}
                    link="https://pf-complex-gym-henry.vercel.app"
                    technologies={["javascript", "nodejs", "express", "postgresql", "react"]}
                />
            </div>
        </div>
*/