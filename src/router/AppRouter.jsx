import { useState } from "react";

import {
    Routes,
    Route,
    BrowserRouter,
    Navigate,
} from "react-router-dom";

import { HomeScreen } from "../application/HomeScreen";
import { LoadingPage } from "../application/loading/LoadingPage";


export const AppRouter = () => {

    const [loading, setLoading] = useState(true)

    setTimeout(() => {

        setLoading(false);
    }, 500);

    if (loading) return <LoadingPage />

    return (

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<HomeScreen />} />

                <Route path="/*" element={<Navigate to="/" />} />

            </Routes>

        </BrowserRouter>
    );
};