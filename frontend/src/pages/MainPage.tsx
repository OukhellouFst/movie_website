import React from "react";
import Header from "../components/header/Header";
import MainMovie from "../components/movie/Movie";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const MainPage : React.FC = () => {
    return (
        <>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<h1>Home Page</h1>} />
                    <Route path="/about" element={<h1>About Page</h1>} />
                </Routes>
            </Router>
            <main>
                <MainMovie/>
            </main>
        </>
    )
}


export default MainPage;