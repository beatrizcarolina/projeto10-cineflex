import styled from "styled-components";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Form({selectedSeats, selectedSession, setOrder}) {
    const [name, setName] = React.useState("");
    const [CPF, setCPF] = React.useState("");
    const navigate = useNavigate();

    function buy(event) {
        event.preventDefault();
        const data = {ids: selectedSeats, name: name, cpf: CPF};
        axios  
        .post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", data)
        .then(() => {setOrder({name: name, cpf: CPF, seats: selectedSeats.names, session: selectedSession}); navigate("/success")})
        .catch((error) => console.log(error));

    }

    return (
        <FormContainer>
                <form onSubmit={buy}>
                Nome do Comprador:
                <input 
                    type="text" 
                    placeholder="Digite seu nome..." 
                    required 
                    onChange={(event) => setName(event.target.value)}
                    value={name}
                    
                />

                CPF do Comprador:
                <input 
                    type="text" 
                    minLength="11" 
                    maxLength="11" 
                    pattern="\d{11}" 
                    placeholder="Digite seu CPF..." 
                    required
                    onChange={(event) => setCPF(event.target.value)}
                    value={CPF}
                    
                />

                <button type="submit" >Reservar Assento(s)</button>
            </form>
            </FormContainer>
    )
}

const FormContainer = styled.div`
    width: calc(100vw - 40px); 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0;
    font-size: 18px;
    button {
        align-self: center;
    }
    input {
        width: calc(100vw - 60px);
    }
`