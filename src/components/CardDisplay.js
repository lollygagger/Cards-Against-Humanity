import React from "react";
import {
    useState,
    Card,
    Row,
    Col,
    CardGroup

} from 'reactstrap';

export default function CardDisplay(props){


        return (
            <div>
                <Row md="4">

                    {props.cards.map((card, index) => {
                        return(
                            <div key={index}>
                                <Col>
                                <Card style={{ cursor: "pointer" }}>{card}</Card>
                                </Col>
                            </div>
                        )
                    })}

                </Row>
            </div>
        )
}
