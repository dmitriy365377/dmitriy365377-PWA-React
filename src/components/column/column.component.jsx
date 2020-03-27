import React from 'react';

import { Droppable } from 'react-beautiful-dnd';
import Task from '../task/task.component';
import { Container, Title, TaskList } from './column.styled';
import ButtonTrello from '../button/button.component' ;

const Column = (props) => {
    return (
        <Container>
            <Title>{props.column.title}</Title>
            <Droppable droppableId={props.column.id}>
                {(provided, snapshot) => (
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
           <ButtonTrello/>
        </Container>
    )
}

export default Column