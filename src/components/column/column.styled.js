import styled from 'styled-components';

export const Container = styled.div` 
    margin:8px;
    border: 1px solid lightgrey;
    border-radius:2px;
    width:220px;

    display:flex;
    flex-direction:column; 
`;


export const Title = styled.h3`
    padding:8px;
`;

export const TaskList = styled.div`
    padding:8px;
    transition: background-color 0.2s ease;
    background-color: ${props => (props.isDraggingOver ? 'bisque' : 'white')}; 
    flex-grow:1;
    min-height:100px;
`;


export const Button = styled.button`
    display: inline-block;
    padding: 0.5em 3em;
    border: 0.16em solid #FFFFFF;
    margin: 0px 1.3em 0.3em 20px;
    box-sizing: border-box;
    text-decoration: none;
    text-transform: uppercase;
    font-family: 'Roboto',sans-serif;
    font-weight: 400; 
    text-align: center;
    transition: all 0.15s;
    background-color: lightgrey;
`
