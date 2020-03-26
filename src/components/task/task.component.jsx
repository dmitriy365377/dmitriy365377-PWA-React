import React from 'react';
import { Container } from './task.styled'

const Task = (props) => {
    return (
        <Container>
            {props.task.content}
        </Container>
    )
}

export default Task;

