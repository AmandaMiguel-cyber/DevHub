 import FormInput from "../Componentes/FormInput";

function EditarPerfil (){
       return (
        <div className="flex justify-around w-screen h-screen bg-gray-900 p-6">
   <div className= "w-[500px] h-[700px] justify-center items-center flex-initial bg-gray-800 rounded-lg p-3">
            <h1 className="text-violet-100 text-center text-4xl" > Editar Perfil </h1>
            <form className="inline-flex flex-col gap-3 w-full">
            <label className="text-violet-100">Foto</label>
            <FormInput type="url" placeholder=" Sua Foto"/>
            <label className="text-violet-100">Nome</label>
            <FormInput type="text" placeholder="Nome completo"/>
            <label className="text-violet-100"> Bio </label>
            <FormInput type="text" placeholder="Bio" />
            <label className="text-violet-100">Título profissional </label>
            <FormInput type="text" placeholder="área de atuação" />
            <label className="text-violet-100"> GitHub </label>
            <FormInput type="url" placeholder="Link GitHub" />
            <label className="text-violet-100">LiveUrl </label>
            <FormInput type="url" placeholder="Link LiveURL" />
            <label className="text-violet-100"> E-mail </label>
            <input
            type="email"
            value="email@exemplo.com"
            readOnly
            className="bg-gray-600 text-gray-400 border border-violet-500 text-lg cursor-not-allowed p-2 rounded"/>
            <div className="flex gap-7">
            <button className="bg-violet-400 text-purple-50 rounded-lg px-4 py-1 min-w-56 hover:bg-violet-900 hover:text-violet-100 transition-colors duration-200" type="submit">Confirmar</button>
            <button className="bg-violet-400 text-purple-50 rounded-lg px-4 py-1 min-w-56 hover:bg-violet-900 hover:text-violet-100 transition-colors duration-200" type="button">Cancelar</button>
            </div>
            </form>
             </div>
        </div>
    
    )
}           
export default EditarPerfil;
 