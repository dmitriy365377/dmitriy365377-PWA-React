import styled from 'styled-components'


export const Container = styled.div`
    border:1px solid lightgrey;
    padding:8px;
    margin-bottom:8px;
    background-color:${props => (props.isDragging ? 'lightgreen' : 'white')}; 
`