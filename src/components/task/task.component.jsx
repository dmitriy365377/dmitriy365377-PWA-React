import React from 'react';
import { Container } from './task.styled';
import { Draggable } from 'react-beautiful-dnd';

const Task = (props) => {
    return (
        <Draggable draggableId={props.task.id} index={props.index}>
            {provided => (
                <Container 
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef} 
                >
                    {props.task.content}
                </Container>
            )}
        </Draggable>
    )
}

export default Task;

