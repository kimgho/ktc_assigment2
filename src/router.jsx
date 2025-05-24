import { BrowserRouter, Route, Routes } from "react-router-dom"
import DexPage from "./pages/DexPage";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/dex' element={<DexPage />} />
                <Route path='/pokemon-detail' element={<DetailPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;