import styled from 'styled-components';



export const Card = styled.div`
    border: 1px solid lightgrey;
    margin: 5px 8px 4px;
    overflow:visible;
    min-height: auto;
    min-width: auto;
    padding: 6px 8px 2px;
` 
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

export const ButtonClick = styled.button`
                    background-color: #4CAF50; 
                    border: none;
                    color: white;
                    padding: 10px 20px;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 16px;
                    margin: 4px 8px;
                    transition-duration: 0.4s;
                    cursor: pointer;
                    width:50%;
`