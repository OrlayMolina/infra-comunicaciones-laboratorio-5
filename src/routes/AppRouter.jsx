import { Navigate, Route, Routes } from "react-router-dom";
import FormularioProfesores from "../components/pages/FormularioProfesores";
import Facultades from "../components/pages/Facultades";
import Home from "../components/pages/Home";

const NotFound = () => <h1>404: Not Found</h1>

function AppRouter(){

    return (
        <>
            <Routes>
                {/* Ruta default */}
                <Route path={"/"} element={<Home/>}/>
                {/* Comodin rutas no validas */}
                <Route path={"*"} element={<Navigate to={"/404"}/>}/>

                {/* Rutas disponibles */}
                <Route path="404" element={<NotFound />} />
                <Route path="home" element={<Home />} />
                <Route path="/facultades" element={<Facultades />} />
                <Route path="/lista-profesores" element={<FormularioProfesores />} />
            </Routes>
        </>
    );

}

export default AppRouter;