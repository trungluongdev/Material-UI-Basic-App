import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./page/Layout";
import Home from "./page/Home";
import JobDetail from "./page/JobDetail";

import RequireAuth from "./auth/RequireAuth";
import Login from "./page/Login";
import LoginModal from "./components/LoginModal";
import JobDetailModal from "./components/JobDetailModal";
import { useContext } from "react";
import AuthContext from "./auth/AuthContext";

function App() {
    const location = useLocation();
    const auth = useContext(AuthContext);
    const state = location.state;

    return (
        <>
            <Routes
                location={
                    location.state?.backgroundLocation
                        ? location.state.backgroundLocation
                        : location
                }
            >
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    {/* <Route path="job/:id" element={<JobDetail />} /> */}
                    <Route path="login" element={<Login />} />
                </Route>
                <Route
                    path="*"
                    element={
                        <main>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Routes>
            {state && auth.user ? (
                <Routes>
                    <Route path="/job/:id" element={<JobDetailModal />}></Route>
                </Routes>
            ) : (
                <Routes>
                    <Route path="/job/:id" element={<LoginModal />}></Route>
                </Routes>
            )}
        </>
    );
}

export default App;
