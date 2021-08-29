import {connect} from "react-redux";
import Board from "./Board";
import 'bootstrap/dist/css/bootstrap.css';
import {Button, Container} from "reactstrap";
import {cardAdd, getCards} from "./redux/action";
import {useEffect} from "react";



function App(props) {

    useEffect(() => {
        props.getCards();
    }, [])

    const addCardButtonHandler = () => {
        const newCard = {
            name: 'Morty Smith',
            status: 'todo',
            priority: 1
        }
        props.addCard(newCard)
    }

    return (
        <Container>

            <h1>Kanban with redux with axios</h1>

            <Button onClick={addCardButtonHandler}>Add new card</Button>

            &nbsp;

            <Board cards={props.cards} columns={props.columns} />

        </Container>
    );
}

const mapStateToProps = (state) => ({
    cards: state.cards,
    columns: state.columns
})

const mapDispatchToProps = (dispatch) => ({
getCards: () => dispatch(getCards()),
    addCard : (card) => dispatch(cardAdd(card))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
