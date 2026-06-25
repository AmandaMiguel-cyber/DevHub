import CardPerfil from "../Componentes/CardPerfil";
import CardProjetos from "../Componentes/CardProjetos";
import PhotoPerfil from "../img/PhotoPerfil.jpg";
import photoProjetoMokado from "../img/photoProjetoMokado2.jpg";
import type {Project } from "../Types/Project"
  
function PortifólioPublico () {
    const projeto: Project []=[{
    
id: "1",
userId:1,
    title:"Projeto 2",
    description: "Este é o meu 2 Projetos",
    technologies:["react"],
    githubUrl: "sim",
    liveUrl: "não",
    imageUrl:photoProjetoMokado,
    completedDate: "24-06-2026",
    status: 'Em progresso',
    createdAt:"23-06-2026"
}]
return (
<div className="bg-gray-900 min-h-screen p-4">
  <CardPerfil user={{
    name:"Amanda Miguel",
    title:"Desenvolvedora Front-End",
    bio:"Mudando de vida pela tecnologia",
    photo:PhotoPerfil,
    github: "http//github.com.br/",
    linkedin: "http//github.com.br/"
  }}
showLinks={true} />
{projeto.map((item)=> <CardProjetos project={item} key={item.id}/>)}
  </div>
  )
}

export default PortifólioPublico;