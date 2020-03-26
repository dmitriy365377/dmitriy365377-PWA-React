import React from 'react';
import { Container } from './task.styled';
import { Draggable } from 'react-beautiful-dnd';

const Task = (props) => {
    return (
        <Draggable draggableId={props.task.id} index={props.index}>
            {(provided, snapshot) => (
                <Container
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                >
                    {props.task.content}
                </Container>
            )}
        </Draggable>
    )
}

export default Task;

