import FormInput from "../Componentes/FormInput";

function NovoProjeto (){
       return (
        <div className="flex justify-around w-screen h-screen bg-gray-900 p-6">
   <div className= "w-[500px] h-[700px] justify-center items-center flex-initial bg-gray-800 rounded-lg p-3">
            <h1 className="text-violet-100 text-center text-4xl" > Novo Projeto </h1>
            <form className="inline-flex flex-col gap-4 w-full">
            <label className="text-violet-100">Título</label>
            <FormInput type="text" placeholder="Título do Projeto"/>
            <label className="text-violet-100"> Descrição </label>
            <FormInput type="text" placeholder="Descrição do projeto" />
            <label className="text-violet-100">Tecnologia usada </label>
            <FormInput type="text" placeholder="Tech" />
            <label className="text-violet-100"> GitHub </label>
            <FormInput type="url" placeholder="Link GitHub" />
            <label className="text-violet-100">LiveUrl </label>
            <FormInput type="url" placeholder="Link LiveURL" />
            <label className="text-violet-100"> Status </label>
            <select className="bg-gray-700 text-white rounded-lg p-2 w-full">
                <option value="" disabled selected> Selecione o Status</option>
                <option value="Planejado">Planejado</option>
                <option value="Em progresso">Em progresso</option>
                <option value="Concluído">Concluido</option>
            </select>
            <label className="text-violet-100"> Data de Criação </label>
            <FormInput type="date" placeholder="Data de postagem" />
            <button className=" bg-violet-400 text-purple-50 rounded-lg p-1 hover:bg-violet-900 hover:text-violet-100 transition-colors duration-200" type="submit">Novo Projeto</button>
            </form>
            </div>
        </div>
    )
}

export default NovoProjeto;