import {Button, Card, CardBody, CardFooter, CardSubtitle, CardTitle} from "reactstrap";
import {connect} from "react-redux";
import {deleteCard, moveLeftCard, moveRightCard} from "./redux/action";

function CardItem(props) {

    const {card} = props;
    const {_id, name, status} = card;

    const deleteButtonHandler = () => {
        props.deleteCard(_id)
    }

    return (
        <Card>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardSubtitle>{status}</CardSubtitle>
            </CardBody>
            <CardFooter>
                <Button onClick={() => props.moveLeft(card, props.columns)}>Left</Button>
                &nbsp;
                <Button onClick={deleteButtonHandler}>Delete</Button>
                &nbsp;
                <Button onClick={() => props.moveRight(card, props.columns)}>Right</Button>
            </CardFooter>

        </Card>
    )
}

const mapStateToProps = (state) => ({
    cards: state.cards,
    columns: state.columns
})

const mapDispatchToProps = (dispatch) => ({
    addCard: () => dispatch({type: 'ADD_CARD'}),
    deleteCard: (cardId) => dispatch(deleteCard(cardId)),
    moveRight: (card, columns) => dispatch(moveRightCard(card, columns)),
    moveLeft: (card, columns) => dispatch(moveLeftCard(card, columns))
})


export default connect(mapStateToProps, mapDispatchToProps)(CardItem);