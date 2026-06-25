import FormInput from "../Componentes/FormInput";
import Button from "../Componentes/Button";
import { useAuth } from "../Conetext/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const auth = useAuth()
  const navigate = useNavigate()

  function handleLoagin(e: React.FormEvent) {
    e.preventDefault()
    auth?.login(email, senha)
    navigate("/dashboard")
  }
  return (
    <div className="flex justify-center w-screen h-screen bg-gray-900 p-6">
      <div className="w-[400px] h-[400px] justify-center items-center flex-initial bg-gray-800 rounded-lg p-3">
        <form onSubmit={handleLoagin} className="inline-flex flex-col gap-4 w-full">
          <h1 className="text-violet-100 text-center text-4xl" > Login </h1>
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
          <Button>Entrar</Button>
        </form>
      </div>
    </div>
  );
}

export default Login;