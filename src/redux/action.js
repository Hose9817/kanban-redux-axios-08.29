import axios from "axios";

export function getCards() {
    return (dispatch) => {
        axios.get('https://nazarov-kanban-server.herokuapp.com/card/')
            .then(res => {
                dispatch({
                    type: 'GET_CARDS',
                    payload: res.data
                })
            })
            .catch()
        axios.get('https://nazarov-kanban-server.herokuapp.com/column/')
            .then(res => {
                dispatch({
                    type: 'GET_COLUMNS',
                    payload: res.data
                })
            })
            .catch(err => console.log('err', err))
    }
}

export function cardAdd(newCard){
    return (dispatch) => {
       axios.post('https://nazarov-kanban-server.herokuapp.com/card/', newCard)
           .then(res => {
               dispatch(getCards())
           })
        .catch(err => console.log('err', err))
    }

}

export function deleteCard(cardId) {
    return (dispatch) => {
        axios.delete('https://nazarov-kanban-server.herokuapp.com/card/' + cardId)
            .then(res => {
               dispatch(getCards())
            })
            .catch(error => error)
    }
}

export function moveRightCard(card, columns) {
    const colStatuses = columns.map(el => el.status);
    const status = colStatuses[colStatuses.indexOf(card.status) + 1];
    return (dispatch) => {
        axios.patch('https://nazarov-kanban-server.herokuapp.com/card/' + card._id, {status})
            .then(res => {
               dispatch(getCards())
            })
            .catch()
    }
}

export function moveLeftCard(card, columns) {
    const colStatuses = columns.map(el => el.status);
    const status = colStatuses[colStatuses.indexOf(card.status) - 1];
    return (dispatch) => {
        axios.patch('https://nazarov-kanban-server.herokuapp.com/card/' + card._id, {status})
            .then(res => {
               dispatch(getCards())
            })
            .catch()
    }
}