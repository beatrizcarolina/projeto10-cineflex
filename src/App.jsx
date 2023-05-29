import styled from "styled-components"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import React from "react";
import HomePage from "./pages/HomePage/HomePage"
import SeatsPage from "./pages/SeatsPage/SeatsPage"
import SessionsPage from "./pages/SessionsPage/SessionsPage"
import SuccessPage from "./pages/SuccessPage/SuccessPage"

export default function App() {
    axios.defaults.headers.common["Authorization"] = "UbOEf3VmOg23FasMSQimhnYn";
    const [order, setOrder] = React.useState({});

    return (
        <BrowserRouter>
           <NavContainer>CINEFLEX</NavContainer>
           <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/sessoes/:idMovie" element={<SessionsPage />} />
                <Route path="/assentos/:idSession" element={<SeatsPage setOrder={setOrder} />} />
                <Route path="/successo" element={<SuccessPage order={order} setOrder={setOrder}/>} />
           </Routes>
        </BrowserRouter>
    )
}

const NavContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C3CFD9;
    color: #E8833A;
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    position: fixed;
    top: 0;
    a {
        text-decoration: none;
        color: #E8833A;
    }
`
