import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Depoimentos } from './pages/Depoimentos';
import { Home } from './pages/Home';
import { Page404 } from './pages/Page404';
import { Contato } from './pages/Contato';
import BasePage from './pages/BasePage';

export function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<BasePage />}>
                        <Route index element={<Home />}></Route>
                        <Route path="/depoimentos" element={<Depoimentos />}></Route>
                        <Route path="/contato" element={<Contato />} />
                        <Route path="*" element={<Page404 />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}