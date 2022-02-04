import {
    React,
    useState,
    useEffect
} from "react";
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
import CardDisplay from './CardDisplay';

const STARTING_CARD_AMOUNT = 7;

function drawWhiteCard(){
    fetch('/whitecard', {method: 'GET'})
            .then((response) => {return response.json()})
            .then(jsonOutput => //jsonOutput now has result of the data extraction
                  {
                      return(jsonOutput[0])
                    }
              )
}

function usernamePostCall(username){
    fetch('/login', {method: 'POST', body: JSON.stringify({
                username: username
            }),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }})
}

function Page(props) {

    const[username, setUsername] = useState();
    const[showModal, setModal] = useState(true);
    const[blackCard, setBlackCard] = useState();
    const[cards, setCards] = useState();

    useEffect(() => {
        for(let i = 0; i < STARTING_CARD_AMOUNT; i++){
            drawWhiteCard();
        }
    }, [])


    return(
        <div>
            <Modal isOpen={showModal}>
                <ModalHeader>Enter a Username</ModalHeader>

                <ModalBody>
                    <FormGroup onSubmit={() => { setModal(false); usernamePostCall(username);}}>
                        <Input type={"text"} value={this.state.username} onChange={(event) => setUsername(event.target.value)}/>
                        <Input type={"Submit"} onClick={() => { setModal(false); usernamePostCall(username);}} />
                    </FormGroup>
                </ModalBody>
            </Modal>

            <CardDisplay cards={cards}>test</CardDisplay>

        </div>
    )

}

export default Page