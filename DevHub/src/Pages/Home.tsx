import { Heart, SquareCodeIcon, Users} from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
return  (
    <div className="bg-gray-900 min-h-screen p-4 flex flex-col items-center">
        <h2 className="flex-initial px-10 py-2 text-violet-900 border text-center text-lg border-violet-600 rounded-full bg-violet-400">Plataforma para devs</h2>
        <h1 className="flex py-10 text-6xl text-violet-200 text-center"> Local Dev, Seu lugar de integração</h1>
        <p className="text-white mt-10 text-lg text-center justify-center">Espaço destinado a comunidade de devs. Crie e compartilhe seu portifólio de projetos. Mostre suas habilidades e mantenha-se conectado a outros desenvolcedores.</p>   
        <div className="flex gap-4 mt-8 items-center ">
            <Link className='text-lg text-yellow-50 m-3 rounded-md border border-yellow-100 border-separate p-2' to='/registro'>Criar portifólio</Link>
            <Link className='text-lg text-yellow-50 m-3 rounded-md border border-yellow-100 border-separate p-2' to='/projetos'>Explorar portifólio</Link>
        </div>
        <div className="grid grid-cols-3 mt-16 gap-4 p-1">
        <div className="flex flex-col gap-2 border rounded-md text-violet-200 items-center bg-fuchsia-50 bg-opacity-10 p-6">
            <SquareCodeIcon color="green" size={40}/>
            <h1>Potifólio completo</h1>
            <p className="text-pretty p-2 gap-2">Adicione projetos, tecnologias e links para GitHub e deploy</p></div>
        <div className="flex flex-col border rounded-md gap-2 text-violet-200 items-center bg-fuchsia-50 bg-opacity-10 p-6">
            <Users color="blue"size={40}/>
            <h1>Comunidade Dev</h1>
            <p className="text-pretty p-2 gap-2">Explore portfólios e encontre expiração.</p>
        </div>
         <div className="flex flex-col gap-2 border rounded-md text-violet-200 items-center bg-fuchsia-50 bg-opacity-10 p-6">
            <Heart color="violet" size={40}/>
            <h2>Favoritos</h2>
            <p className="text-pretty p-2 gap-2">Favorite e salve os projetos que mais gostou.</p>
            
        </div>
    </div>
    </div>
) 
}









export default Home;