import CardPerfil from "../Componentes/CardPerfil";
import CardProjetos from "../Componentes/CardProjetos";
import PhotoPerfil from "../img/PhotoPerfil.jpg";
import photoProjetoMokado2 from "../img/photoProjetoMokado2.jpg"
import type {Project}  from "../Types/Project";
import { Link } from "react-router-dom";

function Dashboard() {
  const projeto: Project []=[{
    
id: "1",
userId:1,
    title:"Projeto 2",
    description: "Este é o meu 2 Projetos",
    technologies:["react"],
    githubUrl: "sim",
    liveUrl: "não",
    imageUrl:photoProjetoMokado2,
    completedDate: "24-06-2026",
    status: 'Em progresso',
    createdAt:"23-06-2026"
}]
  
  return (
    
    <div className="bg-gray-900 min-h-screen p-4">
   <div className="grid grid-cols-2 gap-4 p-4">
   <CardPerfil user ={{
    name:"Amanda Miguel",
    title:"Desenvolvedora Front-End",
    bio:"Mudando de vida pela tecnologia",
    photo:PhotoPerfil,
   }} />
   {projeto.map((item) => <CardProjetos project ={item} key={item.id}/>)}
  </div>
    <Link to="/projetos/novo" className="bg-violet-400 text-white rounded-lg p-2">Novo projeto</Link>
  </div>
  )
}

export default Dashboard;