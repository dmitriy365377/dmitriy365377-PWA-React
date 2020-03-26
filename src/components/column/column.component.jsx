import React from 'react';
import Task from '../task/task.component'
import { Container, Title, TaskList } from './column.styled'

const Column = (props) => {
    return (
        <Container>
            <Title>{props.column.title}</Title>
            <TaskList>
                {
                    props.tasks.map(task => <Task key={task.id} task={task} />)
                }
            </TaskList>
        </Container>
    )
}

export default Column;