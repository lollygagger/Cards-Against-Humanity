import {
    useState,
    useEffect
} from "react";
import {
    Card,
    Row,
    Col,
    CardGroup

} from 'reactstrap';

export default function PlayerDisplay(props){

    const [players, setPlayers] = useState([])

    useEffect(() => {
        fetch('/players', {method: 'GET'})
            .then((response ) => response.json())
            .then((json) => {
                if(json != null) {
                    console.log(json)
                    setPlayers(json[0])
                }else{
                    setPlayers([props.username])
                }
            })
            .catch((error) => console.log(error))

    }, [])




    return(
        <div>

            {players.map((player, index) => {
                return(
                    <div key={index}>
                        <Col>
                        <Card>{player}</Card>
                        </Col>
                    </div>
                )
            })}
        </div>
    )
}