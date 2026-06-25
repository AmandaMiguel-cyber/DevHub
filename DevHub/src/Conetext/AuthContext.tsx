import { createContext,useState,useContext} from "react";
import type { ReactNode } from "react";
import type { User } from "../Types/user";

interface AuthContextType {
    user: User| null,
    isAuthenticade : boolean,
    erro: string,
    login: (email:string, password: string)=> void
    logout: () => void
    register: (name: string, email: string, password:string) => void
}
const AuthContext = createContext<AuthContextType | null>(null)
 
export function AuthProvider ({ children }:{ children:ReactNode }) {
    const [user,setUser] = useState<User| null>(null)
    const [erro,setErro] = useState("")
    const [isAuthenticade,setIsAuthenticade] = useState (false)
 
function login (email:string, password:string){
const usuarios = JSON.parse(localStorage.getItem("users")|| "[]")
const usuariosEncontrados = usuarios.find((u: User) => u.email === email && u.password === password)
if (usuariosEncontrados) {
    setUser(usuariosEncontrados) 
    setIsAuthenticade(true)
}else 
    setErro("Email, ou senha incorrertos")
 }
function logout (){
setUser(null)
setIsAuthenticade(false)
}
function register (name:string, email:string, password:string){
const usuarios = JSON.parse(localStorage.getItem("users")|| "[]")
const novoUsuario: User ={
    id: Date.now(),
    name: name,
    email: email,
    password: password,
    createdAt: new Date ().toISOString()
}
usuarios.push(novoUsuario)
localStorage.setItem("users", JSON.stringify(usuarios))
}
 return(
    <AuthContext.Provider value={{user, isAuthenticade, login, logout, register, erro}}>
        { children }
    </AuthContext.Provider>


 )}

 export function useAuth(){
    return useContext(AuthContext)
 


}