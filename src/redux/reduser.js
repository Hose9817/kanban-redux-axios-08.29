import {v4 as uuid} from 'uuid';

const initialState = {
    cards: [
        {
            _id: uuid(),
            name: 'Alice',
            status: 'todo'
        },
        {
            _id: uuid(),
            name: 'Mary',
            status: 'progress'
        },
        {
            _id: uuid(),
            name: 'Steve',
            status: 'review'
        },
        {
            _id: uuid(),
            name: 'David',
            status: 'done'
        },
    ],
    columns: [
        {
            _id: uuid(),
            status: 'todo'
        }, {
            _id: uuid(),
            status: 'progress'
        }, {
            _id: uuid(),
            status: 'review'
        }, {
            _id: uuid(),
            status: 'done'
        },
    ]
};

const kanban = (state = initialState, action) => {
    switch (action.type) {

        case 'GET_CARDS':
            return {
                ...state,
                cards: action.payload
            }

        case 'DELETE_CARD':
            const newCards = state.cards.filter(el => el.id !== action.payload)
            return {
                ...state,
                cards: newCards
            }

        case 'ADD_CARD':
            return {
                ...state,
                cards: [...state.cards, {
                    id: uuid(),
                    name: 'Name',
                    status: 'todo'
                }]
            }

        case 'MOVE_CARD':
            const statusesList = state.columns.map(el => el.status)
            const newList = state.cards.map(el => {
                if (el.id === action.payload.cardId) {
                    if (action.payload.direction === 'right') return {
                        ...el,
                        status: statusesList[statusesList.indexOf(el.status) + 1]
                    }
                    if (action.payload.direction === 'left') return {
                        ...el,
                        status: statusesList[statusesList.indexOf(el.status) - 1]
                    }
                } else {
                    return el
                }
            })
            return {
                ...state,
                cards: newList
            }

        default:
            return state;
    }
};

export default kanban;