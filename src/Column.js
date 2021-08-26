import {Col} from "reactstrap";
import CardItem from "./CardItem";

function Column(props){

    const {cards, column} = props;

    return(
        <Col>
           <h5>{column.status}</h5>

            {cards.filter(el => el.status === column.status).map(el => <CardItem
                key={el.id}
                card={el} />)}

        </Col>
    )
}


export default Column;

