import CardProjetos from "../Componentes/CardProjetos";

function Projetos(){
  return (
    <div className="bg-gray-900 min-h-screen p-4">
   <div className="grid grid-cols-2 gap-4 p-4">
 <CardProjetos project={{
  id: "meu-projeto",
  userId: 1,
  title: "Meu Projeto",
  description: "Esse é meu projeto DevHub",
  technologies: ["React", "TypeScript"],
  status: "Planejado",
  createdAt: "2026-06-21"
 }} />
</div>
</div>
)
}

export default Projetos;