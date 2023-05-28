import styled from "styled-components"
import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Seats from "../../components/Seats";
import Caption from "../../components/Caption";
import Footer from "../../components/Footer";
import Form from "../../components/Form";

export default function SeatsPage({setOrder}) {
    const { idSession } = useParams();
    const [session, setSession] = React.useState({seats: []});
    const [selectedSeats, setSelectedSeats] = React.useState({names: [], ids: []});

    React.useEffect(() => {
		axios
            .get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSession}/seats`)
            .then(response => {setSession(response.data); console.log(response.data)})
            .catch((error) => console.log(error));
	}, []);

    function selectSeats(seat) {
        console.log("selectSeats");
        console.log(seat);
        const indexToRemove = selectedSeats.ids.indexOf(seat.id);
        if (indexToRemove !== -1) {
            const backupSelectedSeats = selectedSeats;
            backupSelectedSeats.names.splice(indexToRemove, 1);
            backupSelectedSeats.ids.splice(indexToRemove, 1);
            setSelectedSeats(backupSelectedSeats);
        } else {
            setSelectedSeats({
                names: [...selectedSeats.names, seat.name],
                ids: [...selectedSeats.ids, seat.id],
            });
        }
        console.log(selectedSeats);
    }

    return (
        <PageContainer>
            Selecione o(s) assento(s)

            <SeatsContainer>
                {session.seats.map((seat, index) => (
                        <Seats seat={seat} handleClick={selectSeats} key={index}></Seats>
                    ))}
            </SeatsContainer>

            <Caption></Caption>

            <Form 
                selectedSeats={selectedSeats} 
                selectedSession={session}
                setOrder={setOrder}></Form>

            <Footer movie={session.movie} session={{time: session.name, day: session.day}}></Footer>

        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
`
const SeatsContainer = styled.div`
    width: 330px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`