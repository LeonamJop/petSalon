import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { RecordsClient } from "./Pages/RecordsClient";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Login />} />
            <Route path="/" element={<Header />}>
                <Route path="/home" element={<Home />} />
                <Route path="/clients" element={<RecordsClient />} />
            </Route>
        </Routes>
    )
}