import React, { useState } from 'react';
import { Card, Button } from './button.styled'
import TextareaAutosize from 'react-textarea-autosize';

const ButtonTrello = () => {
    const [formOpen, setformOpen] = useState(false)
    const [textArea, settextArea] = useState("")


    const openForm = () => {
        setformOpen(true)
    }

    const closeForm = () => {
        setformOpen(false)
    }

    const handleInputChange = (event) => {
        event.preventDefault();
        settextArea(event.target.value)
    }

    const renderForm = () => {
        return (<>
            <Card>
                <TextareaAutosize
                    id="textarea"
                    autoFocus
                    onBlur={closeForm}
                    value={textArea}
                    onChange={handleInputChange}
                /> 
            </Card>
            <button id="button" >Add text</button>
            <style jsx>{`
                #textarea {
                   resize:none;
                   width:100%;
                   overflow:hidden;
                   outline:none;
                   border:none;
                } 

                #button {
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
                }
                
            `}
            </style>
        </>
        )
    }

    const renderAddButton = () => {
        return (
            <Button onClick={openForm}>Add another card</Button>
        )
    }

    return formOpen ? renderForm() : renderAddButton()
}


export default ButtonTrello;