import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Sessions({session}) {

    return (
        <SessionContainer>
            {session.weekday} - {session.date}
            <ButtonsContainer>
                {session.showtimes.map((time, index) => (
                    <Link to={`/assentos/${time.id}`} key={index}>
                        <button>{time.name}</button>
                    </Link>
                ))}
            </ButtonsContainer>
        </SessionContainer>
    )
}

const SessionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: 'Roboto';
    font-size: 20px;
    color: #293845;
    padding: 0 20px;
`

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 0;
    button {
        margin-right: 20px;
    }
    a {
        text-decoration: none;
    }
`