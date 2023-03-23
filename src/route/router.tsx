import { Route, Routes } from "react-router-dom";

import { Registro } from "../Pages/Cadastro";
import { Signin } from "../Pages/Sign";

export function Router() {
  return (
    <Routes>
        <Route path='/' element={<Signin />} />
        <Route path='/registro' element={<Registro />} />
    </Routes>
  )
}
