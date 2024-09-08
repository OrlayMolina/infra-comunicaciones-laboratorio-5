import { Link } from "react-router-dom";

function Header(){
    return(
        <>
            <div className="bg-green-600 sticky top-0 z-50">

                <div className="bg-green-600 w-full">
                    <nav className="flex flex-col md:flex-row justify-between gap-6 px-12">
                        <Link to="/" className="text-3xl  text-white hover:bg-amber-400 hover:text-black px-4 py-2 font-medium">Universidad del Quindío</Link>
                        <Link to="/facultades" className="text-3xl  text-white hover:bg-amber-400 hover:text-black px-4 py-2 font-medium" >Facultades</Link>
                        <Link to="/lista-profesores" className="text-3xl  text-white hover:bg-amber-400 hover:text-black px-4 py-2 font-medium">Profesores</Link>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default Header;