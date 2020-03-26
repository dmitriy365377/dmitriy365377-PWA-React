import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Task from '../task/task.component';
import { Container, Title, TaskList, Button } from './column.styled';

const Column = (props) => {
    return (
        <Container>
            <Title>{props.column.title}</Title>
            <Droppable droppableId={props.column.id}>
                {(provided,snapshot) => (
                    <TaskList
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        isDraggingOver={snapshot.isDraggingOver}
                    >
                        {props.tasks.map((task, index) => (<Task key={task.id} task={task} index={index} />))}
                        {provided.placeholder}
                    </TaskList>
                )}
            </Droppable>
            <Button>Add another card</Button>
        </Container>
    )
}

export default Column;