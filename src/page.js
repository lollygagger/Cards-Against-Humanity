import './App.css';
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

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            showModal: true
        }
    }

    // componentDidMount() {
    //     this.setState({showModal: true})
    // }

    handleUserNameSubmit(event){
        console.log("handling")
    }

    render(){
        return(
            <div>
                <Modal isOpen={this.state.showModal}>
                    <ModalHeader>Enter a Username</ModalHeader>

                    <ModalBody>
                        <FormGroup>
                            <Input type={"textarea"}></Input>
                            <Button type={"Submit"} onClick={this.handleUserNameSubmit}>submit</Button>
                        </FormGroup>
                        <Button type={"submit"} onClick={this.setState({showModal: false})}>test</Button>
                    </ModalBody>
                </Modal>


            </div>
        )
    }

}

export default Page