import {
    useState
} from "react";
import {
    Card,
    Row,
    Col,
    CardGroup

} from 'reactstrap';

export default function CardDisplay(props){
    const [selectedCard, setSelectedCard] = useState('')

        return (
            <div>
                <Row md="4">
                    {props.cards.map((card, index) => {
                        return(
                            <div key={index}>
                                <Col>
                                <Card onClick={() => setSelectedCard(card)} style={{ cursor: "pointer" }}>{card}</Card>
                                </Col>
                            </div>
                        )
                    })}

                </Row>
            </div>
        )
}
