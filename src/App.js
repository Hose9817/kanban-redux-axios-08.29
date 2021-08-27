import {connect} from "react-redux";
import Board from "./Board";
import 'bootstrap/dist/css/bootstrap.css';
import {Button, Container} from "reactstrap";
import {useEffect} from "react";
import {addCard, getCards} from "./redux/action";



function App(props) {

    useEffect(() => {
        props.getCards()
    })

    const addCardButtonHandler = () => {
        const newCard = {
            name: 'Summer Smith',
            status: 'progress',
            priority: 10
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
    addCard: (card) => dispatch(addCard(card)),
    getCards: () => dispatch(getCards())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
