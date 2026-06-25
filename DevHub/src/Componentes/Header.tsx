import {Link} from 'react-router-dom';

function Header() {
    return (
        <header className="bg-gray-900 flex p-4 border-b border-violet-800">
            <Link className='text-2xl text-violet-700 font-bold tracking-tight ' to="/"> DevHub </Link>
            <nav className='flex ml-auto'>
                <Link className='text-lg text-yellow-50 m-3 rounded-md border border-yellow-100 border-separate p-2' to="/login">Login</Link>
                <Link className='text-lg text-yellow-50 m-3 rounded-md border border-yellow-100 border-separate p-2' to="/registro">Registro</Link>
                <Link className='text-lg text-yellow-50 m-3 rounded-md border border-yellow-100 border-separate p-2' to="/projetos">Projetos</Link>
            </nav>
        </header>
       
       
    );
}

export default Header;