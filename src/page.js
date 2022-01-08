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
    Modal,
    ModalHeader,
    ModalFooter,
    ModalBody
} from 'reactstrap';

const STARTING_CARD_AMOUNT = 7;

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            showModal: true,
            blackCard: "",
            cards: []
        }

        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handleUserNameSubmit = this.handleUserNameSubmit.bind(this);
        this.handleCardDraw = this.handleCardDraw.bind(this);
        this.addDrawCardsToState = this.addDrawCardsToState.bind(this);

    }

    componentDidMount() {
        for(let i = 0; i < STARTING_CARD_AMOUNT; i++){
            this.handleCardDraw();
        }

    }

    handleUserNameSubmit(event){
        fetch('/login', {method: 'POST', body: JSON.stringify({
                username: this.state.username
            }),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }})
        this.setState({showModal: false})
    }
    handleUserNameChange(event){
        this.setState({username: event.target.value})
    }

    handleCardDraw(){
        fetch('/whitecard', {method: 'GET'})
            .then((response) => {return response.json()})
            .then(jsonOutput => //jsonOutput now has result of the data extraction
                  {
                      this.addDrawCardsToState(jsonOutput[0])
                    }
              )

    }

    addDrawCardsToState(newCard){
        let tempCards = this.state.cards;
        tempCards.push(newCard);
        this.setState({cards: tempCards});
    }

    render(){
        return(
            <div>
                <Modal isOpen={this.state.showModal}>
                    <ModalHeader>Enter a Username</ModalHeader>

                    <ModalBody>
                        <FormGroup onSubmit={this.handleUserNameSubmit}>
                            <Input type={"text"} value={this.state.username} onChange={this.handleUserNameChange}/>
                            <Input type={"Submit"} onClick={this.handleUserNameSubmit} />
                        </FormGroup>
                    </ModalBody>
                </Modal>

                {this.state.cards}

            </div>
        )
    }
}

export default Page