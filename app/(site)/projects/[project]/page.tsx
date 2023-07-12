import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

import Image from "next/image";

type Props = {


    params: {project: string};
};

export default async function Project( {params}: Props ){

    const slug = params.project;

    const project = await getProject(slug);

    console.log(project.images);
    
    return <div className="max-w-3xl mx-auto py-20">    

            <header className="flex items-center">

                <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-7xl drop-shadow pb-5 font-extrabold">{project.name}</h1>
                {/* <a className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-gray-200 active:border-2" title="View Project" href={project.link} > View Project </a> */}

            </header>

            <div>
                <Image src={project.image} alt={project.image} width={1920} height={1080} className="mt-10 border-2 border-gray-700 rounded-xl"/>
            
                {project.images && (
                    <div className="flex gap-3 justify-center">
                        {project.images.map((image) => (
                        <Image
                            key={project._id}
                            src={image.asset.url}
                            alt={"image"}
                            width={200}
                            height={400}
                            className="mt-10 border-2 border-gray-700 rounded-xl"
                        />
                        ))}
                    </div>
                )}


            </div>

            <div className="text-lg text-gray-700 mt-5 text-center">
                <PortableText value={project.content} />
            </div>



        </div>

   
}