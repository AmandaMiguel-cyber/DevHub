import { Link } from "react-router-dom";

function Footer () {
    return (
        <footer className="bg-gray-900 text-yellow-100 py-6 border-t border-violet-500 text-center">
            <h1 className="text-yellow-100 text-4xl p-2">Vamos nessa?</h1>
            <h2 className="text-slate-500 text-lg py-4">Junte-se a nós e mostre seu trabalho para o mundo </h2>
           <Link className="text-lg text-center text-yellow-50 rounded-md border border-yellow-100 border-separate py-3 px-4" to='/registro'>Criar conta</Link>
            <p className="p-4 text-left">DevHub &copy; 2026 - Projeto final de curso</p>
        </footer>
    );
}

export default Footer;