import React, {useState} from "react";
import {FormButton, FormBlock, FormField, FormLabel, FormWrapper} from "./Form.styled";
import plusIcon from '../../assets/images/plus.png';

export const Form = (props: {createNewToDo: Function}) => {
    const [text, setText] = useState<string>('');

    const formSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        if (text) {
            props.createNewToDo(text);
            setText('');
        }
    }

    return (
        <FormWrapper>
            <FormBlock action="#" onSubmit={formSubmit}>
                <FormLabel>
                    <FormField
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <FormButton icon={plusIcon}/>
                </FormLabel>
            </FormBlock>
        </FormWrapper>
    )
}