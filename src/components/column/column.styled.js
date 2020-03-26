import styled from 'styled-components';

export const Container = styled.div`
    width:200px;
    margin:8px;
    border: 1px solid lightgrey;
    border-radius:2px
`;


export const Title = styled.h3`
    padding:8px;
`;

export const TaskList = styled.div`
    padding:8px;
    background-color: ${props => (props.isDraggingOver ? 'bisque' : 'white')}; 
`;
