import {
    useState
} from "react";
import {
    Card,
    Row,
    Col,
    CardDeck,
    Button

} from 'reactstrap';

export default function CardDisplay(props){
    const [selectedCard, setSelectedCard] = useState('')

    const handleSubmitTurn = () => {
        fetch('/players', {method: 'PUT', body: JSON.stringify({
                username: props.username,
                playcard: selectedCard
            }),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }})
    }

        return (
            <div>
                <Row md="4">
                    <CardDeck>
                    {props.cards.map((card, index) => {
                        return(
                            <div key={index}>
                                <Col>
                                <Card onClick={() => setSelectedCard(card)} style={{ cursor: "pointer" }}>{card}</Card>
                                </Col>
                            </div>
                        )
                    })}
                    </CardDeck>

                <Col>
                    <span> Selected Card: {selectedCard}</span>
                </Col>
                <Col>
                    <Button onClick={handleSubmitTurn}>Submit Turn</Button>
                </Col>
                </Row>
            </div>
        )
}
