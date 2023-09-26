import Image from "next/image";
/**
 * 
 * @param {{title: string, description: string, image: string, technologies: [string], link: string, github: string}} param0 
 * @returns 
 */
const ProjectCard = ({ title, description, image, technologies, link, github }) => {
    return (
        <div className="max-w-md mx-auto p-4 border rounded-lg shadow-md">
            <div className="text-center">
                <Image
                    src={image}
                    alt={title}
                    className="rounded-lg mb-2"
                />
                <h1 className="text-lg font-semibold">{title}</h1>
                <p className="text-sm mt-2">{description}</p>
                <div className="flex flex-wrap items-center mt-2">
                    {technologies.map((tech, index) => (
                        <div
                            key={index}
                            className="bg-blue-200 text-blue-800 px-2 py-1 rounded-md text-xs mr-2 mb-2"
                        >
                            {tech}
                        </div>
                    ))}
                </div>
                <div className="mt-2">
                    <a href={link} className="bg-blue-500 text-white px-3 py-1 rounded-md mr-2 hover:bg-blue-600 text-sm">
                        Deploy
                    </a>
                    <a href={github} className="text-blue-500 hover:underline text-sm">
                        Repositorio Github
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
