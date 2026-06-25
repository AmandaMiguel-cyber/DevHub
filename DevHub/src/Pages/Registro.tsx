import Button from "../Componentes/Button";
import { useAuth } from "../Conetext/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../Componentes/FormInput";

function Registro() {
    const [nome, setName] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [confirmarSenha, setconfirmarSenha] = useState("")
    const [erro, setErro] = useState(""

    )
    const auth = useAuth()
    const Navigate = useNavigate()

    function handleRegister(e: React.FormEvent) {
        e.preventDefault()
        if (senha !== confirmarSenha) {
            setErro("As senhas não coincidem")
            return
        }
        auth?.register(nome, email, senha,)
        Navigate("/login")
    }
    return (
        <div className="flex justify-center w-screen h-screen bg-gray-900 p-6">
            <div className="w-[500px] justify-center items-center flex-initial bg-gray-800 rounded-lg p-3">
                <h1 className="text-violet-100 text-center text-4xl" > Registro </h1>
                <form onSubmit={handleRegister} className="inline-flex flex-col gap-4 w-full">
                    <label className="text-violet-100"> Nome Completo: </label>
                    <FormInput type="text"
                        placeholder="Digite seu nome completo"
                        value={nome}
                        onChange={(e) => setName(e.target.value)} />
                    <label className="text-violet-100"> Email: </label>
                    <FormInput type="email"
                        placeholder="Digite seu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <label className="text-violet-100"> Senha: </label>
                    <FormInput type="password"
                        placeholder="Digite sua senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)} />
                    <label className="text-violet-100"> Confirmar Senha: </label>
                    <FormInput type="password"
                        placeholder="Confirme sua senha"
                        value={confirmarSenha}
                        onChange={(e) => setconfirmarSenha(e.target.value)} />
                    {erro && <p className="text-red-500">{erro}</p>}
                    <Button>Registrar</Button>
                </form>
            </div>
        </div>
    )
}

export default Registro;