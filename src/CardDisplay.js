import React from "react";
import {
    Col,
    Row,
    Input,
    Form,
    FormGroup,
    Label,
    Button,
    Container,
    Card,
    CardBody,
    CardTitle,

} from 'reactstrap';

export default class CardDisplay extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            cards: props.cards
        }
    }


    render() {
        return (
            <div>
                {this.state.cards.map((card, index) => {
                    return(
                        <div key={index}>
                            {card}
                        </div>
                    )
                })}
            </div>
        )

    }

}