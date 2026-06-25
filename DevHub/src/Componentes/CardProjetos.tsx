
import type { Project } from '../Types/Project';
import { Heart, MessageCircle } from 'lucide-react';

function CardProjetos({ project }: { project: Project }) {    
const statusColor ={
  'Concluído': 'bg-green-600',
  'Em progresso': 'bg-yellow-600',
  'Planejado': 'bg-blue-600'
}

  return (
      <div className="bg-gray-800 rounded-lg shadow-md p-4">
        <h3 className="text-lg font-bold text-white">{project.title}</h3>
      <p className="text-gray-400">{project.description}</p>
      {project.imageUrl && <img src={project.imageUrl} alt={project.title} className="rounded-lg h-48 object-cover w-full" />}
      <div className="flex gap-2 mt-4">
      {project.technologies.map((tech) => (
        <span key={tech} className="bg-violet-600 text-white rounded-full px-2 py-1 text-sm mr-2 flex items-center"> 
          {tech}
        </span>
      ))}
      </div>
       <span className={`${statusColor[project.status]} text-white rounded-full text-center p-1 text-sm block mt-4`}> 
          {project.status}
        </span>
        {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Ver no GitHub</a>}
        <div className="flex gap-6"> <MessageCircle size={18} className="text-yellow-200"/> <Heart size={19} className="text-red-600" />
        </div>
        </div>
    )
}


export default CardProjetos;