import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Card, Button, ButtonClick } from './button.styled'
import TextareaAutosize from 'react-textarea-autosize';

const ButtonTrello = ({ columnId }) => {
    const [formOpen, setformOpen] = useState(false)
    const [textArea, settextArea] = useState("")
    const dispatch = useDispatch()

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
                    value={textArea}
                    onChange={handleInputChange}
                />
            </Card>

            <ButtonClick
                onClick={() => {
                    dispatch({ type: 'ADD_ITEM', payload: { textArea, columnId } })
                    closeForm()
                }}
            >Add text
            </ButtonClick>

            <style jsx>{`
                #textarea {
                   resize:none;
                   width:100%;
                   overflow:hidden;
                   outline:none;
                   border:none;
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