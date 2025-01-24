
// import { getProjects } from "@/sanity/sanity-utils";
// import Image from "next/image";
// import Link from "next/link";

export default async function Home() {
  // const projects = await getProjects();

  return (
    <div>
      <h1 className="text-7xl font-bold">Painted by Sarah</h1>
      <h2>Coming soon!</h2>
      {/* <h1 className="text-7xl font-bold">Hello, I&apos;m <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 bg-clip-text text-transparent">Becky</span></h1>
      <p className="mt-3 text-xl text-gray-600">Hey everyone, check out my projects!</p>
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects</h2>
      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link href={`/projects/${project.slug}`} key={project._id} className="border border-gray-500 rounded-lg p-3">
            {project.image && (
              <Image 
                src={project.image} 
                alt={project.name} 
                height={100}
                width={500}
                className="object-cover rounded-lg border border-gray-500"
              />
            )}
            <div className="font-extrabold bg-gradient-to-r from-cyan-500 to-blue-500  bg-clip-text text-transparent">{project.name}</div>
          </Link>
        ))}
      </div>
       */}
    </div>      
  );
}
