import type { UserCardPerfil } from "../Types/UserCardPerfil";
function CardPerfil({ user, showLinks }: { user: UserCardPerfil,showLinks?:boolean }) {
    return (
        <div className="bg-gray-900 rounded-lg shadow-md p-4">
            <img src={user.photo} alt="Foto de Perfil" className="w-32 h-32 rounded-full mx-auto" />
            <h3 className="text-lg font-bold text-white">{user.name}</h3>
            <p className="text-gray-400">{user.title}</p>
            <p className="text-gray-400">{user.bio}</p>
           {showLinks && (
            <div className="flex gap-2 mt-4">
                <a href={user.github} target="_blank" className="text-violet-400"></a>
                <a href={user.linkedin} target="_blank" className="text-violet-400"></a>
                </div>  
            )} 

            </div>     
    )
}

export default CardPerfil;