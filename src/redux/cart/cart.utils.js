export const addItemToCart = (getID, cartItemToAdd) => { 
    let taskObjGen = () => ({
        ['task-' + getID()]: {
            id: 'task-' + getID(),
            content: cartItemToAdd
        }
    })

    return taskObjGen;
}