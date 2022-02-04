import {
    useState,
    useEffect, createContext
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
    ModalBody, Card
} from 'reactstrap';
import CardDisplay from './CardDisplay';
import GameDisplay from "./GameDisplay";
import PlayerDisplay from "./PlayerDisplay";

const STARTING_CARD_AMOUNT = 7;

function usernamePostCall(username){
    fetch('/login', {method: 'POST', body: JSON.stringify({
                username: username
            }),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }})
}


function Page(props) {

    const[username, setUsername] = useState("");
    const[showModal, setModal] = useState(true);
    const[blackCard, setBlackCard] = useState("");
    const[cards, setCards] = useState([]);

    useEffect(() => {

        fetch('/startercards', {method: 'GET'})
            .then((response) => response.json())
            .then((json) => {
                setCards(json)
            })
            .catch((error) => console.log(error))

    }, [])


    return(
        <div>
            <Modal isOpen={showModal}>
                <ModalHeader>Enter a Username</ModalHeader>

                <ModalBody>
                    <FormGroup onSubmit={() => { setModal(false); usernamePostCall(username);}}>
                        <Input type={"text"} value={username} onChange={(event) => setUsername(event.target.value)}/>
                        <Input type={"Submit"} onClick={() => { setModal(false); usernamePostCall(username);}} />
                    </FormGroup>
                </ModalBody>
            </Modal>

            <Col><PlayerDisplay username={username}/></Col>
            <Col><GameDisplay/></Col>
            <Col><CardDisplay cards={cards} username={username}/></Col>

        </div>
    )

}

export default Page