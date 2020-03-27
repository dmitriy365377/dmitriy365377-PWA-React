const INIRIAL_STATE = {
    tasks: {
        'task-1': {
            id: 'task-1',
            content: 'Take out the grabage'
        },
        'task-2': {
            id: 'task-2',
            content: 'Foto'
        },
        'task-3': {
            id: 'task-3',
            content: 'Computer'
        },
        'task-4': {
            id: 'task-4',
            content: 'USA'
        }
    },
    columns: {
        'column-1': {
            id: "column-1",
            title: 'open',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
        },
        'column-2': {
            id: "column-2",
            title: 'in progress',
            taskIds: []
        },
        'column-3': {
            id: "column-3",
            title: 'verify',
            taskIds: []
        },
        'column-4': {
            id: "column-4",
            title: 'done',
            taskIds: []
        },

    },
    columnOrder: ['column-1', 'column-2', 'column-3', 'column-4']
}


let cardID = 4;

const cartReducer = (state = INIRIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            let taskObjGen = () => ({
                ['task-' + cardID]: {
                    id: 'task-' + cardID,
                    content: action.payload.textArea
                }
            })
            cardID += 1

            return {
                ...state.tasks,
                cartItems: taskObjGen()
            }

        // return {
        //     ...state.tasks,
        //     cartItems: addItemToCart(getID, action.payload)
        // }
        default:
            return state
    }
}

export const addItem = textArea => ({
    type: 'ADD_ITEM',
    payload: textArea
})


export default cartReducer