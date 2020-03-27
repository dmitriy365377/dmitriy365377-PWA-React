import React from 'react';

import { Droppable } from 'react-beautiful-dnd';
import Task from '../task/task.component';
import { Container, Title, TaskList } from './column.styled';
import ButtonTrello from '../button/button.component';
 

const Column = ({ column, tasks }) => { 
    return (
        <Container>
            <Title>{column.title}</Title>
            <Droppable droppableId={column.id}>
                {(provided, snapshot) => (
                    <TaskList
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        isDraggingOver={snapshot.isDraggingOver}
                    >
                        {tasks.map((task, index) => (<Task key={task.id} task={task} index={index} />))}
                        {provided.placeholder}
                    </TaskList>
                )}
            </Droppable>
            <ButtonTrello columnId={column.id}/>
        </Container>
    )
}



export default Column 